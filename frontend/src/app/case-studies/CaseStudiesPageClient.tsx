"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Info,
  ChevronDown,
  Search,
  Hammer,
  PackageCheck,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface ApproachCase {
  id: string;
  industry: string;
  service: string;
  gradient: string;
  glow: string;
  scenario: string;
  approach: string;
  deliverables: string[];
  typicalTimeline: string;
  tags: string[];
}

const cases: ApproachCase[] = [
  {
    id: "saas-rebuild",
    industry: "SaaS / Technology",
    service: "Web Development + SEO",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.35)",
    scenario:
      "A SaaS company with a slow, outdated platform losing customers to faster competitors, and organic traffic declining year over year.",
    approach:
      "Rebuild on Next.js with server-side rendering for speed and correct indexing, migrate to a properly indexed PostgreSQL schema, and run a full technical SEO audit alongside the rebuild rather than treating it as a separate later phase.",
    deliverables: [
      "Fully re-architected frontend and backend with modern framework",
      "Technical SEO fixes: sitemaps, structured data, Core Web Vitals",
      "Content strategy roadmap for sustained organic growth",
    ],
    typicalTimeline: "3–4 months",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "SEO"],
  },
  {
    id: "health-app",
    industry: "Healthcare",
    service: "Mobile App Development",
    gradient: "from-emerald-600/50 to-teal-600/40",
    glow: "rgba(34,197,94,0.35)",
    scenario:
      "A healthcare provider needing a secure, privacy-conscious patient app that works on both Android and iOS without the cost of two separate native builds.",
    approach:
      "Build cross-platform in React Native with a shared codebase, design data handling around privacy best practices from the architecture stage, and integrate telehealth video and appointment booking as core, not bolted-on, features.",
    deliverables: [
      "Cross-platform app (iOS + Android) from one codebase",
      "Offline-capable appointment booking and reminders",
      "Telehealth video integration with a privacy-first data model",
    ],
    typicalTimeline: "4–5 months",
    tags: ["React Native", "Node.js", "MongoDB", "Telehealth"],
  },
  {
    id: "real-estate-leads",
    industry: "Real Estate",
    service: "Website + Digital Marketing",
    gradient: "from-pink-600/50 to-rose-600/40",
    glow: "rgba(236,72,153,0.35)",
    scenario:
      "A real estate agency relying entirely on word of mouth, with an outdated website generating almost no online leads.",
    approach:
      "Build a premium listing platform with virtual tours and a mortgage calculator, then pair it with a targeted paid acquisition campaign so the new site has traffic to convert from day one, not months later.",
    deliverables: [
      "Property listing platform with virtual tours and filtering",
      "Lead capture flow tied directly into a CRM",
      "Targeted Google and Meta ad campaigns to drive qualified traffic",
    ],
    typicalTimeline: "2–3 months",
    tags: ["Next.js", "Sanity CMS", "Google Ads", "Meta Ads"],
  },
  {
    id: "ai-support",
    industry: "Customer Support / AI",
    service: "AI Solutions",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.35)",
    scenario:
      "A support team overwhelmed with repetitive tickets, slow response times, and falling customer satisfaction scores.",
    approach:
      "Train an AI assistant on the company's existing documentation to resolve common queries instantly, with a clean handoff to a human agent for anything the assistant can't confidently answer.",
    deliverables: [
      "AI chatbot trained on product documentation and FAQs",
      "Automated ticket triage and routing",
      "Human handoff flow for complex or sensitive queries",
    ],
    typicalTimeline: "6–8 weeks",
    tags: ["AI Integration", "Node.js", "MongoDB", "LLM APIs"],
  },
  {
    id: "manufacturing-3d",
    industry: "Manufacturing",
    service: "3D Interactive Website",
    gradient: "from-blue-600/50 to-indigo-600/40",
    glow: "rgba(99,102,241,0.35)",
    scenario:
      "An industrial equipment manufacturer whose complex products were hard to explain through photos and text, leading to long, confused sales cycles.",
    approach:
      "Build an interactive Three.js product showcase with a real-time configurator, so prospects can explore product variations themselves before ever getting on a call with sales.",
    deliverables: [
      "Interactive 3D product models with configurable options",
      "Animated exploded-view diagrams for technical clarity",
      "Lead capture built into the configurator flow",
    ],
    typicalTimeline: "2–3 months",
    tags: ["Three.js", "WebGL", "React", "3D Modeling"],
  },
  {
    id: "ecommerce-custom",
    industry: "E-commerce",
    service: "E-commerce Development",
    gradient: "from-teal-600/50 to-emerald-600/40",
    glow: "rgba(20,184,166,0.35)",
    scenario:
      "An online retailer hitting the limits of an off-the-shelf platform — custom pricing rules, bulk ordering, and B2B account management were impossible to implement.",
    approach:
      "Build a fully custom headless storefront with a flexible pricing engine and a purpose-built admin dashboard, so the business isn't fighting platform limitations as it grows.",
    deliverables: [
      "Custom headless storefront with flexible checkout logic",
      "Admin dashboard for managing tiered B2B pricing",
      "Inventory sync and order management tooling",
    ],
    typicalTimeline: "3–4 months",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Custom CMS"],
  },
];

