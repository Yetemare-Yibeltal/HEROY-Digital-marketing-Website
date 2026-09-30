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
    title: "Practical, Modern Solutions",
    description:
      "We choose technologies and approaches based on the actual project requirements, business goals, maintainability, and long-term use—not simply because something is new.",
    color: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.25)",
    stat: "Purpose-Built",
  },
  {
    icon: GraduationCap,
    title: "Technical & Creative Expertise",
    description:
      "Our work brings together software development, design, digital marketing, and technical problem-solving so the product and its presentation can be considered together.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.25)",
    stat: "Cross-Functional",
  },
  {
    icon: ShieldCheck,
    title: "Security Considered Early",
    description:
      "Authentication, authorization, input validation, secure configuration, access control, and responsible handling of sensitive data are considered as part of the development process.",
    color: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.25)",
    stat: "Security-Minded",
  },
  {
    icon: Zap,
    title: "Structured Delivery",
    description:
      "Projects are broken into clear stages so requirements, design, development, testing, feedback, and delivery can be reviewed without turning the process into unnecessary complexity.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.25)",
    stat: "Clear Process",
  },
  {
    icon: HeadphonesIcon,
    title: "Support After Delivery",
    description:
      "A website or application is not finished simply because it has been launched. We can continue with maintenance, improvements, troubleshooting, and technical support based on the project scope.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    stat: "Ongoing Support",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "We keep communication straightforward through clear requirements, progress updates, feedback discussions, and documented project decisions so everyone understands what is being built.",
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.25)",
    stat: "Direct & Clear",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Focused Strategy",
    description:
      "Digital work should support a real business objective. We connect design, development, marketing, and SEO decisions to the goals the project is intended to achieve.",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.25)",
    stat: "Goal-Oriented",
  },
  {
    icon: Layers3,
    title: "Built for the Next Stage",
    description:
      "We consider future changes when choosing the structure of a project, making it easier to extend features, update content, integrate services, and continue development as needs evolve.",
    color: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.25)",
    stat: "Ready to Evolve",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-accent/10 -top-20 -left-20" />
      <div
        className="glow-orb w-80 h-80 bg-primary/10 bottom-0 right-0"
        style={{ animationDelay: "4s" }}
      />

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
            A practical approach to{" "}
            <span className="text-gradient-warm">digital work</span>
          </h2>

          <p className="text-muted leading-relaxed">
            We focus on building useful digital products and experiences with
            clear communication, thoughtful technology choices, and a process
            that keeps the work aligned with your actual goals.
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
                    "0 0 0 rgba(0,0,0,0)";
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