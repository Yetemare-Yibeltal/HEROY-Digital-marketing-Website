"use client";

import { useMemo, useState } from "react";
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
  Target,
  ShieldCheck,
  BarChart3,
  Gauge,
  Globe2,
  Workflow,
  Database,
  LockKeyhole,
  Accessibility,
  CheckCircle2,
  LayoutDashboard,
  PenTool,
  ServerCog,
  LineChart,
  ChevronDown,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface PlaceholderSlot {
  id: string;
  category: string;
  icon: typeof Code2;
  gradient: string;
  glow: string;
  wide: boolean;
  focus: string;
  description: string;
  services: string[];
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

const slots: PlaceholderSlot[] = [
  {
    id: "p1",
    category: "Websites",
    icon: Code2,
    gradient: "from-violet-600/50 to-cyan-600/30",
    glow: "rgba(124,92,255,0.35)",
    wide: true,
    focus: "Digital platforms",
    description:
      "Business websites and digital platforms designed around clear information architecture, responsive experiences, performance, and measurable user journeys.",
    services: ["UX/UI", "Next.js", "SEO", "Analytics"],
  },
  {
    id: "p2",
    category: "Mobile Apps",
    icon: Smartphone,
    gradient: "from-emerald-600/50 to-teal-600/30",
    glow: "rgba(34,197,94,0.35)",
    wide: false,
    focus: "Mobile experiences",
    description:
      "Mobile product experiences focused on usability, reliable navigation, responsive interfaces, API integration, and maintainable application architecture.",
    services: ["Product UX", "Mobile UI", "APIs", "Testing"],
  },
  {
    id: "p3",
    category: "Branding",
    icon: Palette,
    gradient: "from-pink-600/50 to-rose-600/30",
    glow: "rgba(236,72,153,0.35)",
    wide: false,
    focus: "Brand systems",
    description:
      "Visual identity systems that connect positioning, typography, color, digital interfaces, content, and consistent brand application.",
    services: ["Identity", "Typography", "Guidelines", "Digital Design"],
  },
  {
    id: "p4",
    category: "AI Products",
    icon: Bot,
    gradient: "from-orange-600/50 to-amber-600/30",
    glow: "rgba(249,115,22,0.35)",
    wide: false,
    focus: "Applied AI",
    description:
      "AI-enabled product experiences built around practical workflows, structured data, user interaction, automation, and responsible implementation.",
    services: ["AI UX", "Automation", "APIs", "Data"],
  },
  {
    id: "p5",
    category: "3D Websites",
    icon: Box,
    gradient: "from-blue-600/50 to-indigo-600/30",
    glow: "rgba(99,102,241,0.35)",
    wide: true,
    focus: "Interactive experiences",
    description:
      "Immersive web experiences combining interface design, motion, 3D elements, interaction design, and performance-aware implementation.",
    services: ["Three.js", "Motion", "WebGL", "Performance"],
  },
  {
    id: "p6",
    category: "SEO Projects",
    icon: Search,
    gradient: "from-cyan-600/50 to-blue-600/30",
    glow: "rgba(34,211,238,0.35)",
    wide: false,
    focus: "Search visibility",
    description:
      "Technical and content-focused SEO work covering site structure, crawlability, metadata, semantic markup, performance, and measurement.",
    services: ["Technical SEO", "Content", "Search Console", "Analytics"],
  },
  {
    id: "p7",
    category: "Digital Marketing",
    icon: Megaphone,
    gradient: "from-fuchsia-600/50 to-purple-600/30",
    glow: "rgba(217,70,239,0.35)",
    wide: false,
    focus: "Digital growth",
    description:
      "Digital marketing systems connecting audience research, content, campaign planning, landing experiences, measurement, and conversion journeys.",
    services: ["Strategy", "Campaigns", "Content", "Measurement"],
  },
  {
    id: "p8",
    category: "SaaS Platforms",
    icon: Layers,
    gradient: "from-teal-600/50 to-emerald-600/30",
    glow: "rgba(20,184,166,0.35)",
    wide: false,
    focus: "Product platforms",
    description:
      "SaaS interfaces and application foundations structured around authentication, workflows, dashboards, data, APIs, and scalable product architecture.",
    services: ["Product Design", "APIs", "Dashboards", "Architecture"],
  },
  {
    id: "p9",
    category: "Websites",
    icon: Code2,
    gradient: "from-amber-600/50 to-yellow-600/30",
    glow: "rgba(234,179,8,0.35)",
    wide: false,
    focus: "Conversion-focused websites",
    description:
      "Marketing websites designed to make services easier to understand, strengthen trust, improve navigation, and support meaningful business actions.",
    services: ["UX", "Development", "SEO", "Conversion"],
  },
];

const documentationPromise = [
  {
    icon: BarChart3,
    label: "Real outcomes",
    text:
      "Published results will use actual project evidence where measurement and client approval allow it. We do not present projections, averages, or invented performance figures as client results.",
  },
  {
    icon: Code2,
    label: "Technical transparency",
    text:
      "Case studies can document the relevant frameworks, integrations, architecture decisions, design systems, and implementation approach behind the work.",
  },
  {
    icon: ShieldCheck,
    label: "Clear attribution",
    text:
      "Projects will be attributed according to client permission and contractual requirements. Confidential engagements will remain clearly identified without exposing protected information.",
  },
];

const portfolioPrinciples = [
  {
    icon: Target,
    title: "Start with the objective",
    text:
      "Every project should begin with the business, product, audience, or communication problem being solved—not simply with a visual treatment.",
  },
  {
    icon: PenTool,
    title: "Design the experience",
    text:
      "Information architecture, interaction patterns, responsive behavior, content hierarchy, accessibility, and visual design work together as one system.",
  },
  {
    icon: ServerCog,
    title: "Build for the real environment",
    text:
      "Technology choices should reflect the product requirements, integrations, content model, performance needs, security considerations, and future maintenance.",
  },
  {
    icon: LineChart,
    title: "Measure what matters",
    text:
      "Where appropriate, analytics and measurement are connected to meaningful user actions rather than vanity metrics alone.",
  },
];

const qualityStandards = [
  {
    icon: Gauge,
    title: "Performance",
    text:
      "Responsive implementation, optimized media, efficient rendering, and attention to Core Web Vitals and real-world loading conditions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text:
      "Semantic HTML, keyboard-friendly interactions, readable content structure, focus states, and accessibility-aware interface decisions.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    text:
      "Security-aware application architecture, protected secrets, appropriate authentication and authorization, input validation, and careful handling of sensitive data.",
  },
  {
    icon: Database,
    title: "Data & integrations",
    text:
      "Structured APIs, databases, analytics, CMS platforms, third-party services, and business systems integrated according to project requirements.",
  },
  {
    icon: Globe2,
    title: "International readiness",
    text:
      "Responsive layouts, clear content hierarchy, scalable components, search-friendly structures, and experiences designed to work across devices and audiences.",
  },
  {
    icon: Workflow,
    title: "Maintainability",
    text:
      "Reusable components, documented decisions, sensible project structure, and implementation choices that make future improvements easier to manage.",
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Discovery",
    text:
      "Understand the organization, audience, product, current platform, objectives, constraints, and the decisions that need to be made.",
  },
  {
    number: "02",
    title: "Strategy & structure",
    text:
      "Translate requirements into information architecture, user journeys, technical direction, content priorities, and measurable objectives.",
  },
  {
    number: "03",
    title: "Design",
    text:
      "Develop the interface system, responsive layouts, interaction patterns, visual language, and reusable components before implementation.",
  },
  {
    number: "04",
    title: "Development",
    text:
      "Build the experience using appropriate frontend, backend, database, API, CMS, analytics, and integration technologies.",
  },
  {
    number: "05",
    title: "Quality assurance",
    text:
      "Review responsive behavior, functionality, forms, accessibility, performance, metadata, integrations, and important user journeys.",
  },
  {
    number: "06",
    title: "Launch & improvement",
    text:
      "Deploy carefully, verify the production environment, monitor important behavior, and identify opportunities for continued improvement.",
  },
];

const buyerJourney = [
  {
    title: "Discover",
    text: "Understand who you are, what you offer, and why it matters.",
  },
  {
    title: "Evaluate",
    text: "Make services, products, capabilities, evidence, and differentiators easy to compare.",
  },
  {
    title: "Trust",
    text: "Use clear information, strong UX, transparency, and credible evidence to reduce uncertainty.",
  },
  {
    title: "Act",
    text: "Create obvious, accessible next steps such as contacting, booking, requesting information, or starting a project.",
  },
  {
    title: "Return",
    text: "Build useful digital experiences that remain valuable after the first interaction.",
  },
];

const faqs = [
  {
    question: "Why are there placeholders instead of named client projects?",
    answer:
      "This portfolio is deliberately structured around verified work. Rather than publishing fabricated clients, invented statistics, or generic mock case studies as completed projects, HEROY will replace the relevant placeholders with real project information as engagements are completed and approved for publication.",
  },
  {
    question: "What information will a completed case study contain?",
    answer:
      "Depending on the project and client permissions, a case study can explain the original challenge, objectives, audience, approach, design decisions, technology, implementation, launch considerations, and measurable outcomes that can be verified.",
  },
  {
    question: "Can HEROY work with an existing website or application?",
    answer:
      "Yes. Existing platforms can be reviewed before deciding whether the right approach is refinement, redesign, performance improvement, SEO work, feature development, migration, integration, or a larger rebuild.",
  },
  {
    question: "Does every project use the same technology?",
    answer:
      "No. The technology should follow the requirements. Factors such as content management, application complexity, integrations, performance, data, authentication, maintainability, and team workflows influence the technical approach.",
  },
  {
    question: "Can a portfolio project remain confidential?",
    answer:
      "Yes. Public case studies depend on the permissions and confidentiality requirements of the engagement. A confidential project should not be represented publicly with protected client information.",
  },
  {
    question: "Can I discuss a project before it appears in the portfolio?",
    answer:
      "Yes. The portfolio is a public presentation layer, not a complete list of everything being worked on. Contact HEROY to discuss your requirements, and the appropriate project information can be explained based on what is available to share.",
  },
];

const typewriterWords = [
  "Results",
  "Revenue",
  "Growth",
  "Conversions",
  "Impact",
];

export default function PortfolioPageClient() {
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? slots
        : slots.filter((project) => project.category === active),
    [active]
  );

  return (
    <section className="section pt-32 sm:pt-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -left-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -right-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 left-1/3"
        style={{ animationDelay: "5s" }}
      />

      <div className="container-px mx-auto max-w-[1600px] relative">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-end mb-12"
        >
          <div className="max-w-4xl">
            <span className="badge mb-5">
              <Sparkles size={14} />
              Portfolio & Digital Work
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white mb-6">
              Digital work built for{" "}
              <TypewriterText
                words={typewriterWords}
                className="text-gradient"
              />
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
              Explore the project categories, capabilities, design principles,
              technical standards, and delivery approach behind the work HEROY
              Digital Solutions is building across web, mobile, branding,
              digital growth, AI, SaaS, SEO, and interactive experiences.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-grad-mix flex items-center justify-center">
                <Target size={19} className="text-background" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Portfolio principle
                </p>
                <h2 className="font-display font-semibold text-white">
                  Evidence over appearance
                </h2>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed">
              A polished portfolio should show what was actually designed,
              built, launched, measured, and approved for publication. Until
              those projects are ready to share, this page separates project
              categories from completed client evidence.
            </p>
          </div>
        </motion.div>

        {/* Transparency notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-start gap-4 glass rounded-2xl px-5 sm:px-6 py-5 max-w-5xl mb-14"
        >
          <Info size={18} className="text-accent shrink-0 mt-0.5" />

          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Portfolio transparency
            </p>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              The cards below represent project types and capabilities, not
              fabricated completed projects. Published case studies will be
              added as real engagements are completed and cleared for public
              presentation, with appropriate attribution, technology details,
              and verified evidence where available.
            </p>
          </div>
        </motion.div>

        {/* Category navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between gap-5 flex-wrap mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                Explore capabilities
              </p>
              <h2 className="font-display font-semibold text-xl text-white">
                Project categories
              </h2>
            </div>

            <span className="text-xs text-muted">
              {filtered.length} project {filtered.length === 1 ? "type" : "types"}{" "}
              shown
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  active === cat
                    ? "bg-grad-primary text-background border-transparent shadow-lg"
                    : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-white/[0.03]"
                }`}
                style={
                  active === cat
                    ? {
                        boxShadow:
                          "0 8px 24px rgba(124,92,255,0.35)",
                      }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((slot, i) => {
              const Icon = slot.icon;

              return (
                <motion.article
                  key={slot.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    duration: 0.4,
                    delay: (i % 3) * 0.06,
                  }}
                  whileHover={{ y: -7 }}
                  className={`group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-black/20 ${
                    slot.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      slot.wide ? "min-h-[330px]" : "min-h-[390px]"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} opacity-40`}
                    />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${slot.glow}, transparent 70%)`,
                      }}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div
                      className="absolute inset-0 transition-all duration-500 group-hover:scale-[1.03]"
                      style={{
                        boxShadow: `inset 0 0 80px ${slot.glow}`,
                      }}
                    />

                    <div className="relative h-full min-h-[330px] flex flex-col justify-between p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                          <Icon size={22} className="text-white/80" />
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 border border-white/10 rounded-full px-3 py-1.5">
                          {slot.category}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/50 mb-2">
                          {slot.focus}
                        </p>

                        <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-3">
                          Case study coming soon
                        </h3>

                        <p className="text-sm text-white/65 leading-relaxed max-w-2xl mb-5">
                          {slot.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {slot.services.map((service) => (
                            <span
                              key={service}
                              className="text-[10px] font-medium text-white/65 border border-white/10 rounded-full px-2.5 py-1 bg-black/20"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 mb-20">
            <p className="text-muted">
              No project types are currently listed in this category.
            </p>
          </div>
        )}

        {/* Portfolio principles */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">How We Think</span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Strong digital work starts{" "}
              <span className="text-gradient">before development.</span>
            </h2>

            <p className="text-muted leading-relaxed">
              The quality of a digital product depends on the decisions made
              before and during implementation: understanding the problem,
              structuring the experience, selecting appropriate technology,
              validating the result, and creating a foundation that can evolve.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {portfolioPrinciples.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-strong rounded-3xl p-6 sm:p-7 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-grad-mix flex items-center justify-center mb-5">
                    <Icon size={19} className="text-background" />
                  </div>

                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Buyer journey */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <span className="badge mb-4">
                <LayoutDashboard size={14} />
                Experience Architecture
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Design around the{" "}
                <span className="text-gradient">complete journey.</span>
              </h2>

              <p className="text-muted leading-relaxed">
                International digital experiences are rarely just a collection
                of pages. They guide people from discovery and evaluation to
                trust, action, and continued engagement.
              </p>
            </motion.div>

            <div className="space-y-3">
              {buyerJourney.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="glass rounded-2xl p-5 sm:p-6 flex gap-5 items-start"
                >
                  <span className="text-xs font-bold text-gradient pt-1">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="font-display font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical quality */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="badge mb-4">
              <ShieldCheck size={14} />
              Digital Quality Standards
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Built with the details{" "}
              <span className="text-gradient">that matter.</span>
            </h2>

            <p className="text-muted leading-relaxed">
              Visual quality is only one part of a professional digital
              product. The implementation also needs to perform, remain usable,
              protect important data, support measurement, and remain maintainable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualityStandards.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="glass rounded-3xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>

                    <h3 className="font-display font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Delivery framework */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">
              <Workflow size={14} />
              Delivery Framework
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              From first question to{" "}
              <span className="text-gradient">live product.</span>
            </h2>

            <p className="text-muted leading-relaxed">
              A structured delivery process helps keep strategy, design,
              engineering, content, quality assurance, and launch decisions
              connected throughout the project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {deliveryStages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass-strong rounded-3xl p-7"
              >
                <span className="text-4xl font-display font-bold text-white/10">
                  {stage.number}
                </span>

                <h3 className="font-display font-semibold text-xl text-white mt-3 mb-2">
                  {stage.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {stage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case study standard */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 sm:p-10"
            >
              <span className="badge mb-5">Our Standard</span>

              <h2 className="font-display font-bold text-3xl text-white mb-4">
                What a real case study should prove.
              </h2>

              <p className="text-muted leading-relaxed">
                A portfolio should help prospective clients understand not
                only what something looked like, but what problem it solved,
                how it was approached, what was built, and what evidence exists
                after delivery.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {documentationPromise.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="glass rounded-3xl p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                      <Icon size={17} className="text-background" />
                    </div>

                    <h3 className="font-display font-semibold text-white mb-2">
                      {item.label}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">Portfolio FAQ</span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Questions about the{" "}
              <span className="text-gradient">work we publish.</span>
            </h2>

            <p className="text-muted leading-relaxed">
              A transparent portfolio should make it clear what is completed,
              what is in progress, what can be publicly attributed, and how
              project evidence is presented.
            </p>
          </motion.div>

          <div className="max-w-5xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-5 text-left px-5 sm:px-6 py-5"
                  >
                    <span className="font-display font-semibold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-5">
                          <p className="text-sm text-muted leading-relaxed max-w-4xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
          <div
            className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-grad-mix flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={23} className="text-background" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 text-white">
              Have a project worth{" "}
              <span className="text-gradient">building?</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
              Tell us what you are trying to achieve, where the current
              experience stands, and what needs to change. We can discuss the
              appropriate digital, design, marketing, or technology approach
              before any implementation begins.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight size={16} />
              </Link>

              <Link href="/consultation" className="btn-outline">
                Book a Consultation
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