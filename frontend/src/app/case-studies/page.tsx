"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Globe2, Sparkles, Info } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface CaseStudyOutcome {
  icon: typeof TrendingUp;
  label: string;
}

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  service: string;
  gradient: string;
  glow: string;
  accentColor: string;
  challenge: string;
  solution: string;
  outcomes: CaseStudyOutcome[];
  duration: string;
  tags: string[];
}

/**
 * These are illustrative examples of how HEROY approaches real project
 * types — not verified results from named clients. No company names or
 * invented performance percentages are used here. Once real, client-
 * approved case studies exist, replace these entries with actual data
 * (and get sign-off from the client before publishing any numbers).
 */
const caseStudies: CaseStudy[] = [
  {
    id: "saas-platform-rebuild",
    title: "SaaS Platform Rebuild",
    industry: "SaaS / Technology",
    service: "Web Development + SEO",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.35)",
    accentColor: "text-violet-400",
    challenge:
      "A SaaS company's platform had grown slow and outdated over several years, losing ground to faster, better-designed competitors, with organic search visibility declining steadily.",
    solution:
      "We rebuilt the platform in Next.js with server-side rendering and a PostgreSQL database, paired with a full technical SEO overhaul and a content strategy built around the product's core use cases.",
    outcomes: [
      { icon: TrendingUp, label: "Faster page loads" },
      { icon: Users, label: "Higher user engagement" },
      { icon: Globe2, label: "Improved search rankings" },
    ],
    duration: "4 months",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "SEO"],
  },
  {
    id: "healthcare-patient-app",
    title: "Cross-Platform Patient App",
    industry: "Healthcare",
    service: "Mobile App Development",
    gradient: "from-emerald-600/50 to-teal-600/40",
    glow: "rgba(34,197,94,0.35)",
    accentColor: "text-emerald-400",
    challenge:
      "A healthcare provider needed a secure patient app that worked well on both Android and iOS, without the cost of maintaining two separate native codebases.",
    solution:
      "We built a cross-platform React Native app with offline support, appointment booking, medication reminders, and telehealth video integration.",
    outcomes: [
      { icon: TrendingUp, label: "Strong adoption at launch" },
      { icon: Users, label: "High app store ratings" },
      { icon: Globe2, label: "Fewer support tickets" },
    ],
    duration: "5 months",
    tags: ["React Native", "Node.js", "MongoDB", "Telehealth"],
  },
  {
    id: "real-estate-lead-generation",
    title: "Property Listings Site & Lead Generation",
    industry: "Real Estate",
    service: "Website + Digital Marketing",
    gradient: "from-pink-600/50 to-rose-600/40",
    glow: "rgba(236,72,153,0.35)",
    accentColor: "text-pink-400",
    challenge:
      "A real estate business relied almost entirely on word of mouth, with an outdated website that generated very few leads online.",
    solution:
      "We built a premium Next.js property listing site with virtual tours and a mortgage calculator, then ran a targeted paid acquisition campaign across Google and Meta.",
    outcomes: [
      { icon: TrendingUp, label: "More qualified online leads" },
      { icon: Users, label: "Increased website traffic" },
      { icon: Globe2, label: "Better sales conversion rate" },
    ],
    duration: "3 months",
    tags: ["Next.js", "Sanity CMS", "Google Ads", "Meta Ads"],
  },
  {
    id: "ai-support-assistant",
    title: "AI-Powered Support Assistant",
    industry: "Customer Support / AI",
    service: "AI Solutions",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.35)",
    accentColor: "text-orange-400",
    challenge:
      "A support team was overwhelmed with repetitive tickets, leading to slow response times and declining customer satisfaction.",
    solution:
      "We built an AI-powered support assistant trained on product documentation that automatically handles common queries and escalates complex issues to human agents.",
    outcomes: [
      { icon: TrendingUp, label: "Faster response times" },
      { icon: Users, label: "Lower ticket volume" },
      { icon: Globe2, label: "Improved satisfaction scores" },
    ],
    duration: "6 weeks",
    tags: ["AI Integration", "Node.js", "MongoDB", "Anthropic API"],
  },
  {
    id: "manufacturing-3d-showcase",
    title: "Interactive 3D Product Showcase",
    industry: "Manufacturing",
    service: "3D Interactive Website",
    gradient: "from-blue-600/50 to-indigo-600/40",
    glow: "rgba(99,102,241,0.35)",
    accentColor: "text-blue-400",
    challenge:
      "A manufacturer sold complex industrial equipment that was difficult to explain through photos and text alone, leading to long sales cycles and confused prospects.",
    solution:
      "We built an immersive Three.js product showcase with interactive 3D models, a real-time configurator, and animated exploded diagrams of each product.",
    outcomes: [
      { icon: TrendingUp, label: "Longer time on site" },
      { icon: Users, label: "Shorter sales cycles" },
      { icon: Globe2, label: "More demo requests" },
    ],
    duration: "3 months",
    tags: ["Three.js", "WebGL", "React", "3D Modeling"],
  },
  {
    id: "ecommerce-seo-programme",
    title: "Organic Growth SEO Programme",
    industry: "E-commerce",
    service: "SEO Services",
    gradient: "from-cyan-600/50 to-blue-600/40",
    glow: "rgba(34,211,238,0.35)",
    accentColor: "text-cyan-400",
    challenge:
      "An online retailer was spending heavily on paid ads with almost no organic presence, and wanted a sustainable alternative to rising ad costs.",
    solution:
      "We ran a comprehensive SEO programme — technical audit and fixes, a content cluster strategy, and a high-authority link building campaign.",
    outcomes: [
      { icon: TrendingUp, label: "Sustained organic traffic growth" },
      { icon: Users, label: "Top rankings for priority keywords" },
      { icon: Globe2, label: "Reduced reliance on paid ads" },
    ],
    duration: "6 months",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    id: "b2b-inbound-marketing",
    title: "B2B Inbound Marketing System",
    industry: "B2B SaaS / Startups",
    service: "Digital Marketing",
    gradient: "from-fuchsia-600/50 to-purple-600/40",
    glow: "rgba(217,70,239,0.35)",
    accentColor: "text-fuchsia-400",
    challenge:
      "A B2B startup had a strong product but no marketing pipeline, with the sales team spending most of their time on cold outreach with low conversion.",
    solution:
      "We built a full inbound marketing system — content marketing, LinkedIn outreach, Google PPC, and an automated email nurture sequence.",
    outcomes: [
      { icon: TrendingUp, label: "More inbound leads" },
      { icon: Users, label: "Higher lead-to-close rate" },
      { icon: Globe2, label: "Stronger sales pipeline" },
    ],
    duration: "3 months",
    tags: ["Content Marketing", "LinkedIn Ads", "Google PPC", "Email Automation"],
  },
  {
    id: "fintech-rebrand",
    title: "Fintech Brand Overhaul",
    industry: "Fintech",
    service: "Branding + Web Development",
    gradient: "from-amber-600/50 to-yellow-600/40",
    glow: "rgba(234,179,8,0.35)",
    accentColor: "text-amber-400",
    challenge:
      "A fintech company was launching a new product, but its existing brand looked generic and struggled to inspire trust with enterprise clients.",
    solution:
      "We delivered a complete brand overhaul including logo, colour system, typography, brand voice guidelines, and a premium website redesign.",
    outcomes: [
      { icon: TrendingUp, label: "Stronger brand recognition" },
      { icon: Users, label: "More enterprise inquiries" },
      { icon: Globe2, label: "Higher investor engagement" },
    ],
    duration: "2 months",
    tags: ["Brand Identity", "UI Design", "Next.js", "Motion Design"],
  },
  {
    id: "b2b-headless-commerce",
    title: "Headless B2B Commerce Platform",
    industry: "E-commerce / Data Tools",
    service: "E-commerce Development",
    gradient: "from-teal-600/50 to-emerald-600/40",
    glow: "rgba(20,184,166,0.35)",
    accentColor: "text-teal-400",
    challenge:
      "A growing e-commerce brand had outgrown its off-the-shelf storefront. Custom pricing rules, bulk ordering, and B2B account management were impossible to implement.",
    solution:
      "We built a fully custom headless e-commerce platform with Next.js and Stripe, including a custom admin dashboard for managing B2B pricing tiers.",
    outcomes: [
      { icon: TrendingUp, label: "Increased online revenue" },
      { icon: Users, label: "Higher average order value" },
      { icon: Globe2, label: "Reliable uptime at scale" },
    ],
    duration: "4 months",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Custom CMS"],
  },
  {
    id: "shared-codebase-launch",
    title: "Shared-Codebase Web + Mobile Launch",
    industry: "Productivity / SaaS",
    service: "Mobile App + SaaS Platform",
    gradient: "from-indigo-600/50 to-violet-600/40",
    glow: "rgba(99,102,241,0.35)",
    accentColor: "text-indigo-400",
    challenge:
      "An early-stage startup needed both a web dashboard and a mobile companion app, but its budget didn't allow for two separate teams or a long timeline.",
    solution:
      "We built a shared API backend in Node.js, a Next.js web dashboard, and a React Native mobile app, all built on the same architecture to keep development lean.",
    outcomes: [
      { icon: TrendingUp, label: "Faster time to market" },
      { icon: Users, label: "Strong early user signups" },
      { icon: Globe2, label: "Positive early reception" },
    ],
    duration: "5 months",
    tags: ["Next.js", "React Native", "Node.js", "Shared API"],
  },
];

