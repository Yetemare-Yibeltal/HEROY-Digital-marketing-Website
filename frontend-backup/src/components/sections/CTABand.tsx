"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function CTABand() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl glass-strong overflow-hidden p-10 sm:p-16 text-center"
        >
          <div className="glow-orb w-72 h-72 bg-primary/30 -top-20 -left-20" />
          <div
            className="glow-orb w-64 h-64 bg-accent/25 -bottom-20 -right-20"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="glow-orb w-48 h-48 bg-accent-pink/20 top-1/2 left-1/2"
            style={{ animationDelay: "5s" }}
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="badge mb-5 inline-flex"
            >
              <Sparkles size={14} />
              Let&apos;s Build Together
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 max-w-3xl mx-auto text-white"
            >
              Ready to turn your idea into a{" "}
              <span className="text-gradient">scalable digital product?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted max-w-xl mx-auto mb-8"
            >
              Tell us about your project — our team will respond within 24
              hours with a clear plan, timeline, and cost estimate tailored
              to your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/consultation" className="btn-outline">
                <Calendar size={16} />
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}