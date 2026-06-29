"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  GraduationCap,
  ShieldCheck,
  Zap,
  HeadphonesIcon,
  MessageSquare,
  TrendingUp,
  Layers3,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Fresh, modern approaches built on the latest frameworks and emerging technologies.",
    color: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.25)",
    stat: "35+ Technologies",
  },
  {
    icon: GraduationCap,
    title: "Experienced Team",
    description: "Engineers, designers, and marketers with real production project experience.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.25)",
    stat: "10+ Disciplines",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Security-first development practices protecting your systems and user data.",
    color: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.25)",
    stat: "100% Secure",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile workflows that keep every project on schedule without cutting corners.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.25)",
    stat: "On Time, Every Time",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Ongoing maintenance and technical support whenever you need us.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    stat: "24/7 Available",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest feedback on every project.",
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.25)",
    stat: "Always Reachable",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Data-backed strategies and measurable outcomes that demonstrate real impact.",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.25)",
    stat: "+300% Avg Growth",
  },
  {
    icon: Layers3,
    title: "Scalable Systems",
    description: "Architectures designed to grow with your business from MVP to enterprise.",
    color: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.25)",
    stat: "Built to Scale",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-accent/10 -top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-primary/10 bottom-0 right-0" style={{ animationDelay: "4s" }} />

      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge mb-4">Why Choose HEROY</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Built different,{" "}
            <span className="text-gradient-warm">built to deliver</span>
          </h2>
          <p className="text-muted">
            Every reason a client stays with us after the first project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center cursor-default relative overflow-hidden group"
                style={{
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 60px ${reason.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${reason.glow}, transparent 70%)`,
                  }}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-4 relative`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block relative">
                  {reason.stat}
                </span>

                <h3 className="font-display font-semibold text-base text-white mb-2 relative">
                  {reason.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed relative">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}