const process = [
  {
    icon: Search,
    title: "Understand the real problem",
    text: "Every case above starts the same way — understanding what's actually broken, not just what feature was requested.",
  },
  {
    icon: Hammer,
    title: "Build the right solution, not the trendy one",
    text: "The tech stack and approach are chosen to fit the problem and budget, not to showcase whatever is newest.",
  },
  {
    icon: PackageCheck,
    title: "Deliver something maintainable",
    text: "Documented, clean code that your team — or ours — can build on for years, not a fragile system nobody wants to touch.",
  },
];

const typewriterWords = ["Results", "Revenue", "Growth", "Impact", "Success"];

export default function CaseStudiesPageClient() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section pt-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3" style={{ animationDelay: "5s" }} />

      <div className="container-px mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="badge mb-4">
            <Sparkles size={14} /> How We Approach Projects
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            Case studies built for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </h1>
          <p className="text-muted leading-relaxed">
            Common challenges businesses bring us, and exactly how we'd
            approach solving each one — real case studies with named
            clients and verified results will replace these as projects
            complete.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-start gap-3 glass rounded-2xl px-5 py-4 max-w-2xl mx-auto mb-14"
        >
          <Info size={16} className="text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted leading-relaxed text-left">
            The scenarios below are illustrative — they describe real
            problems businesses commonly face and exactly how we'd solve
            them, not completed projects for named clients. Timelines are
            typical ranges, not actuals from a specific engagement.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 mb-20">
          {cases.map((c, i) => {
            const isOpen = openId === c.id;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl overflow-hidden relative"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${c.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient}`} />
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : c.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {c.industry}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[10px] text-muted">{c.service}</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                      {c.scenario}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-1"
                  >
                    <ChevronDown size={18} className="text-muted" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-6 grid sm:grid-cols-[1.3fr_1fr] gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                            Our Approach
                          </h4>
                          <p className="text-sm text-white/80 leading-relaxed mb-5">
                            {c.approach}
                          </p>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                            What's Typically Delivered
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {c.deliverables.map((d) => (
                              <li key={d} className="text-xs text-white/80 flex items-start gap-2">
                                <span className="text-accent mt-0.5 shrink-0">→</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                            Typical Timeline
                          </h4>
                          <p className="text-sm text-accent font-semibold mb-5">
                            {c.typicalTimeline}
                          </p>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                            Common Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {c.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] bg-white/5 border border-border text-muted px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Our process philosophy */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="badge mb-4">Every Case, Same Standard</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              What stays constant{" "}
              <span className="text-gradient">across every project</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-strong rounded-2xl p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                    <Icon size={18} className="text-background" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
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
              Recognize your own{" "}
              <span className="text-gradient">challenge above?</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
              Tell us about your situation and we'll walk you through
              exactly how we'd approach it, with a realistic timeline and
              a clear price — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultation" className="btn-primary">
                Book Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}