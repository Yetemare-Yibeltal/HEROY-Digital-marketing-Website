"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = ["All", "Web Development", "Digital Marketing", "Mobile Apps", "SEO", "Branding", "AI Solutions"];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "Nexora Tech",
    category: "Web Development",
    rating: 5,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    review: "HEROY completely transformed our platform. The new Next.js architecture cut our load time by 70% and our SEO rankings improved dramatically within the first two months. The team was professional, communicative, and delivered exactly what they promised — on time and on budget. We have already started planning our next project with them.",
  },
  {
    id: 2,
    name: "Daniel Mensah",
    position: "Marketing Director",
    company: "Bluepeak Retail",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    review: "The digital marketing strategy HEROY built for us doubled our organic traffic in under six months and reduced our cost per lead by 45%. What stood out was how data-driven their approach was — every decision was backed by analysis, and every weekly report was clear and honest. They genuinely care about results, not just activities.",
  },
  {
    id: 3,
    name: "Amara Okafor",
    position: "Founder",
    company: "Pulse Health",
    category: "Mobile Apps",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(34,197,94,0.3)",
    review: "Our mobile app launch was flawless. HEROY understood the healthcare context deeply — they asked the right questions about compliance and patient data from day one. The app launched on time, performs beautifully, and our users love it. The post-launch support has also been exceptional. I would not hesitate to recommend them to any founder.",
  },
  {
    id: 4,
    name: "James Thornton",
    position: "CTO",
    company: "Cresta",
    category: "AI Solutions",
    rating: 5,
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    review: "The AI support system HEROY built handles over 70% of our inbound tickets automatically with a customer satisfaction score that actually improved compared to human-only support. The implementation was clean, well-documented, and the team explained every technical decision clearly. This is genuinely one of the best technology investments we have made.",
  },
  {
    id: 5,
    name: "Ingrid Larsen",
    position: "Head of Digital",
    company: "Northwind Industries",
    category: "Web Development",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    review: "The 3D product showcase HEROY built for us has completely changed how we sell. Prospects who interact with the 3D configurator are three times more likely to request a demo. Our sales team is closing deals faster because customers arrive already understanding the product. The craftsmanship in the Three.js work was extraordinary.",
  },
  {
    id: 6,
    name: "Priya Nair",
    position: "Growth Manager",
    company: "Vertex Labs",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    review: "In 90 days, HEROY took us from 20 inbound leads per month to over 120. They did not just set up campaigns and leave — they built a full inbound engine with content, paid ads, and email automation all working together. The reporting was transparent, and they were proactive about sharing what was working and what needed adjusting.",
  },
  {
    id: 7,
    name: "Marcus Webb",
    position: "E-commerce Director",
    company: "Dataforge",
    category: "Web Development",
    rating: 5,
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    review: "Our custom e-commerce platform replaced a Shopify setup that we had outgrown. HEROY built exactly what we needed — B2B pricing tiers, bulk ordering, and a proper admin dashboard — all in a clean, fast Next.js application. Online revenue increased by 220% in the first quarter after launch. The team is professional, skilled, and a genuine pleasure to work with.",
  },
  {
    id: 8,
    name: "Chioma Eze",
    position: "CEO",
    company: "Meridian Finance",
    category: "Branding",
    rating: 5,
    gradient: "from-amber-500 to-yellow-600",
    glow: "rgba(234,179,8,0.3)",
    review: "HEROY gave Meridian a brand identity that we are genuinely proud of. The strategic thinking behind the visual direction was impressive — they did not just make things look good, they made sure the brand would resonate with enterprise clients and communicate trust. Enterprise meeting conversion rate doubled within two months of the rebrand launch.",
  },
  {
    id: 9,
    name: "Tom Bradley",
    position: "Founder",
    company: "Orbitly",
    category: "Mobile Apps",
    rating: 5,
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    review: "HEROY delivered our web dashboard and React Native app simultaneously, sharing the same backend architecture. We launched both platforms in five months and hit 400% of our target user signups in month one. The team was organized, proactive, and technically excellent throughout. They are now our go-to development partner for everything.",
  },
  {
    id: 10,
    name: "Fatima Al-Rashid",
    position: "Marketing Manager",
    company: "Skyline Real Estate",
    category: "SEO",
    rating: 5,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    review: "The SEO work HEROY did for our property listings was remarkable. We went from page 3 to the top 3 results for our most competitive keywords in four months. More importantly, the traffic that came in converted — our lead quality improved significantly because the content strategy attracted serious buyers rather than casual browsers.",
  },
  {
    id: 11,
    name: "Kevin Osei",
    position: "COO",
    company: "Bluepeak Logistics",
    category: "Web Development",
    rating: 5,
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    review: "The fleet management dashboard HEROY built replaced three separate spreadsheet-based systems. Real-time tracking, automated dispatch, and management reporting are now all in one place. The system has been running without issues for six months. Operational efficiency improved by 40% and our dispatch team now handles twice the volume with the same headcount.",
  },
  {
    id: 12,
    name: "Aisha Diallo",
    position: "Director of Programs",
    company: "Hope Foundation",
    category: "Digital Marketing",
    rating: 5,
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    review: "As an NGO with limited budget, we were skeptical about working with a full-service agency. HEROY was transparent about what was achievable and delivered beyond what we expected. Our donation platform and awareness campaigns increased donations by over 400% in the first year. They gave us the same quality of work as clients with much larger budgets.",
  },
];

const typewriterWords = ["Clients", "Partners", "Teams", "Founders", "Leaders"];

export default function TestimonialsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? testimonials : testimonials.filter((t) => t.category === active);

  const avgRating = 4.9;
  const totalReviews = 150;

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
            Real feedback from real clients across industries — unedited
            and in their own words.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-6 glass-strong rounded-2xl px-8 py-5"
          >
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gradient leading-none">
                {avgRating}
              </p>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <p className="text-xs text-muted mt-1">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gradient-warm leading-none">
                {totalReviews}+
              </p>
              <p className="text-xs text-muted mt-3">Verified Reviews</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gradient-green leading-none">
                98%
              </p>
              <p className="text-xs text-muted mt-3">Would Recommend</p>
            </div>
          </motion.div>
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
                    <Quote size={24} className="text-primary/30 mb-3" />

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
                Join 150+ businesses that have grown their revenue, traffic,
                and brand with HEROY. Start with a free consultation.
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