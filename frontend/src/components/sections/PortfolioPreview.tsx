"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Bot,
  Box,
  Megaphone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const slots = [
  {
    id: "s1",
    category: "Web Development",
    icon: Code2,
    gradient: "from-violet-600/50 to-cyan-600/30",
    wide: true,
    tall: false,
    focus: "Websites & digital platforms",
    description:
      "Responsive digital experiences built around clear information architecture, performance, accessibility, SEO, and meaningful user journeys.",
    capabilities: ["Next.js", "TypeScript", "SEO", "Analytics"],
  },
  {
    id: "s2",
    category: "Mobile App",
    icon: Smartphone,
    gradient: "from-emerald-600/50 to-teal-600/30",
    wide: false,
    tall: true,
    focus: "Mobile product experiences",
    description:
      "Mobile interfaces and application experiences designed around usability, reliable navigation, APIs, data, and maintainable product architecture.",
    capabilities: ["Product UX", "Mobile UI", "APIs", "Testing"],
  },
  {
    id: "s3",
    category: "Branding",
    icon: Palette,
    gradient: "from-pink-600/50 to-rose-600/30",
    wide: false,
    tall: false,
    focus: "Identity & visual systems",
    description:
      "Brand systems connecting positioning, typography, visual language, digital interfaces, and consistent communication.",
    capabilities: ["Identity", "Typography", "UI", "Guidelines"],
  },
  {
    id: "s4",
    category: "AI Product",
    icon: Bot,
    gradient: "from-orange-600/50 to-amber-600/30",
    wide: false,
    tall: false,
    focus: "Applied AI experiences",
    description:
      "Practical AI-enabled experiences designed around real workflows, structured information, automation, and useful human interaction.",
    capabilities: ["AI UX", "Automation", "APIs", "Data"],
  },
  {
    id: "s5",
    category: "3D Website",
    icon: Box,
    gradient: "from-blue-600/50 to-indigo-600/30",
    wide: true,
    tall: false,
    focus: "Interactive digital experiences",
    description:
      "Immersive web experiences combining interface design, motion, 3D elements, interaction, and performance-aware implementation.",
    capabilities: ["Three.js", "Motion", "WebGL", "Performance"],
  },
  {
    id: "s6",
    category: "Digital Marketing",
    icon: Megaphone,
    gradient: "from-yellow-600/50 to-orange-600/30",
    wide: false,
    tall: true,
    focus: "Digital growth systems",
    description:
      "Digital marketing experiences connecting audience research, content, campaigns, landing pages, conversion journeys, and measurement.",
    capabilities: ["Strategy", "Content", "Campaigns", "Analytics"],
  },
];

const standards = [
  "Real project evidence",
  "Clear technology details",
  "Client-approved attribution",
];

export default function PortfolioPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb w-72 h-72 bg-accent/10 top-20 left-0" />
      <div className="glow-orb w-64 h-64 bg-primary/10 bottom-0 right-0" />

      <div className="container-px mx-auto max-w-[1600px] relative">
        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="badge mb-4">
              <Sparkles size={14} />
              Our Work
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08]">
              Digital experiences designed for{" "}
              <span className="text-gradient">real-world use.</span>
            </h2>

            <p className="text-muted mt-4 max-w-3xl leading-relaxed">
              Explore the types of digital products and growth experiences
              HEROY Digital Solutions works across—from websites and mobile
              applications to branding, AI, 3D experiences, and digital
              marketing. Completed case studies are published as projects are
              delivered and approved for public presentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link href="/portfolio" className="btn-outline">
              Explore Full Portfolio
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Portfolio transparency */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl px-5 py-4 mb-10 max-w-5xl"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={17}
              className="text-accent shrink-0 mt-0.5"
            />

            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Portfolio transparency
              </p>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                The visual cards below represent project categories and
                capabilities rather than fabricated completed client work.
                Published case studies will include real project information,
                relevant technical details, and evidence that can be shared
                responsibly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {slots.map((slot, i) => {
            const Icon = slot.icon;

            return (
              <motion.article
                key={slot.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`${slot.wide ? "sm:col-span-2" : ""} ${
                  slot.tall ? "row-span-2" : ""
                }`}
              >
                <div
                  className="group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-black/20"
                  style={{
                    aspectRatio: slot.wide
                      ? "16/7"
                      : slot.tall
                        ? "3/4"
                        : "4/3",
                  }}
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} opacity-40 transition-transform duration-700 group-hover:scale-110`}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 65%)",
                    }}
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                  {/* Content */}
                  <div className="relative h-full min-h-[260px] flex flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon size={21} className="text-white/80" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 border border-white/10 bg-black/10 rounded-full px-3 py-1.5">
                        {slot.category}
                      </span>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-2">
                        {slot.focus}
                      </p>

                      <h3 className="font-display font-semibold text-xl text-white mb-2">
                        {slot.category}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl mb-4">
                        {slot.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {slot.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="text-[10px] font-medium text-white/60 border border-white/10 rounded-full px-2.5 py-1 bg-black/20 backdrop-blur-sm"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                        <span>Case study coming soon</span>
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {standards.map((standard) => (
            <div
              key={standard}
              className="glass rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-grad-mix flex items-center justify-center shrink-0">
                <CheckCircle2 size={15} className="text-background" />
              </div>

              <span className="text-xs sm:text-sm font-medium text-white/75">
                {standard}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="font-display font-semibold text-white text-lg">
              Looking for something specific?
            </p>

            <p className="text-sm text-muted mt-1">
              Tell us about the product, website, campaign, or digital
              experience you are planning.
            </p>
          </div>

          <Link href="/contact" className="btn-primary shrink-0">
            Discuss Your Project
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}