"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
Star,
Quote,
ArrowRight,
Sparkles,
Info,
MessageCircle,
Clock,
FileSignature,
Eye,
Gift,
ChevronDown,
CheckCircle2,
BarChart3,
Target,
Layers3,
ShieldCheck,
Workflow,
Search,
Gauge,
LineChart,
MousePointerClick,
Globe2,
Code2,
Megaphone,
BrainCircuit,
Smartphone,
Palette,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const categories = [
"All",
"Web Development",
"Digital Marketing",
"Mobile Apps",
"SEO",
"Branding",
"AI Solutions",
];

const sampleOutcomes = [
{
id: 1,
scenario: "A local business launching its first professional website",
category: "Web Development",
gradient: "from-violet-500 to-purple-700",
glow: "rgba(124,92,255,0.3)",
target:
"A fast, mobile-first site with clean architecture — built to load quickly, rank well from day one, and give the business room to grow without a rebuild.",
},
{
id: 2,
scenario:
"A retail brand wanting more qualified traffic, not just more traffic",
category: "Digital Marketing",
gradient: "from-cyan-500 to-blue-600",
glow: "rgba(34,211,238,0.3)",
target:
"A data-driven funnel where every channel is measured, every report is honest about what's working, and spend follows what actually converts.",
},
{
id: 3,
scenario: "A healthcare startup launching its first patient-facing app",
category: "Mobile Apps",
gradient: "from-emerald-500 to-teal-600",
glow: "rgba(34,197,94,0.3)",
target:
"An app built with compliance and data privacy considered from day one, not bolted on afterward — with support that continues past launch day.",
},
{
id: 4,
scenario: "A support team drowning in repetitive customer tickets",
category: "AI Solutions",
gradient: "from-orange-500 to-amber-600",
glow: "rgba(249,115,22,0.3)",
target:
"An AI assistant that resolves routine questions and hands complex requests cleanly to a human, with documentation your team can maintain.",
},
{
id: 5,
scenario:
"A brand wanting a product page that actually sells the product",
category: "Web Development",
gradient: "from-blue-500 to-indigo-600",
glow: "rgba(99,102,241,0.3)",
target:
"An interactive, fast-loading showcase that helps prospects understand the product before they ever talk to sales — built to convert, not just impress.",
},
{
id: 6,
scenario: "A founder with inconsistent inbound leads",
category: "Digital Marketing",
gradient: "from-fuchsia-500 to-purple-600",
glow: "rgba(217,70,239,0.3)",
target:
"A repeatable inbound engine — content, paid, and email working together — with transparent reporting on which activities are producing meaningful actions.",
},
{
id: 7,
scenario:
"An online store that's outgrown its off-the-shelf platform",
category: "Web Development",
gradient: "from-teal-500 to-cyan-600",
glow: "rgba(20,184,166,0.3)",
target:
"A custom storefront with the pricing logic, ordering workflows, integrations, or admin tools the business actually needs.",
},
{
id: 8,
scenario:
"A company whose brand no longer matches its ambitions",
category: "Branding",
gradient: "from-amber-500 to-yellow-600",
glow: "rgba(234,179,8,0.3)",
target:
"A visual identity backed by positioning and audience thinking — designed to create consistency across the website, campaigns, social presence, and sales materials.",
},
{
id: 9,
scenario:
"A founder needing a web and mobile app that share one backend",
category: "Mobile Apps",
gradient: "from-indigo-500 to-violet-600",
glow: "rgba(99,102,241,0.3)",
target:
"A shared architecture that avoids unnecessary duplication and allows product capabilities to evolve across web and mobile together.",
},
{
id: 10,
scenario:
"A real estate business invisible in local search results",
category: "SEO",
gradient: "from-pink-500 to-rose-600",
glow: "rgba(236,72,153,0.3)",
target:
"Technical SEO, useful location-focused content, internal linking, structured data where appropriate, and Search Console measurement tied to business goals.",
},
{
id: 11,
scenario:
"A logistics team running operations on scattered spreadsheets",
category: "Web Development",
gradient: "from-slate-500 to-gray-700",
glow: "rgba(100,116,139,0.3)",
target:
"A single operational dashboard for tracking, dispatch, reporting, and role-based workflows — replacing repetitive manual processes with a system designed around the team's actual work.",
},
{
id: 12,
scenario:
"An NGO with a limited budget and a real deadline",
category: "Digital Marketing",
gradient: "from-green-500 to-emerald-600",
glow: "rgba(34,197,94,0.3)",
target:
"Clear prioritisation around the highest-value activities first, with transparent scope and measurable campaign objectives instead of promising outcomes that cannot be guaranteed.",
},
];

