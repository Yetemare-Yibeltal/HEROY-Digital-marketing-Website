"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const typewriterWords = ["Your Budget", "Your Goals", "Your Timeline", "Your Vision"];

const plans = [
  {
    name: "Starter",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    monthlyPrice: 499,
    yearlyPrice: 399,
    description: "Perfect for small businesses and startups launching their first digital presence.",
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
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.4)",
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    description: "For growing businesses that need a powerful website with marketing built in.",
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
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    description: "Full-service digital transformation for established businesses that need everything.",
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
    cta: "Contact Us",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade at any time. We will credit what you have already paid toward the new plan.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Absolutely. If none of these plans fit your needs exactly, book a free consultation and we will build a custom quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, PayPal, and Stripe. We typically work on a 50% deposit upfront and 50% on delivery.",
  },
  {
    q: "Are there ongoing monthly fees?",
    a: "The prices shown are one-time project fees. Ongoing hosting, domain, and maintenance are separate and optional.",
  },
  {
    q: "How long does delivery take?",
    a: "Starter takes 2 weeks, Growth takes 4 weeks, and Enterprise timelines are scoped per project during the discovery phase.",
  },
  {
    q: "What if I am not happy with the result?",
    a: "We offer revision rounds included in each plan. We work with you until you are completely satisfied with the deliverable.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4" style={{ animationDelay: "6s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Plans built around{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-8"
          >
            No hidden fees, no vague estimates. Every plan comes with a
            clear scope, timeline, and deliverables, so you always know
            exactly what you are paying for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 glass rounded-full px-2 py-2"
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !yearly
                  ? "bg-grad-primary text-background"
                  : "text-muted hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                yearly
                  ? "bg-grad-primary text-background"
                  : "text-muted hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-[10px] font-bold text-accent-gold">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    plan.popular
                      ? "bg-grad-primary"
                      : "glass"
                  }`}
                  onMouseEnter={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${plan.glow}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                    }
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent-gold text-background text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-5 ${plan.popular ? "bg-white/20" : ""}`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  <h2 className={`font-display font-bold text-2xl mb-1 ${plan.popular ? "text-background" : "text-white"}`}>
                    {plan.name}
                  </h2>

                  <p className={`text-sm leading-relaxed mb-5 ${plan.popular ? "text-background/80" : "text-muted"}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <motion.span
                      key={yearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`font-display font-bold text-4xl ${plan.popular ? "text-background" : "text-white"}`}
                    >
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                    <span className={`text-sm ml-1 ${plan.popular ? "text-background/70" : "text-muted"}`}>
                      / project
                    </span>
                    {yearly && (
                      <p className={`text-xs mt-1 ${plan.popular ? "text-background/60" : "text-muted"}`}>
                        Billed annually — you save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr
                      </p>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-background/20" : "bg-grad-primary"}`}>
                          <Check size={10} className={plan.popular ? "text-background" : "text-background"} />
                        </span>
                        <span className={plan.popular ? "text-background/90" : "text-muted"}>
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-background/10" : "bg-white/5"}`}>
                          <span className={`text-[10px] ${plan.popular ? "text-background" : "text-muted"}`}>✕</span>
                        </span>
                        <span className={plan.popular ? "text-background/60" : "text-muted"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/consultation"}
                    className={`w-full text-center py-3 rounded-full font-bold text-sm transition-all ${
                      plan.popular
                        ? "bg-background text-primary hover:bg-background/90"
                        : "btn-primary justify-center"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 sm:p-12 mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2 text-center">
              Need something <span className="text-gradient-warm">custom?</span>
            </h2>
            <p className="text-muted text-center max-w-lg mx-auto mb-8">
              Every project is different. If you need a combination of
              services, a specific technology, or a tight deadline, book a
              free call and we will build a tailored quote within 24 hours.
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
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-8"
            >
              Pricing <span className="text-gradient">FAQs</span>
            </motion.h2>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-display font-semibold text-sm text-white">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted text-xl leading-none ml-4 shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}