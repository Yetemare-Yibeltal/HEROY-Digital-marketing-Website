"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "We learn about your business, target audience, existing digital presence, competitors, and the problem you want to solve. This gives us useful context before decisions are made about design, technology, or marketing.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
  },
  {
    number: "02",
    title: "Discovery",
    description:
      "We turn the initial conversation into a clearer project definition by discussing goals, users, required features, content, technical requirements, priorities, constraints, and how the finished work will be evaluated.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We define a practical direction for the project, including the recommended technology, content structure, user experience, marketing or SEO priorities, development stages, and the work that should be included in the initial scope.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    number: "04",
    title: "Design",
    description:
      "We develop the visual direction and user experience through layouts, interface concepts, responsive design, and prototypes where appropriate. Feedback is incorporated before the approved direction moves into development.",
    color: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    number: "05",
    title: "Development",
    description:
      "Our engineers turn the approved direction into a working website, application, or digital system using technologies suited to the project. Development is organized around the agreed scope, priorities, integrations, and technical requirements.",
    color: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
  },
  {
    number: "06",
    title: "Testing",
    description:
      "Before launch, we review the implementation for functional issues, responsive behavior, forms, navigation, integrations, performance considerations, accessibility basics, and other requirements that are relevant to the project.",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
  },
  {
    number: "07",
    title: "Launch",
    description:
      "Once the project is ready, we prepare the production environment and coordinate deployment, domain or DNS configuration, environment settings, and final checks required to make the new experience available to users.",
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    number: "08",
    title: "Optimization",
    description:
      "After launch, we use available performance data, feedback, analytics, SEO observations, and real-world usage to identify useful improvements. Depending on the project, this can include content, UX, performance, technical, or conversion-focused updates.",
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
            Our{" "}
            <span className="text-gradient">8-step project process</span>
          </h2>
          <p className="text-muted">
            A clear, collaborative approach that takes a project from initial
            research and planning through design, development, launch, and
            continued improvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 relative">
          {/* Animated connecting progress line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="w-full"
              style={{
                background:
                  "linear-gradient(180deg,#7c5cff,#22d3ee,#f472b6)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="hy-holo-container relative"
            >
              <div className="hy-holo-inner">
                <div className="hy-card-3d flex-row gap-5 items-start text-left">
                  <span className="hy-corner-pip" />

                  <div className="hy-depth-1 shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    >
                      <span className="font-display font-bold text-white text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="hy-depth-2">
                    <h3 className="hy-grad-text-flow hy-title-on-hover font-display font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#9292b8" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}