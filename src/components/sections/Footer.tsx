import Link from "next/link";
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

const socialLinks = ["f", "X", "in", "ig", "gh"];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <span className="w-9 h-9 rounded-xl bg-grad-primary flex items-center justify-center text-background font-extrabold text-sm">
                H
              </span>
              <span className="text-gradient">HEROY</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
              A full-service digital transformation agency built by software
              engineers and developers from Ethiopia, creating interactive,
              scalable digital products that grow businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-white hover:border-primary/50 transition-colors text-xs font-bold">
                  {s}
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
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
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
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
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
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                Injibara, Awi Zone, Amhara, Ethiopia
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail size={15} className="text-primary mt-0.5 shrink-0" />
                hello@heroy.dev
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <Phone size={15} className="text-primary mt-0.5 shrink-0" />
                +251 900 000 000
              </li>
            </ul>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-full bg-white/5 border border-border px-4 py-2.5 text-sm text-white placeholder:text-muted/60 outline-none focus:border-primary" />
              <button type="submit" className="btn-primary !px-5 !py-2.5 !text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; 2026 HEROY. Built by Ethiopian engineers.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}