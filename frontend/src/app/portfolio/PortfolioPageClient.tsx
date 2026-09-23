"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Info,
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Search,
  Megaphone,
  Layers,
  Bot,
  Box,
  Plus,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface PlaceholderSlot {
  id: string;
  category: string;
  icon: typeof Code2;
  gradient: string;
  glow: string;
  wide: boolean;
}

const categories = [
  "All",
  "Websites",
  "Mobile Apps",
  "Branding",
  "SEO Projects",
  "Digital Marketing",
  "SaaS Platforms",
  "AI Products",
  "3D Websites",
];

// Placeholder slots — no fabricated client names or results.
// Each will be replaced with a real project (name, tags, outcome,
// description, and screenshots) as projects are completed.
const slots: PlaceholderSlot[] = [
  { id: "p1", category: "Websites", icon: Code2, gradient: "from-violet-600/50 to-cyan-600/30", glow: "rgba(124,92,255,0.35)", wide: true },
  { id: "p2", category: "Mobile Apps", icon: Smartphone, gradient: "from-emerald-600/50 to-teal-600/30", glow: "rgba(34,197,94,0.35)", wide: false },
  { id: "p3", category: "Branding", icon: Palette, gradient: "from-pink-600/50 to-rose-600/30", glow: "rgba(236,72,153,0.35)", wide: false },
  { id: "p4", category: "AI Products", icon: Bot, gradient: "from-orange-600/50 to-amber-600/30", glow: "rgba(249,115,22,0.35)", wide: false },
  { id: "p5", category: "3D Websites", icon: Box, gradient: "from-blue-600/50 to-indigo-600/30", glow: "rgba(99,102,241,0.35)", wide: true },
  { id: "p6", category: "SEO Projects", icon: Search, gradient: "from-cyan-600/50 to-blue-600/30", glow: "rgba(34,211,238,0.35)", wide: false },
  { id: "p7", category: "Digital Marketing", icon: Megaphone, gradient: "from-fuchsia-600/50 to-purple-600/30", glow: "rgba(217,70,239,0.35)", wide: false },
  { id: "p8", category: "SaaS Platforms", icon: Layers, gradient: "from-teal-600/50 to-emerald-600/30", glow: "rgba(20,184,166,0.35)", wide: false },
  { id: "p9", category: "Websites", icon: Code2, gradient: "from-amber-600/50 to-yellow-600/30", glow: "rgba(234,179,8,0.35)", wide: false },
];

const documentationPromise = [
  {
    label: "Real outcomes",
    text: "Actual, verifiable metrics from the project — not projected or industry-average numbers.",
  },
  {
    label: "Tech stack used",
    text: "The exact frameworks, tools, and architecture behind each build, for anyone evaluating our technical approach.",
  },
  {
    label: "Client attribution",
    text: "Named with the client's permission, or clearly marked confidential when an NDA applies.",
  },
];

const typewriterWords = ["Results", "Revenue", "Growth", "Conversions", "Impact"];

export default function PortfolioPageClient() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? slots : slots.filter((p) => p.category === active);

  return (
    <section className="section pt-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -right-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 left-1/3" style={{ animationDelay: "5s" }} />

      <div className="container-px mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="badge mb-4">
            <Sparkles size={14} /> Our Work
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            Portfolio built for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </h1>
          <p className="text-muted leading-relaxed">
            We're a new studio actively building our portfolio — here's the
            kind of work currently in progress across the services we
            offer, with real case studies replacing these slots as
            projects launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-start gap-3 glass rounded-2xl px-5 py-4 max-w-2xl mx-auto mb-12"
        >
          <Info size={16} className="text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted leading-relaxed text-left">
            Every card below is a placeholder representing project types
            we work on, not a completed real project. We're currently
            working on 20+ projects and will publish real case studies
            here — with names, tech stacks, and verified results — as
            each one is completed and cleared for sharing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? "bg-grad-primary text-background border-transparent shadow-lg"
                  : "border-border text-muted hover:text-white hover:border-primary/40"
              }`}
              style={
                active === cat
                  ? { boxShadow: "0 8px 24px rgba(124,92,255,0.4)" }
                  : undefined
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((slot, i) => {
              const Icon = slot.icon;
              return (
                <motion.div
                  key={slot.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-2xl overflow-hidden ${
                    slot.wide ? "sm:col-span-2" : ""
                  }`}
                  style={{ aspectRatio: slot.wide ? "16/8" : "4/3" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${slot.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} opacity-40`} />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${slot.glow}, transparent 70%)` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <Icon size={24} className="text-white/70" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                      {slot.category}
                    </span>
                    <span className="text-sm font-semibold text-white/80">
                      Case study coming soon
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-16">
            No placeholder slots in this category yet.
          </p>
        )}

        {/* What every future case study will include */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="badge mb-4">Our Standard</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              What every published{" "}
              <span className="text-gradient">case study will include</span>
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              When we publish a case study here, it will always include
              these three things — no exceptions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {documentationPromise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-grad-mix flex items-center justify-center mb-4">
                  <Plus size={16} className="text-background" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
          <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
              Want to see the work{" "}
              <span className="text-gradient">in progress?</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
              Reach out and we'll happily walk you through active projects
              on a call, even before they're published here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="btn-outline">
                View Case Studies
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}