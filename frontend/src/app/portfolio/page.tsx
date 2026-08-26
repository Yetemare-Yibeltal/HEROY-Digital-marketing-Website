"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Info } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface Project {
  slug: string;
  name: string;
  category: string;
  industry: string;
  tags: string[];
  highlight: string;
  description: string;
  gradient: string;
  glow: string;
  wide: boolean;
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

/**
 * These are illustrative concept projects representing the type of work
 * HEROY builds — not named client work or verified performance numbers.
 * Replace with real, client-approved portfolio pieces (with permission
 * to publish) as they become available.
 */
const projects: Project[] = [
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    category: "SaaS Platforms",
    industry: "Technology",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    highlight: "Multi-tenant billing & real-time charts",
    description: "A multi-tenant analytics dashboard with subscription billing and real-time charts.",
    gradient: "from-violet-600/60 to-cyan-600/40",
    glow: "rgba(124,92,255,0.4)",
    wide: true,
  },
  {
    slug: "patient-engagement-app",
    name: "Patient Engagement App",
    category: "Mobile Apps",
    industry: "Healthcare",
    tags: ["React Native", "Node.js"],
    highlight: "Cross-platform, telehealth-ready",
    description: "Patient engagement app with appointment booking and telehealth consultations.",
    gradient: "from-emerald-600/60 to-teal-600/40",
    glow: "rgba(34,197,94,0.4)",
    wide: false,
  },
  {
    slug: "property-listings-platform",
    name: "Property Listings Platform",
    category: "Websites",
    industry: "Real Estate",
    tags: ["Next.js", "Sanity CMS"],
    highlight: "Virtual tours & mortgage calculator",
    description: "Premium property listing platform with virtual tours and mortgage calculators.",
    gradient: "from-pink-600/60 to-rose-600/40",
    glow: "rgba(236,72,153,0.4)",
    wide: false,
  },
  {
    slug: "ai-support-assistant",
    name: "AI Support Assistant",
    category: "AI Products",
    industry: "Technology",
    tags: ["AI", "Node.js", "MongoDB"],
    highlight: "Automated ticket triage",
    description: "AI-powered customer support that automates ticket triage and resolves common queries.",
    gradient: "from-orange-600/60 to-amber-600/40",
    glow: "rgba(249,115,22,0.4)",
    wide: false,
  },
  {
    slug: "industrial-3d-configurator",
    name: "Industrial 3D Configurator",
    category: "3D Websites",
    industry: "Manufacturing",
    tags: ["Three.js", "WebGL", "React"],
    highlight: "Real-time product customization",
    description: "Immersive 3D product configurator letting customers customize industrial equipment.",
    gradient: "from-blue-600/60 to-indigo-600/40",
    glow: "rgba(99,102,241,0.4)",
    wide: true,
  },
  {
    slug: "ecommerce-seo-overhaul",
    name: "E-commerce SEO Overhaul",
    category: "SEO Projects",
    industry: "E-commerce",
    tags: ["Technical SEO", "Content Strategy"],
    highlight: "6-month technical & content programme",
    description: "A technical SEO and content overhaul built to move an online store toward top rankings.",
    gradient: "from-cyan-600/60 to-blue-600/40",
    glow: "rgba(34,211,238,0.4)",
    wide: false,
  },
  {
    slug: "fintech-brand-identity",
    name: "Fintech Brand Identity",
    category: "Branding",
    industry: "Finance",
    tags: ["Brand Strategy", "Visual Identity"],
    highlight: "Full identity system from scratch",
    description: "Full rebrand for a fintech startup — logo, colour system, and brand guidelines.",
    gradient: "from-amber-600/60 to-yellow-600/40",
    glow: "rgba(234,179,8,0.4)",
    wide: false,
  },
  {
    slug: "startup-growth-campaign",
    name: "Startup Growth Campaign",
    category: "Digital Marketing",
    industry: "Startups",
    tags: ["Paid Ads", "Email Marketing"],
    highlight: "Full-funnel paid acquisition",
    description: "Full-funnel paid acquisition campaign built to scale a startup's lead pipeline.",
    gradient: "from-fuchsia-600/60 to-purple-600/40",
    glow: "rgba(217,70,239,0.4)",
    wide: false,
  },
  {
    slug: "headless-ecommerce-storefront",
    name: "Headless E-commerce Storefront",
    category: "Websites",
    industry: "E-commerce",
    tags: ["Next.js", "Stripe"],
    highlight: "Custom checkout & inventory sync",
    description: "Headless e-commerce storefront with custom checkout and inventory sync.",
    gradient: "from-teal-600/60 to-emerald-600/40",
    glow: "rgba(20,184,166,0.4)",
    wide: false,
  },
];

const typewriterWords = ["Craft", "Build", "Design", "Ship", "Create"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section pt-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -right-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 left-1/3" style={{ animationDelay: "5s" }} />

      <div className="container-px mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="badge mb-4">
            <Sparkles size={14} /> Our Work
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            The kind of work we{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </h1>
          <p className="text-muted leading-relaxed">
            Websites, apps, brands, and platforms representing the type of
            projects we build across industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="glass rounded-2xl p-4 flex items-start gap-3">
            <Info size={15} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              These are illustrative concept projects representing our
              capabilities, not named client work. Real portfolio pieces
              will replace these once we have client permission to publish.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? "bg-grad-primary text-background border-transparent shadow-lg"
                  : "border-border text-muted hover:text-white hover:border-primary/40"
              }`}
              style={
                active === cat
                  ? { boxShadow: "0 8px 24px rgba(124,92,255,0.4)" }
                  : undefined
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  project.wide ? "sm:col-span-2" : ""
                }`}
                style={{
                  aspectRatio: project.wide ? "16/8" : "4/3",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 25px 60px ${project.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${project.glow}, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full border border-white/10">
                    Concept Project
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between pt-7">
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold bg-white/10 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-grad-primary flex items-center justify-center text-background opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                      {project.category} &middot; {project.industry}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-accent-gold" />
                      <span className="text-xs font-bold text-accent-gold">
                        {project.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-16">
            No projects in this category yet, check back soon.
          </p>
        )}
      </div>
    </section>
  );
}