const commitments = [
{
icon: MessageCircle,
title: "Direct communication",
text:
"You talk to the person building your product — via WhatsApp, Telegram, email, or call, whichever you prefer.",
},
{
icon: Clock,
title: "24-hour response time",
text:
"Messages during a live project get a response within 24 hours, typically much sooner.",
},
{
icon: FileSignature,
title: "Written scope before work starts",
text:
"You'll always have a clear, written agreement on deliverables, timeline, and price before any work begins.",
},
{
icon: Eye,
title: "Visibility into progress",
text:
"Regular check-ins and access to work-in-progress — never radio silence between kickoff and delivery.",
},
];

const measurementAreas = [
{
id: "acquisition",
icon: MousePointerClick,
title: "Acquisition",
label: "Where attention comes from",
description:
"Understand how people discover the business before judging whether marketing is working.",
metrics: [
"Search impressions",
"Search clicks",
"Traffic sources",
"Landing-page visits",
"Campaign source / medium",
],
},
{
id: "engagement",
icon: Target,
title: "Engagement",
label: "What visitors actually do",
description:
"Measure meaningful interactions instead of treating every page view as a success.",
metrics: [
"CTA interactions",
"Form starts",
"Form completions",
"Important page views",
"Tracked conversion events",
],
},
{
id: "technical",
icon: Gauge,
title: "Experience",
label: "How the product performs",
description:
"Technical quality matters because users experience the website before they experience the sales team.",
metrics: [
"Core Web Vitals",
"Mobile responsiveness",
"Accessibility checks",
"Navigation quality",
"Error and broken-link checks",
],
},
{
id: "growth",
icon: LineChart,
title: "Growth",
label: "What changes over time",
description:
"Use measured data to decide what should be improved, expanded, tested, or stopped.",
metrics: [
"Organic search trends",
"Conversion trends",
"Content opportunities",
"Campaign performance",
"Lead-quality signals",
],
},
];

const deliveryStages = [
{
number: "01",
icon: MessageCircle,
title: "Discover",
description:
"We clarify the business model, audience, offer, existing digital assets, constraints, and the outcome the project needs to support.",
},
{
number: "02",
icon: Target,
title: "Define",
description:
"The scope becomes concrete: priorities, pages, features, integrations, measurement requirements, responsibilities, and delivery milestones.",
},
{
number: "03",
icon: Layers3,
title: "Build",
description:
"Design, content structure, frontend, backend, integrations, SEO foundations, analytics requirements, and responsive behaviour are developed together.",
},
{
number: "04",
icon: ShieldCheck,
title: "Validate",
description:
"The product is reviewed across functionality, responsive layouts, forms, links, performance considerations, accessibility, metadata, and tracking.",
},
{
number: "05",
icon: LineChart,
title: "Launch & learn",
description:
"After launch, real behaviour becomes the source of truth. Search Console, analytics, conversion data, and user feedback guide the next iteration.",
},
];

const technicalStandards = [
{
icon: Gauge,
title: "Performance",
text:
"We treat loading performance and Core Web Vitals as engineering considerations, not decorative dashboard numbers.",
tag: "Core Web Vitals",
},
{
icon: Search,
title: "Search visibility",
text:
"Technical SEO, useful content, crawlability, metadata, internal linking, and Search Console data work together.",
tag: "SEO",
},
{
icon: ShieldCheck,
title: "Accessibility",
text:
"Accessibility is considered through semantic structure, keyboard interaction, readable interfaces, focus states, and WCAG-informed implementation.",
tag: "WCAG 2.2",
},
{
icon: BarChart3,
title: "Measurement",
text:
"Important actions can be mapped to analytics events so decisions are based on observed behaviour rather than assumptions.",
tag: "GA4",
},
];

