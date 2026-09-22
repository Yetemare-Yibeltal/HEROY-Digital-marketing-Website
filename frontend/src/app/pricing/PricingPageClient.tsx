"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Building2,
  Rocket,
  FileCode2,
  Unlock,
  Users2,
  Wrench,
  ShieldCheck,
  Plus,
  Minus,
  Target,
  Layers3,
  MessageSquare,
  CircleDollarSign,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const typewriterWords = [
  "Your Budget",
  "Your Goals",
  "Your Timeline",
  "Your Vision",
];

const plans = [
  {
    name: "Starter",
    eyebrow: "Launch",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    monthlyPrice: 499,
    yearlyPrice: 399,
    description:
      "A focused digital foundation for small businesses, professionals, and early-stage startups establishing their online presence.",
    features: [
      "5-page professional website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Google Analytics setup",
      "30-day post-launch support",
      "1 round of revisions",
      "Delivery in 2 weeks",
    ],
    notIncluded: [
      "E-commerce functionality",
      "Custom backend development",
      "AI integrations",
    ],
    cta: "Start Your Project",
    popular: false,
  },
  {
    name: "Growth",
    eyebrow: "Scale",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.4)",
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    description:
      "A stronger digital platform for growing businesses that need custom design, content, performance, and marketing capabilities.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Full technical SEO",
      "CMS integration (Sanity or Contentful)",
      "Blog and content system",
      "Performance optimization",
      "Social media integration",
      "Google Ads setup",
      "3 months support",
      "3 rounds of revisions",
      "Delivery in 4 weeks",
    ],
    notIncluded: [
      "Custom mobile app",
      "AI chatbot integration",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    eyebrow: "Transform",
    icon: Building2,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    description:
      "A comprehensive digital engagement for established organizations requiring advanced software, automation, creative, and ongoing support.",
    features: [
      "Unlimited pages",
      "Custom full-stack development",
      "Mobile app (iOS and Android)",
      "AI chatbot and automation",
      "E-commerce or SaaS features",
      "Advanced SEO and content strategy",
      "Full digital marketing setup",
      "Video production (2 videos)",
      "Graphics design package",
      "6 months dedicated support",
      "Unlimited revisions",
      "Dedicated project manager",
      "Weekly progress calls",
    ],
    notIncluded: [],
    cta: "Discuss Your Project",
    popular: false,
  },
];

const included = [
  {
    icon: FileCode2,
    title: "Source Code Ownership",
    label: "Full source code ownership",
  },
  {
    icon: Unlock,
    title: "No Long-Term Lock-In",
    label: "No long-term lock-in contracts",
  },
  {
    icon: Users2,
    title: "Direct Collaboration",
    label: "Direct access to your dev team",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    label: "NDA available on request",
  },
];

const addOns = [
  {
    name: "Extra page or section",
    price: "$99",
    note: "Per page beyond your plan's included pages",
  },
  {
    name: "Additional revision round",
    price: "$149",
    note: "Per round beyond your plan's included revisions",
  },
  {
    name: "Rush delivery",
    price: "+30%",
    note: "Of project price for an accelerated turnaround",
  },
  {
    name: "Monthly care & maintenance",
    price: "From $149/mo",
    note: "Updates, monitoring, small fixes, and priority support",
  },
  {
    name: "Additional language / localization",
    price: "$199",
    note: "Per language, including translated content",
  },
  {
    name: "Professional copywriting",
    price: "$79",
    note: "Per page, written and optimized for your audience",
  },
];

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can move to a larger engagement as your requirements evolve. We can review the work already completed and structure the next phase around the additional functionality you need.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Absolutely. If your project combines several services, requires a specific technology, or falls outside the listed plans, book a free consultation and we can prepare a tailored scope and quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, Telebirr, PayPal, and Stripe. We typically work with a 50% deposit upfront and 50% on delivery, with milestone-based payment structures available for larger Enterprise projects.",
  },
  {
    q: "Are there ongoing monthly fees?",
    a: "The listed project prices are one-time project fees. Hosting, domain registration, and ongoing maintenance are separate and optional. Monthly care and maintenance is available for teams that want continued technical support.",
  },
  {
    q: "How long does delivery take?",
    a: "Starter projects are planned around a 2-week delivery window, Growth projects around 4 weeks, while Enterprise timelines are scoped around the project's technical requirements, content, integrations, and approval process.",
  },
  {
    q: "What if I am not happy with the result?",
    a: "Each plan includes defined revision rounds so feedback can be incorporated during production. We establish the scope and review process before development begins to keep expectations clear throughout the engagement.",
  },
  {
    q: "Do I own the code and design after the project ends?",
    a: "Yes. Once final payment is completed, ownership of the agreed project source code, design files, and content transfers to you. There is no ongoing licensing fee simply to keep using the delivered work.",
  },
  {
    q: "What happens if I need to cancel mid-project?",
    a: "You can discuss cancellation with the team at any point. Work completed up to the cancellation point is reviewed and delivered according to the applicable project agreement, with billing handled according to the work already performed and agreed milestones.",
  },
];

