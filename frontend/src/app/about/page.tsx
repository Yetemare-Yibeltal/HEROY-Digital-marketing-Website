"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Globe2,
  Award,
  Code2,
  Sparkles,
  Search,
  PenTool,
  Hammer,
  TestTube2,
  Send as SendIcon,
  LifeBuoy,
  Handshake,
  Gauge,
  MessageSquareHeart,
  BarChart3,
  ShieldCheck,
  Smartphone,
  CloudCog,
  Database,
  Megaphone,
  Layers3,
  CheckCircle2,
  MapPin,
  CalendarDays,
  Plus,
  Minus,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const values = [
  {
    icon: Target,
    title: "Mission",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    text: "To empower businesses of every size with technology, design, and marketing systems that drive measurable growth and lasting impact, regardless of industry or location.",
  },
  {
    icon: Eye,
    title: "Vision",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    text: "To become a globally recognized digital partner, known for innovation, quality, and the long-term success of every client we work with, starting from Ethiopia, reaching the world.",
  },
  {
    icon: Heart,
    title: "Values",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    text: "Integrity, transparency, craftsmanship, and curiosity guide every decision. We build things we are proud to put our name on, and we treat every client's business as our own.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    text: "We continuously explore AI, automation, and modern web technologies, staying ahead so our clients always have access to the latest and most effective tools.",
  },
];

const skills = [
  "Next.js", "TypeScript", "React Native", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "Figma",
  "Adobe Premiere", "Adobe Photoshop", "AWS", "AI Integration",
];

const teamRoles = [
  "Full Stack Engineers", "Frontend Developers",
  "Backend Engineers", "Android Developers",
  "UI/UX Designers", "Graphics Designers",
  "Video Editors", "AI Developers",
  "Digital Marketers", "SEO Specialists",
];

const stats = [
  { icon: Rocket, value: "2025", label: "Founded", color: "text-accent" },
  { icon: Users, value: "3", label: "Core Team Members", color: "text-accent-pink" },
  { icon: Award, value: "20+", label: "Projects In Progress", color: "text-accent-gold" },
];

const team = [
  {
    name: "Metages Yibeltal",
    role: "Team Lead & Frontend Developer",
    image: "/images/team/metages-yibeltal.png",
    bio: "Leads product direction and builds the interfaces clients interact with, focused on clean, fast, and accessible frontends.",
  },
  {
    name: "Henok Amare",
    role: "Database Engineer",
    image: "/images/team/henok-amare.png",
    bio: "Designs and manages the data layer behind every HEROY project — schema design, performance, and data integrity.",
  },
  {
    name: "Robel Yinager",
    role: "Backend Developer",
    image: "/images/team/robel-yinager.png",
    bio: "Builds the APIs, services, and server-side logic that power HEROY's web and mobile products.",
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    text: "We start with a real conversation — your goals, your audience, your competitors, and what success actually looks like for your business, not just a checklist of features.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    text: "Wireframes and visual direction come before a single line of code, so you can see and approve the look and feel of your product before we build it.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    text: "Our engineers write clean, documented, production-grade code using modern frameworks — with regular check-ins so you always know exactly where your project stands.",
  },
  {
    icon: TestTube2,
    step: "04",
    title: "Test & Refine",
    text: "Every feature is tested across devices and browsers before it ships. We fix issues before you ever see them, not after.",
  },
  {
    icon: SendIcon,
    step: "05",
    title: "Launch",
    text: "We handle deployment, domain and hosting setup, and make sure everything is production-ready — fast, secure, and SEO-friendly from day one.",
  },
  {
    icon: LifeBuoy,
    step: "06",
    title: "Support",
    text: "Launch isn't the finish line. We stay reachable for fixes, updates, and the next phase of your product, directly — no ticket queue, no account managers.",
  },
];

