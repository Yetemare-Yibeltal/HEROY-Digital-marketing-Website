"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Search, Compass } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 bottom-0 -left-20"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-px mx-auto max-w-4xl text-center relative py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="badge">
            <Compass size={14} />
            Page Not Found
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="relative mx-auto mb-8 max-w-3xl"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 blur-3xl opacity-20 bg-primary/20 rounded-full"
          />

          <h1
            className="relative font-display font-bold leading-none text-gradient tracking-tight"
            style={{ fontSize: "clamp(5rem, 18vw, 11rem)" }}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white mb-5">
            The page you&apos;re looking for isn&apos;t here.
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            The link may be outdated, the address may have changed, or the
            page may no longer be available. Explore our services or head
            back to the homepage to continue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Back to Home
          </Link>

          <Link href="/contact" className="btn-outline">
            <Search size={16} />
            Contact HEROY
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto"
        >
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
              Continue Exploring
            </p>

            <h3 className="font-display font-semibold text-lg sm:text-xl text-white">
              Explore the parts of HEROY that can help with your next project.
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors flex items-center gap-2 glass px-4 py-2.5 rounded-full"
              >
                {link.label}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
