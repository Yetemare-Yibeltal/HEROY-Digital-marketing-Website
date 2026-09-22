"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  FileCheck,
  Repeat,
  UserPlus,
  Building2,
  Landmark,
  ShoppingBag,
  Home,
  GraduationCap,
  HeartHandshake,
  Rocket,
  Truck,
  Plus,
  Minus,
} from "lucide-react";
import { services } from "./servicesData";

const engagementModels = [
  {
    icon: FileCheck,
    title: "Fixed-Scope Project",
    text: "A clearly defined deliverable, timeline, and price agreed upfront — ideal for a new website, app, or one-off build with a known scope.",
    fit: "Best for: a single defined project",
  },
  {
    icon: Repeat,
    title: "Retainer / Ongoing Support",
    text: "A recurring monthly arrangement for continuous updates, feature additions, content, and maintenance after your product is live.",
    fit: "Best for: products that need to keep evolving",
  },
  {
    icon: UserPlus,
    title: "Dedicated Team Extension",
    text: "Our specialists plug directly into your existing team and workflow for the duration of a larger initiative, reporting the way your team already works.",
    fit: "Best for: larger or longer-term initiatives",
  },
];

const industries = [
  { icon: Building2, label: "FinTech & Finance" },
  { icon: HeartHandshake, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-Commerce & Retail" },
  { icon: Home, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "NGOs & Nonprofits" },
  { icon: Rocket, label: "Startups" },
  { icon: Truck, label: "Logistics & Delivery" },
];

const serviceFaqs = [
  {
    q: "How is pricing determined for a project?",
    a: "Pricing depends on scope, timeline, and complexity — a landing page costs far less than a full SaaS platform. After an initial call, we send a written quote with a fixed price for defined-scope work, or a clear hourly/monthly rate for retainer and dedicated-team engagements. No hidden fees.",
  },
  {
    q: "How long does a typical project take?",
    a: "A marketing website usually takes 2–4 weeks. A custom web app or mobile app typically runs 6–12 weeks depending on features. We give you a realistic timeline before work starts, and flag early if anything changes it.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes a post-launch support window for fixes, and we offer ongoing retainer plans for teams that want continuous updates, monitoring, and new features after that.",
  },
  {
    q: "Can you work with our existing codebase or team?",
    a: "Yes — we regularly join existing projects, review the current codebase, and either extend it or recommend a migration path if that serves you better long-term. We're upfront if a rebuild isn't the right call.",
  },
  {
    q: "Do you sign NDAs and contracts?",
    a: "Yes. We're happy to sign an NDA before discussing project details, and every engagement is covered by a written agreement outlining scope, timeline, and payment terms before any work begins.",
  },
];

export default function ServicesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div className="glow-orb w-72 h-72 bg-accent/10 top-1/3 -left-20" style={{ animationDelay: "3s" }} />

      <section className="section pt-36 relative">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="badge mb-4">
              <Sparkles size={14} /> Our Services
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
              Everything you need to{" "}
              <span className="text-gradient">build and grow</span> online
            </h1>
            <p className="text-muted leading-relaxed">
              From strategy and design to full-stack development and AI —
              HEROY delivers end-to-end digital solutions tailored to your
              goals, all handled directly by the specialists doing the work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block h-full"
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
                </motion.div>
              );
            })}
          </div>

          {/* Engagement models */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">How You Can Work With Us</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Three ways to{" "}
                <span className="text-gradient">engage HEROY</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Every business's needs are different — pick the engagement
                model that fits how you actually want to work with us.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {engagementModels.map((model, i) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="glass-strong rounded-2xl p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                      <Icon size={18} className="text-background" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-base mb-2">
                      {model.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {model.text}
                    </p>
                    <span className="text-xs font-semibold text-accent">
                      {model.fit}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">Industries</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Built to serve{" "}
                <span className="text-gradient-warm">every industry</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Our stack and process adapt to your sector's specific needs
                — from compliance-heavy platforms to fast-moving startups.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="glass rounded-xl p-5 flex flex-col items-center text-center gap-3"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </span>
                    <span className="text-xs text-muted font-medium">
                      {ind.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="badge mb-4">Questions</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Services{" "}
                <span className="text-gradient">FAQ</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {serviceFaqs.map((item, i) => {
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

          {/* CTA */}
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
                Not sure which service you need?
              </h2>
              <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Book a free 30-minute consultation and we'll help you figure
                out exactly what your project needs — no pressure, no sales
                script.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultation" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link href="/pricing" className="btn-outline">
                  View Pricing
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