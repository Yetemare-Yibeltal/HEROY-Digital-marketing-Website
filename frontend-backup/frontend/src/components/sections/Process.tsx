"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research",
    description: "We study your business, audience, and competitors to uncover real growth opportunities and define the right direction before writing a single line of code.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
  },
  {
    number: "02",
    title: "Discovery",
    description: "Through focused workshops and stakeholder conversations we clarify goals, technical requirements, and what success looks like for your specific project.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    number: "03",
    title: "Strategy",
    description: "We build a tailored roadmap covering technology choices, design direction, marketing strategy, milestones, and timelines aligned to your goals and budget.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    number: "04",
    title: "Design",
    description: "Our designers craft wireframes, UI mockups, and interactive prototypes that bring your brand vision to life before any development begins.",
    color: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    number: "05",
    title: "Development",
    description: "Our engineers build your product using modern, scalable frameworks with clean architecture, regular code reviews, and weekly progress demos.",
    color: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
  },
  {
    number: "06",
    title: "Testing",
    description: "We rigorously test functionality, performance, security, and accessibility across all devices and browsers before anything goes live.",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
  },
  {
    number: "07",
    title: "Launch",
    description: "We handle deployment, DNS setup, hosting configuration, and ensure a smooth zero-downtime go-live with full monitoring in place from day one.",
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    number: "08",
    title: "Optimization",
    description: "Post-launch we monitor performance metrics, gather user feedback, and continuously refine — from SEO and speed to UX and conversion rates.",
    color: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.3)",
  },
];

export default function Process() {
  return (
    <section className="section bg-surface/60 border-y border-border relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-primary/10 top-0 right-1/4" />

      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge mb-4">How We Work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Our proven{" "}
            <span className="text-gradient">8-step process</span>
          </h2>
          <p className="text-muted">
            A clear, structured approach that keeps every project on
            track — from first conversation to post-launch growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 flex gap-5 cursor-default relative overflow-hidden group"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 20px 50px ${step.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 0 rgba(0,0,0,0)`;
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top left, ${step.glow}, transparent 70%)`,
                }}
              />

              <div className="relative shrink-0">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                >
                  <span className="font-display font-bold text-white text-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="relative">
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}