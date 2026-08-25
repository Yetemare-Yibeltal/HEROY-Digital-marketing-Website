"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Globe2, Sparkles } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const caseStudies = [
  {
    id: "nexora-saas",
    client: "Nexora Tech",
    industry: "SaaS / Technology",
    service: "Web Development + SEO",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.35)",
    accentColor: "text-violet-400",
    challenge:
      "Nexora had a slow, outdated platform losing customers to faster, better-designed competitors. Their organic traffic had dropped 40% in 12 months.",
    solution:
      "We rebuilt the entire platform in Next.js with server-side rendering, a PostgreSQL database, and a full technical SEO overhaul including content strategy.",
    results: [
      { icon: TrendingUp, metric: "+180%", label: "Revenue Growth" },
      { icon: Users, metric: "+250%", label: "Monthly Active Users" },
      { icon: Globe2, metric: "Top 3", label: "Google Rankings" },
    ],
    duration: "4 months",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "SEO"],
  },
  {
    id: "pulse-health",
    client: "Pulse Health",
    industry: "Healthcare",
    service: "Mobile App Development",
    gradient: "from-emerald-600/50 to-teal-600/40",
    glow: "rgba(34,197,94,0.35)",
    accentColor: "text-emerald-400",
    challenge:
      "Pulse needed a secure, HIPAA-aware patient app that worked on both Android and iOS without the cost of building two separate native apps.",
    solution:
      "We built a cross-platform React Native app with offline support, appointment booking, medication reminders, and telehealth video integration.",
    results: [
      { icon: TrendingUp, metric: "+300%", label: "Active Users" },
      { icon: Users, metric: "4.8/5", label: "App Store Rating" },
      { icon: Globe2, metric: "60%", label: "Reduced Support Tickets" },
    ],
    duration: "5 months",
    tags: ["React Native", "Node.js", "MongoDB", "Telehealth"],
  },
  {
    id: "skyline-real-estate",
    client: "Skyline Real Estate",
    industry: "Real Estate",
    service: "Website + Digital Marketing",
    gradient: "from-pink-600/50 to-rose-600/40",
    glow: "rgba(236,72,153,0.35)",
    accentColor: "text-pink-400",
    challenge:
      "Skyline's old website was generating almost no leads online. They relied entirely on word of mouth and wanted to change that.",
    solution:
      "We built a premium Next.js property listing site with virtual tours and mortgage calculators, then ran a targeted paid acquisition campaign across Google and Meta.",
    results: [
      { icon: TrendingUp, metric: "+220%", label: "Online Leads" },
      { icon: Users, metric: "+180%", label: "Website Traffic" },
      { icon: Globe2, metric: "3x", label: "Sales Conversion Rate" },
    ],
    duration: "3 months",
    tags: ["Next.js", "Sanity CMS", "Google Ads", "Meta Ads"],
  },
  {
    id: "cresta-ai",
    client: "Cresta",
    industry: "Customer Support / AI",
    service: "AI Solutions",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.35)",
    accentColor: "text-orange-400",
    challenge:
      "Cresta's support team was overwhelmed with repetitive tickets. Response times averaged 8 hours and customer satisfaction scores were falling.",
    solution:
      "We built an AI-powered support assistant trained on their product documentation that automatically handles common queries and escalates complex issues.",
    results: [
      { icon: TrendingUp, metric: "+250%", label: "Support Efficiency" },
      { icon: Users, metric: "2 hours", label: "Avg Response Time" },
      { icon: Globe2, metric: "+40%", label: "CSAT Score" },
    ],
    duration: "6 weeks",
    tags: ["AI Integration", "Node.js", "MongoDB", "OpenAI API"],
  },
  {
    id: "northwind-3d",
    client: "Northwind Industries",
    industry: "Manufacturing",
    service: "3D Interactive Website",
    gradient: "from-blue-600/50 to-indigo-600/40",
    glow: "rgba(99,102,241,0.35)",
    accentColor: "text-blue-400",
    challenge:
      "Northwind sold complex industrial equipment that was hard to explain through photos and text alone, leading to long sales cycles and confused prospects.",
    solution:
      "We built an immersive Three.js product showcase with interactive 3D models, a real-time configurator, and animated exploded diagrams of each product.",
    results: [
      { icon: TrendingUp, metric: "+400%", label: "Time on Site" },
      { icon: Users, metric: "35%", label: "Shorter Sales Cycles" },
      { icon: Globe2, metric: "+190%", label: "Demo Requests" },
    ],
    duration: "3 months",
    tags: ["Three.js", "WebGL", "React", "3D Modeling"],
  },
  {
    id: "bluepeak-seo",
    client: "Bluepeak Retail",
    industry: "E-commerce",
    service: "SEO Services",
    gradient: "from-cyan-600/50 to-blue-600/40",
    glow: "rgba(34,211,238,0.35)",
    accentColor: "text-cyan-400",
    challenge:
      "Bluepeak was spending heavily on paid ads with no organic presence. They wanted to reduce paid spend by building sustainable organic traffic.",
    solution:
      "We ran a comprehensive 6-month SEO programme — technical audit and fixes, content cluster strategy, and a high-authority link building campaign.",
    results: [
      { icon: TrendingUp, metric: "+300%", label: "Organic Traffic" },
      { icon: Users, metric: "Top 1", label: "Rankings for 12 Keywords" },
      { icon: Globe2, metric: "-60%", label: "Paid Ad Spend" },
    ],
    duration: "6 months",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    id: "vertex-marketing",
    client: "Vertex Labs",
    industry: "B2B SaaS / Startups",
    service: "Digital Marketing",
    gradient: "from-fuchsia-600/50 to-purple-600/40",
    glow: "rgba(217,70,239,0.35)",
    accentColor: "text-fuchsia-400",
    challenge:
      "Vertex had a great product but no marketing pipeline. Their sales team was spending all their time on cold outreach with poor conversion rates.",
    solution:
      "We built a full inbound marketing system — content marketing, LinkedIn outreach, Google PPC, and an automated email nurture sequence.",
    results: [
      { icon: TrendingUp, metric: "+500%", label: "Inbound Leads" },
      { icon: Users, metric: "12%", label: "Lead to Close Rate" },
      { icon: Globe2, metric: "4x", label: "Pipeline Value" },
    ],
    duration: "3 months",
    tags: ["Content Marketing", "LinkedIn Ads", "Google PPC", "Email Automation"],
  },
  {
    id: "meridian-brand",
    client: "Meridian Finance",
    industry: "Fintech",
    service: "Branding + Web Development",
    gradient: "from-amber-600/50 to-yellow-600/40",
    glow: "rgba(234,179,8,0.35)",
    accentColor: "text-amber-400",
    challenge:
      "Meridian was launching a new fintech product but their brand looked generic and failed to inspire trust from their target enterprise clients.",
    solution:
      "We delivered a complete brand overhaul including logo, colour system, typography, brand voice guidelines, and a premium website redesign.",
    results: [
      { icon: TrendingUp, metric: "+150%", label: "Brand Recognition" },
      { icon: Users, metric: "+80%", label: "Enterprise Inquiries" },
      { icon: Globe2, metric: "2x", label: "Investor Meeting Rate" },
    ],
    duration: "2 months",
    tags: ["Brand Identity", "UI Design", "Next.js", "Motion Design"],
  },
  {
    id: "dataforge-ecommerce",
    client: "Dataforge",
    industry: "E-commerce / Data Tools",
    service: "E-commerce Development",
    gradient: "from-teal-600/50 to-emerald-600/40",
    glow: "rgba(20,184,166,0.35)",
    accentColor: "text-teal-400",
    challenge:
      "Dataforge's Shopify store was hitting its limits. Custom pricing rules, bulk ordering, and B2B account management were impossible to implement.",
    solution:
      "We built a fully custom headless e-commerce platform with Next.js, Stripe, and a custom admin dashboard for managing B2B pricing tiers.",
    results: [
      { icon: TrendingUp, metric: "+220%", label: "Online Revenue" },
      { icon: Users, metric: "+45%", label: "Average Order Value" },
      { icon: Globe2, metric: "99.9%", label: "Uptime" },
    ],
    duration: "4 months",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Custom CMS"],
  },
  {
    id: "orbitly-mobile",
    client: "Orbitly",
    industry: "Productivity / SaaS",
    service: "Mobile App + SaaS Platform",
    gradient: "from-indigo-600/50 to-violet-600/40",
    glow: "rgba(99,102,241,0.35)",
    accentColor: "text-indigo-400",
    challenge:
      "Orbitly needed both a web dashboard and a mobile companion app, but their budget didn't allow two separate teams or a long development timeline.",
    solution:
      "We built a shared API backend in Node.js, a Next.js web dashboard, and a React Native mobile app, all sharing the same codebase architecture.",
    results: [
      { icon: TrendingUp, metric: "50%", label: "Faster Time to Market" },
      { icon: Users, metric: "+400%", label: "User Signups in Month 1" },
      { icon: Globe2, metric: "4.9/5", label: "Product Hunt Rating" },
    ],
    duration: "5 months",
    tags: ["Next.js", "React Native", "Node.js", "Shared API"],
  },
];

const typewriterWords = ["Results", "Revenue", "Growth", "Impact", "Success"];

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/3 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4" style={{ animationDelay: "5s" }} />

      <section className="section pt-36 pb-10 relative">
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
            Real projects, real{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            A deep dive into how we solve complex problems and deliver
            measurable outcomes for our clients across industries.
          </motion.p>
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
                      {cs.client}
                    </h2>
                    <p className={`text-sm font-semibold ${cs.accentColor}`}>
                      {cs.industry} &middot; {cs.service} &middot; {cs.duration}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {cs.results.map((r) => {
                      const Icon = r.icon;
                      return (
                        <div
                          key={r.label}
                          className="glass-strong rounded-xl px-4 py-3 text-center min-w-[90px]"
                        >
                          <Icon size={14} className={`${cs.accentColor} mx-auto mb-1`} />
                          <p className="font-display font-bold text-lg text-white leading-none">
                            {r.metric}
                          </p>
                          <p className="text-[10px] text-muted mt-1">{r.label}</p>
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