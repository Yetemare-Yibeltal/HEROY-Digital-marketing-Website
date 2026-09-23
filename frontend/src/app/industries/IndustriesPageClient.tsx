"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  Building2,
  GraduationCap,
  HandHeart,
  ShoppingBag,
  Factory,
  Truck,
  Plane,
  Building,
  Rocket,
  Cpu,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Search,
  PenTool,
  Hammer,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.3)",
    focus: "Privacy & compliance first",
    description:
      "Patient engagement apps, telehealth platforms, appointment systems, and privacy-aware digital infrastructure that improves care delivery and patient outcomes.",
    services: ["Mobile Apps", "Web Portals", "AI Chatbots", "Data Dashboards"],
    challenges: [
      "Handling sensitive patient data securely from day one, not as an afterthought",
      "Making appointment booking and records access simple for non-technical patients",
      "Integrating with existing hospital or clinic systems without disrupting operations",
    ],
  },
  {
    icon: Landmark,
    name: "Finance & Fintech",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    focus: "Security & trust-building",
    description:
      "Secure fintech platforms, investment dashboards, payment systems, and branding that builds credibility with enterprise and retail clients.",
    services: ["SaaS Platforms", "Payment Integration", "Branding", "Security"],
    challenges: [
      "Earning user trust through design and messaging as much as through security",
      "Integrating payment rails and financial APIs cleanly and reliably",
      "Balancing regulatory requirements with a frictionless user experience",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    focus: "Lead conversion",
    description:
      "Property listing platforms, virtual tour experiences, mortgage calculators, and lead-generation websites that convert browsers into buyers.",
    services: ["Listing Platforms", "Virtual Tours", "Lead Generation", "CRM"],
    challenges: [
      "Making large listing catalogs fast to browse and easy to filter",
      "Capturing serious buyer leads without a clunky, off-putting form",
      "Presenting properties compellingly through photos, video, and virtual tours",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
    focus: "Engagement & access",
    description:
      "Learning management systems, institutional websites, student portals, and digital marketing strategies that grow enrollment and engagement.",
    services: ["LMS Development", "Student Portals", "SEO", "Content Creation"],
    challenges: [
      "Building portals that work well for students, parents, and staff alike",
      "Making content and course materials easy to organize and update",
      "Standing out in local search when prospective students are comparing options",
    ],
  },
  {
    icon: HandHeart,
    name: "NGOs & Nonprofits",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    focus: "Impact on a limited budget",
    description:
      "Donation platforms, awareness campaigns, grant reporting systems, and digital strategies that maximize mission impact on limited budgets.",
    services: ["Donation Systems", "Campaigns", "Reporting Dashboards", "SEO"],
    challenges: [
      "Making the donation process simple enough that people actually finish it",
      "Telling the organization's story in a way that builds real trust with donors",
      "Getting professional-grade digital tools within a nonprofit budget",
    ],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    focus: "Conversion-focused",
    description:
      "Custom storefronts, checkout optimization, inventory management, and full-funnel growth marketing that scale online revenue.",
    services: ["Custom Storefronts", "Checkout Optimization", "Paid Ads", "Analytics"],
    challenges: [
      "Reducing cart abandonment through a faster, clearer checkout flow",
      "Managing inventory and pricing logic that off-the-shelf platforms can't handle",
      "Turning one-time buyers into repeat customers through retention marketing",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    focus: "Operational modernization",
    description:
      "3D product configurators, ERP integrations, operational automation platforms, and B2B portals that modernize industrial businesses.",
    services: ["3D Experiences", "ERP Systems", "B2B Portals", "Automation"],
    challenges: [
      "Digitizing manual, paper-based, or spreadsheet-driven processes",
      "Giving B2B buyers self-service tools instead of routing everything through sales",
      "Presenting complex products clearly with interactive 3D configurators",
    ],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    focus: "Real-time visibility",
    description:
      "Fleet tracking systems, dispatch automation, inventory management platforms, and real-time reporting that improve operational efficiency.",
    services: ["Fleet Tracking", "Dispatch Systems", "Inventory Management", "Dashboards"],
    challenges: [
      "Replacing scattered spreadsheets with one reliable source of truth",
      "Giving dispatchers and drivers real-time visibility into routes and status",
      "Building reporting that actually helps identify bottlenecks, not just logs data",
    ],
  },
  {
    icon: Plane,
    name: "Tourism & Hospitality",
    gradient: "from-sky-500 to-cyan-600",
    glow: "rgba(14,165,233,0.3)",
    focus: "Inspiration & booking",
    description:
      "Booking platforms, destination marketing campaigns, immersive 3D experiences, and social media strategies that inspire and convert travelers.",
    services: ["Booking Platforms", "Destination Marketing", "3D Experiences", "Social Media"],
    challenges: [
      "Making the booking flow simple enough to complete on a phone, quickly",
      "Showcasing destinations and properties in a way that photos alone can't",
      "Building a content and social strategy that inspires before people even search",
    ],
  },
  {
    icon: Building,
    name: "Government & Public Sector",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    focus: "Accessibility & security",
    description:
      "Accessible, secure public-facing platforms, citizen portals, and internal management systems built with accessibility standards in mind.",
    services: ["Citizen Portals", "Internal Systems", "Accessibility", "Security"],
    challenges: [
      "Meeting accessibility standards so services work for every citizen",
      "Building systems that are secure and auditable, not just functional",
      "Making bureaucratic processes genuinely simpler for the people using them",
    ],
  },
  {
    icon: Rocket,
    name: "Startups",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    focus: "Speed to launch",
    description:
      "MVP development, brand identity, pitch decks, and growth marketing that help early-stage startups move fast, validate ideas, and acquire users.",
    services: ["MVP Development", "Branding", "Growth Marketing", "Pitch Decks"],
    challenges: [
      "Shipping a real, testable MVP fast without over-building for scale you don't need yet",
      "Building a brand identity that looks credible to investors and early users alike",
      "Setting up growth and analytics infrastructure from day one, not after traction",
    ],
  },
  {
    icon: Cpu,
    name: "Technology & SaaS",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    focus: "Scalable architecture",
    description:
      "SaaS platforms, AI integrations, developer-friendly APIs, and scalable cloud infrastructure built to handle growth and enterprise demand.",
    services: ["SaaS Platforms", "AI Integration", "API Development", "Cloud Infrastructure"],
    challenges: [
      "Architecting for multi-tenancy and scale without over-engineering too early",
      "Integrating AI features that genuinely add value, not just novelty",
      "Building APIs and documentation that developers actually enjoy working with",
    ],
  },
];

const approach = [
  {
    icon: Search,
    title: "Learn your industry's specifics",
    text: "Before writing a line of code, we research the regulations, user expectations, and competitive landscape specific to your sector.",
  },
  {
    icon: PenTool,
    title: "Adapt our process, not your business",
    text: "Our six-stage process stays the same, but how we apply it — compliance checks, integrations, content — flexes to what your industry actually needs.",
  },
  {
    icon: Hammer,
    title: "Build with your constraints in mind",
    text: "Budget, regulation, existing systems — we design around your real-world constraints rather than a generic template.",
  },
];

const typewriterWords = ["Healthcare", "Finance", "Education", "Startups", "E-commerce"];

export default function IndustriesPageClient() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> Industries We Serve
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Solutions built for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            We tailor our approach to the unique challenges, compliance
            needs, and growth goals of each sector we work with. Tap a
            card to see the specific challenges we focus on solving.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isOpen = expanded === ind.name;
              return (
                <motion.div
                  key={ind.name}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="glass rounded-2xl overflow-hidden relative group cursor-pointer"
                  onClick={() => setExpanded(isOpen ? null : ind.name)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${ind.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${ind.glow}, transparent 70%)`,
                    }}
                  />
                  <div className="relative p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <h2 className="font-display font-semibold text-lg text-white">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full whitespace-nowrap">
                        {ind.focus}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {ind.services.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] bg-white/5 border border-border text-muted px-2 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-xs font-semibold text-accent"
                    >
                      {isOpen ? "Hide" : "See"} challenges we solve
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={13} />
                      </motion.span>
                    </button>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative border-t border-border"
                      >
                        <ul className="p-6 pt-4 flex flex-col gap-2.5">
                          {ind.challenges.map((c) => (
                            <li key={c} className="text-xs text-white/80 flex items-start gap-2">
                              <span className="text-accent mt-0.5 shrink-0">→</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Our approach */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">Our Approach</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                How we adapt to{" "}
                <span className="text-gradient">any industry</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                We don't have a decade of vertical-specific case studies yet
                — what we do have is a process built to genuinely learn
                your industry rather than force it into a generic template.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {approach.map((step, i) => {
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
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Don&apos;t see your industry?{" "}
                <span className="text-gradient">We can still help</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                Our process adapts to any sector. Tell us about your
                business and we will show you exactly how we would
                approach it, with a clear plan and realistic timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="btn-outline">
                  Book Free Consultation
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