"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Video,
  Bot,
  Globe2,
  Award,
  Users,
} from "lucide-react";

const skills = [
  { label: "Web Development", percent: 95, color: "from-primary to-accent" },
  { label: "Mobile App Development", percent: 90, color: "from-accent to-primary" },
  { label: "UI/UX & Graphics Design", percent: 88, color: "from-accent-pink to-primary" },
  { label: "Digital Marketing & SEO", percent: 85, color: "from-primary to-accent-pink" },
  { label: "Video Editing & Motion", percent: 82, color: "from-accent to-accent-pink" },
  { label: "AI & Automation", percent: 78, color: "from-primary-light to-accent" },
];

const teamHighlights = [
  { icon: Code2, label: "Full Stack Engineers" },
  { icon: Smartphone, label: "Android Developers" },
  { icon: Palette, label: "Graphics Designers" },
  { icon: Video, label: "Video Editors" },
  { icon: Bot, label: "AI Developers" },
  { icon: Globe2, label: "Digital Marketers" },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Done" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Globe2, value: "20+", label: "Countries" },
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
        <span className="text-muted font-medium">{label}</span>
        <span className="text-white font-bold">{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-72 h-72 bg-primary/10 top-20 right-0" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge mb-4">Who We Are</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
              Ethiopian engineers building{" "}
              <span className="text-gradient">world-class</span>{" "}
              digital products
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              HEROY is a full-service digital transformation agency built
              by a multidisciplinary team of software engineers, designers,
              and creatives from Ethiopia. We combine deep technical
              expertise with creative excellence to deliver products that
              compete on a global stage.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From full-stack web and mobile development to AI integration,
              video production, graphics design, and digital marketing —
              we cover every discipline needed to take a business from idea
              to impact.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass rounded-xl p-4 text-center gradient-border"
                  >
                    <Icon size={18} className="text-accent mx-auto mb-2" />
                    <p className="font-display font-bold text-xl text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-muted uppercase tracking-wide mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link href="/about" className="btn-primary">
              Our Full Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display font-semibold text-xl text-white">
              What we do{" "}
              <span className="text-gradient-warm">exceptionally well</span>
            </h3>

            <div className="flex flex-col gap-5">
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

            <div className="grid grid-cols-3 gap-3 mt-4">
              {teamHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass rounded-xl p-3 text-center cursor-default"
                  >
                    <Icon size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-[10px] text-muted leading-tight">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}