"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users2,
  Zap,
  MessageCircle,
} from "lucide-react";

const serviceLinks = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "3D Experiences", href: "/services/3d-experiences" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Industries", href: "/industries" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book a Consultation", href: "/consultation" },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: "facebook",
    color: "#1877F2",
    href: "https://facebook.com/heroydigitalsolution",
  },
  {
    label: "Telegram",
    icon: "telegram",
    color: "#26A5E4",
    href: "https://t.me/heroy_digital_solution2026",
  },
  { label: "X", icon: "x", color: "#FFFFFF", href: "#" },
  { label: "LinkedIn", icon: "linkedin", color: "#0A66C2", href: "#" },
  { label: "Instagram", icon: "instagram", color: "#E4405F", href: "#" },
] as const;
type SocialPlatform = (typeof socialLinks)[number]["icon"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const commonProps = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (platform) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
        </svg>
      );

    case "telegram":
      return (
        <svg {...commonProps}>
          <path d="M21.9 4.2 18.7 19c-.2 1-.8 1.2-1.6.7l-4.5-3.3-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.6 8.4-7.6c.4-.4-.1-.6-.6-.3L7.1 13.2l-4.5-1.4c-1-.3-1-1 .2-1.5L20.4 3.5c.8-.3 1.8.2 1.5.7Z" />
        </svg>
      );

    case "x":
      return (
        <svg {...commonProps}>
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.4V9Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          {...commonProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.8"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
  }
}

const trustBadges = [
  { icon: MessageCircle, label: "Free Consultation" },
  { icon: Users2, label: "Direct Communication" },
  { icon: ShieldCheck, label: "NDA Available on Request" },
  { icon: Zap, label: "Structured Delivery" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    setSubscribeError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setSubscribed(true);
      setEmail("");

      resetTimerRef.current = setTimeout(() => {
        setSubscribed(false);
      }, 2500);
    } catch (err) {
      setSubscribeError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#05050f]/90 pt-16 pb-12 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 border-b border-slate-800/60 pb-12 md:grid-cols-4">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-slate-300">
              <badge.icon className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/brand/heroy-logo.png"
                alt="HEROY Digital Solutions"
                width={140}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Building high-impact digital products, automation systems, and brand strategies from Ethiopia to the world.
            </p>

            {/* Newsletter Form */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-200">
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubscribe} className="mt-3 flex max-w-sm gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
                >
                  {subscribing ? "..." : subscribed ? "Done!" : "Join"}
                </button>
              </form>
              {subscribeError && (
                <p className="mt-1 text-xs text-rose-400">{subscribeError}</p>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Socials */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Resources</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex space-x-3 text-slate-400">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan-400"
                  aria-label={s.label}
                >
                  <SocialIcon platform={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HEROY Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}