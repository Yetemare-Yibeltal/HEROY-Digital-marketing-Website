"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

export interface BlogPostSummary {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string | null;
  gradient: string;
  glow: string;
}

const typewriterWords = ["Strategy", "Tactics", "Playbooks", "Insights"];

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPageClient({ posts }: { posts: BlogPostSummary[] }) {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return ["All", ...unique];
  }, [posts]);

  const featured = posts[0];
  const rest = posts.slice(1);

  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active);

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

          {posts.length === 0 ? (
            <div className="glass rounded-2xl p-16 text-center">
              <p className="text-muted">
                No posts published yet — check back soon.
              </p>
            </div>
          ) : (
            <>
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
                        <span className="badge">Latest</span>
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

              {rest.length > 0 && (
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
              )}

              <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((post, i) => (
                    <motion.div
                      key={post._id}
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
                            <span>{formatDate(post.publishedAt)}</span>
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}