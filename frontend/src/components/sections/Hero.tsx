"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Gauge,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import TypewriterText from "@/components/TypewriterText";

const typewriterWords = [
  "Digital Marketing",
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "3D Experiences",
];

const stats = [
  {
    value: "20+",
    label: "Projects in Progress",
  },
  {
    value: "3",
    label: "Core Specialists",
  },
  {
    value: "2025",
    label: "Founded",
  },
  {
    value: "100%",
    label: "Custom Built",
  },
];

const techTags = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "MongoDB",
  "AI / ML",
  "Three.js",
  "Tailwind CSS",
];

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategy-led digital campaigns, content, social media, and online growth initiatives built around real business goals.",
  },
  {
    icon: Code2,
    title: "Web & Full-Stack Development",
    description:
      "Modern websites, business platforms, dashboards, APIs, and full-stack applications engineered for maintainability and scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Responsive mobile experiences designed for practical business workflows, customer engagement, and product growth.",
  },
  {
    icon: Search,
    title: "SEO & Search Visibility",
    description:
      "Search-focused website structure, technical foundations, content organization, and optimization for stronger discoverability.",
  },
  {
    icon: Palette,
    title: "UI/UX & Creative Design",
    description:
      "Clear interfaces and visual systems that combine usability, brand identity, accessibility, and modern digital aesthetics.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description:
      "Practical AI integrations and workflow automation designed to reduce repetitive work and improve digital experiences.",
  },
];

const projectTypes = [
  "Business Websites",
  "Landing Pages",
  "E-commerce Platforms",
  "Business Dashboards",
  "Custom Web Applications",
  "Mobile Applications",
  "SEO-Focused Websites",
  "AI-Enabled Workflows",
];

const trustPoints = [
  {
    icon: Target,
    title: "Business-focused",
    description:
      "Technology and creative decisions are connected to the actual purpose of your project.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded",
    description:
      "Modern development practices are considered throughout architecture, development, and deployment.",
  },
  {
    icon: Gauge,
    title: "Performance-aware",
    description:
      "Interfaces and applications are designed with usability, responsiveness, and performance in mind.",
  },
  {
    icon: Globe2,
    title: "Built for the web",
    description:
      "Modern technologies help create digital products that work across devices and audiences.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-[-12rem] top-[35rem] h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      </div>

      {/* Main Hero */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold tracking-wide text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to HEROY Universe</span>
            </div>

            {/* Main heading */}
            <h1 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              We Build{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
                Digital Systems
              </span>{" "}
              That Scale.
            </h1>

            {/* Typewriter */}
            <div className="mt-7 min-h-[3.5rem] text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              <TypewriterText words={typewriterWords} />
            </div>

            {/* Description */}
            <div className="mt-7 max-w-2xl space-y-5">
              <p className="text-base font-normal leading-8 text-muted-foreground sm:text-lg">
                HEROY is a digital transformation team helping startups,
                businesses, organizations, and growing brands build stronger
                digital foundations through technology, marketing, design, and
                innovation.
              </p>

              <p className="text-sm font-medium leading-7 text-muted-foreground/90 sm:text-base">
                From high-converting landing pages and business websites to
                full-stack platforms, mobile applications, SEO initiatives,
                AI-powered workflows, and immersive digital experiences, we
                combine strategy and engineering to turn ideas into useful
                digital products.
              </p>
            </div>

            {/* Project-fit pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {projectTypes.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/80 bg-background/70 px-3.5 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-6 py-3.5 text-sm font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted/50"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 grid gap-4 border-t border-border/70 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-sm font-bold text-foreground">
                  Direct collaboration
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">
                  Clear communication throughout the project.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-foreground">
                  Transparent delivery
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">
                  Defined scope, milestones, and priorities.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-foreground">
                  Modern technology
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">
                  Contemporary tools for modern digital products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/brand/hero-team-banner.png"
                  alt="HEROY digital technology and creative team"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                          Digital transformation
                        </p>
                        <p className="mt-1 text-lg font-bold tracking-tight text-white">
                          Strategy. Design. Engineering.
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating project status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-7 -left-4 z-20 w-[230px] rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl sm:-left-8"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">
                    Open to New Projects
                  </p>
                  <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">
                    Let&apos;s discuss your next digital product.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    Start a conversation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Decorative code card */}
            <div className="absolute -right-4 -top-7 hidden w-52 rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-xl xl:block">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <div className="font-mono text-[10px] leading-5 text-muted-foreground">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">heroy</span> = {"{"}
                </p>
                <p className="pl-3">
                  purpose:{" "}
                  <span className="text-foreground">
                    &quot;build&quot;
                  </span>
                  ,
                </p>
                <p className="pl-3">
                  design:{" "}
                  <span className="text-foreground">
                    &quot;human-first&quot;
                  </span>
                  ,
                </p>
                <p className="pl-3">
                  technology:{" "}
                  <span className="text-foreground">
                    &quot;modern&quot;
                  </span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center sm:p-8 ${
                index !== stats.length - 1
                  ? "border-b border-border/70 md:border-b-0 md:border-r"
                  : ""
              } ${
                index === 1
                  ? "border-r border-border/70 md:border-r"
                  : ""
              }`}
            >
              <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              What We Build
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
              Digital capabilities for real business needs.
            </h2>

            <p className="mt-5 text-base font-normal leading-8 text-muted-foreground sm:text-lg">
              Our work brings technology, creative execution, marketing, and
              product thinking together so businesses can establish, improve,
              and grow their digital presence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group rounded-2xl border border-border/70 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Delivery Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                How We Think
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
                Technology should solve a problem, not create another one.
              </h2>

              <p className="mt-5 text-base font-normal leading-8 text-muted-foreground">
                We focus on understandable solutions, thoughtful interfaces,
                maintainable code, and practical digital experiences rather
                than adding complexity simply for the sake of technology.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-border/70 bg-card/40 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="text-sm font-bold text-foreground">
                        {point.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28 rounded-3xl border border-border/70 bg-card/40 p-7 sm:p-10"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Technology Stack
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.025em] text-foreground sm:text-3xl">
                Modern tools. Practical engineering.
              </h2>

              <p className="mt-3 text-sm font-normal leading-7 text-muted-foreground sm:text-base">
                We use modern frameworks, languages, databases, design tools,
                and cloud technologies according to the requirements of each
                project rather than forcing every product into the same stack.
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2.5 lg:justify-end">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background/70 px-3 py-2 text-xs font-semibold text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28 overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.06] p-8 sm:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl">
              Have an idea worth building?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-8 text-muted-foreground sm:text-lg">
              Tell us what you are trying to achieve. We can explore the
              problem, discuss the right digital approach, and define a
              practical path from idea to launch.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background/80 px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/30"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}