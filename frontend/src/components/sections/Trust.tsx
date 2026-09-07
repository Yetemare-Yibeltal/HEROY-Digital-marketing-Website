"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Real figures confirmed by client (Sep 2026): 50+ projects, 500+ clients.
// "Years Active" pending confirmation — currently a placeholder, flagged for review.
const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    gradient: "linear-gradient(135deg,#7c5cff,#22d3ee)",
    glow: "rgba(124,92,255,0.3)",
    border: "#7c5cff",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    gradient: "linear-gradient(135deg,#22d3ee,#4ade80)",
    glow: "rgba(34,211,238,0.3)",
    border: "#22d3ee",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Active*",
    gradient: "linear-gradient(135deg,#f472b6,#fbbf24)",
    glow: "rgba(244,114,182,0.3)",
    border: "#f472b6",
  }, // TODO: replace with real founding year
  {
    value: 100,
    suffix: "%",
    label: "Custom-Built, No Templates",
    gradient: "linear-gradient(135deg,#4ade80,#22d3ee)",
    glow: "rgba(74,222,128,0.3)",
    border: "#4ade80",
  },
];

// Real client logos aren't available yet — showing industries served instead of
// inventing fake company names. Swap this for a real logo marquee once assets arrive.
const industries = [
  "Finance", "Healthcare", "E-Commerce", "Real Estate",
  "Education", "NGO & Nonprofit", "Startups", "Hospitality",
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) setTriggered(true);
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1600;
    let raf: number;
    const step = (ts: number, t0: number | null) => {
      if (t0 === null) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) {
        raf = requestAnimationFrame((next) => step(next, t0));
      } else {
        setCount(target);
      }
    };
    raf = requestAnimationFrame((ts) => step(ts, null));
    return () => cancelAnimationFrame(raf);
  }, [triggered, target]);

  return (
    <p ref={ref} className="font-display font-bold mb-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
      {count}
      {suffix}
    </p>
  );
}

export default function Trust() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "#080810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-px mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4">
            ✦ NUMBERS THAT SPEAK
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
          >
            <span className="text-white">Results We Are </span>
            <span
              style={{
                background:
                  "linear-gradient(270deg,#7c5cff,#22d3ee,#4ade80,#fbbf24,#f472b6,#7c5cff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientText 5s ease infinite",
              }}
            >
              Proud Of
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 text-center overflow-hidden"
              style={{
                background: "#0f0f1a",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = stat.border;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${stat.glow}`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  background: stat.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#9292b8" }}
              >
                {stat.label}
              </p>

              {/* Animated bottom border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg,transparent,${stat.border},transparent)`,
                  backgroundSize: "200% 100%",
                  animation: "gradientSlide 3s linear infinite",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Client marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-center text-xs uppercase tracking-[0.2em] mb-6"
            style={{ color: "#9292b8" }}
          >
            Trusted across industries
          </p>
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right,#080810,transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left,#080810,transparent)",
              }}
            />
            <div
              className="flex gap-12 w-max"
              style={{ animation: "marquee 25s linear infinite" }}
            >
              {[...industries, ...industries].map((industry, i) => (
                <span
                  key={i}
                  className="font-display font-bold text-lg whitespace-nowrap transition-colors duration-300 cursor-default"
                  style={{ color: "rgba(255,255,255,0.12)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.12)";
                  }}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}