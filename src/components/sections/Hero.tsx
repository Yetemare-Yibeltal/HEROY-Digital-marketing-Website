"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Globe2,
  Star,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import { useEffect, useRef } from "react";

const typewriterWords = [
  "Businesses",
  "Startups",
  "Brands",
  "Ideas",
  "Products",
];

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Organic Traffic",
    value: "+300%",
    color: "text-accent",
    delay: 0,
    position: "top-12 right-0",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "150+",
    color: "text-accent-gold",
    delay: 0.3,
    position: "top-1/2 -right-6",
  },
  {
    icon: Star,
    label: "Client Rating",
    value: "4.9 / 5",
    color: "text-accent-pink",
    delay: 0.6,
    position: "bottom-16 right-4",
  },
  {
    icon: Globe2,
    label: "Countries",
    value: "20+",
    color: "text-primary-light",
    delay: 0.9,
    position: "top-1/3 -left-4",
  },
];

const stats = [
  { value: "500+", label: "Projects" },
  { value: "150+", label: "Clients" },
  { value: "20+", label: "Countries" },
  { value: "98%", label: "Retention" },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ["#7c5cff", "#22d3ee", "#f472b6", "#a78bfa"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      <ParticleCanvas />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-primary/20 top-0 right-0" />
      <div className="glow-orb w-80 h-80 bg-accent/15 bottom-0 left-0" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 top-1/2 left-1/3" style={{ animationDelay: "6s" }} />

      <div className="container-px mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">

        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge mb-6 inline-flex"
          >
            <Sparkles size={14} />
            Digital Transformation Agency — Ethiopia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
          >
            We Build{" "}
            <span className="text-gradient">Digital Systems</span>
            <br />
            That Scale{" "}
            <TypewriterText
              words={typewriterWords}
              className="text-gradient-warm"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          >
            We help startups, enterprises, NGOs, and global brands grow
            through technology, marketing, design, and innovation — built
            by a team of Ethiopian engineers and creatives who deliver
            world-class digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
            <Link href="/consultation" className="btn-outline">
              Book Free Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-4 max-w-md"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center glass rounded-xl py-3 px-2"
              >
                <p className="font-display font-bold text-lg text-gradient leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] text-muted mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — floating visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm"
          >
            {/* Central orb */}
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 animate-pulse" />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-80 blur-sm" />
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            {/* Floating metric cards */}
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + card.delay }}
                  className={`absolute ${card.position} glass-strong rounded-xl px-4 py-3 flex items-center gap-3`}
                  style={{
                    animation: `floatOrb ${4 + card.delay}s ease-in-out infinite`,
                    animationDelay: `${card.delay}s`,
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon size={16} className={card.color} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{card.label}</p>
                    <p className={`font-display font-bold text-sm ${card.color}`}>
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}