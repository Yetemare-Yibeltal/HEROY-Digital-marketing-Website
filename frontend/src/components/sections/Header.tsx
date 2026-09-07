"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// Services grouped into categories, matching the industry-standard mega-menu
// pattern (grouped by discipline) used across professional agency sites.
const serviceGroups = [
  {
    heading: "Growth & Marketing",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO Services", href: "/services/seo" },
    ],
  },
  {
    heading: "Web & Tech",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    heading: "Creative & Brand",
    items: [
      { label: "UI/UX & Graphics Design", href: "/services/ui-ux-design" },
      { label: "Video Editing & Motion", href: "/services/video-editing" },
      { label: "Graphics Design", href: "/services/graphics-design" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      {/* ── Slim top info bar (desktop only) ──
          NOTE: phone number is a placeholder (+251 900 000 000) pending the
          real business line. Replace before launch — flagged intentionally,
          not invented as a "real" number. */}
      <div
        className="hidden lg:block border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(5,5,15,0.5)" }}
      >
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-1.5 text-xs" style={{ color: "#9292b8" }}>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@heroy.dev" className="hover:text-white transition-colors">hello@heroy.dev</a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <span title="Placeholder — confirm real business line">+251 900 000 000*</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hy-blink-dot" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg group">
          <motion.span
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-grad-primary flex items-center justify-center text-background font-extrabold text-sm"
          >
            H
          </motion.span>
          <span className="flex flex-col leading-none">
            <span className="text-gradient text-lg">HEROY</span>
            <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "#9292b8" }}>
              Digital Solution
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.mega && setMegaOpen(true)}
              onMouseLeave={() => link.mega && setMegaOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
                {link.mega && (
                  <motion.div animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={13} />
                  </motion.div>
                )}
              </Link>

              {link.mega && (
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="hy-holo-container absolute top-full left-1/2 -translate-x-1/2 mt-2"
                      style={{ width: "620px" }}
                    >
                      <div className="hy-holo-inner p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {serviceGroups.map((group) => (
                            <div key={group.heading}>
                              <p
                                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                                style={{ color: "#22d3ee" }}
                              >
                                {group.heading}
                              </p>
                              <ul className="flex flex-col gap-2">
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7c5cff" }} />
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <span className="text-xs" style={{ color: "#9292b8" }}>
                            Need something custom? Every project is scoped around your goals.
                          </span>
                          <Link href="/services" className="hy-read-more">
                            View all services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/consultation" className="btn-primary text-sm">
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  {link.mega ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-white rounded-xl hover:bg-white/5 transition-all border-b border-white/5"
                      >
                        {link.label}
                        <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }}>
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {serviceGroups.map((group) => (
                              <div key={group.heading} className="mt-3 mb-1">
                                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#22d3ee" }}>
                                  {group.heading}
                                </p>
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 py-2 px-4 text-sm text-muted hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 text-base font-medium text-white hover:text-accent rounded-xl hover:bg-white/5 transition-all border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.05 }} className="pt-2">
                <Link href="/consultation" onClick={() => setOpen(false)} className="btn-primary justify-center w-full">
                  Book Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}