const advantages = [
  {
    icon: Handshake,
    title: "You talk directly to the people building your product",
    text: "No account managers, no outsourcing to subcontractors you've never met. When you message HEROY, you're talking to the engineer or designer actually working on your project.",
  },
  {
    icon: Gauge,
    title: "Faster decisions, faster delivery",
    text: "A three-person team makes decisions in minutes, not committee meetings. That speed shows up directly in how quickly your project moves from idea to live product.",
  },
  {
    icon: Award,
    title: "Every project matters to us — because it has to",
    text: "As a growing studio, every client relationship shapes our reputation. We aren't spreading attention across hundreds of accounts; we're focused on doing right by the clients we have.",
  },
  {
    icon: MessageSquareHeart,
    title: "Honest communication over sales pitches",
    text: "We'll tell you if something won't work, if a timeline is unrealistic, or if a cheaper approach solves your problem just as well. We're building long-term relationships, not one-off invoices.",
  },
];

const faqs = [
  {
    q: "Is HEROY a registered company or a freelance team?",
    a: "HEROY is a growing digital solutions studio based in Injibara, Ethiopia. We operate as a dedicated team working full-time on client projects, with the structure and processes of a professional agency.",
  },
  {
    q: "You're a small team — can you really handle a full project?",
    a: "Yes. Our three founders each own a full discipline end-to-end — frontend, backend, and data — which covers everything a typical web or mobile project needs. For specialized work outside our core stack, we're transparent about it up front rather than overpromising.",
  },
  {
    q: "How do you communicate during a project?",
    a: "Directly, via WhatsApp, Telegram, email, or scheduled calls — whichever you prefer. You'll get regular progress updates rather than radio silence between kickoff and delivery.",
  },
  {
    q: "Do you work with clients outside Ethiopia?",
    a: "Yes. We work with clients remotely and communicate entirely in English, using standard tools like Google Meet, WhatsApp, and email to keep projects moving regardless of time zone.",
  },
];

const typewriterWords = ["Engineers", "Creators", "Innovators", "Builders", "Digital Partners"];

const capabilities = [
  {
    icon: Code2,
    title: "Web & Full-Stack Engineering",
    text: "Responsive websites and web applications designed around real business workflows, with maintainable frontend, backend, API, and database architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Product Development",
    text: "Mobile experiences focused on practical usability, clear navigation, reliable data flows, and a consistent product experience across supported devices.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    text: "Search-friendly content, conversion-focused landing pages, campaign support, and measurable digital growth activities aligned with business objectives.",
  },
  {
    icon: Layers3,
    title: "UI/UX & Brand Experience",
    text: "Structured user journeys, visual systems, interface design, and polished interaction details that make digital products easier to understand and use.",
  },
  {
    icon: CloudCog,
    title: "Cloud & Deployment",
    text: "Production deployment support, hosting configuration, environment management, performance considerations, and practical launch preparation.",
  },
  {
    icon: Database,
    title: "Data & API Systems",
    text: "Well-organized data models and API services that support secure, scalable communication between interfaces, business logic, and persistent storage.",
  },
];

const industries = [
  "Startups & New Ventures",
  "Professional Services",
  "Education & Training",
  "Retail & E-commerce",
  "Technology & SaaS",
  "Creative Businesses",
  "Nonprofits & Organizations",
  "Growing Local Businesses",
];

const deliveryPrinciples = [
  {
    icon: ShieldCheck,
    title: "Security-minded delivery",
    text: "We consider authentication, authorization, validation, secure configuration, and responsible handling of application data throughout development.",
  },
  {
    icon: BarChart3,
    title: "Business-focused decisions",
    text: "Technology is selected because it supports a business or user outcome—not simply because a tool is new or popular.",
  },
  {
    icon: CheckCircle2,
    title: "Quality before handoff",
    text: "We review responsive behavior, user flows, integration points, and production readiness before considering a project ready to launch.",
  },
];

