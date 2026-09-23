"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  FileSignature,
  Target,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Search,
  BarChart3,
  Accessibility,
  Smartphone,
  ShieldCheck,
  Gauge,
  Layers3,
  Sparkles,
} from "lucide-react";

const commitments = [
  {
    title: "Direct communication",
    text: "You talk to the person building your product — via WhatsApp, Telegram, email, or call, whichever you prefer.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.25)",
    icon: MessageCircle,
  },
  {
    title: "24-hour response time",
    text: "Messages during a live project get a response within 24 hours, typically much sooner than that.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.25)",
    icon: Clock,
  },
  {
    title: "Written scope, always",
    text: "A clear, written agreement on deliverables, timeline, and price before any work begins — no surprises.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    icon: FileSignature,
  },
];

const processStages = [
  {
    number: "01",
    title: "Strategy",
    shortTitle: "Strategy",
    description:
      "We clarify the business objective, target audience, positioning, content requirements, technical constraints, and measurable outcomes before production begins.",
    icon: Target,
    color: "from-violet-500 to-purple-700",
    deliverables: [
      "Business & audience understanding",
      "Project scope and priorities",
      "Information architecture",
      "Measurement direction",
    ],
  },
  {
    number: "02",
    title: "Experience Design",
    shortTitle: "Design",
    description:
      "The visual system, interaction model, responsive layouts, content hierarchy, and user journeys are shaped around clarity and conversion.",
    icon: Palette,
    color: "from-fuchsia-500 to-pink-600",
    deliverables: [
      "Responsive interface system",
      "Typography & visual hierarchy",
      "Interaction patterns",
      "Conversion-focused journeys",
    ],
  },
  {
    number: "03",
    title: "Development",
    shortTitle: "Build",
    description:
      "The approved experience becomes a structured, responsive digital product using maintainable frontend and backend architecture.",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    deliverables: [
      "Responsive implementation",
      "Reusable components",
      "API & integration work",
      "Production-ready architecture",
    ],
  },
  {
    number: "04",
    title: "Launch",
    shortTitle: "Launch",
    description:
      "Before release, the experience is reviewed across devices, browsers, performance requirements, accessibility considerations, SEO foundations, and analytics.",
    icon: Rocket,
    color: "from-amber-500 to-orange-600",
    deliverables: [
      "Cross-device review",
      "Technical SEO foundations",
      "Performance checks",
      "Analytics implementation",
    ],
  },
  {
    number: "05",
    title: "Growth",
    shortTitle: "Growth",
    description:
      "After launch, digital work can evolve through measured improvements, content updates, technical optimization, experimentation, and new functionality.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    deliverables: [
      "Performance monitoring",
      "Content improvements",
      "Conversion opportunities",
      "Continuous optimization",
    ],
  },
];

const standards = [
  {
    title: "Performance",
    text: "Fast, responsive experiences with attention to loading behavior, Core Web Vitals, asset optimization, and efficient rendering.",
    icon: Gauge,
  },
  {
    title: "Search visibility",
    text: "Semantic structure, crawlable content, metadata, structured data where appropriate, and a technical foundation for search.",
    icon: Search,
  },
  {
    title: "Accessibility",
    text: "Interfaces are designed with keyboard access, semantic HTML, readable contrast, meaningful labels, and inclusive interaction patterns in mind.",
    icon: Accessibility,
  },
  {
    title: "Responsive UX",
    text: "Layouts adapt across desktop, tablet, and mobile rather than treating smaller screens as an afterthought.",
    icon: Smartphone,
  },
  {
    title: "Measurement",
    text: "Analytics and event measurement can be structured around meaningful business actions rather than vanity metrics alone.",
    icon: BarChart3,
  },
  {
    title: "Maintainability",
    text: "Reusable components, organized architecture, documented decisions, and scalable implementation help the product evolve after launch.",
    icon: Layers3,
  },
];

