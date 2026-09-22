"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Clock, FileSignature } from "lucide-react";

const commitments = [
  {
    title: "Direct communication",
    text: "You talk to the person building your product — via WhatsApp, Telegram, email, or call, whichever you prefer.",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.25)",
    icon: MessageCircle,
  },
  {
    title: "24-hour response time",
    text: "Messages during a live project get a response within 24 hours, typically much sooner than that.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.25)",
    icon: Clock,
  },
  {
    title: "Written scope, always",
    text: "A clear, written agreement on deliverables, timeline, and price before any work begins — no surprises.",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    icon: FileSignature,
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
            <span className="badge mb-4">What To Expect</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Why clients choose to <span className="text-gradient">work with us</span>
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
                2025
              </p>
              <p className="text-xs text-muted mt-1">Founded</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-sm font-semibold text-white">3</p>
              <p className="text-xs text-muted">Core Specialists</p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 flex flex-col relative overflow-hidden group cursor-default"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 50px ${c.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color}`}
                />

                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-5`}
                >
                  <Icon size={18} className="text-white" />
                </div>

                <h3 className="font-display font-semibold text-white text-base mb-2">
                  {c.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {c.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/testimonials" className="btn-outline">
            See What to Expect
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}