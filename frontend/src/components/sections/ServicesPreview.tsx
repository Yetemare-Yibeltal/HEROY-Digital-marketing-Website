"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    description: "Full-funnel marketing strategies that turn audiences into loyal customers and drive measurable revenue growth.",
    gradient: "from-pink-500 to-purple-600",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    slug: "seo",
    title: "SEO Services",
    icon: Search,
    description: "Rank higher, get found faster, and grow organic traffic sustainably with technical SEO and content strategy.",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    description: "High-performance websites and web apps built with Next.js, React, and TypeScript — fast, secure, and scalable.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform Android and iOS apps built for performance, scale, and exceptional user experience.",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Graphics Design",
    icon: Palette,
    description: "User-centered interfaces and brand visuals that drive engagement, build trust, and convert visitors to customers.",
    gradient: "from-orange-500 to-pink-600",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    slug: "video-editing",
    title: "Video Editing & Motion",
    icon: Video,
    description: "Professional video editing, color grading, and motion graphics for social media, ads, and brand storytelling.",
    gradient: "from-red-500 to-orange-600",
    glow: "rgba(239,68,68,0.3)",
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    icon: ImageIcon,
    description: "Eye-catching social media graphics, print materials, and digital assets that strengthen your brand identity.",
    gradient: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.3)",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: Bot,
    description: "AI-powered chatbots, automation workflows, and smart integrations that make your product more intelligent.",
    gradient: "from-purple-500 to-indigo-600",
    glow: "rgba(168,85,247,0.3)",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section bg-surface/60 border-y border-border">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">What We Do</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              End-to-end services for{" "}
              <span className="text-gradient">digital growth</span>
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              From strategy and design to full-stack development and AI —
              every discipline you need, under one roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/services" className="btn-outline shrink-0">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{
                  y: -8,
                  rotateX: 4,
                  rotateY: 4,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group glass rounded-2xl p-6 flex flex-col h-full relative overflow-hidden block"
                  style={{
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 20px 60px ${service.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 0 rgba(0,0,0,0)`;
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at top left, ${service.glow}, transparent 70%)`,
                    }}
                  />

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 relative`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-white mb-2 relative">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1 relative">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all relative">
                    Learn more
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}