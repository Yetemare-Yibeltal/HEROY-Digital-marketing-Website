"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "20+",
    label: "Projects In Progress",
    description: "Digital products and initiatives currently being developed.",
    gradient: "linear-gradient(135deg,#7c5cff,#22d3ee)",
    glow: "rgba(124,92,255,0.3)",
    border: "#7c5cff",
  },
  {
    value: "3",
    label: "Core Specialists",
    description: "A focused team combining technology, design, and delivery.",
    gradient: "linear-gradient(135deg,#22d3ee,#4ade80)",
    glow: "rgba(34,211,238,0.3)",
    border: "#22d3ee",
  },
  {
    value: "2025",
    label: "Founded",
    description: "Building our digital journey from Ethiopia to the world.",
    gradient: "linear-gradient(135deg,#f472b6,#fbbf24)",
    glow: "rgba(244,114,182,0.3)",
    border: "#f472b6",
  },
  {
    value: "1:1",
    label: "Direct Client Communication",
    description: "Close collaboration from project discovery through delivery.",
    gradient: "linear-gradient(135deg,#4ade80,#22d3ee)",
    glow: "rgba(74,222,128,0.3)",
    border: "#4ade80",
  },
];

const capabilities = [
  "Next.js",
  "React Native",
  "Node.js",
  "MongoDB",
  "Healthcare",
  "FinTech",
  "E-Commerce",
  "Real Estate",
  "Education",
  "NGOs & Nonprofits",
  "Startups",
  "AI / ML",
];

const principles = [
  {
    icon: Target,
    title: "Business-Focused",
    description:
      "We connect technology and creative decisions to the real goals, users, and needs behind each project.",
  },
  {
    icon: Code2,
    title: "Modern Engineering",
    description:
      "We use contemporary development tools and frameworks to create maintainable and scalable digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Minded",
    description:
      "Security, responsible architecture, and reliable implementation are considered throughout the development process.",
  },
  {
    icon: Globe2,
    title: "Built for Real Users",
    description:
      "Our websites and applications are designed to provide practical experiences across devices and digital environments.",
  },
];

const deliveryPoints = [
  "Clear project communication",
  "Purpose-driven product decisions",
  "Responsive and accessible interfaces",
  "Modern development practices",
  "Maintainable technical foundations",
  "Practical digital experiences",
];