const pricingPrinciples = [
  {
    icon: Target,
    title: "Clear Scope",
    text: "Every engagement starts with defined deliverables, requirements, and expectations before development begins.",
  },
  {
    icon: Layers3,
    title: "Flexible Delivery",
    text: "Choose a focused website, a broader digital platform, or a custom engagement based on what your organization actually needs.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    text: "Stay connected with the people working on your project and receive clear communication throughout delivery.",
  },
];

export default function PricingPageClient() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />

      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20"
        style={{ animationDelay: "3s" }}
      />

      <div
        className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4"
        style={{ animationDelay: "6s" }}
      />

      {/* Hero */}
      <section className="section pt-36 pb-14 relative">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="badge mb-5">
              <CircleDollarSign size={14} />
              Transparent Pricing
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 text-white"
            >
              Plans built around{" "}
              <TypewriterText
                words={typewriterWords}
                className="text-gradient"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-base sm:text-lg lg:text-xl leading-8 max-w-3xl mx-auto"
            >
              Straightforward project pricing for modern websites, digital
              products, applications, and growth initiatives — with clear
              scope, defined deliverables, and no intentionally hidden fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-8"
            >
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-muted">
                Clear Scope
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-muted">
                Defined Deliverables
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-muted">
                Direct Communication
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-muted">
                Flexible Engagement
              </span>
            </motion.div>

            {/* Pricing toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-2 glass rounded-full p-1.5"
              aria-label="Pricing rate selection"
            >
              <button
                type="button"
                onClick={() => setYearly(false)}
                aria-pressed={!yearly}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  !yearly
                    ? "bg-grad-primary text-background shadow-lg"
                    : "text-muted hover:text-white"
                }`}
              >
                Standard Rate
              </button>

              <button
                type="button"
                onClick={() => setYearly(true)}
                aria-pressed={yearly}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  yearly
                    ? "bg-grad-primary text-background shadow-lg"
                    : "text-muted hover:text-white"
                }`}
              >
                Annual Rate
                <span className="ml-2 text-[10px] font-extrabold text-accent-gold">
                  Save 20%
                </span>
              </button>
            </motion.div>

            <p className="text-[11px] text-muted/70 mt-3">
              Select the pricing rate that best fits your engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing plans */}
      <section className="section pt-4 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch mb-14">
            {plans.map((plan, i) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-3xl p-[1px] ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary via-accent to-primary/20"
                      : "bg-white/[0.08]"
                  }`}
                >
                  <div
                    className={`relative rounded-[23px] p-7 sm:p-8 flex flex-col h-full ${
                      plan.popular ? "bg-background" : "glass"
                    }`}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        e.currentTarget.style.boxShadow = `0 20px 60px ${plan.glow}`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        e.currentTarget.style.boxShadow =
                          "0 0 0 rgba(0,0,0,0)";
                      }
                    }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 bg-accent-gold text-background text-[10px] font-extrabold px-4 py-2 rounded-full uppercase tracking-[0.12em] shadow-xl">
                          <Sparkles size={11} />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={20} className="text-white" />
                      </div>

                      <span
                        className={`text-[10px] uppercase tracking-[0.18em] font-extrabold ${
                          plan.popular
                            ? "text-accent"
                            : "text-muted/70"
                        }`}
                      >
                        {plan.eyebrow}
                      </span>
                    </div>

                    <h2
                      className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-3 ${
                        plan.popular ? "text-white" : "text-white"
                      }`}
                    >
                      {plan.name}
                    </h2>

                    <p className="text-sm leading-6 text-muted min-h-[72px] mb-7">
                      {plan.description}
                    </p>

                    <div className="mb-7 pb-7 border-b border-border">
                      <div className="flex items-end gap-2">
                        <motion.span
                          key={`${plan.name}-${yearly ? "annual" : "standard"}`}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-white"
                        >
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>

                        <span className="text-sm text-muted pb-1">
                          / project
                        </span>
                      </div>

                      {yearly && (
                        <p className="text-xs text-accent mt-2 font-semibold">
                          Annual rate · Save 20% compared with standard pricing
                        </p>
                      )}
                    </div>

                    <div className="mb-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] font-extrabold text-muted/60">
                        What&apos;s included
                      </p>
                    </div>

                    <ul className="flex flex-col gap-3 mb-7 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="w-5 h-5 rounded-full bg-grad-primary flex items-center justify-center shrink-0 mt-0.5">
                            <Check
                              size={11}
                              className="text-background"
                            />
                          </span>

                          <span className="text-muted leading-5">
                            {feature}
                          </span>
                        </li>
                      ))}

                      {plan.notIncluded.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm opacity-40"
                        >
                          <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-[10px] text-muted">
                              ×
                            </span>
                          </span>

                          <span className="text-muted leading-5">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={
                        plan.name === "Enterprise"
                          ? "/contact"
                          : "/consultation"
                      }
                      className={`w-full text-center py-3.5 px-5 rounded-full font-bold text-sm transition-all inline-flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-grad-primary text-background hover:opacity-90"
                          : "btn-primary justify-center"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Included with every engagement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-accent">
                Included With Every Engagement
              </span>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mt-3">
                A clearer way to work together
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {included.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    className="glass rounded-2xl p-5 flex items-center gap-4"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Pricing principles */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Sparkles size={13} />
                How We Price
              </span>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4">
                Built around{" "}
                <span className="text-gradient">clarity and flexibility</span>
              </h2>

              <p className="text-sm sm:text-base text-muted leading-7">
                Pricing should make it easier to understand your options, not
                harder. Our engagement structure is designed around scope,
                delivery requirements, and the level of support your project
                needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPrinciples.map((principle, i) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="glass-strong rounded-2xl p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                      <Icon size={18} className="text-background" />
                    </div>

                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {principle.title}
                    </h3>

                    <p className="text-sm text-muted leading-6">
                      {principle.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Wrench size={14} />
                Flexible Add-Ons
              </span>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 tracking-tight">
                Add exactly what{" "}
                <span className="text-gradient">your project needs</span>
              </h2>

              <p className="text-sm sm:text-base text-muted leading-7">
                Extend your selected plan with focused services instead of
                paying for functionality you do not need.
              </p>
            </motion.div>

            <div className="glass rounded-3xl overflow-hidden border border-white/[0.08]">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                  }}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-8 py-6 ${
                    i !== addOns.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center shrink-0">
                      <Plus size={15} className="text-accent" />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {addon.name}
                      </p>

                      <p className="text-xs text-muted mt-1 leading-5">
                        {addon.note}
                      </p>
                    </div>
                  </div>

                  <span className="font-display font-extrabold text-accent text-base sm:text-right shrink-0">
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 mb-24 overflow-hidden"
          >
            <div className="glow-orb w-72 h-72 bg-primary/20 -top-32 -right-20" />

            <div
              className="glow-orb w-64 h-64 bg-accent/15 -bottom-32 -left-20"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <span className="badge mb-5">
                <Sparkles size={13} />
                Custom Engagements
              </span>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-5">
                Your project does not have to fit{" "}
                <span className="text-gradient-warm">a template</span>
              </h2>

              <p className="text-muted text-sm sm:text-base leading-7 max-w-2xl mx-auto mb-8">
                Need a combination of services, a specific technology, a
                larger product team, or a different delivery structure? Tell
                us what you are building and we can shape the engagement
                around your actual requirements.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultation" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>

                <Link href="/contact" className="btn-outline">
                  Send Us a Brief
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="badge mb-4">
                <MessageSquare size={13} />
                Pricing Questions
              </span>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4">
                Pricing <span className="text-gradient">FAQs</span>
              </h2>

              <p className="text-sm sm:text-base text-muted leading-7 max-w-xl mx-auto">
                Practical answers about pricing, payment, ownership, delivery,
                support, and custom engagements.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;

                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.04,
                    }}
                    className="glass rounded-2xl overflow-hidden border border-white/[0.06]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : i)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`pricing-faq-answer-${i}`}
                      className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="font-display font-bold text-sm sm:text-base text-white leading-6">
                        {faq.q}
                      </span>

                      <span
                        className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center shrink-0 text-muted"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus size={14} />
                        ) : (
                          <Plus size={14} />
                        )}
                      </span>
                    </button>

                    <motion.div
                      id={`pricing-faq-answer-${i}`}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-muted leading-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