const faqItems = [
{
question: "Are the scenarios on this page real client testimonials?",
answer:
"No. They are deliberately presented as service scenarios and delivery frameworks, not client quotes or fabricated case studies. We will publish genuine testimonials and measurable project results as real projects are completed and clients approve what can be shared.",
},
{
question: "What does 'measurable' mean for a website project?",
answer:
"It depends on the project. Measurement can include technical indicators such as performance and accessibility, search indicators such as impressions and clicks, and business interactions such as contact submissions, calls, purchases, bookings, or other agreed conversion events.",
},
{
question: "Do you guarantee Google rankings or a specific number of leads?",
answer:
"No responsible agency can guarantee a specific organic ranking or business outcome because search systems, competition, market demand, budgets, offers, and user behaviour are outside a development team's complete control. The focus is on building the technical and strategic foundations, measuring what happens, and improving from evidence.",
},
{
question: "Can an existing website be improved instead of rebuilt?",
answer:
"Yes. A rebuild is not automatically the right answer. Existing architecture, analytics, search visibility, content, integrations, and technical constraints can be reviewed first so that only the parts that actually need to change are changed.",
},
{
question: "What happens after launch?",
answer:
"Launch is treated as a transition rather than the end of the work. Depending on the agreement, the next phase can include monitoring, technical fixes, content improvements, SEO iteration, analytics review, conversion optimisation, or feature development.",
},
];

const typewriterWords = [
"Clients",
"Partners",
"Teams",
"Founders",
"Leaders",
];

