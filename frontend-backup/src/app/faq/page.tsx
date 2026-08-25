"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = [
  "All",
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
    answer: "Yes, the majority of our clients are international. We have worked with businesses across 20+ countries including the United States, United Kingdom, Canada, Australia, Germany, UAE, and across Africa. We communicate entirely in English, work across time zones, and use tools like Google Meet, Slack, and Notion to keep projects running smoothly regardless of location.",
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
    answer: "We accept bank transfer, PayPal, Stripe, and mobile money transfers. For Ethiopian clients, we also accept telebirr and CBE Birr. Payment currency is flexible — we invoice in USD, EUR, or GBP depending on your preference.",
  },
  {
    id: 11,
    category: "Process",
    question: "What does your project process look like?",
    answer: "Every project follows our 8-step process: Research, Discovery, Strategy, Design, Development, Testing, Launch, and Optimization. We start with a discovery call to understand your goals, then send a detailed proposal. Once approved, we move through design and development with regular check-ins, weekly progress updates, and a final review before launch. Post-launch we monitor performance and provide support.",
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
    answer: "We assign a dedicated project manager to every engagement. Day-to-day communication happens via Slack, WhatsApp, or email depending on your preference. We send weekly progress updates and schedule milestone review calls. You always have a direct line to someone who knows your project inside and out.",
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
    answer: "Our primary web stack is Next.js 15, TypeScript, Tailwind CSS, and Framer Motion on the frontend, with Node.js and Express or serverless functions on the backend. For databases we use PostgreSQL or MongoDB depending on the project. We also work with Sanity CMS, Contentful, and Strapi for content management. All our choices are made based on what is best for the specific project, not just what we are comfortable with.",
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
    answer: "We typically deploy to Vercel for Next.js frontend projects, which gives excellent global performance and automatic scaling. For backend services we use Railway, Render, or AWS depending on the project's requirements. We can also deploy to hosting you already have. We handle the full deployment and hand over all access credentials to you at launch.",
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
    answer: "For clients on active projects or maintenance plans, we provide a direct WhatsApp line for urgent issues. Response time for urgent matters is typically under 2 hours during business hours. For general inquiries, email us at hello@heroy.dev and we respond within 24 hours.",
  },
];

const typewriterWords = ["Services", "Pricing", "Process", "Technical", "Support"];

export default function FAQPage() {
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = active === "All" ? faqs : faqs.filter((f) => f.category === active);

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
            className="text-muted text-lg leading-relaxed"
          >
            Honest answers to the questions we get asked most often.
            If you do not find what you are looking for, just ask us directly.
          </motion.p>
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
              key={active}
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
            </motion.div>
          </AnimatePresence>

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