"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";

/* ── palette shared across all layers ── */
const GRAD = "linear-gradient(100deg,#7c3aed 0%,#2563eb 16%,#0891b2 31%,#059669 46%,#ca8a04 62%,#ea580c 78%,#db2777 92%,#7c3aed 100%)";
const COLORS = ["#7c3aed","#2563eb","#0891b2","#059669","#ca8a04","#ea580c","#db2777"];

const typewriterWords = [
  "Digital Marketing",
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "3D Experiences",
];

/* ════════════════════════════════
   1. Animated gradient CSS injector
════════════════════════════════ */
const STYLE_ID = "heroy-heading-styles";
function useGlobalStyles() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@700&display=swap');

      @keyframes heroy-grad-pan {
        0%,100% { background-position: 0% 50%; }
        50%      { background-position: 100% 50%; }
      }
      @keyframes heroy-shimmer {
        0%   { transform: translateX(-120%) skewX(-18deg); }
        100% { transform: translateX(220%)  skewX(-18deg); }
      }
      @keyframes heroy-underline-glow {
        0%,100% { opacity:.7; filter: blur(0px); }
        50%      { opacity:1;  filter: blur(2px); }
      }
      @keyframes heroy-letter-in {
        0%   { opacity:0; transform: translateY(0.4em) rotateX(-50deg); filter: blur(8px); }
        100% { opacity:1; transform: translateY(0)     rotateX(0deg);   filter: blur(0px); }
      }
      @keyframes heroy-scale-dot {
        0%,100% { transform: scale(1); }
        50%      { transform: scale(1.6); }
      }
      @keyframes heroy-orbit {
        from { transform: rotate(0deg) translateX(22px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
      }
      @keyframes heroy-float {
        0%,100% { transform: translateY(0px); }
        50%      { transform: translateY(-6px); }
      }

      /* Syne for the main hero headline */
      .heroy-headline {
        font-family: 'Syne', var(--font-sans), system-ui, sans-serif;
        perspective: 900px;
      }

      /* Panning animated gradient text */
      .heroy-anim-grad {
        background: linear-gradient(
          100deg,
          #7c3aed 0%, #2563eb 14%, #0891b2 28%,
          #059669 42%, #ca8a04 57%, #ea580c 71%,
          #db2777 85%, #7c3aed 100%
        );
        background-size: 300% 300%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: heroy-grad-pan 6s ease infinite;
        display: inline-block;
      }

      /* Per-letter stagger reveal */
      .heroy-letter {
        display: inline-block;
        animation: heroy-letter-in 0.55s cubic-bezier(0.22,1,0.36,1) both;
        transform-origin: bottom center;
      }

      /* Shimmer band sweep */
      .heroy-shimmer-wrap {
        position: relative;
        display: inline-block;
        overflow: hidden;
      }
      .heroy-shimmer-wrap::after {
        content: '';
        position: absolute;
        top: -20%; left: 0;
        width: 35%; height: 140%;
        background: linear-gradient(
          105deg,
          transparent 20%,
          rgba(255,255,255,0.22) 50%,
          transparent 80%
        );
        animation: heroy-shimmer 3.5s ease-in-out infinite;
        pointer-events: none;
      }

      /* "Scale." underline */
      .heroy-underline-bar {
        animation: heroy-underline-glow 2.5s ease-in-out infinite;
      }

      /* Magnetic word hover */
      .heroy-word-magnetic {
        display: inline-block;
        transition: color 0.3s ease;
        cursor: default;
      }
      .heroy-word-magnetic:hover {
        color: transparent;
        background: ${GRAD};
        background-size: 300% 300%;
        -webkit-background-clip: text;
        background-clip: text;
        animation: heroy-grad-pan 3s ease infinite;
      }

      /* Typewriter dot pulse */
      .heroy-tw-dot {
        animation: heroy-scale-dot 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, []);
}

/* ════════════════════════════════
   2. Magnetic letter component
════════════════════════════════ */
function MagLetter({
  char, delay, color
}: { char: string; delay: number; color: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const ref = useRef<HTMLSpanElement>(null);
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.35);
    y.set(dy * 0.35);
    setHov(true);
  }, [x, y]);

  const onLeave = useCallback(() => {
    x.set(0); y.set(0); setHov(false);
  }, [x, y]);

  if (char === " ") return <span style={{ display: "inline-block", width: "0.28em" }} />;

  return (
    <motion.span
      ref={ref}
      className="heroy-letter"
      style={{
        x: sx, y: sy,
        display: "inline-block",
        color: hov ? color : undefined,
        textShadow: hov ? `0 0 24px ${color}88` : undefined,
        transition: "color .2s, text-shadow .2s",
        animationDelay: `${delay}ms`,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.18 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      {char}
    </motion.span>
  );
}

/* ════════════════════════════════
   3. Orbit ring around "Systems"
════════════════════════════════ */
function OrbitRing() {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: "-12px -16px",
        borderRadius: "50%",
        border: "1.5px solid rgba(124,58,237,0.18)",
        pointerEvents: "none",
        animation: "heroy-float 4s ease-in-out infinite",
      }}
    >
      {COLORS.slice(0, 5).map((c, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 7,
            height: 7,
            marginTop: -3.5,
            marginLeft: -3.5,
            borderRadius: "50%",
            background: c,
            boxShadow: `0 0 8px ${c}`,
            animation: `heroy-orbit ${3 + i * 0.7}s linear infinite`,
            animationDelay: `${i * -0.9}s`,
          }}
        />
      ))}
    </span>
  );
}

