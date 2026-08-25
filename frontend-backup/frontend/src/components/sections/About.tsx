"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const skills = [
  { label: "Web Development", percent: 95, color: "#7c5cff" },
  { label: "Mobile App Development", percent: 90, color: "#22d3ee" },
  { label: "UI/UX & Graphics Design", percent: 88, color: "#f472b6" },
  { label: "Digital Marketing & SEO", percent: 85, color: "#4ade80" },
  { label: "Video Editing & Motion", percent: 82, color: "#fbbf24" },
  { label: "AI & Automation", percent: 78, color: "#a78bfa" },
];

const teamRoles = [
  "Full Stack Engineers",
  "Android Developers",
  "UI/UX Designers",
  "Graphics Designers",
  "Video Editors",
  "AI Developers",
  "Digital Marketers",
  "SEO Specialists",
];

const stats = [
  { value: "500+", label: "Projects Done", color: "#7c5cff" },
  { value: "150+", label: "Happy Clients", color: "#22d3ee" },
  { value: "20+", label: "Countries", color: "#f472b6" },
];

function SkillBar({
  label,
  percent,
  color,
  delay,
}: {
  label: string;
  percent: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span style={{ color: "#9292b8" }}>{label}</span>
        <span className="font-bold text-white">{percent}%</span>
      </div>
      <div
        className="h-1.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 10px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "#080810" }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(124,92,255,0.08)",
          top: "10%",
          right: "-100px",
        }}
      />

      <div className="container-px mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">✦ PORTFOLIO 2026</span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(270deg,#7c5cff,#22d3ee,#4ade80,#f472b6,#7c5cff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientText 5s ease infinite",
              }}
            >
              About HEROY
            </span>
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: "#9292b8" }}
          >
            Crafting digital excellence with passion, precision, and a
            relentless pursuit of results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="font-display font-bold text-2xl text-white mb-2"
            >
              Yibeltal Yitayew &amp; Team
            </h3>
            <p
              className="text-sm font-semibold mb-5"
              style={{ color: "#22d3ee" }}
            >
              Full Stack Engineers &amp; Digital Transformation Specialists
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#9292b8" }}
            >
              HEROY is a full-service digital transformation agency built
              by a multidisciplinary team of Ethiopian software engineers,
              designers, and creatives. We combine deep technical expertise
              with creative excellence to deliver products that compete on
              a global stage.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#9292b8" }}
            >
              From full-stack web and mobile development to AI integration,
              video production, graphics design, and digital marketing —
              we cover every discipline needed to take a business from idea
              to measurable impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center relative overflow-hidden"
                  style={{
                    background: "#0f0f1a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = stat.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${stat.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <p
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-wide"
                    style={{ color: "#9292b8" }}
                  >
                    {stat.label}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: stat.color, opacity: 0.5 }}
                  />
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary inline-flex"
            >
              <span>Our Full Story</span>
              <ArrowRight size={16} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="font-display font-semibold text-lg text-white mb-6"
            >
              What we do{" "}
              <span style={{ color: "#22d3ee" }}>exceptionally well</span>
            </h3>

            <div className="flex flex-col gap-5 mb-8">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percent={skill.percent}
                  color={skill.color}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Team role tags */}
            <div className="flex flex-wrap gap-2">
              {teamRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#9292b8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#7c5cff";
                    (e.currentTarget as HTMLElement).style.color = "#a78bfa";
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,92,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#9292b8";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}