export default function TestimonialsPageClient() {
const [active, setActive] = useState("All");
const [activeMeasurement, setActiveMeasurement] = useState("acquisition");
const [openFaq, setOpenFaq] = useState<number | null>(0);

const filtered = useMemo(
() =>
active === "All"
? sampleOutcomes
: sampleOutcomes.filter((t) => t.category === active),
[active]
);

const currentMeasurement =
measurementAreas.find((item) => item.id === activeMeasurement) ??
measurementAreas[0];

return ( <div className="relative overflow-hidden bg-background">
{/* Ambient background */} <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
<div
className="glow-orb w-80 h-80 bg-accent/10 top-[42%] -left-20"
style={{ animationDelay: "3s" }}
/>
<div
className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4"
style={{ animationDelay: "6s" }}
/>

```
  {/* Hero */}
  <section className="section pt-36 pb-16 relative">
    <div className="container-px mx-auto max-w-[1600px]">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 xl:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-6">
            <Sparkles size={14} /> How We Work
          </span>

          <h1 className="font-display font-extrabold tracking-[-0.04em] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] mb-7 text-white">
            Built for{" "}
            <TypewriterText
              words={typewriterWords}
              className="text-gradient"
            />{" "}
            who expect{" "}
            <span className="text-white">evidence, not promises.</span>
          </h1>

          <p className="text-muted text-base sm:text-lg xl:text-xl leading-8 max-w-3xl mb-8">
            HEROY builds websites, digital products, growth systems, and
            automation around measurable business objectives. We don't
            manufacture testimonials or publish performance numbers we
            cannot substantiate.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/consultation" className="btn-primary">
              Start a Conversation
              <ArrowRight size={16} />
            </Link>

            <Link href="/case-studies" className="btn-outline">
              Explore Case Studies
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              ["Strategy", "Business-first planning"],
              ["Engineering", "Production-ready systems"],
              ["Measurement", "Decisions from real data"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="glass rounded-2xl p-4 border border-white/5"
              >
                <p className="text-xs font-bold text-white mb-1">
                  {title}
                </p>
                <p className="text-[11px] leading-relaxed text-muted">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />

          <div className="relative glass-strong rounded-[2rem] p-6 sm:p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
                  Delivery dashboard
                </p>
                <h2 className="font-display font-bold text-xl text-white">
                  What gets measured
                </h2>
              </div>

              <div className="w-10 h-10 rounded-xl bg-grad-primary flex items-center justify-center">
                <BarChart3 size={18} className="text-background" />
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Globe2,
                  title: "Acquisition",
                  text: "Search, campaigns & traffic sources",
                },
                {
                  icon: MousePointerClick,
                  title: "Interactions",
                  text: "Forms, CTAs & conversion events",
                },
                {
                  icon: Gauge,
                  title: "Experience",
                  text: "Performance, mobile & accessibility",
                },
                {
                  icon: LineChart,
                  title: "Growth",
                  text: "Trends, opportunities & iteration",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.3 + index * 0.08,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-accent" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {item.text}
                      </p>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="ml-auto text-accent shrink-0"
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-grad-mix p-[1px]">
              <div className="rounded-2xl bg-background/90 px-5 py-4">
                <div className="flex gap-3 items-start">
                  <Info
                    size={16}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-muted leading-relaxed">
                    Measurement is agreed around the actual project.
                    There is no universal KPI that makes sense for every
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Credibility strip */}
  <section className="relative border-y border-white/5 bg-white/[0.015]">
    <div className="container-px mx-auto max-w-[1600px] py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          {
            icon: Code2,
            label: "Engineering",
            value: "Production-minded",
          },
          {
            icon: Search,
            label: "SEO",
            value: "Search-informed",
          },
          {
            icon: BarChart3,
            label: "Analytics",
            value: "Event-aware",
          },
          {
            icon: ShieldCheck,
            label: "Accessibility",
            value: "WCAG-informed",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <Icon size={17} className="text-accent" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted/70">
                  {item.label}
                </p>
                <p className="text-xs font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Scenario / service framework section */}
  <section className="section pt-20 relative">
    <div className="container-px mx-auto max-w-[1600px]">
      <div className="max-w-3xl mb-12">
        <span className="badge mb-4">
          <Target size={14} /> Service Outcome Frameworks
        </span>

        <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
          Start with the business problem.
          <span className="text-gradient"> Build around the outcome.</span>
        </h2>

        <p className="text-muted text-base sm:text-lg leading-8">
          These are not testimonials. They are representative project
          scenarios showing how we translate a business problem into
          technical, marketing, and measurement decisions. Actual client
          results are only published when they exist and can be verified
          and shared.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all ${
              active === cat
                ? "bg-grad-primary text-background border-transparent"
                : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-white/[0.03]"
            }`}
            style={
              active === cat
                ? {
                    boxShadow:
                      "0 8px 30px rgba(124,92,255,0.35)",
                  }
                : undefined
            }
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-24"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: (i % 4) * 0.06,
              }}
              whileHover={{ y: -7 }}
              className="glass rounded-2xl p-6 flex flex-col relative overflow-hidden group cursor-default min-h-[310px]"
              onMouseEnter={(e) => {
                (
                  e.currentTarget as HTMLElement
                ).style.boxShadow = `0 20px 55px ${t.glow}`;
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget as HTMLElement
                ).style.boxShadow =
                  "0 0 0 rgba(0,0,0,0)";
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top left, ${t.glow}, transparent 70%)`,
                }}
              />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <Quote
                    size={22}
                    className="text-primary/30"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted/60">
                    Framework
                  </span>
                </div>

                <p className="text-sm font-bold text-white mb-3 leading-6">
                  {t.scenario}
                </p>

                <p className="text-xs text-muted leading-6 mb-6 flex-1">
                  {t.target}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] uppercase tracking-wide text-muted/70">
                    Illustrative use case
                  </span>

                  <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-16">
          No examples in this category yet.
        </p>
      )}

      {/* Measurement */}
      <section className="mb-24">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="badge mb-4">
              <BarChart3 size={14} /> Measurement Framework
            </span>

            <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl text-white mb-5">
              No vanity dashboard.
              <span className="text-gradient">
                {" "}
                Useful signals.
              </span>
            </h2>

            <p className="text-muted leading-7 mb-7">
              Digital marketing becomes more useful when acquisition,
              behaviour, technical experience, and business outcomes can
              be connected. The exact implementation depends on the
              project and the data available.
            </p>

            <div className="grid gap-2">
              {measurementAreas.map((item) => {
                const Icon = item.icon;
                const isActive = activeMeasurement === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setActiveMeasurement(item.id)
                    }
                    className={`text-left flex items-center gap-4 rounded-2xl p-4 border transition-all ${
                      isActive
                        ? "border-primary/40 bg-primary/10"
                        : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-grad-primary"
                          : "bg-white/5"
                      }`}
                    >
                      <Icon
                        size={17}
                        className={
                          isActive
                            ? "text-background"
                            : "text-muted"
                        }
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-muted mt-1">
                        {item.label}
                      </p>
                    </div>

                    {isActive && (
                      <ArrowRight
                        size={15}
                        className="ml-auto text-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={currentMeasurement.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-strong rounded-[2rem] p-7 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                    Measurement layer
                  </p>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                    {currentMeasurement.title}
                  </h3>

                  <p className="text-sm text-muted leading-7 max-w-2xl">
                    {currentMeasurement.description}
                  </p>
                </div>

                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-grad-mix items-center justify-center shrink-0">
                  <currentMeasurement.icon
                    size={20}
                    className="text-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {currentMeasurement.metrics.map(
                  (metric, index) => (
                    <motion.div
                      key={metric}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="rounded-2xl border border-white/5 bg-white/[0.025] p-4 flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-accent shrink-0"
                      />
                      <span className="text-xs font-semibold text-white">
                        {metric}
                      </span>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-7 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <span className="text-[9px] uppercase tracking-wider text-muted/60 mr-2 py-1">
                  Relevant tools / standards
                </span>

                {currentMeasurement.id === "acquisition" && (
                  <>
                    <span className="tag">Search Console</span>
                    <span className="tag">Analytics</span>
                    <span className="tag">UTM</span>
                  </>
                )}

                {currentMeasurement.id === "engagement" && (
                  <>
                    <span className="tag">GA4 Events</span>
                    <span className="tag">Conversion Tracking</span>
                    <span className="tag">Forms</span>
                  </>
                )}

                {currentMeasurement.id === "technical" && (
                  <>
                    <span className="tag">Core Web Vitals</span>
                    <span className="tag">Responsive QA</span>
                    <span className="tag">WCAG 2.2</span>
                  </>
                )}

                {currentMeasurement.id === "growth" && (
                  <>
                    <span className="tag">Reporting</span>
                    <span className="tag">SEO Insights</span>
                    <span className="tag">Iteration</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery process */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge mb-4">
            <Workflow size={14} /> Delivery System
          </span>

          <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            A clear path from{" "}
            <span className="text-gradient">idea to iteration.</span>
          </h2>

          <p className="text-muted leading-7">
            The goal is not to make the process complicated. It is to make
            important decisions visible before they become expensive
            problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {deliveryStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="text-xs font-black tracking-wider text-accent">
                    {stage.number}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-grad-primary transition-colors">
                    <Icon
                      size={17}
                      className="text-accent group-hover:text-background"
                    />
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-base mb-3">
                  {stage.title}
                </h3>

                <p className="text-xs text-muted leading-6">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="mb-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 xl:gap-20 items-center">
          <div>
            <span className="badge mb-4">
              <ShieldCheck size={14} /> Professional Foundations
            </span>

            <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              Built with the standards behind the{" "}
              <span className="text-gradient">
                visible interface.
              </span>
            </h2>

            <p className="text-muted leading-7 mb-6">
              A polished website is only one layer. Strong digital work
              also needs sound measurement, technical foundations,
              accessibility considerations, and a maintainable architecture.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">Core Web Vitals</span>
              <span className="tag">GA4</span>
              <span className="tag">Search Console</span>
              <span className="tag">WCAG 2.2</span>
              <span className="tag">Structured Data</span>
              <span className="tag">Responsive Design</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {technicalStandards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center">
                      <Icon
                        size={18}
                        className="text-background"
                      />
                    </div>

                    <span className="text-[9px] uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted leading-6">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="badge mb-4">
            <MessageCircle size={14} /> Our Commitment
          </span>

          <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl text-white mb-4">
            What every client{" "}
            <span className="text-gradient">
              can count on.
            </span>
          </h2>

          <p className="text-muted leading-7">
            While our first reviews are still being written, these
            commitments aren't — they apply to every project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                  <Icon
                    size={18}
                    className="text-background"
                  />
                </div>

                <h3 className="font-display font-bold text-white text-sm mb-3">
                  {c.title}
                </h3>

                <p className="text-xs text-muted leading-6">
                  {c.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-24">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10 xl:gap-24">
          <div>
            <span className="badge mb-4">
              <Info size={14} /> Straight Answers
            </span>

            <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl text-white mb-5">
              Before you{" "}
              <span className="text-gradient">work with us.</span>
            </h2>

            <p className="text-muted leading-7">
              No inflated case-study language. No guaranteed rankings.
              No invented reviews. Just a clear explanation of how the
              work is approached and measured.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-primary/30 bg-primary/[0.04]"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 text-left p-5 sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`text-muted shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-muted leading-7 max-w-4xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding client CTA */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong rounded-[2rem] p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden"
      >
        <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
        <div
          className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-4xl mx-auto">
          <span className="badge mb-5">
            <Gift size={14} /> Founding Client Opportunity
          </span>

          <h2 className="font-display font-extrabold tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl mb-5 text-white">
            Build something worth{" "}
            <span className="text-gradient">
              measuring.
            </span>
          </h2>

          <p className="text-muted max-w-2xl mx-auto leading-7 mb-9">
            As a growing studio, we are building our public body of work
            project by project. If your business has a real problem to
            solve, let's define the scope, the technical approach, and the
            measurements that matter before either side commits.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="btn-primary"
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/case-studies"
              className="btn-outline"
            >
              View Case Studies
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 text-[10px] uppercase tracking-wider text-muted/60">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={13} />
              Clear scope
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={13} />
              Transparent communication
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={13} />
              Measurable objectives
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</div>

);
}