/* ════════════════════════════════
   4. Glowing cursor tracker for "Digital Systems"
════════════════════════════════ */
function GlowCursor() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const opacity = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 18 });
  const springY = useSpring(my, { stiffness: 120, damping: 18 });

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => opacity.set(1)}
      onMouseLeave={() => opacity.set(0)}
      style={{ position: "relative", display: "inline-block" }}
    >
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: springY,
          left: springX,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity,
          zIndex: -1,
        }}
      />
      {/* children are the gradient text span — rendered by parent */}
    </span>
  );
}

/* ════════════════════════════════
   5. Particle burst on title click
════════════════════════════════ */
type Particle = { id: number; x: number; y: number; color: string; vx: number; vy: number };
function ParticleBurst({ particles }: { particles: Particle[] }) {
  return (
    <AnimatePresence>
      {particles.map(p => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, x: p.x, y: p.y, scale: 1 }}
          animate={{ opacity: 0, x: p.x + p.vx * 60, y: p.y + p.vy * 60, scale: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            position: "fixed",
            width: 8, height: 8,
            borderRadius: "50%",
            background: p.color,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}
    </AnimatePresence>
  );
}

/* ════════════════════════════════
   MAIN EXPORT
════════════════════════════════ */
export default function HeroHeading() {
  useGlobalStyles();

  const [particles, setParticles] = useState<Particle[]>([]);
  const pid = useRef(0);

  /* Magnetic tilt on the whole heading block */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-60, 60], [3, -3]);
  const rotY = useTransform(mx, [-200, 200], [-4, 4]);
  const srX = useSpring(rotX, { stiffness: 100, damping: 22 });
  const srY = useSpring(rotY, { stiffness: 100, damping: 22 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const onWrapMove = (e: React.MouseEvent) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  };
  const onWrapLeave = () => { mx.set(0); my.set(0); };

  /* Burst on click */
  const burst = (e: React.MouseEvent) => {
    const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: pid.current++,
      x: e.clientX,
      y: e.clientY,
      color: COLORS[i % COLORS.length],
      vx: Math.cos((i / 12) * Math.PI * 2) * (1 + Math.random()),
      vy: Math.sin((i / 12) * Math.PI * 2) * (1 + Math.random()),
    }));
    setParticles(p => [...p, ...newParticles]);
    setTimeout(() => setParticles(p => p.filter(x => !newParticles.includes(x))), 900);
  };

  /* Split "Digital Systems" into per-letter magnetic array */
  const WORD1 = "Digital";
  const WORD2 = "Systems";
  const letters1 = WORD1.split("").map((c, i) => ({ c, i, color: COLORS[i % COLORS.length] }));
  const letters2 = WORD2.split("").map((c, i) => ({ c, i: i + WORD1.length, color: COLORS[(i + 3) % COLORS.length] }));

  return (
    <>
      <ParticleBurst particles={particles} />

      <motion.div
        ref={wrapRef}
        className="max-w-5xl"
        style={{ rotateX: srX, rotateY: srY, transformStyle: "preserve-3d", perspective: 900 }}
        onMouseMove={onWrapMove}
        onMouseLeave={onWrapLeave}
        onClick={burst}
      >
        {/* ── Main h1 ── */}
        <h1
          className="heroy-headline"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 0.97,
            letterSpacing: "-0.055em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >

          {/* Line 1 — "We Build" with magnetic per-letter */}
          <span
            className="block"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(8px)" }}
          >
            {"We Build".split("").map((c, i) => (
              <MagLetter
                key={i}
                char={c}
                delay={i * 38}
                color={COLORS[i % COLORS.length]}
              />
            ))}
          </span>

          {/* Line 2 — "Digital Systems" shimmer + orbit + depth ghost */}
          <span
            className="relative mt-1 block heroy-shimmer-wrap"
            style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
          >
            {/* Depth ghost (blur layer) */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                top: "0.06em",
                zIndex: -1,
                userSelect: "none",
                fontWeight: 800,
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                background: GRAD,
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                opacity: 0.25,
                filter: "blur(10px)",
                animation: "heroy-grad-pan 6s ease infinite",
              }}
            >
              Digital Systems
            </span>

            {/* Magnetic per-letter gradient word 1 */}
            <span className="heroy-anim-grad" style={{ animationDelay: "0s" }}>
              {letters1.map(({ c, i, color }) => (
                <MagLetter key={i} char={c} delay={300 + i * 40} color={color} />
              ))}
            </span>

            <span style={{ display: "inline-block", width: "0.28em" }} />

            {/* Word 2 with orbit ring */}
            <span style={{ position: "relative", display: "inline-block" }}>
              <OrbitRing />
              <span className="heroy-anim-grad" style={{ animationDelay: "-3s" }}>
                {letters2.map(({ c, i, color }) => (
                  <MagLetter key={i} char={c} delay={300 + i * 40} color={color} />
                ))}
              </span>
            </span>

            {/* Top highlight veil */}
            <span
              aria-hidden="true"
              style={{
                pointerEvents: "none",
                position: "absolute",
                inset: 0,
                userSelect: "none",
                background: "linear-gradient(180deg,rgba(255,255,255,0.35) 0%,transparent 45%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontSize: "inherit",
                fontWeight: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
              }}
            >
              Digital Systems
            </span>
          </span>

          {/* Line 3 — "That Scale." */}
          <span
            className="mt-1 block"
            style={{ transform: "translateZ(6px)", transformStyle: "preserve-3d" }}
          >
            <span className="heroy-word-magnetic">That</span>
            {" "}
            <span
              className="relative inline-block"
              style={{ transform: "translateZ(16px)" }}
            >
              {/* "Scale." — gradient + underline */}
              <motion.span
                className="heroy-anim-grad"
                style={{ position: "relative", zIndex: 10, animationDelay: "-2s" }}
                whileHover={{
                  scale: 1.06,
                  transition: { type: "spring", stiffness: 400, damping: 18 },
                }}
              >
                Scale.
              </motion.span>

              {/* Animated underline bar */}
              <motion.span
                aria-hidden="true"
                className="heroy-underline-bar"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  bottom: "-0.12em",
                  left: 0,
                  height: 3,
                  width: "100%",
                  borderRadius: 3,
                  background: GRAD,
                  backgroundSize: "300% 300%",
                  display: "block",
                  animation: "heroy-grad-pan 4s ease infinite, heroy-underline-glow 2.5s ease-in-out infinite",
                }}
              />

              {/* Extra glow underline */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  bottom: "-0.18em",
                  left: "5%",
                  height: 10,
                  width: "90%",
                  borderRadius: 10,
                  background: GRAD,
                  backgroundSize: "300% 300%",
                  filter: "blur(6px)",
                  opacity: 0.45,
                  display: "block",
                  animation: "heroy-grad-pan 4s ease infinite",
                }}
              />
            </span>
          </span>
        </h1>

        {/* ── Typewriter row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            marginTop: "2rem",
            display: "flex",
            minHeight: "3.75rem",
            alignItems: "center",
            fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            gap: 14,
            fontFamily: "'Space Grotesk', var(--font-sans), sans-serif",
          }}
        >
          {/* Animated multi-dot indicator */}
          <span
            aria-hidden="true"
            style={{ display: "flex", gap: 4, flexShrink: 0, alignItems: "center" }}
          >
            {COLORS.slice(0, 3).map((c, i) => (
              <motion.span
                key={i}
                className="heroy-tw-dot"
                style={{
                  display: "inline-block",
                  width: i === 1 ? 10 : 7,
                  height: i === 1 ? 10 : 7,
                  borderRadius: "50%",
                  background: c,
                  boxShadow: `0 0 10px ${c}88`,
                  animationDelay: `${i * 0.35}s`,
                }}
              />
            ))}
          </span>

          {/* Gradient typewriter text */}
          <span
            style={{
              background: GRAD,
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "heroy-grad-pan 6s ease infinite",
            }}
          >
            <TypewriterText words={typewriterWords} />
          </span>
        </motion.div>

        {/* ── Subtle "click to spark" hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            marginTop: "0.75rem",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            userSelect: "none",
          }}
        >
          ✦ click anywhere on the heading to spark
        </motion.p>
      </motion.div>
    </>
  );
}