"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    label: "Facebook",
    short: "f",
    href: "https://facebook.com/heroydigitalsolution",
  },
  {
    label: "Telegram",
    short: "tg",
    href: "https://t.me/heroy_digital_solution2026",
  },
  { label: "X", short: "X", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubscribed(true);
    setSubscribing(false);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-xl mb-4"
            >
              <span className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/brand/heroy-logo.png"
                  alt="HEROY Digital Solutions logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="text-gradient">HEROY</span>
            </Link>

            <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
              A full-service digital transformation agency built by software
              engineers and developers from Ethiopia, creating interactive,
              scalable digital products that grow businesses worldwide.
            </p>

            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-white hover:border-primary/50 transition-colors text-xs font-bold"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Get in Touch
            </h4>

            <ul className="flex flex-col gap-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin
                  size={15}
                  className="text-primary mt-0.5 shrink-0"
                />
                Injibara, Awi Zone, Amhara, Ethiopia
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail
                  size={15}
                  className="text-primary mt-0.5 shrink-0"
                />
                <a
                  href="mailto:Heroydigitalsolution@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  Heroydigitalsolution@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Phone
                  size={15}
                  className="text-primary mt-0.5 shrink-0"
                />
                <a
                  href="tel:+251923853252"
                  className="hover:text-accent transition-colors"
                >
                  +251 92 385 3252
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary mt-0.5 shrink-0"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.475-1.635z" />
                </svg>
                <a
                  href="https://t.me/heroy_digital_solution2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @heroy_digital_solution2026
                </a>
              </li>
            </ul>

            <h4 className="font-display font-semibold text-white mb-3 text-sm tracking-wide">
              Newsletter
            </h4>

            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-accent font-semibold py-2">
                <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs">
                  ✓
                </span>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-full bg-white/5 border border-border px-4 py-2.5 text-sm text-white placeholder:text-muted/60 outline-none focus:border-primary transition-colors"
                />

                <button
                  type="submit"
                  disabled={subscribing}
                  className="btn-primary !px-5 !py-2.5 !text-xs disabled:opacity-60"
                >
                  {subscribing ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} HEROY. Built by Ethiopian
            engineers.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>

            <Link
              href="/faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
