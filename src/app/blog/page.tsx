"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
  glow: string;
  featured: boolean;
}

const categories = [
  "All",
  "Digital Marketing",
  "SEO",
  "Web Development",
  "Mobile Apps",
  "AI & Technology",
  "Branding & Design",
  "Business Growth",
];

const posts: Post[] = [
  {
    slug: "how-to-grow-organic-traffic-2026",
    title: "How to Grow Organic Traffic in 2026: A Complete SEO Playbook",
    excerpt: "Everything you need to rank higher and drive sustainable organic growth — from technical audits to content clusters and authority building.",
    category: "SEO",
    readTime: "12 min read",
    date: "June 15, 2026",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.3)",
    featured: true,
  },
  {
    slug: "nextjs-15-for-agencies",
    title: "Why We Build Every Client Site on Next.js 15",
    excerpt: "Performance, SEO, and developer experience — a behind-the-scenes look at why Next.js is our framework of choice for every project.",
    category: "Web Development",
    readTime: "8 min read",
    date: "June 10, 2026",
    gradient: "from-cyan-600/50 to-blue-600/40",
    glow: "rgba(34,211,238,0.3)",
    featured: false,
  },
  {
    slug: "ai-chatbot-customer-support",
    title: "How AI Chatbots Are Transforming Customer Support in 2026",
    excerpt: "From cutting response times by 80% to improving CSAT scores — here is what we have learned building AI support systems for real clients.",
    category: "AI & Technology",
    readTime: "10 min read",
    date: "June 5, 2026",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.3)",
    featured: false,
  },
  {
    slug: "brand-identity-guide-2026",
    title: "The Complete Brand Identity Guide for Startups in 2026",
    excerpt: "Logo, colour system, typography, and tone of voice — everything a startup needs to build a brand that attracts investment and customers.",
    category: "Branding & Design",
    readTime: "14 min read",
    date: "May 28, 2026",
    gradient: "from-amber-600/50 to-yellow-600/40",
    glow: "rgba(234,179,8,0.3)",
    featured: false,
  },
  {
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: Which Should You Choose?",
    excerpt: "A practical comparison from a team that has shipped apps in both frameworks — performance, developer experience, and when to use each.",
    category: "Mobile Apps",
    readTime: "9 min read",
    date: "May 20, 2026",
    gradient: "from-green-600/50 to-emerald-600/40",
    glow: "rgba(34,197,94,0.3)",
    featured: false,
  },
  {
    slug: "digital-marketing-strategy-b2b",
    title: "The B2B Digital Marketing Strategy That Generated 500% More Leads",
    excerpt: "A step-by-step breakdown of the exact inbound marketing system we used to scale one of our client's pipelines from 20 leads a month to over 100.",
    category: "Digital Marketing",
    readTime: "11 min read",
    date: "May 15, 2026",
    gradient: "from-fuchsia-600/50 to-purple-600/40",
    glow: "rgba(217,70,239,0.3)",
    featured: false,
  },
  {
    slug: "ecommerce-conversion-rate-optimization",
    title: "10 Conversion Rate Optimizations That Increased Sales by 220%",
    excerpt: "The exact CRO tactics we applied to a client's e-commerce store that took their conversion rate from 1.2% to 3.8% in 90 days.",
    category: "Business Growth",
    readTime: "10 min read",
    date: "May 8, 2026",
    gradient: "from-teal-600/50 to-cyan-600/40",
    glow: "rgba(20,184,166,0.3)",
    featured: false,
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "The 50-Point Technical SEO Audit Checklist We Use for Every Client",
    excerpt: "Every technical check our team runs before starting any SEO engagement — crawlability, Core Web Vitals, schema, internal linking, and more.",
    category: "SEO",
    readTime: "15 min read",
    date: "April 30, 2026",
    gradient: "from-blue-600/50 to-indigo-600/40",
    glow: "rgba(99,102,241,0.3)",
    featured: false,
  },
  {
    slug: "ui-design-trends-2026",
    title: "UI Design Trends Dominating 2026: Glassmorphism, 3D, and Beyond",
    excerpt: "A design team breakdown of the aesthetic and interaction patterns defining the most impressive digital products this year.",
    category: "Branding & Design",
    readTime: "7 min read",
    date: "April 22, 2026",
    gradient: "from-pink-600/50 to-rose-600/40",
    glow: "rgba(236,72,153,0.3)",
    featured: false,
  },
  {
    slug: "building-saas-mvp-guide",
    title: "How to Build a SaaS MVP in 8 Weeks Without Burning Your Budget",
    excerpt: "The architecture decisions, technology choices, and product shortcuts that help early-stage SaaS products ship faster without technical debt.",
    category: "Web Development",
    readTime: "13 min read",
    date: "April 15, 2026",
    gradient: "from-indigo-600/50 to-violet-600/40",
    glow: "rgba(99,102,241,0.3)",
    featured: false,
  },
  {
    slug: "local-seo-for-small-business",
    title: "Local SEO in 2026: How Small Businesses Can Dominate Their Market",
    excerpt: "Google Business Profile, local citations, review strategy, and map pack optimisation — the complete local SEO playbook for small businesses.",
    category: "SEO",
    readTime: "9 min read",
    date: "April 8, 2026",
    gradient: "from-emerald-600/50 to-teal-600/40",
    glow: "rgba(16,185,129,0.3)",
    featured: false,
  },
  {
    slug: "video-marketing-strategy-2026",
    title: "Why Video Is the Highest-ROI Marketing Channel in 2026",
    excerpt: "Data, case studies, and a practical strategy for brands that want to use short-form and long-form video to drive measurable business results.",
    category: "Digital Marketing",
    readTime: "8 min read",
    date: "April 1, 2026",
    gradient: "from-red-600/50 to-orange-600/40",
    glow: "rgba(239,68,68,0.3)",
    featured: false,
  },
];

const typewriterWords = ["Insights", "Strategies", "Tutorials", "Case Studies", "Guides"];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const featured = posts.find((p) => p.featured);
  const filtered = active === "All"
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === active && !p.featured);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> HEROY Blog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Digital growth{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            Practical marketing, development, and design content written
            by the HEROY team — no fluff, just what actually works.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">

          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative rounded-3xl overflow-hidden block"
                style={{ minHeight: "340px" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} transition-transform duration-700 group-hover:scale-105`} />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${featured.glow}, transparent 70%)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge">Featured</span>
                    <span className="text-xs text-muted">{featured.category}</span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-muted max-w-2xl text-sm leading-relaxed mb-4">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Read Article <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
                  active === cat
                    ? "bg-grad-primary text-background border-transparent"
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
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="group glass rounded-2xl overflow-hidden cursor-pointer"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${post.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${post.glow}, transparent 70%)` }}
                      />
                      <div className="absolute inset-0 flex items-end p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide bg-white/10 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-base text-white mb-2 leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                        Read More <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted py-16">
              No posts in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}