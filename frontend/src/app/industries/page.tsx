"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  Building2,
  GraduationCap,
  HandHeart,
  ShoppingBag,
  Factory,
  Truck,
  Plane,
  Building,
  Rocket,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.3)",
    description:
      "Patient engagement apps, telehealth platforms, appointment systems, and HIPAA-aware digital infrastructure that improves care delivery and patient outcomes.",
    services: ["Mobile Apps", "Web Portals", "AI Chatbots", "Data Dashboards"],
    stat: "300% avg user growth",
  },
  {
    icon: Landmark,
    name: "Finance & Fintech",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    description:
      "Secure fintech platforms, investment dashboards, payment systems, and branding that builds credibility with enterprise and retail clients.",
    services: ["SaaS Platforms", "Payment Integration", "Branding", "Security"],
    stat: "150% avg revenue lift",
  },
  {
    icon: Building2,
    name: "Real Estate",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    description:
      "Property listing platforms, virtual tour experiences, mortgage calculators, and lead-generation websites that convert browsers into buyers.",
    services: ["Listing Platforms", "Virtual Tours", "Lead Generation", "CRM"],
    stat: "220% avg lead growth",
  },
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
    description:
      "Learning management systems, institutional websites, student portals, and digital marketing strategies that grow enrollment and engagement.",
    services: ["LMS Development", "Student Portals", "SEO", "Content Creation"],
    stat: "180% avg enrollment lift",
  },
  {
    icon: HandHeart,
    name: "NGOs & Nonprofits",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    description:
      "Donation platforms, awareness campaigns, grant reporting systems, and digital strategies that maximise mission impact on limited budgets.",
    services: ["Donation Systems", "Campaigns", "Reporting Dashboards", "SEO"],
    stat: "400% avg donation growth",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    description:
      "Headless storefronts, checkout optimisation, inventory management, and full-funnel growth marketing that scale online revenue.",
    services: ["Custom Storefronts", "Checkout Optimisation", "Paid Ads", "Analytics"],
    stat: "220% avg sales growth",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    description:
      "3D product configurators, ERP integrations, operational automation platforms, and B2B portals that modernize industrial businesses.",
    services: ["3D Experiences", "ERP Systems", "B2B Portals", "Automation"],
    stat: "400% avg engagement lift",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    description:
      "Fleet tracking systems, dispatch automation, inventory management platforms, and real-time reporting that improve operational efficiency.",
    services: ["Fleet Tracking", "Dispatch Systems", "Inventory Management", "Dashboards"],
    stat: "60% avg cost reduction",
  },
  {
    icon: Plane,
    name: "Tourism & Hospitality",
    gradient: "from-sky-500 to-cyan-600",
    glow: "rgba(14,165,233,0.3)",
    description:
      "Booking platforms, destination marketing campaigns, immersive 3D experiences, and social media strategies that inspire and convert travelers.",
    services: ["Booking Platforms", "Destination Marketing", "3D Experiences", "Social Media"],
    stat: "300% avg booking growth",
  },
  {
    icon: Building,
    name: "Government & Public Sector",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    description:
      "Accessible, secure public-facing platforms, citizen portals, and internal management systems built to government accessibility standards.",
    services: ["Citizen Portals", "Internal Systems", "Accessibility", "Security"],
    stat: "Serving 1M+ citizens",
  },
  {
    icon: Rocket,
    name: "Startups",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    description:
      "MVP development, brand identity, pitch decks, and growth marketing that help early-stage startups move fast, raise funding, and acquire users.",
    services: ["MVP Development", "Branding", "Growth Marketing", "Pitch Decks"],
    stat: "500% avg user growth",
  },
  {
    icon: Cpu,
    name: "Technology & SaaS",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    description:
      "SaaS platforms, AI integrations, developer-friendly APIs, and scalable cloud infrastructure built to handle rapid growth and enterprise demand.",
    services: ["SaaS Platforms", "AI Integration", "API Development", "Cloud Infrastructure"],
    stat: "180% avg MRR growth",
  },
];

const typewriterWords = ["Healthcare", "Finance", "Education", "Startups", "E-commerce"];

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> Industries We Serve
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Solutions built for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            We tailor our approach to the unique challenges, compliance
            needs, and growth goals of each sector we work with.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-2xl p-6 cursor-default relative overflow-hidden group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${ind.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at top left, ${ind.glow}, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display font-semibold text-lg text-white">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full">
                        {ind.stat}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.services.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] bg-white/5 border border-border text-muted px-2 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Don&apos;t see your industry?{" "}
                <span className="text-gradient">We can still help</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                Our process adapts to any sector. Tell us about your
                business and we will show you exactly how we would
                approach it, with a clear plan and realistic timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="btn-outline">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}