export default function Trust() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "#080810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
      aria-labelledby="trust-section-heading"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute left-[10%] top-[-12rem] h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{
            background: "rgba(124,92,255,0.06)",
          }}
        />

        <div
          className="absolute right-[5%] top-[35%] h-[24rem] w-[24rem] rounded-full blur-3xl"
          style={{
            background: "rgba(34,211,238,0.045)",
          }}
        />

        <div
          className="absolute bottom-[-10rem] left-[35%] h-[22rem] w-[22rem] rounded-full blur-3xl"
          style={{
            background: "rgba(74,222,128,0.035)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="badge mb-4 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NUMBERS THAT SPEAK</span>
          </span>

          <h2
            id="trust-section-heading"
            className="font-display font-extrabold tracking-[-0.035em]"
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              lineHeight: "1.08",
            }}
          >
            <span className="text-white">The Foundation Behind </span>

            <span
              style={{
                background:
                  "linear-gradient(270deg,#7c5cff,#22d3ee,#4ade80,#fbbf24,#f472b6,#7c5cff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientText 5s ease infinite",
              }}
            >
              HEROY
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 sm:text-base"
            style={{ color: "#9292b8" }}
          >
            A focused digital team combining engineering, design, marketing,
            and emerging technology to create practical digital experiences
            for businesses, organizations, and ambitious teams.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6 text-center sm:p-7"
              style={{
                background:
                  "linear-gradient(145deg,rgba(15,15,26,0.98),rgba(12,12,22,0.9))",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  stat.border;
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 40px ${stat.glow}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Soft card glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
                style={{
                  background: stat.border,
                }}
              />

              <p
                className="relative mb-2 font-display font-extrabold tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  lineHeight: "1",
                  background: stat.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>

              <p
                className="relative text-[11px] font-bold uppercase tracking-[0.16em] sm:text-xs"
                style={{ color: "#c1c1d6" }}
              >
                {stat.label}
              </p>

              <p
                className="relative mx-auto mt-3 max-w-[240px] text-xs font-medium leading-5"
                style={{ color: "#6f6f91" }}
              >
                {stat.description}
              </p>

              {/* Animated bottom border */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg,transparent,${stat.border},transparent)`,
                  backgroundSize: "200% 100%",
                  animation: "gradientSlide 3s linear infinite",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Professional positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          {/* Text */}
          <div>
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#22d3ee" }}
            >
              More Than A Number
            </span>

            <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
              Small team.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#7c5cff,#22d3ee,#4ade80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Focused execution.
              </span>
            </h3>

            <p
              className="mt-5 max-w-xl text-sm font-medium leading-7 sm:text-base"
              style={{ color: "#9292b8" }}
            >
              HEROY brings a compact multidisciplinary team together around
              each project. That means fewer communication layers, closer
              collaboration, and a direct connection between the people
              shaping the product and the people building it.
            </p>

            <p
              className="mt-4 max-w-xl text-sm font-medium leading-7"
              style={{ color: "#777795" }}
            >
              Our goal is not simply to deliver another website or application.
              We aim to create digital systems that are understandable,
              useful, visually strong, and aligned with the people who will
              actually use them.
            </p>
          </div>

          {/* Delivery points */}
          <div
            className="rounded-3xl p-6 sm:p-8"
            style={{
              background:
                "linear-gradient(145deg,rgba(15,15,26,0.9),rgba(10,10,18,0.8))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(124,92,255,0.1)",
                  border: "1px solid rgba(124,92,255,0.18)",
                }}
              >
                <Layers3
                  className="h-5 w-5"
                  style={{ color: "#7c5cff" }}
                />
              </div>

              <div>
                <p className="font-display text-base font-bold text-white">
                  What You Can Expect
                </p>
                <p
                  className="mt-0.5 text-xs font-medium"
                  style={{ color: "#6f6f91" }}
                >
                  Principles that guide our delivery
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliveryPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-300"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "#4ade80" }}
                  />

                  <span
                    className="text-xs font-semibold leading-5"
                    style={{ color: "#b7b7ca" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#7c5cff" }}
            >
              How We Work
            </span>

            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              Technology with purpose.
            </h3>

            <p
              className="mt-3 text-sm font-medium leading-7"
              style={{ color: "#777795" }}
            >
              Every project benefits from a combination of technical
              thinking, creative problem-solving, and attention to the people
              using the final product.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="group rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: "rgba(15,15,26,0.7)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(124,92,255,0.35)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(124,92,255,0.09)",
                      color: "#7c5cff",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 font-display text-base font-bold tracking-tight text-white">
                    {principle.title}
                  </h4>

                  <p
                    className="mt-3 text-xs font-medium leading-6"
                    style={{ color: "#777795" }}
                  >
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Capabilities marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-7 max-w-3xl text-center">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#9292b8" }}
            >
              Technology & Industry Experience
            </p>

            <p
              className="mt-3 text-sm font-medium leading-6"
              style={{ color: "#64647f" }}
            >
              Built to serve ambitious teams across different technologies,
              industries, and organizational environments.
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to right,#080810,transparent)",
              }}
            />

            {/* Right fade */}
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to left,#080810,transparent)",
              }}
            />

            <div
              className="flex w-max gap-8 sm:gap-12"
              style={{
                animation: "marquee 25s linear infinite",
              }}
            >
              {[...capabilities, ...capabilities].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="cursor-default whitespace-nowrap font-display text-base font-bold transition-colors duration-300 sm:text-lg"
                  style={{
                    color: "rgba(255,255,255,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.12)";
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t pt-12 text-center"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(34,211,238,0.15)",
              }}
            >
              <Zap
                className="h-5 w-5"
                style={{ color: "#22d3ee" }}
              />
            </div>

            <h3 className="font-display text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl">
              From idea to digital product.
            </h3>

            <p
              className="mt-4 max-w-2xl text-sm font-medium leading-7 sm:text-base"
              style={{ color: "#777795" }}
            >
              Whether you need a new digital presence, a custom application,
              a stronger online strategy, or an intelligent workflow, HEROY
              brings the technical and creative capabilities together under
              one focused team.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg,rgba(124,92,255,0.14),rgba(34,211,238,0.1))",
                border: "1px solid rgba(124,92,255,0.25)",
                color: "#ffffff",
              }}
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}