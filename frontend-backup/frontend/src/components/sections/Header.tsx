"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Branding & Design", href: "/services/graphics-design" },
      { label: "Video Editing", href: "/services/video-editing" },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-18 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-lg group"
        >
          <motion.span
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-grad-primary flex items-center justify-center text-background font-extrabold text-sm"
          >
            H
          </motion.span>
          <span className="text-gradient">HEROY</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
                {link.children && (
                  <motion.div
                    animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={13} />
                  </motion.div>
                )}
              </Link>

              {link.children && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[220px] glass-strong rounded-2xl p-2 shadow-xl shadow-black/30 mt-1"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted hover:text-white hover:bg-primary/10 transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {child.label}
                        </Link>
                      ))}
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
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
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
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-base font-medium text-white hover:text-accent rounded-xl hover:bg-white/5 transition-all border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 flex flex-col gap-1 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-2 px-4 text-sm text-muted hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/consultation"
                  onClick={() => setOpen(false)}
                  className="btn-primary justify-center w-full"
                >
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