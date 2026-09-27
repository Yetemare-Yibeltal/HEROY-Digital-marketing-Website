"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, Home, MessageCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for now; wire up to a real error-tracking
    // service (e.g. Sentry) once one is connected.
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-red-500/10 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-primary/10 bottom-0 -left-20"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-px mx-auto max-w-3xl text-center relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-7"
        >
          <AlertTriangle size={26} className="text-red-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <span className="badge mb-5">
            <AlertTriangle size={14} />
            Temporary Application Error
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5"
        >
          We couldn&apos;t load this page
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9"
        >
          Something unexpected interrupted the page while it was loading.
          You can try the request again or return to the HEROY homepage and
          continue exploring our services and work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button type="button" onClick={reset} className="btn-primary">
            <RotateCcw size={16} />
            Try Again
          </button>

          <Link href="/" className="btn-outline">
            <Home size={16} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <p className="font-display font-semibold text-white mb-1">
                Still having trouble?
              </p>
              <p className="text-sm text-muted leading-relaxed">
                If the problem continues, let the HEROY team know so the issue
                can be investigated.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-outline shrink-0"
            >
              <MessageCircle size={16} />
              Contact HEROY
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}