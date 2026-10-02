"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export type ConsentStatus = "accepted" | "declined";

const STORAGE_KEY = "heroy-cookie-consent";

export function getStoredConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export default function CookieConsent({
  onChange,
}: {
  onChange?: (status: ConsentStatus) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so the banner doesn't fight with page-load animations.
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    onChange?.(stored);
  }, [onChange]);

  const choose = (status: ConsentStatus) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, status);
    } catch {
      // Storage unavailable (private browsing, etc.) — the banner will
      // just reappear next visit, which is an acceptable fallback.
    }
    setVisible(false);
    onChange?.(status);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-[90] glass-strong rounded-2xl p-5"
        >
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center shrink-0">
              <Cookie size={14} className="text-accent" />
            </span>
            <p className="text-xs text-muted leading-relaxed">
              We use cookies to understand how visitors use this site and
              improve it. See our{" "}
              <Link href="/privacy-policy" className="text-accent underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => choose("declined")}
              className="flex-1 text-xs font-semibold px-4 py-2.5 rounded-full border border-border text-muted hover:text-white hover:border-primary/40 transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="flex-1 btn-primary !text-xs !py-2.5 justify-center"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}