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

  // Clear any pending reset timer if the component unmounts while it's
  // still waiting, so we never try to update state on an unmounted component.
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
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubscribed(true);
      setEmail("");

      // Standard response time: show the confirmation for a couple of
      // seconds, then return the form so the visitor (or someone else
      // using the same device) can subscribe again without refreshing.
      resetTimerRef.current = setTimeout(() => {
        setSubscribed(false);
      }, 2500);
    } catch (err) {
      setSubscribeError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubscribing(false);
    }
  };