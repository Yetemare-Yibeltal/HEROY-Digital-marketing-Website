import Link from "next/link";
import {
  Megaphone,
  Search,
  Code2,
  Smartphone,
  Palette,
  Image as ImageIcon,
  Video,
  Bot,
  PenTool,
  Share2,
  Camera,
  ShoppingCart,
  Cloud,
  Shield,
  Database,
  Layers,
  Box,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HEROY's full range of digital services — marketing, SEO, branding, web and mobile development, AI, and creative production.",
};

export interface Service {
  slug: string;
  title: string;
  icon: typeof Megaphone;
  shortDescription: string;
  gradient: string;
}

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    shortDescription: "Full-funnel marketing strategies that turn audiences into customers.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    slug: "seo",
    title: "SEO Services",
    icon: Search,
    shortDescription: "Rank higher, get found, and grow organic traffic sustainably.",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    shortDescription: "High-performance websites built with modern frameworks.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    shortDescription: "Native and cross-platform apps for Android and iOS.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    slug: "android-development",
    title: "Android Development",
    icon: Smartphone,
    shortDescription: "Dedicated native Android applications built for performance.",
    gradient: "from-emerald-500 to-green-700",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    shortDescription: "User-centered design that drives engagement and retention.",
    gradient: "from-orange-500 to-pink-600",
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    icon: ImageIcon,
    shortDescription: "Eye-catching visuals for every platform and purpose.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    slug: "video-editing",
    title: "Video Editing & Motion",
    icon: Video,
    shortDescription: "Professional video editing and motion graphics for any platform.",
    gradient: "from-red-500 to-orange-600",
  },
  {
    slug: "photography",
    title: "Photography",
    icon: Camera,
    shortDescription: "Professional photography for brands, products, and events.",
    gradient: "from-slate-500 to-gray-700",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: PenTool,
    shortDescription: "Strategic content that informs, engages, and converts.",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Share2,
    shortDescription: "Build communities and grow your brand on every platform.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    shortDescription: "Custom online stores engineered to sell.",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: Layers,
    shortDescription: "Scalable SaaS products from concept to launch.",
    gradient: "from-purple-500 to-indigo-700",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: Bot,
    shortDescription: "AI-powered chatbots, automation, and smart features.",
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    shortDescription: "Reliable, scalable cloud infrastructure for modern products.",
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    icon: Shield,
    shortDescription: "Protect your systems, data, and users from threats.",
    gradient: "from-red-600 to-rose-700",
  },
  {
    slug: "erp-crm",
    title: "ERP & CRM Systems",
    icon: Database,
    shortDescription: "Custom systems to manage operations and customer relationships.",
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    slug: "3d-experiences",
    title: "3D Interactive Experiences",
    icon: Box,
    shortDescription: "Immersive 3D and WebGL websites that set brands apart.",
    gradient: "from-blue-600 to-violet-700",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Automation",
    icon: Users,
    shortDescription: "Strategic technology guidance and business process automation.",
    gradient: "from-gray-500 to-slate-700",
  },
];

export default function ServicesPage() {
  return (
    <section className="section pt-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge mb-4">Our Services</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            Everything you need to{" "}
            <span className="text-gradient">build and grow</span> online
          </h1>
          <p className="text-muted leading-relaxed">
            From strategy and design to full-stack development and AI —
            HEROY delivers end-to-end digital solutions tailored to your
            goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block"
              >
                <div className="absolute inset-0 bg-grad-primary opacity-0 group-hover:opacity-[0.06] transition-opacity" />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h2 className="font-display font-semibold text-lg text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    View details
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