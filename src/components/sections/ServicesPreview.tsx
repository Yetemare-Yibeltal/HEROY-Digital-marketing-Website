import Link from "next/link";
import {
  Megaphone,
  Code2,
  Smartphone,
  Palette,
  Image as ImageIcon,
  Video,
  Bot,
  Search,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Full-funnel marketing strategies that turn audiences into loyal customers.",
  },
  {
    slug: "seo",
    title: "SEO Services",
    icon: Search,
    description: "Rank higher, get found, and grow organic traffic sustainably.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    description: "High-performance websites and web apps built with modern frameworks.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform Android & iOS apps built for scale.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Graphics Design",
    icon: Palette,
    description: "User-centered interfaces and brand visuals that drive engagement.",
  },
  {
    slug: "video-editing",
    title: "Video Editing & Motion",
    icon: Video,
    description: "Professional video editing and motion graphics for every platform.",
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    icon: ImageIcon,
    description: "Eye-catching social, print, and digital visuals for your brand.",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: Bot,
    description: "AI-powered chatbots, automation, and smart features for your product.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section bg-surface/60 border-y border-border">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="badge mb-4">What We Do</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              End-to-end services for{" "}
              <span className="text-gradient">digital growth</span>
            </h2>
          </div>
          <Link href="/services" className="btn-outline shrink-0">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-grad-primary opacity-0 group-hover:opacity-[0.06] transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center mb-5">
                    <Icon size={20} className="text-background" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}