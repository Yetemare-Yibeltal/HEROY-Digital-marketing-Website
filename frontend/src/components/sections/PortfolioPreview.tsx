PortfolioPreview.tsx"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Bot,
  Box,
  Megaphone,
} from "lucide-react";

const slots = [
  { id: "s1", category: "Web Development", icon: Code2, gradient: "from-violet-600/50 to-cyan-600/30", wide: true, tall: false },
  { id: "s2", category: "Mobile App", icon: Smartphone, gradient: "from-emerald-600/50 to-teal-600/30", wide: false, tall: true },
  { id: "s3", category: "Branding", icon: Palette, gradient: "from-pink-600/50 to-rose-600/30", wide: false, tall: false },
  { id: "s4", category: "AI Product", icon: Bot, gradient: "from-orange-600/50 to-amber-600/30", wide: false, tall: false },
  { id: "s5", category: "3D Website", icon: Box, gradient: "from-blue-600/50 to-indigo-600/30", wide: true, tall: false },
  { id: "s6", category: "Digital Marketing", icon: Megaphone, gradient: "from-yellow-600/50 to-orange-600/30", wide: false, tall: true },
];

export default function PortfolioPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-72 h-72 bg-accent/10 top-20 left-0" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Our Work</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Building a portfolio of{" "}
              <span className="text-gradient">real results</span>
            </h2>
            <p className="text-muted mt-3 max-w-lg">
              We're a new studio actively working across web, mobile,
              branding, and AI — real case studies land here as projects
              are completed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/portfolio" className="btn-outline shrink-0">
              View Full Portfolio
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot, i) => {
            const Icon = slot.icon;
            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${slot.wide ? "sm:col-span-2" : ""} ${
                  slot.tall ? "row-span-2" : ""
                }`}
              >
                <div
                  className="group relative rounded-2xl overflow-hidden block"
                  style={{
                    aspectRatio: slot.wide ? "16/7" : slot.tall ? "3/4" : "4/3",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} opacity-40`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <Icon size={20} className="text-white/70" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                      {slot.category}
                    </span>
                    <span className="text-xs font-semibold text-white/70">
                      Case study coming soon
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}