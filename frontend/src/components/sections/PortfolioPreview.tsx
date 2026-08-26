"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

/**
 * These mirror the concept projects on the full /portfolio page — kept in
 * sync intentionally so a visitor sees the same story whether they land
 * on the homepage or the portfolio page. They are illustrative concept
 * projects, not named client work or verified performance numbers.
 * Replace with real, client-approved portfolio pieces as they become
 * available (see the note on /portfolio for the same disclosure).
 */
const projects = [
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    category: "SaaS Platform",
    industry: "Technology",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    highlight: "Multi-tenant billing & real-time charts",
    description: "A multi-tenant analytics dashboard with subscription billing and real-time charts.",
    gradient: "from-violet-600/50 to-cyan-600/40",
    accentColor: "rgba(124,92,255,0.4)",
    wide: true,
    tall: false,
  },
  {
    slug: "patient-engagement-app",
    name: "Patient Engagement App",
    category: "Mobile App",
    industry: "Healthcare",
    tags: ["React Native", "Node.js"],
    highlight: "Telehealth & medication tracking",
    description: "Patient engagement app with telehealth and medication tracking.",
    gradient: "from-emerald-600/50 to-teal-600/40",
    accentColor: "rgba(34,197,94,0.4)",
    wide: false,
    tall: true,
  },
  {
    slug: "property-listings-platform",
    name: "Property Listings Platform",
    category: "Website",
    industry: "Real Estate",
    tags: ["Next.js", "Sanity CMS"],
    highlight: "Virtual tours built in",
    description: "Premium property listing platform with virtual tours.",
    gradient: "from-pink-600/50 to-rose-600/40",
    accentColor: "rgba(236,72,153,0.4)",
    wide: false,
    tall: false,
  },
  {
    slug: "ai-support-assistant",
    name: "AI Support Assistant",
    category: "AI Product",
    industry: "Technology",
    tags: ["AI", "Node.js", "MongoDB"],
    highlight: "Instant query resolution",
    description: "AI-powered customer support that resolves queries instantly.",
    gradient: "from-orange-600/50 to-amber-600/40",
    accentColor: "rgba(249,115,22,0.4)",
    wide: false,
    tall: false,
  },
  {
    slug: "industrial-3d-configurator",
    name: "Industrial 3D Configurator",
    category: "3D Website",
    industry: "Manufacturing",
    tags: ["Three.js", "WebGL", "React"],
    highlight: "Real-time product customization",
    description: "Immersive 3D product configurator for industrial equipment.",
    gradient: "from-blue-600/50 to-indigo-600/40",
    accentColor: "rgba(99,102,241,0.4)",
    wide: true,
    tall: false,
  },
  {
    slug: "startup-growth-campaign",
    name: "Startup Growth Campaign",
    category: "Digital Marketing",
    industry: "Startups",
    tags: ["SEO", "Paid Ads", "Analytics"],
    highlight: "Full-funnel lead generation",
    description: "Full-funnel campaign built to scale a startup's lead pipeline.",
    gradient: "from-yellow-600/50 to-orange-600/40",
    accentColor: "rgba(234,179,8,0.4)",
    wide: false,
    tall: true,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-72 h-72 bg-accent/10 top-20 left-0" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Our Work</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              The kind of work{" "}
              <span className="text-gradient">we build</span>
            </h2>
            <p className="text-muted mt-3 max-w-lg">
              A selection of websites, apps, brands, and platforms
              representing the type of projects we build across industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/portfolio" className="btn-outline shrink-0">
              View Full Portfolio
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-[11px] text-muted/70">
            Illustrative concept projects — not named client work. See our{" "}
            <Link href="/portfolio" className="underline hover:text-accent">
              portfolio page
            </Link>{" "}
            for more detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${project.wide ? "sm:col-span-2" : ""} ${
                project.tall ? "row-span-2" : ""
              }`}
            >
              <Link
                href="/portfolio"
                className="group relative rounded-2xl overflow-hidden block"
                style={{
                  aspectRatio: project.wide ? "16/7" : project.tall ? "3/4" : "4/3",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full border border-white/10">
                    Concept Project
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between pt-7">
                    <div className="flex gap-2 flex-wrap">
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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {project.category}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[10px] text-muted">
                        {project.industry}
                      </span>
                    </div>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}