function AnimatedCounter({ value, label, icon: Icon, color }: {
  value: string;
  label: string;
  icon: typeof Award;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8 text-center gradient-border"
    >
      <Icon size={24} className={`${color} mx-auto mb-3`} />
      <p className="font-display font-bold text-3xl text-gradient mb-1">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export default function AboutPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-16 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> About HEROY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Ethiopian{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
            {" "}building{" "}
            <span className="text-gradient-warm">world-class</span> digital products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-4"
          >
            HEROY is a digital solutions studio bringing strategy, design,
            engineering, content, and marketing together under one team.
            We create modern digital experiences—from high-performance
            websites and web applications to mobile products and growth
            systems—designed to help organizations communicate clearly,
            serve customers better, and build a stronger digital presence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted text-base leading-relaxed"
          >
            Founded in 2025 and based in Injibara, Ethiopia, HEROY was
            created around a simple principle: digital work should combine
            strong ideas with dependable execution. We aim to give clients
            direct access to the people doing the work, clear communication
            throughout delivery, and technology choices that make sense for
            the product, audience, budget, and long-term goals.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass rounded-2xl p-8 cursor-default relative overflow-hidden group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${v.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left, ${v.glow}, transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h2 className="font-display font-semibold text-xl text-white mb-3">{v.title}</h2>
                    <p className="text-sm text-muted leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Users size={20} className="text-background" />
              </div>
              <h2 className="font-display font-semibold text-xl text-white mb-2">
                Team <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Our multidisciplinary team covers every discipline needed to
                take a project from idea to launch — full-stack engineering,
                mobile development, design, content creation, and digital
                marketing, all in one place.
              </p>
              <div className="flex flex-wrap gap-2">
                {teamRoles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full hover:border-primary/40 hover:text-white transition-colors cursor-default"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Code2 size={20} className="text-background" />
              </div>
              <h2 className="font-display font-semibold text-xl text-white mb-2">
                Tools &amp; <span className="text-gradient-warm">Technologies</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                We build on modern, production-tested tools so every product
                we deliver is fast, secure, and easy to maintain long after
                launch.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Layers3 size={14} /> What We Build
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Digital capabilities designed around{" "}
                <span className="text-gradient">real business needs</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                From a focused company website to a connected full-stack platform,
                we combine strategy, design, engineering, and ongoing improvement
                into one practical delivery process.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, i) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    whileHover={{ y: -6 }}
                    className="glass rounded-2xl p-6 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} className="text-background" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-base mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {capability.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <MapPin size={14} /> Who We Work With
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Technology for{" "}
                <span className="text-gradient-warm">different stages of growth</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Our approach can adapt to organizations validating an idea,
                modernizing an existing presence, launching a digital product,
                or building systems that support the next stage of growth.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {industries.map((industry, i) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-border text-sm text-muted hover:text-white hover:border-primary/40 transition-colors"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <CalendarDays size={14} /> Delivery Principles
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Built for{" "}
                <span className="text-gradient">long-term usefulness</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                A professional digital product should remain understandable,
                maintainable, and useful after launch. These principles shape
                how we plan, build, review, and hand over our work.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {deliveryPrinciples.map((principle, i) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass-strong rounded-2xl p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center mb-4">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-base mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {principle.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Gauge size={14} /> How We Work
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                A process built for{" "}
                <span className="text-gradient">clarity, not chaos</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Every HEROY project moves through the same six stages —
                so you always know what's happening, what's next, and
                when to expect it.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="glass rounded-2xl p-6 relative overflow-hidden"
                  >
                    <span className="absolute top-4 right-5 font-display font-bold text-4xl text-white/5">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-4 relative">
                      <Icon size={18} className="text-background" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-base mb-2 relative">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed relative">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Award size={14} /> Why HEROY
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Why businesses choose a{" "}
                <span className="text-gradient-warm">small, focused team</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Being a lean studio isn't a limitation we work around — it's
                the reason our clients get better outcomes.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-strong rounded-2xl p-7 flex gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-base mb-2">
                        {adv.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {adv.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Users size={14} /> Our Team
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Meet the <span className="text-gradient">founding team</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                HEROY is a lean, hands-on starter team — three specialists
                who each own their craft end to end, so every project gets
                direct attention from the people actually building it.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 text-center group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="badge mb-4">
                <MessageSquareHeart size={14} /> Common Questions
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Questions people ask{" "}
                <span className="text-gradient">before working with us</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    >
                      <span className="font-display font-medium text-white text-sm sm:text-base">
                        {item.q}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-white/5 border border-border flex items-center justify-center shrink-0 text-muted">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-sm text-muted leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
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
                Built on code, driven by{" "}
                <span className="text-gradient-warm">purpose</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Every line of code, every design decision, and every marketing
                strategy we deliver is grounded in one goal — helping our
                clients succeed. That is the standard we hold ourselves to on
                every project, every time.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
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