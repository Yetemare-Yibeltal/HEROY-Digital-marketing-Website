"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Globe2,
  Award,
  Code2,
  Sparkles,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const values = [
  {
    icon: Target,
    title: "Mission",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    text: "To empower businesses of every size with technology, design, and marketing systems that drive measurable growth and lasting impact, regardless of industry or location.",
  },
  {
    icon: Eye,
    title: "Vision",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    text: "To become a globally recognized digital partner, known for innovation, quality, and the long-term success of every client we work with, starting from Ethiopia, reaching the world.",
  },
  {
    icon: Heart,
    title: "Values",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    text: "Integrity, transparency, craftsmanship, and curiosity guide every decision. We build things we are proud to put our name on, and we treat every client's business as our own.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    text: "We continuously explore AI, automation, and modern web technologies, staying ahead so our clients always have access to the latest and most effective tools.",
  },
];

const skills = [
  "Next.js", "TypeScript", "React Native", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "Figma",
  "Adobe Premiere", "Adobe Photoshop", "AWS", "AI Integration",
];

const teamRoles = [
  "Full Stack Engineers", "Frontend Developers",
  "Backend Engineers", "Android Developers",
  "UI/UX Designers", "Graphics Designers",
  "Video Editors", "AI Developers",
  "Digital Marketers", "SEO Specialists",
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Delivered", color: "text-accent" },
  { icon: Users, value: "150+", label: "Happy Clients", color: "text-accent-pink" },
  { icon: Globe2, value: "20+", label: "Countries Served", color: "text-accent-gold" },
];

const typewriterWords = ["Engineers", "Creators", "Innovators", "Builders", "Dreamers"];

function AnimatedCounter({ value, label, icon: Icon, color }: {
  value: string;
  label: string;
  icon: typeof Award;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8 text-center gradient-border"
    >
      <Icon size={24} className={`${color} mx-auto mb-3`} />
      <p className="font-display font-bold text-3xl text-gradient mb-1">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-16 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> About HEROY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Ethiopian{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
            {" "}building{" "}
            <span className="text-gradient-warm">world-class</span> digital products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            HEROY is a full-service digital transformation agency built by a
            team of Ethiopian software engineers, designers, and creatives.
            We combine strategic marketing, premium design, and robust
            full-stack engineering to help organizations grow through
            technology — from Ethiopia to the world.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass rounded-2xl p-8 cursor-default relative overflow-hidden group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${v.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left, ${v.glow}, transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h2 className="font-display font-semibold text-xl text-white mb-3">{v.title}</h2>
                    <p className="text-sm text-muted leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Users size={20} className="text-background" />
              </div>
              <h2 className="font-display font-semibold text-xl text-white mb-2">
                Team <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Our multidisciplinary team covers every discipline needed to
                take a project from idea to launch — full-stack engineering,
                mobile development, design, content creation, and digital
                marketing, all in one place.
              </p>
              <div className="flex flex-wrap gap-2">
                {teamRoles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full hover:border-primary/40 hover:text-white transition-colors cursor-default"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Code2 size={20} className="text-background" />
              </div>
              <h2 className="font-display font-semibold text-xl text-white mb-2">
                Tools &amp; <span className="text-gradient-warm">Technologies</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                We build on modern, production-tested tools so every product
                we deliver is fast, secure, and easy to maintain long after
                launch.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Built on code, driven by{" "}
                <span className="text-gradient-warm">purpose</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Every line of code, every design decision, and every marketing
                strategy we deliver is grounded in one goal — helping our
                clients succeed. That is the standard we hold ourselves to on
                every project, every time.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}