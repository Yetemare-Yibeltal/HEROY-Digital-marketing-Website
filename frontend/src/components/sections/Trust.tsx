"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    gradient: "linear-gradient(135deg,#7c5cff,#22d3ee)",
    glow: "rgba(124,92,255,0.3)",
    border: "#7c5cff",
  },
  {
    value: "500+",
    label: "Happy Clients",
    gradient: "linear-gradient(135deg,#22d3ee,#4ade80)",
    glow: "rgba(34,211,238,0.3)",
    border: "#22d3ee",
  },
  {
    value: "4+",
    label: "Years Active",
    gradient: "linear-gradient(135deg,#f472b6,#fbbf24)",
    glow: "rgba(244,114,182,0.3)",
    border: "#f472b6",
  },
  {
    value: "12+",
    label: "Core Services",
    gradient: "linear-gradient(135deg,#4ade80,#22d3ee)",
    glow: "rgba(74,222,128,0.3)",
    border: "#4ade80",
  },
];

const industries = [
  "Healthcare", "Finance", "Real Estate", "Education",
  "NGOs & Nonprofits", "E-commerce", "Startups", "Technology",
];

const clients = [
  "Nexora", "Bluepeak", "Orbitly", "Vertex Labs",
  "Skyline Co", "Dataforge", "Northwind", "Cresta",
  "Pulse Health", "Meridian", "Orbitly", "Vertex Labs",
];

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
              <p
                className="font-display font-bold mb-2"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  background: stat.gradient,
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
            Trusted by ambitious teams and growing brands
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
              {[...clients, ...clients].map((client, i) => (
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
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industries served — chip layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-5"
        >
          <p
            className="text-center text-xs uppercase tracking-[0.2em]"
            style={{ color: "#9292b8" }}
          >
            Industries we build for
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {industries.map((industry) => (
              <span
                key={industry}
                className="text-xs font-semibold px-4 py-2 rounded-full cursor-default transition-all duration-300"
                style={{
                  background: "rgba(124,92,255,0.06)",
                  border: "1px solid rgba(124,92,255,0.2)",
                  color: "#c9c9ea",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#22d3ee";
                  el.style.background = "rgba(34,211,238,0.1)";
                  el.style.color = "#fff";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,92,255,0.2)";
                  el.style.background = "rgba(124,92,255,0.06)";
                  el.style.color = "#c9c9ea";
                  el.style.transform = "translateY(0)";
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}