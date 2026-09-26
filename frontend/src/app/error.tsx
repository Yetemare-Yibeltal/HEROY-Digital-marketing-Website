"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

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
      <div className="glow-orb w-80 h-80 bg-primary/10 bottom-0 -left-20" style={{ animationDelay: "3s" }} />

      <div className="container-px mx-auto max-w-lg text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6"
        >
          <AlertTriangle size={26} className="text-red-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-3xl text-white mb-3"
        >
          Something went wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted leading-relaxed mb-8"
        >
          An unexpected error occurred while loading this page. You can
          try again, or head back to the homepage. If this keeps
          happening, please let us know.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
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
      </div>
    </div>
  );
}