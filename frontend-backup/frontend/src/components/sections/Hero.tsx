"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const typewriterWords = [
  "Digital Marketing",
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "3D Experiences",
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "500+", label: "Clients" },
  { value: "4+", label: "Years Active" },
  { value: "12+", label: "Core Services" },
];

const techTags = [
  "Next.js", "TypeScript", "Node.js",
  "React Native", "MongoDB", "AI/ML",
  "Three.js", "Tailwind",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "#080810" }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(124,92,255,0.12)",
          top: "-100px",
          right: "-100px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(34,211,238,0.08)",
          bottom: "-50px",
          left: "-80px",
          animationDelay: "4s",
        }}
      />

      <div className="container-px mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24">

        {/* Left column */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span
              className="badge"
              style={{
                borderImage: "linear-gradient(90deg,#7c5cff,#22d3ee,#f472b6) 1",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "9999px",
                background: "rgba(34,211,238,0.06)",
              }}
            >
              <Sparkles size={12} />
              Welcome to HEROY Universe
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <h1
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              <span className="text-white block mb-1">We Build</span>
              <span
                className="block"
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
                Digital Systems
              </span>
              <span className="text-white block">That Scale</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div
              className="font-display font-bold text-xl sm:text-2xl"
              style={{ color: "#22d3ee" }}
            >
              {"< "}
              <TypewriterText
                words={typewriterWords}
                className=""
              />
              {" />"}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: "#9292b8" }}
          >
            We help startups, enterprises, NGOs, and global brands grow
            through technology, marketing, design, and innovation — built
            by a team of Ethiopian engineers and creatives who deliver{" "}
            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
              world-class digital experiences
            </span>{" "}
            from Ethiopia to the world.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#9292b8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#22d3ee";
                  (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#9292b8";
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-8 rounded-xl px-5 py-3 font-mono text-sm w-fit"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#9292b8",
            }}
          >
            const heroy = &#123;
            <span style={{ color: "#f472b6" }}> passion</span>:
            <span style={{ color: "#22d3ee" }}>"∞"</span>,
            <span style={{ color: "#f472b6" }}> clients</span>:
            <span style={{ color: "#4ade80" }}>"happy"</span>,
            <span style={{ color: "#f472b6" }}> bugs</span>:
            <span style={{ color: "#fbbf24" }}>0</span> &#125;
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-primary">
              <span>Start Your Project</span>
              <ArrowRight size={16} style={{ position: "relative", zIndex: 1 }} />
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Right column — stats */}
        <div className="hidden lg:flex flex-col gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 w-full max-w-sm"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl p-5 text-center relative overflow-hidden"
                style={{
                  background: "#0f0f1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#22d3ee";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(34,211,238,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <p
                  className="font-display font-bold text-3xl mb-1"
                  style={{
                    background: "linear-gradient(135deg,#7c5cff,#22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#9292b8" }}
                >
                  {stat.label}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{
                    background: "linear-gradient(90deg,#7c5cff,#22d3ee,#f472b6)",
                    backgroundSize: "200% 100%",
                    animation: "gradientSlide 3s linear infinite",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="rounded-2xl p-6 w-full max-w-sm"
            style={{
              background: "#0f0f1a",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: "#4ade80" }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4ade80" }}
              >
                Open to New Projects
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#9292b8" }}>
              Our team is currently accepting new client projects. Book a
              free consultation to discuss your idea.
            </p>
            <Link
              href="/consultation"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold"
              style={{ color: "#22d3ee" }}
            >
              Book Free Call <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #080810, transparent)",
        }}
      />
    </section>
  );
}