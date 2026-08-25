"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";

interface PostContent {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  gradient: string;
  glow: string;
  content: { heading: string; body: string }[];
  tags: string[];
}

const postsData: Record<string, PostContent> = {
  "how-to-grow-organic-traffic-2026": {
    title: "How to Grow Organic Traffic in 2026: A Complete SEO Playbook",
    excerpt: "Everything you need to rank higher and drive sustainable organic growth.",
    category: "SEO",
    readTime: "12 min read",
    date: "June 15, 2026",
    author: "HEROY SEO Team",
    authorRole: "SEO & Digital Marketing",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.3)",
    tags: ["SEO", "Organic Traffic", "Content Strategy", "Technical SEO"],
    content: [
      {
        heading: "Why Organic Traffic Still Matters More Than Ever",
        body: "Paid advertising costs have risen significantly over the last three years. Cost-per-click has increased across nearly every major industry, making organic traffic more valuable than it has ever been. A well-executed SEO strategy compounds over time — unlike paid ads, which stop the moment you stop spending. Businesses that invest in organic search now are building assets that will deliver returns for years.",
      },
      {
        heading: "Step 1: Conduct a Full Technical Audit",
        body: "Before publishing a single piece of content, your site's technical foundation needs to be solid. Common issues we find during audits include slow Core Web Vitals scores, duplicate content, broken internal links, missing canonical tags, and crawl budget waste. Tools like Screaming Frog, Ahrefs, and Google Search Console are your starting points. Fix technical issues first — no amount of content will rank well on a technically broken site.",
      },
      {
        heading: "Step 2: Build Topical Authority With Content Clusters",
        body: "Google rewards sites that demonstrate deep expertise on a topic. Rather than publishing isolated blog posts, organize your content into clusters — a comprehensive pillar page covering a broad topic, supported by more specific cluster pages that link back to it. For example, a pillar page on 'Digital Marketing' supported by clusters on SEO, email marketing, social media marketing, and PPC creates a clear content architecture that signals authority.",
      },
      {
        heading: "Step 3: Prioritize Search Intent Over Keywords",
        body: "Matching search intent is the single most important factor in ranking content in 2026. Google has become extremely good at understanding what users actually want when they type a query. Before writing any piece of content, ask yourself whether the user wants to learn something, navigate somewhere, compare options, or make a purchase. Your content format, depth, and structure must match that intent precisely.",
      },
      {
        heading: "Step 4: Build Authority Through Links and Brand Signals",
        body: "Backlinks remain a core ranking signal, but the quality bar has risen dramatically. One link from a genuinely authoritative, relevant site is worth more than 50 low-quality directory links. Digital PR, original research, expert roundups, and resource page outreach are the most sustainable link building strategies in 2026. Brand mentions, even without links, are also increasingly factored into domain authority calculations.",
      },
      {
        heading: "Step 5: Measure, Iterate, and Compound",
        body: "SEO is not a one-time project — it is an ongoing system. Set up monthly tracking for keyword rankings, organic sessions, click-through rates, and conversion rates from organic traffic. Review your content quarterly. Update posts that are losing rankings with fresh information, better examples, and improved on-page optimization. The sites that compound their SEO gains are the ones that treat content as a living asset rather than a published artifact.",
      },
    ],
  },
  "nextjs-15-for-agencies": {
    title: "Why We Build Every Client Site on Next.js 15",
    excerpt: "Performance, SEO, and developer experience — why Next.js is our framework of choice.",
    category: "Web Development",
    readTime: "8 min read",
    date: "June 10, 2026",
    author: "HEROY Engineering Team",
    authorRole: "Full Stack Development",
    gradient: "from-cyan-600/50 to-blue-600/40",
    glow: "rgba(34,211,238,0.3)",
    tags: ["Next.js", "React", "Web Performance", "SEO"],
    content: [
      {
        heading: "The Case for a Single Framework Standard",
        body: "When you work across dozens of client projects simultaneously, standardizing on a framework saves enormous amounts of time. Your team does not need to context-switch between different build systems, routing conventions, and deployment workflows. Next.js 15 has become our default choice for every new web project because it solves the most important challenges in modern web development in a single, well-maintained package.",
      },
      {
        heading: "Performance That Clients Actually Feel",
        body: "Next.js server components, Turbopack bundling, and image optimization produce sites that score consistently well on Core Web Vitals without manual configuration. For clients in competitive industries where page speed directly affects both SEO rankings and conversion rates, this matters enormously. We have seen consistent improvements in Largest Contentful Paint and Cumulative Layout Shift across client sites simply by migrating from older stacks to Next.js.",
      },
      {
        heading: "The SEO Advantage of Server-Side Rendering",
        body: "Many JavaScript-heavy websites still have indexing problems. Content rendered client-side can be missed by crawlers or indexed with significant delays. Next.js Server Components render HTML on the server by default, ensuring that every page's content is immediately visible to search engines. Combined with the Metadata API for managing titles, descriptions, Open Graph tags, and canonical URLs, Next.js gives development teams a clean, code-native way to handle technical SEO.",
      },
      {
        heading: "Developer Experience That Scales With Your Team",
        body: "The App Router, TypeScript support, and file-based routing make Next.js projects easy to onboard new developers onto. When a new team member joins a Next.js project, the conventions are predictable and the documentation is excellent. For agencies building long-term client relationships where the codebase needs to be maintainable years after the initial launch, this consistency is invaluable.",
      },
    ],
  },
  "ai-chatbot-customer-support": {
    title: "How AI Chatbots Are Transforming Customer Support in 2026",
    excerpt: "What we have learned building AI support systems for real clients.",
    category: "AI & Technology",
    readTime: "10 min read",
    date: "June 5, 2026",
    author: "HEROY AI Team",
    authorRole: "AI & Automation",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.3)",
    tags: ["AI", "Chatbots", "Customer Support", "Automation"],
    content: [
      {
        heading: "The Support Problem Most Businesses Refuse to Acknowledge",
        body: "Most businesses are losing customers not because their product is bad, but because their support experience is slow, inconsistent, and frustrating. Response times of 8 to 24 hours are still common. Customers who reach support at 2am get no response until the next business day. AI-powered support does not replace human agents — it handles the 70% of queries that are repetitive and predictable, so human agents can focus on the complex cases that genuinely need them.",
      },
      {
        heading: "What Modern AI Support Systems Actually Do",
        body: "The AI support systems we build are not simple keyword-matching bots. They are trained on your specific product documentation, knowledge base articles, and historical support conversations. They understand context, can ask clarifying questions, handle multi-turn conversations, and know when to escalate to a human agent. When integrated with your ticketing system, they can also look up order status, account information, and subscription details in real time.",
      },
      {
        heading: "The Business Results We Have Seen",
        body: "Across the clients we have built AI support systems for, the consistent results are a reduction in first-response time from hours to seconds, a 40 to 60 percent reduction in total support ticket volume, and a measurable improvement in customer satisfaction scores. The initial investment in building the system is typically recovered within the first three months through reduced support staffing costs and improved customer retention.",
      },
      {
        heading: "How to Get Started Without Overcomplicating It",
        body: "Start with your 20 most common support queries. Those typically account for 60 to 70 percent of your total support volume. Build an AI system that handles those specific cases extremely well before expanding its scope. Train it on real past conversations. Review its outputs weekly in the first month. Iterate based on where it fails. A narrow, reliable AI system deployed fast will deliver more value than a broad, unreliable one that takes six months to build.",
      },
    ],
  },
};

const relatedPosts = [
  {
    slug: "technical-seo-audit-checklist",
    title: "The 50-Point Technical SEO Audit Checklist",
    category: "SEO",
    readTime: "15 min read",
    gradient: "from-blue-600/50 to-indigo-600/40",
  },
  {
    slug: "digital-marketing-strategy-b2b",
    title: "The B2B Digital Marketing Strategy That Generated 500% More Leads",
    category: "Digital Marketing",
    readTime: "11 min read",
    gradient: "from-fuchsia-600/50 to-purple-600/40",
  },
  {
    slug: "ui-design-trends-2026",
    title: "UI Design Trends Dominating 2026",
    category: "Branding & Design",
    readTime: "7 min read",
    gradient: "from-pink-600/50 to-rose-600/40",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsData[params.slug];

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
        </div>
      </section>
    </div>
  );
}