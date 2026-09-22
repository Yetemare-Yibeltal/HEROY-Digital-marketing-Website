"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Sparkles, ArrowRight, Search, X } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = [
  "All",
  "Company",
  "Services",
  "Pricing",
  "Process",
  "Technical",
  "Support",
];

const faqs = [
  {
    id: 1,
    category: "Services",
    question: "What services does HEROY offer?",
    answer: "HEROY offers a complete range of digital services including digital marketing, SEO, web development, mobile app development, UI/UX design, graphics design, video editing, AI solutions, branding, e-commerce development, SaaS development, cloud solutions, cybersecurity, ERP and CRM systems, 3D interactive experiences, and IT consulting. We are a full-service agency, meaning you can get everything you need in one place rather than coordinating multiple vendors.",
  },
  {
    id: 2,
    category: "Services",
    question: "Do you work with clients outside Ethiopia?",
    answer: "Yes — we work with clients remotely regardless of location. We communicate entirely in English, work flexibly across time zones, and use tools like WhatsApp, Telegram, email, and scheduled video calls to keep projects running smoothly no matter where you're based.",
  },
  {
    id: 3,
    category: "Services",
    question: "Can you handle both design and development for my project?",
    answer: "Absolutely — this is one of our core strengths. Having design and development under one roof means there is no handoff friction between teams. Our designers work directly alongside our developers, which results in faster delivery, fewer misunderstandings, and a final product that looks exactly as designed. You also deal with a single team rather than managing separate agencies.",
  },
  {
    id: 4,
    category: "Services",
    question: "Do you offer ongoing maintenance and support after launch?",
    answer: "Yes. Every project includes a post-launch support period — 30 days for Starter projects, 3 months for Growth, and 6 months for Enterprise. Beyond that, we offer monthly retainer-based maintenance packages covering bug fixes, content updates, performance monitoring, security patches, and feature additions. Ask us about our maintenance plans when discussing your project.",
  },
  {
    id: 5,
    category: "Services",
    question: "Can you help if I already have a website but it needs improvement?",
    answer: "Yes, we regularly take on redesign and improvement projects. Whether you need a full redesign, a performance overhaul, an SEO audit and fix, or new feature development on an existing codebase, we can help. We will review what you have and give you an honest assessment of what makes sense to improve versus rebuild from scratch.",
  },
  {
    id: 6,
    category: "Pricing",
    question: "How much does a website cost?",
    answer: "Our website projects start from $499 for a 5-page professional site and go up depending on complexity, features, and customization required. A typical business website with CMS, blog, and SEO setup usually falls between $1,000 and $3,000. Custom web applications, SaaS platforms, and e-commerce systems are scoped individually. We are transparent about pricing — check our Pricing page for details or book a free consultation for a custom quote.",
  },
  {
    id: 7,
    category: "Pricing",
    question: "Do you require payment upfront?",
    answer: "We typically work on a 50% deposit upfront and 50% on delivery for most projects. For larger projects, we use milestone-based payments — you pay for each phase as it is completed. This protects both parties and keeps the project moving forward with mutual accountability. We never ask for full payment upfront.",
  },
  {
    id: 8,
    category: "Pricing",
    question: "Are there any hidden fees?",
    answer: "No. Everything is itemized in your proposal before you commit to anything. The only additional costs that can arise are scope changes you request during the project — and we always discuss and agree on the cost impact of any change before implementing it. There are no surprise invoices.",
  },
  {
    id: 9,
    category: "Pricing",
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes. We have a startup program for early-stage companies with limited budgets, and we offer preferential pricing for NGOs and nonprofit organizations. Book a free consultation and tell us about your organization — we will do our best to find a structure that works within your constraints.",
  },
  {
    id: 10,
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfer, Telebirr, PayPal, and Stripe. Payment currency is flexible — we can invoice in USD, EUR, GBP, or ETB depending on your preference.",
  },
  {
    id: 11,
    category: "Process",
    question: "What does your project process look like?",
    answer: "Every project follows the same six stages: Discover, Design, Build, Test & Refine, Launch, and Support. We start with a discovery call to understand your goals, then send a written proposal. Once approved, we move through design and development with regular check-ins before a final review and launch. Post-launch we remain reachable for fixes and the next phase of your product.",
  },
  {
    id: 12,
    category: "Process",
    question: "How long does a typical project take?",
    answer: "A simple 5-page website takes about 2 weeks. A full business website with CMS takes 3 to 4 weeks. A custom web application or SaaS product typically takes 2 to 4 months depending on complexity. Mobile apps take 3 to 5 months. We provide a detailed timeline in every proposal before work begins, so you always know exactly when to expect each deliverable.",
  },
  {
    id: 13,
    category: "Process",
    question: "How many revisions are included?",
    answer: "Revision rounds are included in every plan — 1 round for Starter, 3 rounds for Growth, and unlimited rounds for Enterprise. A revision round means you review the work, provide consolidated feedback, and we implement all changes from that feedback session. We ask that feedback be bundled into single submissions rather than sent in pieces, which keeps the project moving efficiently.",
  },
  {
    id: 14,
    category: "Process",
    question: "How do you handle project communication?",
    answer: "You communicate directly with the specialist working on your project — no account managers or middlemen. Day-to-day communication happens via WhatsApp, Telegram, or email depending on your preference, with regular progress updates and milestone review calls, so you always have a direct line to someone who knows your project inside and out.",
  },
  {
    id: 15,
    category: "Process",
    question: "What do you need from me to get started?",
    answer: "For most projects, we need: your brand assets (logo, colors, fonts if you have them), access to any existing platforms or accounts, content for the project (text, images, videos), and clear feedback during review stages. We guide you through exactly what we need at each step — you do not need to have everything ready before we start.",
  },
  {
    id: 16,
    category: "Technical",
    question: "What technology stack do you use for websites?",
    answer: "Our primary web stack is Next.js 15, TypeScript, Tailwind CSS, and Framer Motion on the frontend, with Node.js and Express on the backend, and MongoDB or PostgreSQL depending on the project. We also work with headless CMS platforms like Sanity or Contentful for content management. All our choices are made based on what is best for the specific project, not just what we are comfortable with.",
  },
  {
    id: 17,
    category: "Technical",
    question: "Will my website work on mobile devices?",
    answer: "Every website and application we build is fully responsive and tested across mobile, tablet, and desktop at multiple screen sizes. Mobile performance is a primary concern, not an afterthought. We also test on both iOS Safari and Android Chrome since they have different rendering behaviors for certain CSS properties.",
  },
  {
    id: 18,
    category: "Technical",
    question: "Do you build SEO into the website from the start?",
    answer: "Yes. Technical SEO is built into every website we develop — proper heading structure, semantic HTML, server-side rendering for correct indexing, fast Core Web Vitals, meta tags, Open Graph tags, canonical URLs, and XML sitemaps. If you also want an ongoing SEO strategy (keyword research, content, link building), that is a separate service we offer.",
  },
  {
    id: 19,
    category: "Technical",
    question: "Who hosts the website after you build it?",
    answer: "We typically deploy to Vercel for Next.js frontend projects, which gives excellent global performance and automatic scaling. For backend services we use Railway, Render, or similar platforms depending on the project's requirements. We can also deploy to hosting you already have. We handle the full deployment and hand over all access credentials to you at launch.",
  },
  {
    id: 20,
    category: "Technical",
    question: "Will I own the code and design after the project?",
    answer: "Yes, completely. Upon full payment, all source code, design files, and digital assets created specifically for your project become your property. We retain the right to showcase the completed work in our portfolio unless you request otherwise in writing. Any third-party licensed assets (stock photos, licensed fonts, plugins) remain subject to their respective licenses.",
  },
  {
    id: 21,
    category: "Support",
    question: "What happens if something breaks after launch?",
    answer: "Every project includes a post-launch warranty period during which we fix any bugs or issues related to our development work at no additional cost. For issues caused by third-party integrations, hosting environment changes, or client-made modifications, we assess on a case-by-case basis. For ongoing peace of mind, our maintenance retainer plans cover continuous monitoring and rapid response to any issues.",
  },
  {
    id: 22,
    category: "Support",
    question: "Can I update the website content myself after launch?",
    answer: "Yes, if your project includes a CMS (which we recommend for content-heavy sites). We set up an easy-to-use content management system and provide a walkthrough so you can add blog posts, update pages, and manage content without needing to touch any code. For sites without a CMS, we offer affordable content update packages.",
  },
  {
    id: 23,
    category: "Support",
    question: "How do I get in touch if I have an urgent issue?",
    answer: "For clients on active projects or maintenance plans, we provide a direct WhatsApp line for urgent issues. Response time for urgent matters is typically under 2 hours during business hours. For general inquiries, email us at Heroydigitalsolution@gmail.com and we respond within 24 hours.",
  },
  {
    id: 24,
    category: "Company",
    question: "Is HEROY a registered company or a freelance collective?",
    answer: "HEROY is a growing digital solutions studio based in Injibara, Ethiopia, operating with the structure and processes of a professional agency — written agreements, defined scopes, and a dedicated team working full-time on client projects.",
  },
  {
    id: 25,
    category: "Company",
    question: "What makes HEROY different from hiring a freelancer?",
    answer: "You get the reliability of an agency — written contracts, defined process, multiple specialists covering different disciplines — with the direct access and speed of a freelancer. There's no account manager relaying messages between you and the person doing the work; you talk to them directly.",
  },
  {
    id: 26,
    category: "Company",
    question: "How big is the HEROY team?",
    answer: "We're a lean, three-person founding team, each owning a full discipline end-to-end — frontend, backend, and data. As demand grows, we bring in vetted specialists (designers, marketers, video editors) for specific project needs.",
  },
  {
    id: 27,
    category: "Company",
    question: "Can I visit your office or meet in person?",
    answer: "Our team is based in Injibara, Ethiopia. We primarily work remotely with clients worldwide via video calls, WhatsApp, and Telegram, but we're happy to meet in person if you're in the area — just ask when you reach out.",
  },
];

