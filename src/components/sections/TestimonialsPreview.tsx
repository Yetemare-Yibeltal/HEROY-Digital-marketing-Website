"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "Nexora Tech",
    review:
      "HEROY rebuilt our entire platform and the results were immediate — faster load times, better rankings, and a huge jump in conversions. Their communication throughout was excellent.",
    rating: 5,
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.25)",
  },
  {
    name: "Daniel Mensah",
    position: "Marketing Director",
    company: "Bluepeak Retail",
    review:
      "The digital marketing strategy HEROY put together doubled our organic traffic in under six months. A genuinely data-driven and reliable team that delivers exactly what they promise.",
    rating: 5,
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.25)",
  },
  {
    name: "Amara Okafor",
    position: "Founder",
    company: "Pulse Health",
    review:
      "Our mobile app launch was flawless thanks to HEROY's development team. They understood our needs deeply and delivered on time and on budget without cutting any corners.",
    rating: 5,
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="section bg-surface/60 border-y border-border relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/10 -bottom-20 -right-20" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Client Feedback</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              What our <span className="text-gradient">clients say</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-strong rounded-2xl px-6 py-4 flex items-center gap-4"
          >
            <div>
              <p className="font-display font-bold text-3xl text-gradient leading-none">
                4.9
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={12}
                    className="text-accent-gold fill-accent-gold"
                  />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-sm font-semibold text-white">150+</p>
              <p className="text-xs text-muted">Verified Reviews</p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 flex flex-col relative overflow-hidden group cursor-default"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 20px 50px ${t.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 0 rgba(0,0,0,0)`;
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`}
              />

              <Quote size={28} className="text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="text-accent-gold fill-accent-gold"
                  />
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {t.review}
              </p>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-display font-bold text-sm text-white shrink-0`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/testimonials" className="btn-outline">
            Read All Testimonials
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}