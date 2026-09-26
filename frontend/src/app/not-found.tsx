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
      <div className="glow-orb w-80 h-80 bg-accent/10 bottom-0 -left-20" style={{ animationDelay: "3s" }} />

      <div className="container-px mx-auto max-w-2xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="badge">
            <Compass size={14} /> Page Not Found
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold leading-none mb-6 text-gradient"
          style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg leading-relaxed mb-10 max-w-md mx-auto"
        >
          This page doesn&apos;t exist, or it may have moved. Let&apos;s get
          you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            <Search size={16} />
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-white transition-colors flex items-center gap-1 glass px-4 py-2 rounded-full"
            >
              {link.label}
              <ArrowRight size={12} />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}