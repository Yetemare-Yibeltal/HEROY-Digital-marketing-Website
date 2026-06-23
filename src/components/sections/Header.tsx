"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Branding & Design", href: "/services/branding" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "3D Experiences", href: "/services/3d-experiences" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="w-9 h-9 rounded-xl bg-grad-primary flex items-center justify-center text-background font-extrabold text-sm">
            H
          </span>
          <span className="text-gradient">HEROY</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 h-20 text-sm font-medium text-muted hover:text-white transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown size={13} />}
              </Link>
              {link.children && (
                <div className="absolute top-16 left-0 min-w-[220px] glass rounded-xl p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 rounded-lg text-sm text-muted hover:text-white hover:bg-primary/10 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/consultation" className="btn-primary">
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-white border-b border-white/5"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 flex flex-col">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/consultation"
            onClick={() => setOpen(false)}
            className="btn-primary justify-center mt-4"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}