export default function TestimonialsPreview() {
  const [activeStage, setActiveStage] = useState(0);

  const activeProcess = processStages[activeStage];
  const ActiveIcon = activeProcess.icon;

  return (
    <section className="section bg-surface/60 border-y border-border relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="glow-orb w-[32rem] h-[32rem] bg-primary/10 -bottom-32 -right-32" />
      <div className="glow-orb w-[28rem] h-[28rem] bg-cyan-500/5 -top-40 -left-40" />

      <div className="container-px mx-auto max-w-[1600px] relative z-10">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="badge mb-5">
              <Sparkles size={13} />
              What To Expect
            </span>

            <h2 className="font-display font-bold tracking-[-0.035em] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.02]">
              A digital partner built around{" "}
              <span className="text-gradient">clarity, craft & growth.</span>
            </h2>

            <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mt-7">
              Professional digital work should feel structured from the first
              conversation to the final launch. HEROY combines strategy,
              design, engineering, communication, and measurable digital
              foundations into one connected process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-strong rounded-3xl p-6 sm:p-7 xl:min-w-[340px]"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <p className="font-display font-bold text-4xl text-gradient leading-none tracking-tight">
                  2025
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted mt-2">
                  Founded
                </p>
              </div>

              <div className="h-12 w-px bg-border" />

              <div>
                <p className="font-display font-bold text-2xl text-white leading-none">
                  3
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted mt-2">
                  Core Specialists
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Clear communication throughout the project</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            COMMITMENTS
        ========================================================== */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {commitments.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 lg:p-8 flex flex-col relative overflow-hidden group cursor-default min-h-[270px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 24px 70px ${c.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 rgba(0,0,0,0)";
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color}`}
                />

                <div className="flex items-start justify-between gap-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <span className="font-display text-xs font-semibold text-muted tracking-[0.2em]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold tracking-tight text-white text-xl mt-7 mb-3">
                  {c.title}
                </h3>

                <p className="text-sm lg:text-base text-muted leading-7">
                  {c.text}
                </p>

                <div className="mt-auto pt-6">
                  <div className="h-px bg-border group-hover:bg-primary/30 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            PROCESS SECTION
        ========================================================== */}
        <div className="mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="badge mb-4">Our Delivery Framework</span>

            <h3 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              From business objective to{" "}
              <span className="text-gradient">digital growth.</span>
            </h3>

            <p className="text-muted text-base lg:text-lg leading-relaxed mt-5">
              Every project can move through a structured lifecycle while
              remaining flexible enough to adapt to the actual needs of the
              business.
            </p>
          </motion.div>

          {/* Process navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4 mb-6">
            {processStages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;

              return (
                <motion.button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left rounded-2xl border p-4 lg:p-5 transition-all duration-300 ${
                    isActive
                      ? "border-primary/50 bg-primary/10 shadow-[0_15px_45px_rgba(124,92,255,0.12)]"
                      : "border-border bg-surface/40 hover:border-primary/25"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-display text-xs font-bold tracking-[0.16em] ${
                        isActive ? "text-primary" : "text-muted"
                      }`}
                    >
                      {stage.number}
                    </span>

                    <Icon
                      size={17}
                      className={
                        isActive ? "text-primary" : "text-muted"
                      }
                    />
                  </div>

                  <p className="font-display font-semibold text-sm sm:text-base text-white">
                    {stage.shortTitle}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Active process detail */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-strong rounded-[2rem] p-7 sm:p-9 lg:p-12"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeProcess.color} flex items-center justify-center`}
                  >
                    <ActiveIcon size={23} className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Stage {activeProcess.number}
                    </p>

                    <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">
                      {activeProcess.title}
                    </h4>
                  </div>
                </div>

                <p className="text-muted text-base sm:text-lg leading-8 max-w-2xl">
                  {activeProcess.description}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-5">
                  Typical focus
                </p>

                <div className="space-y-3">
                  {activeProcess.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3.5"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-primary shrink-0"
                      />

                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROFESSIONAL STANDARDS
        ========================================================== */}
        <div className="mt-28 lg:mt-36">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-4">Digital Quality Framework</span>

              <h3 className="font-display font-bold tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Built for the standards of a{" "}
                <span className="text-gradient">
                  modern digital market.
                </span>
              </h3>

              <p className="text-muted text-base lg:text-lg leading-8 mt-6">
                Professional websites are more than visual interfaces. They
                need to be discoverable, accessible, responsive, measurable,
                maintainable, and technically prepared for continued growth.
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={19} className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-white">
                      Quality is part of the build
                    </h4>

                    <p className="text-sm text-muted leading-6 mt-1">
                      Strategy, user experience, engineering, technical
                      quality, and measurement should work together rather
                      than being treated as separate afterthoughts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {standards.map((standard, index) => {
                const Icon = standard.icon;

                return (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 group transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <h4 className="font-display font-semibold text-white tracking-tight">
                      {standard.title}
                    </h4>

                    <p className="text-sm text-muted leading-6 mt-2">
                      {standard.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 lg:mt-36 rounded-[2rem] border border-border overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-grad-mix opacity-10" />

          <div className="relative z-10 px-7 py-12 sm:px-10 lg:px-16 lg:py-16 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={21} className="text-primary" />
            </div>

            <h3 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
              Serious digital work starts with{" "}
              <span className="text-gradient">
                a clear process.
              </span>
            </h3>

            <p className="text-muted text-base lg:text-lg leading-7 max-w-2xl mx-auto mt-5">
              Explore the complete client experience, expectations, delivery
              approach, and principles behind working with HEROY.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <Link href="/testimonials" className="btn-primary">
                See What to Expect
                <ArrowRight size={16} />
              </Link>

              <Link href="/consultation" className="btn-outline">
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM MICRO NAVIGATION
        ========================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-xs uppercase tracking-[0.16em] text-muted">
          <span className="flex items-center gap-2">
            <Target size={13} />
            Strategy
          </span>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />

          <span className="flex items-center gap-2">
            <Palette size={13} />
            Experience
          </span>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />

          <span className="flex items-center gap-2">
            <Code2 size={13} />
            Engineering
          </span>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />

          <span className="flex items-center gap-2">
            <Rocket size={13} />
            Launch
          </span>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />

          <span className="flex items-center gap-2">
            <TrendingUp size={13} />
            Growth
          </span>
        </div>
      </div>
    </section>
  );
}