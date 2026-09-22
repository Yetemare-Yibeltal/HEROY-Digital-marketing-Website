"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Info,
  MessageCircle,
  Clock,
  FileSignature,
  Eye,
  Gift,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = ["All", "Web Development", "Digital Marketing", "Mobile Apps", "SEO", "Branding", "AI Solutions"];

const sampleOutcomes = [
  {
    id: 1,
    scenario: "A local business launching its first professional website",
    category: "Web Development",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    target: "A fast, mobile-first site with clean architecture — built to load quickly, rank well from day one, and give the business room to grow without a rebuild.",
  },
  {
    id: 2,
    scenario: "A retail brand wanting more qualified traffic, not just more traffic",
    category: "Digital Marketing",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    target: "A data-driven funnel where every channel is measured, every report is honest about what's working, and spend follows what actually converts.",
  },
  {
    id: 3,
    scenario: "A healthcare startup launching its first patient-facing app",
    category: "Mobile Apps",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(34,197,94,0.3)",
    target: "An app built with compliance and data privacy considered from day one, not bolted on afterward — with support that continues past launch day.",
  },
  {
    id: 4,
    scenario: "A support team drowning in repetitive customer tickets",
    category: "AI Solutions",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    target: "An AI assistant that resolves the routine questions instantly and hands off complex ones cleanly to a human, documented so your team can maintain it.",
  },
  {
    id: 5,
    scenario: "A brand wanting a product page that actually sells the product",
    category: "Web Development",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    target: "An interactive, fast-loading showcase that helps prospects understand the product before they ever talk to sales — built to convert, not just impress.",
  },
  {
    id: 6,
    scenario: "A founder with inconsistent inbound leads",
    category: "Digital Marketing",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    target: "A repeatable inbound engine — content, paid, and email working together — with transparent weekly reporting on what's actually moving the needle.",
  },
  {
    id: 7,
    scenario: "An online store that's outgrown its off-the-shelf platform",
    category: "Web Development",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    target: "A custom storefront with the exact pricing logic, bulk ordering, or admin tools your business actually needs — without paying for features you don't.",
  },
  {
    id: 8,
    scenario: "A company whose brand no longer matches its ambitions",
    category: "Branding",
    gradient: "from-amber-500 to-yellow-600",
    glow: "rgba(234,179,8,0.3)",
    target: "A visual identity backed by real strategic thinking — designed to build trust with the specific audience you're trying to reach, not just \"look nice.\"",
  },
  {
    id: 9,
    scenario: "A founder needing a web and mobile app that share one backend",
    category: "Mobile Apps",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    target: "One architecture powering both platforms, avoiding duplicated logic and keeping future feature work fast on both web and mobile at once.",
  },
  {
    id: 10,
    scenario: "A real estate business invisible in local search results",
    category: "SEO",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    target: "A content and technical SEO strategy focused on the keywords that bring serious buyers, not just page views — measured in leads, not rankings alone.",
  },
  {
    id: 11,
    scenario: "A logistics team running operations on scattered spreadsheets",
    category: "Web Development",
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    target: "A single dashboard for tracking, dispatch, and reporting — replacing manual spreadsheet work with something your whole team can actually rely on.",
  },
  {
    id: 12,
    scenario: "An NGO with a limited budget and a real deadline",
    category: "Digital Marketing",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    target: "Honest scoping about what's achievable on the budget, and a donation platform or awareness campaign that performs like one built for a much larger budget.",
  },
];

const commitments = [
  {
    icon: MessageCircle,
    title: "Direct communication",
    text: "You talk to the person building your product — via WhatsApp, Telegram, email, or call, whichever you prefer.",
  },
  {
    icon: Clock,
    title: "24-hour response time",
    text: "Messages during a live project get a response within 24 hours, typically much sooner.",
  },
  {
    icon: FileSignature,
    title: "Written scope before work starts",
    text: "You'll always have a clear, written agreement on deliverables, timeline, and price before any work begins.",
  },
  {
    icon: Eye,
    title: "Visibility into progress",
    text: "Regular check-ins and access to work-in-progress — never radio silence between kickoff and delivery.",
  },
];

const typewriterWords = ["Clients", "Partners", "Teams", "Founders", "Leaders"];

export default function TestimonialsPageClient() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? sampleOutcomes : sampleOutcomes.filter((t) => t.category === active);

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
              <Sparkles size={14} /> What to Expect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Built for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
            {" "}who expect results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-6"
          >
            As a new studio, we're still earning our first reviews — here's
            the standard of work and outcome we hold ourselves to on every
            project, and the kind of results we're built to deliver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-start gap-3 glass rounded-2xl px-5 py-4 text-left max-w-xl mx-auto"
          >
            <Info size={16} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              The scenarios below are illustrative examples of the kind of
              problems we solve and outcomes we target — not quotes from
              real clients. Real testimonials will replace these as our
              first projects are completed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-6 relative">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
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

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <AnimatePresence mode="popLayout">
              {filtered.map((t, i) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 flex flex-col relative overflow-hidden group cursor-default"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${t.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left, ${t.glow}, transparent 70%)` }}
                  />

                  <div className="relative">
                    <Quote size={24} className="text-primary/30 mb-3" />

                    <p className="text-xs font-semibold text-white mb-2">
                      {t.scenario}
                    </p>

                    <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                      {t.target}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[10px] uppercase tracking-wide text-muted/70">
                        Example scenario
                      </span>
                      <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {t.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted py-16">
              No examples in this category yet.
            </p>
          )}

          {/* Our commitments */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">Our Commitment</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                What every client{" "}
                <span className="text-gradient">can count on</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                While our first reviews are still being written, these
                commitments aren't — they apply to every single project.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass-strong rounded-2xl p-6"
                  >
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-4">
                      <Icon size={18} className="text-background" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm mb-2">
                      {c.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {c.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <span className="badge mb-4">
                <Gift size={14} /> Founding Client Offer
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Want to become our first{" "}
                <span className="text-gradient">featured success story?</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                As one of our founding clients, you get direct founder-level
                attention on your project, plus a discussion about featuring
                your results here once we deliver. Start with a free,
                no-pressure consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultation" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" className="btn-outline">
                  View Case Studies
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