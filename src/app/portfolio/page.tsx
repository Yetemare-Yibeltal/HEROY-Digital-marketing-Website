"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface Project {
  slug: string;
  name: string;
  category: string;
  industry: string;
  tags: string[];
  result: string;
  description: string;
  gradient: string;
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

const projects: Project[] = [
  {
    slug: "nexora-saas-dashboard",
    name: "Nexora SaaS Dashboard",
    category: "SaaS Platforms",
    industry: "Technology",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    result: "+180% Revenue Growth",
    description: "A multi-tenant analytics dashboard with subscription billing and real-time charts.",
    gradient: "from-violet-600/60 to-cyan-600/40",
  },
  {
    slug: "pulse-health-app",
    name: "Pulse Health App",
    category: "Mobile Apps",
    industry: "Healthcare",
    tags: ["React Native", "Node.js"],
    result: "+300% Active Users",
    description: "Patient engagement app with appointment booking and telehealth consultations.",
    gradient: "from-emerald-600/60 to-teal-600/40",
  },
  {
    slug: "skyline-real-estate",
    name: "Skyline Real Estate",
    category: "Websites",
    industry: "Real Estate",
    tags: ["Next.js", "Sanity CMS"],
    result: "+220% Lead Conversion",
    description: "Premium property listing platform with virtual tours and mortgage calculators.",
    gradient: "from-pink-600/60 to-rose-600/40",
  },
  {
    slug: "cresta-ai-assistant",
    name: "Cresta AI Assistant",
    category: "AI Products",
    industry: "Technology",
    tags: ["AI", "Node.js", "MongoDB"],
    result: "+250% Support Efficiency",
    description: "AI-powered customer support that automates ticket triage and resolves common queries.",
    gradient: "from-orange-600/60 to-amber-600/40",
  },
  {
    slug: "northwind-3d-showcase",
    name: "Northwind 3D Showcase",
    category: "3D Websites",
    industry: "Manufacturing",
    tags: ["Three.js", "WebGL", "React"],
    result: "+400% Time on Site",
    description: "Immersive 3D product configurator letting customers customize industrial equipment.",
    gradient: "from-blue-600/60 to-indigo-600/40",
  },
  {
    slug: "bluepeak-seo-campaign",
    name: "Bluepeak SEO Campaign",
    category: "SEO Projects",
    industry: "E-commerce",
    tags: ["Technical SEO", "Content Strategy"],
    result: "+300% Organic Traffic",
    description: "A 6-month technical SEO and content overhaul taking Bluepeak to top-3 rankings.",
    gradient: "from-cyan-600/60 to-blue-600/40",
  },
  {
    slug: "meridian-brand-identity",
    name: "Meridian Brand Identity",
    category: "Branding",
    industry: "Finance",
    tags: ["Brand Strategy", "Visual Identity"],
    result: "+150% Brand Recall",
    description: "Full rebrand for a fintech startup — logo, colour system, and brand guidelines.",
    gradient: "from-amber-600/60 to-yellow-600/40",
  },
  {
    slug: "vertex-growth-campaign",
    name: "Vertex Growth Campaign",
    category: "Digital Marketing",
    industry: "Startups",
    tags: ["Paid Ads", "Email Marketing"],
    result: "+500% Leads",
    description: "Full-funnel paid acquisition campaign that scaled Vertex's lead pipeline 5x.",
    gradient: "from-fuchsia-600/60 to-purple-600/40",
  },
  {
    slug: "dataforge-ecommerce",
    name: "Dataforge E-commerce",
    category: "Websites",
    industry: "E-commerce",
    tags: ["Next.js", "Stripe"],
    result: "+220% Online Sales",
    description: "Headless e-commerce storefront with custom checkout and inventory sync.",
    gradient: "from-teal-600/60 to-emerald-600/40",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section pt-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge mb-4">Our Work</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            Projects that <span className="text-gradient">deliver results</span>
          </h1>
          <p className="text-muted leading-relaxed">
            Websites, apps, brands, and platforms we have built across
            industries, each engineered for measurable outcomes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
                active === cat
                  ? "bg-grad-primary text-background border-transparent"
                  : "border-border text-muted hover:text-white hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] glass cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/30 to-transparent">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-accent mb-1">
                    {project.category} &middot; {project.industry}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold bg-white/10 text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-accent-gold flex items-center gap-1">
                      <TrendingUp size={12} />
                      {project.result}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-grad-primary flex items-center justify-center text-background opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight size={16} />
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