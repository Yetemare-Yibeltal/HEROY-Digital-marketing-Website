"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { postsData, relatedPostsMap } from "./postsData";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="section pt-36 text-center">
        <div className="container-px mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 sm:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-border">
              <BookOpen size={24} className="text-accent" />
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Post not found
            </h1>

            <p className="text-muted mb-7 max-w-xl mx-auto leading-relaxed">
              This article does not exist or may have been moved. Explore the
              latest insights from the HEROY editorial collection instead.
            </p>

            <Link href="/blog" className="btn-primary">
              Back to Blog
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = relatedPostsMap[slug] ?? [];

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-64 h-64 bg-accent/10 bottom-0 -left-20"
        style={{ animationDelay: "4s" }}
      />

      <section className="section pt-32 sm:pt-36 pb-12 relative">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white mb-9 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6">
                <span className="badge mb-5 inline-flex items-center gap-2">
                  <Sparkles size={12} />
                  {post.category}
                </span>

                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-white mb-6">
                  {post.title}
                </h1>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted pb-7 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readTime}
                </span>

                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {post.date}
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {post.author}
                </span>

                <span className="glass px-3 py-1.5 rounded-full">
                  {post.authorRole}
                </span>
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="glass rounded-2xl p-5 sticky top-28">
                <div className="flex items-center gap-2 text-white font-display font-semibold text-sm mb-4">
                  <BookOpen size={15} className="text-accent" />
                  Article overview
                </div>

                <div className="space-y-3 text-xs text-muted">
                  <div className="flex items-center justify-between gap-4">
                    <span>Category</span>
                    <span className="text-white text-right">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Reading time</span>
                    <span className="text-white text-right">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Published</span>
                    <span className="text-white text-right">{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="section pt-0 pb-16 relative">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className={`relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[420px] mb-12 bg-gradient-to-br ${post.gradient}`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${post.glow}, transparent 70%)`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white">
                <CheckCircle2 size={13} className="text-accent" />
                HEROY Editorial Insight
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(0,760px)_220px] gap-12 xl:gap-16 justify-center">
            <main>
              <div className="mb-8 rounded-2xl border border-border bg-white/[0.025] px-5 py-4 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Sparkles size={15} className="text-accent" />
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    This article is part of the HEROY editorial collection,
                    covering practical ideas across digital strategy,
                    technology, design, marketing, SEO, and product
                    development.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                {post.content.map((section, i) => (
                  <motion.section
                    key={section.heading}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.04, 0.2),
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="hidden sm:flex shrink-0 mt-1 h-8 w-8 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-[11px] font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h2 className="font-display font-semibold text-xl sm:text-2xl text-white leading-tight mb-4">
                          {section.heading}
                        </h2>

                        <p className="text-muted leading-8 text-sm sm:text-base">
                          {section.body}
                        </p>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 mt-14 pt-8 border-t border-border"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full hover:border-primary/40 hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </main>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
                  Topics
                </div>

                <div className="space-y-2">
                  {post.tags.slice(0, 6).map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 sm:p-9 lg:p-10 mb-16 relative overflow-hidden"
          >
            <div className="glow-orb w-48 h-48 bg-primary/25 -top-10 -left-10" />

            <div
              className="glow-orb w-40 h-40 bg-accent/20 -bottom-10 -right-10"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-7 items-center">
              <div>
                <div className="badge mb-4">Need implementation support?</div>

                <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-3">
                  Turn the ideas into{" "}
                  <span className="text-gradient">practical action.</span>
                </h2>

                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                  If the ideas in this article connect with a real business
                  challenge, HEROY can help translate the strategy into a
                  clearly scoped digital project.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col gap-3 md:min-w-[190px]">
                <Link
                  href="/consultation"
                  className="btn-primary justify-center"
                >
                  Book Consultation
                  <ArrowRight size={16} />
                </Link>

                <Link href="/services" className="btn-outline justify-center">
                  Explore Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {relatedPosts.length > 0 && (
            <div className="pb-16">
              <div className="flex items-end justify-between gap-5 mb-6">
                <div>
                  <span className="badge mb-3 inline-flex">
                    Continue Reading
                  </span>

                  <h2 className="font-display font-semibold text-xl sm:text-2xl text-white">
                    Related <span className="text-gradient">Articles</span>
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-xs text-muted hover:text-white transition-colors"
                >
                  View all
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedPosts.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      href={`/blog/${rp.slug}`}
                      className="group glass rounded-2xl overflow-hidden block h-full"
                    >
                      <div
                        className={`relative h-32 bg-gradient-to-br ${rp.gradient} overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                      </div>

                      <div className="p-5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent block mb-2">
                          {rp.category}
                        </span>

                        <h3 className="font-display font-semibold text-sm sm:text-base text-white leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-3">
                          {rp.title}
                        </h3>

                        <span className="text-[10px] text-muted flex items-center gap-1.5">
                          <Clock size={10} />
                          {rp.readTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs text-muted hover:text-white transition-colors"
                >
                  View all articles
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}