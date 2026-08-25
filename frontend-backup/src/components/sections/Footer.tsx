"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FormEvent } from "react";
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
  { label: "Telegram", short: "TG", href: "https://t.me/HEROY_Team" },
  { label: "Facebook", short: "f", href: "#" },
  { label: "X", short: "X", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribing(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubscribed(true);
    setSubscribing(false);
    setEmail("");
  };

  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        border-t border-border
        bg-surface
        [transform:translateZ(0)]
        [will-change:transform]
      "
    >
      {/* Decorative watermark logo */}
      <Image
        src="/images/logo-circular.png"
        alt=""
        width={215}
        height={215}
        aria-hidden
        className="
          absolute
          -bottom-16
          -right-16
          z-[-1]
          h-64
          w-64
          select-none
          pointer-events-none
          opacity-[0.04]
          [transform:translateZ(0)]
        "
      />

      {/* Decorative glow for modern / 3D-friendly layouts */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-3xl
          opacity-70
        "
      />

      <div
        className="
          container-px
          relative
          z-10
          mx-auto
          max-w-7xl
          py-16
          [transform:translateZ(0)]
        "
      >
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="
                group
                mb-4
                flex
                items-center
                w-fit
                [transform:translateZ(0)]
              "
            >
              <Image
                src="/images/logo-horizontal.png"
                alt="HEROY Digital Solutions"
                width={450}
                height={130}
                priority
                className="
                  h-10
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.02]
                  [transform:translateZ(0)]
                "
              />
            </Link>

            <p
              className="
                mb-6
                max-w-sm
                text-sm
                leading-relaxed
                text-muted
              "
            >
              A full-service digital transformation agency built by software
              engineers and developers from Ethiopia, creating interactive,
              scalable digital products that grow businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={
                    s.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    glass
                    text-xs
                    font-bold
                    text-muted
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:scale-105
                    hover:border-primary/50
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-primary/10
                    active:scale-95
                    [transform:translateZ(0)]
                    [will-change:transform]
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {s.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="
                mb-4
                font-display
                text-sm
                font-semibold
                tracking-wide
                text-white
              "
            >
              Services
            </h4>

            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      group
                      relative
                      inline-block
                      text-sm
                      text-muted
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-accent
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="
                mb-4
                font-display
                text-sm
                font-semibold
                tracking-wide
                text-white
              "
            >
              Company
            </h4>

            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      inline-block
                      text-sm
                      text-muted
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-accent
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="
                mb-4
                font-display
                text-sm
                font-semibold
                tracking-wide
                text-white
              "
            >
              Get in Touch
            </h4>

            <ul className="mb-6 flex flex-col gap-3">
              {/* Location */}
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin
                  size={15}
                  className="
                    mt-0.5
                    shrink-0
                    text-primary
                    transition-transform
                    duration-300
                    hover:scale-110
                  "
                />

                <span>
                  Injibara, Awi Zone, Amhara, Ethiopia
                </span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail
                  size={15}
                  className="
                    mt-0.5
                    shrink-0
                    text-primary
                    transition-transform
                    duration-300
                    hover:scale-110
                  "
                />

                <a
                  href="mailto:hello@heroy.dev"
                  className="
                    transition-colors
                    duration-300
                    hover:text-accent
                  "
                >
                  hello@heroy.dev
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3 text-sm text-muted">
                <Phone
                  size={15}
                  className="
                    mt-0.5
                    shrink-0
                    text-primary
                    transition-transform
                    duration-300
                    hover:scale-110
                  "
                />

                <a
                  href="https://wa.me/251900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    duration-300
                    hover:text-accent
                  "
                >
                  +251 900 000 000 (WhatsApp)
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <h4
              className="
                mb-3
                font-display
                text-sm
                font-semibold
                tracking-wide
                text-white
              "
            >
              Newsletter
            </h4>

            {subscribed ? (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  py-2
                  text-sm
                  font-semibold
                  text-accent
                  animate-in
                  fade-in
                  duration-500
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-accent/20
                    text-xs
                  "
                >
                  ✓
                </span>

                Thanks for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="
                  flex
                  gap-2
                  rounded-full
                  transition-all
                  duration-300
                  focus-within:ring-1
                  focus-within:ring-primary/30
                "
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  aria-label="Your email"
                  className="
                    min-w-0
                    flex-1
                    rounded-full
                    border
                    border-border
                    bg-white/5
                    px-4
                    py-2.5
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    placeholder:text-muted/60
                    focus:border-primary
                    focus:bg-white/[0.07]
                  "
                />

                <button
                  type="submit"
                  disabled={subscribing}
                  className="
                    btn-primary
                    !px-5
                    !py-2.5
                    !text-xs
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    hover:shadow-primary/20
                    active:translate-y-0
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {subscribing ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-border
            pt-6
            text-xs
            text-muted
            sm:flex-row
          "
        >
          <p>
            &copy; {new Date().getFullYear()} HEROY Digital Solutions. Built
            by Ethiopian engineers.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="
                transition-all
                duration-300
                hover:text-white
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                transition-all
                duration-300
                hover:text-white
              "
            >
              Terms
            </Link>

            <Link
              href="/faq"
              className="
                transition-all
                duration-300
                hover:text-white
              "
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}