const typewriterWords = ["Services", "Pricing", "Process", "Technical", "Support"];

const relatedLinks = [
  { label: "Pricing FAQ", href: "/pricing", text: "Specific questions about our plans, add-ons, and billing." },
  { label: "Services FAQ", href: "/services", text: "Questions about engagement models and industries we serve." },
  { label: "Careers FAQ", href: "/careers", text: "Questions about joining the team, remote work, and hiring." },
];

export default function FAQPageClient() {
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = active === "All" ? faqs : faqs.filter((f) => f.category === active);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return list;
  }, [active, query]);

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
              <Sparkles size={14} /> FAQ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Questions about our{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-8"
          >
            Honest answers to the questions we get asked most often.
            If you do not find what you are looking for, just ask us directly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-full bg-white/5 border border-border pl-11 pr-10 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-primary transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-4xl">
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
                onClick={() => {
                  setActive(cat);
                  setOpenId(null);
                }}
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

          <AnimatePresence mode="wait">
            <motion.div
              key={active + query}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 mb-16"
            >
              {filtered.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass rounded-2xl overflow-hidden"
                  onMouseEnter={(e) => {
                    if (openId !== faq.id) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,92,255,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openId !== faq.id) {
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                    }
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-display font-semibold text-sm sm:text-base text-white">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <p className="text-center text-muted py-16">
                  No questions match "{query}". Try a different search or
                  ask us directly below.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Related FAQ links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass rounded-xl p-5 hover:border-primary/40 transition-colors group"
              >
                <p className="text-sm font-semibold text-white mb-1 flex items-center justify-between">
                  {link.label}
                  <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                </p>
                <p className="text-xs text-muted leading-relaxed">{link.text}</p>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-48 h-48 bg-primary/25 -top-10 -left-10" />
            <div className="glow-orb w-40 h-40 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Still have questions?{" "}
                <span className="text-gradient">Just ask us directly</span>
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto mb-6">
                Our team responds to every message personally. No bots,
                no templates — just honest answers to your specific
                questions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Send Us a Message
                  <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="btn-outline">
                  Book a Free Call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}