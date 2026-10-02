"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Link2,
  Linkedin,
  Share2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { postsData, relatedPostsMap } from "./postsData";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({
  slug,
}: BlogPostClientProps) {
  const post = postsData[slug];
  const [copied, setCopied] = useState(false);

  const postUrl = `https://heroy.dev/blog/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard API unavailable.
    }
  };

  if (!post) {
    return (
      <div className="section pt-36 text-center">
        <div className="container-px mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 sm:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/5">
              <BookOpen
                size={24}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            <h1 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Post not found
            </h1>

            <p className="mx-auto mb-7 max-w-xl leading-relaxed text-muted">
              This article does not exist or may have been moved.
              Explore the latest insights from the HEROY editorial
              collection instead.
            </p>

            <Link href="/blog" className="btn-primary">
              Back to Blog
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = relatedPostsMap[slug] ?? [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
      logo: {
        "@type": "ImageObject",
        url: "https://heroy.dev/images/brand/heroy-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div className="glow-orb -right-20 -top-20 h-96 w-96 bg-primary/15" />

      <div
        className="glow-orb -left-20 bottom-0 h-64 w-64 bg-accent/10"
        style={{ animationDelay: "4s" }}
      />

      {/* Article header */}
      <section className="section relative pb-10 pt-32 sm:pt-36">
        <div className="container-px mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6">
                <span className="badge mb-5 inline-flex items-center gap-2">
                  <Sparkles size={12} aria-hidden="true" />
                  {post.category}
                </span>

                <h1 className="mb-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>

                <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-border pb-7 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} aria-hidden="true" />
                  {post.readTime}
                </span>

                <span className="flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden="true" />
                  {post.date}
                </span>

                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {post.author}
                </span>

                <span className="glass rounded-full px-3 py-1.5">
                  {post.authorRole}
                </span>
              </div>
            </motion.article>

            {/* Article overview */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="glass sticky top-28 rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <BookOpen
                    size={15}
                    className="text-accent"
                    aria-hidden="true"
                  />
                  Article overview
                </div>

                <div className="space-y-3 text-xs text-muted">
                  <div className="flex items-center justify-between gap-4">
                    <span>Category</span>
                    <span className="text-right text-white">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Reading time</span>
                    <span className="text-right text-white">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Published</span>
                    <span className="text-right text-white">
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Author</span>
                    <span className="text-right text-white">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Article visual */}
      <section className="section relative pb-16 pt-0">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className={`relative mb-12 h-64 overflow-hidden rounded-3xl bg-gradient-to-br sm:h-80 lg:h-[420px] ${post.gradient}`}
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
                <CheckCircle2
                  size={13}
                  className="text-accent"
                  aria-hidden="true"
                />
                HEROY Editorial Insight
              </div>
            </div>
          </motion.div>

          <div className="grid justify-center gap-12 lg:grid-cols-[minmax(0,760px)_220px] xl:gap-16">
            <main>
              {/* Editorial context */}
              <div className="mb-8 rounded-2xl border border-border bg-white/[0.025] px-5 py-4 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Sparkles
                      size={15}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-xs leading-relaxed text-muted sm:text-sm">
                    This article is part of the HEROY editorial
                    collection, covering practical ideas across digital
                    strategy, international marketing, technology,
                    design, SEO, and product development.
                  </p>
                </div>
              </div>

              {/* Article content */}
              <div className="flex flex-col gap-12">
                {post.content.map((section, index) => (
                  <motion.section
                    key={section.heading}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.04, 0.2),
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-[11px] font-semibold text-accent sm:flex">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h2 className="mb-4 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                          {section.heading}
                        </h2>

                        <p className="text-sm leading-8 text-muted sm:text-base">
                          {section.body}
                        </p>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-14 flex flex-wrap gap-2 border-t border-border pt-8"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Social sharing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                  <Share2 size={13} aria-hidden="true" />
                  Share:
                </span>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    postUrl,
                  )}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share article on X"
                  className="glass flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-white"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    postUrl,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share article on LinkedIn"
                  className="glass flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-white"
                >
                  <Linkedin size={13} aria-hidden="true" />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    postUrl,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share article on Facebook"
                  className="glass flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-white"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className="glass relative flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-white"
                >
                  <Link2 size={13} aria-hidden="true" />

                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-1 text-[10px] text-background">
                      Copied!
                    </span>
                  )}
                </button>
              </motion.div>
            </main>

            {/* Topic navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted">
                  Topics
                </div>

                <div className="space-y-2">
                  {post.tags.slice(0, 6).map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="section relative pb-0 pt-0">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong relative mb-16 overflow-hidden rounded-3xl p-7 sm:p-9 lg:p-10"
          >
            <div className="glow-orb -left-10 -top-10 h-48 w-48 bg-primary/25" />

            <div
              className="glow-orb -bottom-10 -right-10 h-40 w-40 bg-accent/20"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative grid items-center gap-7 md:grid-cols-[1fr_auto]">
              <div>
                <div className="badge mb-4">
                  Need implementation support?
                </div>

                <h2 className="mb-3 font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Turn the ideas into{" "}
                  <span className="text-gradient">
                    practical action.
                  </span>
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  If the ideas in this article connect with a real
                  business challenge, HEROY can help translate the
                  strategy into a clearly scoped digital project,
                  growth system, or technology solution.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:min-w-[190px] md:flex-col">
                <Link
                  href="/consultation"
                  className="btn-primary justify-center"
                >
                  Book Consultation
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  href="/services"
                  className="btn-outline justify-center"
                >
                  Explore Services
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="pb-16">
              <div className="mb-6 flex items-end justify-between gap-5">
                <div>
                  <span className="badge mb-3 inline-flex">
                    Continue Reading
                  </span>

                  <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    Related{" "}
                    <span className="text-gradient">
                      Articles
                    </span>
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="hidden items-center gap-2 text-xs text-muted transition-colors hover:text-white sm:inline-flex"
                >
                  View all
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="group glass block h-full overflow-hidden rounded-2xl"
                    >
                      <div
                        className={`relative h-32 overflow-hidden bg-gradient-to-br ${relatedPost.gradient}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                      </div>

                      <div className="p-5">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                          {relatedPost.category}
                        </span>

                        <h3 className="mb-3 line-clamp-3 font-display text-sm font-semibold leading-snug text-white transition-colors group-hover:text-accent sm:text-base">
                          {relatedPost.title}
                        </h3>

                        <span className="flex items-center gap-1.5 text-[10px] text-muted">
                          <Clock size={10} aria-hidden="true" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-white"
                >
                  View all articles
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}