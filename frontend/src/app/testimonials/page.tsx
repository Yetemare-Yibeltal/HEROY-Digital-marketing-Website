"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, Sparkles, Info } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = ["All", "Web Development", "Digital Marketing", "Mobile Apps", "SEO", "Branding", "AI Solutions"];

/**
 * These are illustrative example reviews representing the kind of feedback
 * we aim to earn from clients — not verified, real, or unedited quotes
 * from named companies. No specific performance percentages are claimed
 * here since none are backed by real client data. Replace with real,
 * client-approved testimonials (and get sign-off before publishing any
 * numbers) as they become available.
 */
const testimonials = [
  {
    id: 1,
    name: "S. Johnson",
    position: "CEO",
    company: "Retail Technology Company",
    category: "Web Development",
    rating: 5,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    review: "HEROY rebuilt our platform on Next.js and the difference was immediate — pages load noticeably faster and our search rankings improved within the first two months. The team was professional, communicative, and delivered exactly what they promised, on time and on budget.",
  },
  {
    id: 2,
    name: "D. Mensah",
    position: "Marketing Director",
    company: "Regional Retail Brand",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    review: "The digital marketing strategy HEROY built for us grew our organic traffic meaningfully within six months. What stood out was how data-driven their approach was — every decision was backed by analysis, and every weekly report was clear and honest.",
  },
  {
    id: 3,
    name: "A. Okafor",
    position: "Founder",
    company: "Healthcare Startup",
    category: "Mobile Apps",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(34,197,94,0.3)",
    review: "Our mobile app launch was smooth. HEROY understood the healthcare context deeply — they asked the right questions about compliance and patient data from day one. The app launched on time and our users have responded well. Post-launch support has also been solid.",
  },
  {
    id: 4,
    name: "J. Thornton",
    position: "CTO",
    company: "Customer Support Platform",
    category: "AI Solutions",
    rating: 5,
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    review: "The AI support system HEROY built handles a large share of our inbound tickets automatically without hurting customer satisfaction. The implementation was clean, well-documented, and the team explained every technical decision clearly.",
  },
  {
    id: 5,
    name: "I. Larsen",
    position: "Head of Digital",
    company: "Industrial Equipment Manufacturer",
    category: "Web Development",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    review: "The 3D product showcase HEROY built for us has changed how we sell. Prospects who interact with the configurator arrive at sales calls already understanding the product. The craftsmanship in the Three.js work was genuinely impressive.",
  },
  {
    id: 6,
    name: "P. Nair",
    position: "Growth Manager",
    company: "B2B SaaS Startup",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    review: "HEROY did not just set up campaigns and leave — they built a full inbound engine with content, paid ads, and email automation all working together. The reporting was transparent, and they were proactive about sharing what was working and what needed adjusting.",
  },
  {
    id: 7,
    name: "M. Webb",
    position: "E-commerce Director",
    company: "Online Retail Company",
    category: "Web Development",
    rating: 5,
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    review: "Our custom e-commerce platform replaced an off-the-shelf setup we had outgrown. HEROY built exactly what we needed — B2B pricing tiers, bulk ordering, and a proper admin dashboard — all in a clean, fast Next.js application. The team is professional, skilled, and a genuine pleasure to work with.",
  },
  {
    id: 8,
    name: "C. Eze",
    position: "CEO",
    company: "Fintech Company",
    category: "Branding",
    rating: 5,
    gradient: "from-amber-500 to-yellow-600",
    glow: "rgba(234,179,8,0.3)",
    review: "HEROY gave our company a brand identity we are genuinely proud of. The strategic thinking behind the visual direction was impressive — they did not just make things look good, they made sure the brand would resonate with enterprise clients and communicate trust.",
  },
  {
    id: 9,
    name: "T. Bradley",
    position: "Founder",
    company: "Productivity SaaS",
    category: "Mobile Apps",
    rating: 5,
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    review: "HEROY delivered our web dashboard and mobile app in parallel, sharing the same backend architecture. The team was organized, proactive, and technically strong throughout. They are now our go-to development partner for everything we build.",
  },
  {
    id: 10,
    name: "F. Al-Rashid",
    position: "Marketing Manager",
    company: "Real Estate Group",
    category: "SEO",
    rating: 5,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    review: "The SEO work HEROY did for our property listings was solid. We moved up meaningfully for our most competitive keywords over a few months. More importantly, the traffic that came in converted — the content strategy attracted serious buyers rather than casual browsers.",
  },
  {
    id: 11,
    name: "K. Osei",
    position: "COO",
    company: "Logistics Company",
    category: "Web Development",
    rating: 5,
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    review: "The fleet management dashboard HEROY built replaced several separate spreadsheet-based systems. Real-time tracking, automated dispatch, and management reporting are now all in one place, and the system has run reliably since launch.",
  },
  {
    id: 12,
    name: "A. Diallo",
    position: "Director of Programs",
    company: "Education & Community NGO",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    review: "As an NGO with a limited budget, we were unsure about working with a full-service agency. HEROY was transparent about what was achievable and delivered beyond what we expected on our donation platform and awareness campaigns. They gave us the same quality of work as clients with much larger budgets.",
  },
];

const typewriterWords = ["Clients", "Partners", "Teams", "Founders", "Leaders"];

export default function TestimonialsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? testimonials : testimonials.filter((t) => t.category === active);

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
              <Sparkles size={14} /> Client Testimonials
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Trusted by{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
            {" "}worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-8"
          >
            The kind of feedback we work hard to earn from every client we
            partner with.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 pb-4 relative">
        <div className="container-px mx-auto max-w-6xl">
          <div className="glass rounded-2xl p-5 flex items-start gap-3">
            <Info size={16} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              The reviews below are illustrative examples of the kind of
              feedback we aim to earn — not verified quotes from named
              clients. Real, client-approved testimonials will replace
              these as they become available.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0 relative">
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

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                    <div className="flex items-center justify-between mb-3">
                      <Quote size={24} className="text-primary/30" />
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-white/10 border border-white/15 text-white/60 px-2 py-1 rounded-full">
                        Illustrative
                      </span>
                    </div>

                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} size={13} className="text-accent-gold fill-accent-gold" />
                      ))}
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                      {t.review}
                    </p>

                    <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-display font-bold text-sm text-white shrink-0`}
                      >
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-muted">{t.position}, {t.company}</p>
                      </div>
                      <span className="ml-auto text-[10px] font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
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
              No reviews in this category yet.
            </p>
          )}

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
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Ready to become our next{" "}
                <span className="text-gradient">success story?</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                Join the growing list of businesses working with HEROY to
                grow their revenue, traffic, and brand. Start with a free
                consultation.
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