const typewriterWords = ["Approach", "Process", "Craft", "Thinking", "Method"];

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/3 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4" style={{ animationDelay: "5s" }} />

      <section className="section pt-36 pb-6 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> Case Studies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Our project{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            A look at how we approach different types of projects — the
            challenges we solve for and the way we think through each build.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 pb-4 relative">
        <div className="container-px mx-auto max-w-6xl">
          <div className="glass rounded-2xl p-5 flex items-start gap-3">
            <Info size={16} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              The examples below are illustrative composites based on the
              type of work we do — they represent our process and approach,
              not verified results from a named client. Real, client-approved
              case studies with permission to publish will replace these as
              they become available.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-6xl flex flex-col gap-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-3xl overflow-hidden relative"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 30px 80px ${cs.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${cs.gradient}`} />

              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 border border-white/15 text-white/70 px-2.5 py-1 rounded-full">
                        Illustrative Example
                      </span>
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold bg-white/5 border border-border text-muted px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                      {cs.title}
                    </h2>
                    <p className={`text-sm font-semibold ${cs.accentColor}`}>
                      {cs.industry} &middot; {cs.service} &middot; {cs.duration}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {cs.outcomes.map((o) => {
                      const Icon = o.icon;
                      return (
                        <div
                          key={o.label}
                          className="glass-strong rounded-xl px-4 py-3 text-center min-w-[110px] max-w-[140px]"
                        >
                          <Icon size={16} className={`${cs.accentColor} mx-auto mb-1.5`} />
                          <p className="text-[11px] text-white leading-snug">{o.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                      The Challenge
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                      Our Solution
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-px mx-auto max-w-4xl mt-16"
        >
          <div className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Ready to become our next{" "}
                <span className="text-gradient">success story?</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                Tell us about your project and we will show you exactly how
                we would approach it, with a clear plan and realistic timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Project
                  <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="btn-outline">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}