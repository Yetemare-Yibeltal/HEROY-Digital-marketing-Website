"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { postsData, relatedPostsMap } from "./postsData";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="section pt-36 text-center">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-display font-bold text-3xl text-white mb-4">Post not found</h1>
          <p className="text-muted mb-6">This post does not exist or has been moved.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = relatedPostsMap[slug] ?? [];

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-64 h-64 bg-accent/10 bottom-0 -left-20" style={{ animationDelay: "4s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="badge mb-4">{post.category}</span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-5 text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-8">
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="glass px-3 py-1.5 rounded-full">
                {post.author} &middot; {post.authorRole}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative rounded-2xl overflow-hidden h-56 sm:h-72 mb-10 bg-gradient-to-br ${post.gradient}`}
          >
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(circle at center, ${post.glow}, transparent 70%)` }}
            />
          </motion.div>

          <div className="flex flex-col gap-10">
            {post.content.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="font-display font-semibold text-xl text-white mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border"
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
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 text-center mb-14 relative overflow-hidden"
          >
            <div className="glow-orb w-48 h-48 bg-primary/25 -top-10 -left-10" />
            <div className="glow-orb w-40 h-40 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Need help putting this into{" "}
                <span className="text-gradient">practice?</span>
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto mb-6">
                Our team implements exactly what we write about. Book a free
                consultation and let us apply these strategies to your business.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/consultation" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {relatedPosts.length > 0 && (
            <>
              <h2 className="font-display font-semibold text-lg text-white mb-5">
                Related <span className="text-gradient">Articles</span>
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedPosts.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      href={`/blog/${rp.slug}`}
                      className="group glass rounded-2xl overflow-hidden block"
                    >
                      <div className={`h-28 bg-gradient-to-br ${rp.gradient}`} />
                      <div className="p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-accent block mb-1">
                          {rp.category}
                        </span>
                        <h3 className="font-display font-semibold text-sm text-white leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-2">
                          {rp.title}
                        </h3>
                        <span className="text-[10px] text-muted flex items-center gap-1">
                          <Clock size={10} /> {rp.readTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}