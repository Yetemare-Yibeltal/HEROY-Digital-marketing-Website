"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Search,
  PenTool,
  Hammer,
  Target,
  ShieldCheck,
  BarChart3,
  Users,
  Database,
  Globe2,
  Gauge,
  LockKeyhole,
  Workflow,
  FileSearch,
  CheckCircle2,
  Layers3,
  MessageSquare,
  Code2,
  Megaphone,
  Accessibility,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.3)",
    focus: "Privacy & compliance first",
    description:
      "Patient engagement apps, telehealth platforms, appointment systems, and privacy-aware digital infrastructure that improves care delivery and patient outcomes.",
    services: ["Mobile Apps", "Web Portals", "AI Chatbots", "Data Dashboards"],
    challenges: [
      "Handling sensitive patient data securely from day one, not as an afterthought",
      "Making appointment booking and records access simple for non-technical patients",
      "Integrating with existing hospital or clinic systems without disrupting operations",
    ],
  },
  {
    icon: Landmark,
    name: "Finance & Fintech",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    focus: "Security & trust-building",
    description:
      "Secure fintech platforms, investment dashboards, payment systems, and branding that builds credibility with enterprise and retail clients.",
    services: ["SaaS Platforms", "Payment Integration", "Branding", "Security"],
    challenges: [
      "Earning user trust through design and messaging as much as through security",
      "Integrating payment rails and financial APIs cleanly and reliably",
      "Balancing regulatory requirements with a frictionless user experience",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    focus: "Lead conversion",
    description:
      "Property listing platforms, virtual tour experiences, mortgage calculators, and lead-generation websites that convert browsers into buyers.",
    services: ["Listing Platforms", "Virtual Tours", "Lead Generation", "CRM"],
    challenges: [
      "Making large listing catalogs fast to browse and easy to filter",
      "Capturing serious buyer leads without a clunky, off-putting form",
      "Presenting properties compellingly through photos, video, and virtual tours",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
    focus: "Engagement & access",
    description:
      "Learning management systems, institutional websites, student portals, and digital marketing strategies that grow enrollment and engagement.",
    services: ["LMS Development", "Student Portals", "SEO", "Content Creation"],
    challenges: [
      "Building portals that work well for students, parents, and staff alike",
      "Making content and course materials easy to organize and update",
      "Standing out in local search when prospective students are comparing options",
    ],
  },
  {
    icon: HandHeart,
    name: "NGOs & Nonprofits",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    focus: "Impact on a limited budget",
    description:
      "Donation platforms, awareness campaigns, grant reporting systems, and digital strategies that maximize mission impact on limited budgets.",
    services: ["Donation Systems", "Campaigns", "Reporting Dashboards", "SEO"],
    challenges: [
      "Making the donation process simple enough that people actually finish it",
      "Telling the organization's story in a way that builds real trust with donors",
      "Getting professional-grade digital tools within a nonprofit budget",
    ],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    focus: "Conversion-focused",
    description:
      "Custom storefronts, checkout optimization, inventory management, and full-funnel growth marketing that scale online revenue.",
    services: ["Custom Storefronts", "Checkout Optimization", "Paid Ads", "Analytics"],
    challenges: [
      "Reducing cart abandonment through a faster, clearer checkout flow",
      "Managing inventory and pricing logic that off-the-shelf platforms can't handle",
      "Turning one-time buyers into repeat customers through retention marketing",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradient: "from-slate-500 to-gray-700",
    glow: "rgba(100,116,139,0.3)",
    focus: "Operational modernization",
    description:
      "3D product configurators, ERP integrations, operational automation platforms, and B2B portals that modernize industrial businesses.",
    services: ["3D Experiences", "ERP Systems", "B2B Portals", "Automation"],
    challenges: [
      "Digitizing manual, paper-based, or spreadsheet-driven processes",
      "Giving B2B buyers self-service tools instead of routing everything through sales",
      "Presenting complex products clearly with interactive 3D configurators",
    ],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    focus: "Real-time visibility",
    description:
      "Fleet tracking systems, dispatch automation, inventory management platforms, and real-time reporting that improve operational efficiency.",
    services: ["Fleet Tracking", "Dispatch Systems", "Inventory Management", "Dashboards"],
    challenges: [
      "Replacing scattered spreadsheets with one reliable source of truth",
      "Giving dispatchers and drivers real-time visibility into routes and status",
      "Building reporting that actually helps identify bottlenecks, not just logs data",
    ],
  },
  {
    icon: Plane,
    name: "Tourism & Hospitality",
    gradient: "from-sky-500 to-cyan-600",
    glow: "rgba(14,165,233,0.3)",
    focus: "Inspiration & booking",
    description:
      "Booking platforms, destination marketing campaigns, immersive 3D experiences, and social media strategies that inspire and convert travelers.",
    services: ["Booking Platforms", "Destination Marketing", "3D Experiences", "Social Media"],
    challenges: [
      "Making the booking flow simple enough to complete on a phone, quickly",
      "Showcasing destinations and properties in a way that photos alone can't",
      "Building a content and social strategy that inspires before people even search",
    ],
  },
  {
    icon: Building,
    name: "Government & Public Sector",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    focus: "Accessibility & security",
    description:
      "Accessible, secure public-facing platforms, citizen portals, and internal management systems built with accessibility standards in mind.",
    services: ["Citizen Portals", "Internal Systems", "Accessibility", "Security"],
    challenges: [
      "Meeting accessibility standards so services work for every citizen",
      "Building systems that are secure and auditable, not just functional",
      "Making bureaucratic processes genuinely simpler for the people using them",
    ],
  },
  {
    icon: Rocket,
    name: "Startups",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    focus: "Speed to launch",
    description:
      "MVP development, brand identity, pitch decks, and growth marketing that help early-stage startups move fast, validate ideas, and acquire users.",
    services: ["MVP Development", "Branding", "Growth Marketing", "Pitch Decks"],
    challenges: [
      "Shipping a real, testable MVP fast without over-building for scale you don't need yet",
      "Building a brand identity that looks credible to investors and early users alike",
      "Setting up growth and analytics infrastructure from day one, not after traction",
    ],
  },
  {
    icon: Cpu,
    name: "Technology & SaaS",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    focus: "Scalable architecture",
    description:
      "SaaS platforms, AI integrations, developer-friendly APIs, and scalable cloud infrastructure built to handle growth and enterprise demand.",
    services: ["SaaS Platforms", "AI Integration", "API Development", "Cloud Infrastructure"],
    challenges: [
      "Architecting for multi-tenancy and scale without over-engineering too early",
      "Integrating AI features that genuinely add value, not just novelty",
      "Building APIs and documentation that developers actually enjoy working with",
    ],
  },
];

const approach = [
  {
    icon: Search,
    title: "Learn your industry's specifics",
    text: "Before writing a line of code, we research the regulations, user expectations, customer journey, search behavior, and competitive landscape specific to your sector.",
  },
  {
    icon: PenTool,
    title: "Adapt our process, not your business",
    text: "Our six-stage process stays consistent, but how we apply it — compliance checks, integrations, content, UX, analytics, and technical architecture — flexes around your business.",
  },
  {
    icon: Hammer,
    title: "Build with your constraints in mind",
    text: "Budget, regulation, existing systems, internal teams, content, and operational workflows all influence the solution. We design around real constraints rather than a generic template.",
  },
];

const decisionFramework = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Trust",
    description:
      "What must a visitor believe before they contact, purchase, book, donate, subscribe, or request a proposal?",
    details:
      "We identify the evidence your audience needs — expertise, credentials, product information, security information, policies, testimonials, case studies, team information, or transparent business details.",
  },
  {
    icon: Search,
    number: "02",
    title: "Search",
    description:
      "How does your audience describe the problem, service, product, destination, or solution they are looking for?",
    details:
      "Information architecture, technical SEO, content structure, internal linking, metadata, and search intent should reflect how real users discover and compare businesses in your market.",
  },
  {
    icon: Target,
    number: "03",
    title: "Conversion",
    description:
      "What is the valuable action for your business — a purchase, booking, application, donation, consultation, qualified lead, demo, or enquiry?",
    details:
      "The page structure, calls to action, forms, proof, messaging, and analytics are designed around the actual business action rather than generic engagement metrics.",
  },
  {
    icon: Workflow,
    number: "04",
    title: "Operations",
    description:
      "What systems, people, content, permissions, integrations, and workflows must the digital experience connect to?",
    details:
      "We consider CMS workflows, CRM systems, payment providers, booking platforms, APIs, ERP systems, analytics, authentication, internal dashboards, and ongoing content management.",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Digital Strategy & Information Architecture",
    text: "Research, positioning, content structure, user journeys, sitemap planning, conversion paths, and technical requirements before execution.",
    tags: ["Discovery", "UX Strategy", "Sitemaps", "Buyer Journeys"],
  },
  {
    icon: PenTool,
    title: "UI/UX & Product Design",
    text: "Responsive interfaces and design systems built around clarity, accessibility, interaction patterns, content hierarchy, and the needs of real users.",
    tags: ["UX Research", "UI Design", "Design Systems", "Prototyping"],
  },
  {
    icon: Code2,
    title: "Web & Application Development",
    text: "Marketing websites, portals, dashboards, ecommerce platforms, SaaS products, APIs, integrations, and custom business applications.",
    tags: ["Web Apps", "SaaS", "APIs", "Dashboards"],
  },
  {
    icon: Megaphone,
    title: "SEO & Digital Growth",
    text: "Technical SEO, content structures, search visibility, landing pages, campaign support, analytics, and conversion-focused digital marketing.",
    tags: ["Technical SEO", "Content", "Campaigns", "CRO"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Measurement",
    text: "Measurement plans that connect digital activity to meaningful business actions such as enquiries, purchases, bookings, applications, or demos.",
    tags: ["GA4", "Events", "Funnels", "Reporting"],
  },
  {
    icon: Database,
    title: "Integrations & Business Systems",
    text: "Connect the website or application with the tools your organization already depends on, while keeping data flows understandable and maintainable.",
    tags: ["CRM", "ERP", "Payments", "Third-party APIs"],
  },
];

const qualityPrinciples = [
  {
    icon: Gauge,
    title: "Performance",
    text: "Fast page delivery, efficient assets, responsive layouts, and attention to Core Web Vitals where they are relevant to the project.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Semantic structure, keyboard access, readable contrast, meaningful labels, focus states, and accessible interaction patterns.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    text: "Secure authentication patterns, protected credentials, input validation, appropriate permissions, safe integrations, and careful handling of sensitive information.",
  },
  {
    icon: BarChart3,
    title: "Measurement",
    text: "Analytics and event tracking should answer business questions rather than simply generate large volumes of reports.",
  },
  {
    icon: Globe2,
    title: "International readiness",
    text: "Responsive experiences, clear language, scalable content structures, timezone considerations, localization readiness, and globally accessible user journeys.",
  },
  {
    icon: FileSearch,
    title: "Search visibility",
    text: "Semantic HTML, useful content, metadata, internal linking, structured information, crawlable architecture, and technically sound page foundations.",
  },
];

const buyerJourneys = [
  {
    title: "Research",
    text: "A visitor is learning about a problem, comparing providers, or discovering available solutions.",
    examples: "Education · Healthcare · SaaS · Professional Services",
  },
  {
    title: "Compare",
    text: "A potential customer is comparing features, credibility, pricing, expertise, reviews, or service options.",
    examples: "Finance · Real Estate · Technology · B2B",
  },
  {
    title: "Decide",
    text: "The visitor has commercial intent and needs a clear next step with enough evidence to act.",
    examples: "E-commerce · Tourism · Agencies · Retail",
  },
  {
    title: "Transact",
    text: "The experience must support a real transaction, application, booking, donation, purchase, or registration.",
    examples: "E-commerce · Hospitality · NGOs · Education",
  },
  {
    title: "Use",
    text: "The product or portal becomes an ongoing operational experience rather than a marketing website.",
    examples: "SaaS · Government · Healthcare · Logistics",
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Discovery",
    text: "Understand your organization, audience, market, objectives, existing systems, constraints, and current digital presence.",
  },
  {
    number: "02",
    title: "Research",
    text: "Review competitors, search intent, customer journeys, content requirements, technical dependencies, and relevant industry considerations.",
  },
  {
    number: "03",
    title: "Strategy",
    text: "Define the information architecture, conversion paths, technology direction, content structure, measurement plan, and project priorities.",
  },
  {
    number: "04",
    title: "Design",
    text: "Translate the strategy into responsive interfaces, reusable components, accessible interaction patterns, and a coherent visual system.",
  },
  {
    number: "05",
    title: "Development & QA",
    text: "Build, integrate, test, validate responsive behavior, review forms and interactions, and resolve issues before launch.",
  },
  {
    number: "06",
    title: "Launch & Growth",
    text: "Deploy the approved experience, establish measurement, document the handover, and identify sensible opportunities for ongoing improvement.",
  },
];

const faqs = [
  {
    question: "Do you only work with the industries listed here?",
    answer:
      "No. The listed sectors describe the types of organizations and business models we are prepared to support. If your industry is not listed, the discovery process can determine which parts of our strategy, design, development, SEO, marketing, or technology capabilities are relevant to your organization.",
  },
  {
    question: "Will you use the same website template for every industry?",
    answer:
      "No. A reusable design and development system can improve consistency and efficiency, but the information architecture, content, proof, conversion path, integrations, and user journey should reflect the actual business model and audience.",
  },
  {
    question: "Can you work with regulated or sensitive industries?",
    answer:
      "Projects involving regulated or sensitive information require appropriate requirements gathering and, where necessary, input from the client's legal, compliance, security, or specialist teams. We can design around documented requirements rather than making unsupported compliance promises.",
  },
  {
    question: "Can an organization fit into more than one industry?",
    answer:
      "Yes. Many businesses operate across multiple markets. We can establish the primary audience and business model first, then structure secondary industry or solution pages where those audiences have meaningfully different needs.",
  },
  {
    question: "How do you decide which technology an industry needs?",
    answer:
      "Technology should follow the business requirement. We consider the required user journey, content model, integrations, security, scalability, internal workflows, budget, maintenance needs, and existing systems before selecting or recommending an implementation approach.",
  },
  {
    question: "Can you improve an existing digital platform instead of rebuilding it?",
    answer:
      "Yes. A project can begin with an audit of the existing website, application, content, analytics, technical architecture, and conversion journey. Depending on the findings, the appropriate path may be targeted improvements, a redesign, a migration, or a larger rebuild.",
  },
];

const typewriterWords = [
  "Healthcare",
  "Finance",
  "Education",
  "Startups",
  "E-commerce",
];

export default function IndustriesPageClient() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return industries;
    }

    return industries.filter((industry) => {
      const searchableText = [
        industry.name,
        industry.focus,
        industry.description,
        ...industry.services,
        ...industry.challenges,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-0 right-1/3"
        style={{ animationDelay: "6s" }}
      />

      {/* Hero */}
      <section className="section pt-36 pb-12 relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-5">
                <Sparkles size={14} /> Industries & Solutions
              </span>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.03] tracking-tight mb-7 text-white">
                Digital experiences built for{" "}
                <TypewriterText
                  words={typewriterWords}
                  className="text-gradient"
                />
              </h1>

              <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-3xl">
                Your industry changes what a digital experience needs to
                prove, how customers search, what information they need,
                which systems must connect, and what action matters most.
                We build around those differences instead of forcing every
                organization into the same template.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-primary">
                  Discuss Your Industry
                  <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="btn-outline">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass-strong rounded-3xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center">
                  <Target size={19} className="text-background" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold font-bold">
                    Industry thinking
                  </p>
                  <h2 className="font-display font-semibold text-white">
                    Context before execution
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Trust", "What must users believe?"],
                  ["Search", "How do they discover you?"],
                  ["Conversion", "What action matters?"],
                  ["Operations", "What must connect?"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border bg-white/[0.025] p-4"
                  >
                    <p className="font-display font-semibold text-white text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry decision framework */}
      <section className="section pt-6 relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="max-w-3xl mb-10">
            <span className="badge mb-4">Industry Context</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Your industry changes the{" "}
              <span className="text-gradient">digital strategy</span>
            </h2>
            <p className="text-muted leading-relaxed">
              A healthcare patient, a property buyer, a student, a donor,
              an ecommerce shopper, and a SaaS buyer do not arrive with
              the same questions or expectations. We use industry context
              to shape the experience around the decision your audience
              actually needs to make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {decisionFramework.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center">
                      <Icon size={18} className="text-background" />
                    </div>
                    <span className="text-xs text-accent font-bold">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/85 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7 mb-10">
            <div className="max-w-3xl">
              <span className="badge mb-4">Industries We Serve</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Sector-specific challenges.
                <br />
                <span className="text-gradient">
                  Digital solutions built around them.
                </span>
              </h2>
              <p className="text-muted leading-relaxed">
                Explore the industries we currently highlight and the
                business, user, operational, and technical challenges our
                solutions can address.
              </p>
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search industries or capabilities..."
                aria-label="Search industries"
                className="w-full rounded-xl border border-border bg-white/[0.035] pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {filteredIndustries.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-24">
              {filteredIndustries.map((ind, i) => {
                const Icon = ind.icon;
                const isOpen = expanded === ind.name;

                return (
                  <motion.div
                    key={ind.name}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: (i % 4) * 0.06,
                    }}
                    className="glass rounded-2xl overflow-hidden relative group cursor-pointer"
                    onClick={() =>
                      setExpanded(isOpen ? null : ind.name)
                    }
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLElement
                      ).style.boxShadow = `0 20px 60px ${ind.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLElement
                      ).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top left, ${ind.glow}, transparent 70%)`,
                      }}
                    />

                    <div className="relative p-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-5`}
                      >
                        <Icon size={20} className="text-white" />
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display font-semibold text-lg text-white">
                          {ind.name}
                        </h3>

                        <span className="text-[9px] font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full whitespace-nowrap">
                          {ind.focus}
                        </span>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-5">
                        {ind.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ind.services.map((service) => (
                          <span
                            key={service}
                            className="text-[10px] bg-white/5 border border-border text-muted px-2 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-xs font-semibold text-accent"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Hide" : "See"} challenges we solve
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={13} />
                        </motion.span>
                      </button>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden relative border-t border-border"
                        >
                          <ul className="p-6 pt-4 flex flex-col gap-3">
                            {ind.challenges.map((challenge) => (
                              <li
                                key={challenge}
                                className="text-xs text-white/80 flex items-start gap-2 leading-relaxed"
                              >
                                <span className="text-accent mt-0.5 shrink-0">
                                  →
                                </span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="glass rounded-2xl p-10 text-center mb-24">
              <Search
                size={22}
                className="text-muted mx-auto mb-4"
              />
              <h3 className="font-display font-semibold text-white mb-2">
                No matching industry found
              </h3>
              <p className="text-sm text-muted mb-5">
                Try searching for a sector, service, or capability.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="btn-outline"
              >
                Show all industries
              </button>
            </div>
          )}

          {/* Buyer journeys */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge mb-4">Customer Journey</span>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
                  Different industries.
                  <br />
                  <span className="text-gradient">
                    Different decisions.
                  </span>
                </h2>

                <p className="text-muted leading-relaxed mb-6">
                  Industry context is not just about changing the words
                  on a page. It changes what information users need, what
                  proof matters, which action they take, and how the
                  website or application connects to the organization
                  behind it.
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  We use the customer journey to decide what the
                  experience needs to communicate and what technology
                  needs to support.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {buyerJourneys.map((journey, index) => (
                  <motion.div
                    key={journey.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-white/5 border border-border flex items-center justify-center text-xs font-bold text-accent">
                        0{index + 1}
                      </span>
                      <h3 className="font-display font-semibold text-white">
                        {journey.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {journey.text}
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-accent-gold font-semibold">
                      {journey.examples}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="badge mb-4">Connected Capabilities</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Industry context determines{" "}
                <span className="text-gradient">what the solution needs</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Your industry does not require every digital capability.
                We connect the right combination of strategy, design,
                development, marketing, analytics, and integrations to
                the actual business requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className="glass-strong rounded-2xl p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                      <Icon size={18} className="text-background" />
                    </div>

                    <h3 className="font-display font-semibold text-white mb-3">
                      {capability.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {capability.text}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quality standards */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
              <div>
                <span className="badge mb-4">Digital Quality</span>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
                  Professional foundations behind the{" "}
                  <span className="text-gradient">visual experience</span>
                </h2>

                <p className="text-muted leading-relaxed mb-5">
                  A premium website is more than visual polish. The
                  underlying experience should be understandable,
                  accessible, measurable, maintainable, and appropriate
                  for the information and workflows it supports.
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  The exact technical requirements depend on the project,
                  industry, systems, data, and contractual requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {qualityPrinciples.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: (index % 2) * 0.08,
                      }}
                      className="glass rounded-2xl p-6"
                    >
                      <Icon
                        size={20}
                        className="text-accent mb-4"
                      />

                      <h3 className="font-display font-semibold text-white mb-2">
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
          </div>

          {/* Approach */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">Our Approach</span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                How we adapt to{" "}
                <span className="text-gradient">your industry</span>
              </h2>

              <p className="text-sm text-muted leading-relaxed">
                We do not claim to have identical experience in every
                vertical. Instead, we use a structured discovery and
                delivery process to understand the specific context
                before recommending the solution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {approach.map((step, i) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                    }}
                    className="glass-strong rounded-2xl p-7"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center">
                        <Icon
                          size={18}
                          className="text-background"
                        />
                      </div>

                      <span className="text-xs text-accent font-bold">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-white text-base mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Delivery process */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="badge mb-4">Delivery Framework</span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                From industry context to{" "}
                <span className="text-gradient">digital execution</span>
              </h2>

              <p className="text-muted leading-relaxed">
                A clear workflow reduces ambiguity and gives strategy,
                design, development, content, and growth work a shared
                direction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {deliveryStages.map((stage, index) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  className="glass rounded-2xl p-7"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent text-sm font-bold">
                      {stage.number}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="font-display font-semibold text-white text-lg mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {stage.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proof / case studies pathway */}
          <div className="mb-24">
            <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
              <div className="glow-orb w-72 h-72 bg-primary/15 -top-32 -right-20" />

              <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  <span className="badge mb-4">
                    Proof & Project Evidence
                  </span>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                    Show what the solution actually{" "}
                    <span className="text-gradient">achieved</span>
                  </h2>

                  <p className="text-muted leading-relaxed max-w-3xl mb-5">
                    Industry positioning becomes more credible when it is
                    supported by relevant work, project details, technical
                    decisions, and measurable outcomes. As HEROY builds
                    its public portfolio, we will continue to organize
                    relevant work around the challenge, approach, solution,
                    and evidence available for each project.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      "Challenge",
                      "Approach",
                      "Evidence",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-border bg-white/[0.025] p-4"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-accent mb-2"
                        />
                        <p className="text-xs font-semibold text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="btn-outline whitespace-nowrap"
                >
                  Explore Case Studies
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="badge mb-4">Industries FAQ</span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Questions about{" "}
                <span className="text-gradient">industry-specific work</span>
              </h2>

              <p className="text-muted leading-relaxed">
                A few practical answers for organizations evaluating
                industry-focused strategy, design, development, SEO,
                marketing, and digital transformation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const id = `industry-faq-${index}`;
                const isOpen = expanded === id;

                return (
                  <div
                    key={faq.question}
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(isOpen ? null : id)
                      }
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-5 text-left p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-xs text-accent font-bold mt-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-display font-semibold text-white text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 text-muted"
                      >
                        <ChevronDown size={17} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16">
                            <p className="text-sm text-muted leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-72 h-72 bg-primary/25 -top-24 -left-20" />
            <div
              className="glow-orb w-56 h-56 bg-accent/20 -bottom-16 -right-10"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative max-w-4xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-grad-mix flex items-center justify-center mx-auto mb-6">
                <Users size={23} className="text-background" />
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 text-white">
                Don&apos;t see your industry?
                <br />
                <span className="text-gradient">
                  Your business may still be a fit.
                </span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Industry lists are a starting point, not a boundary. Tell
                us about your organization, audience, existing systems,
                goals, and constraints. We can then determine which
                digital capabilities are actually relevant to your
                situation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Project Conversation
                  <ArrowRight size={16} />
                </Link>

                <Link href="/consultation" className="btn-outline">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-xs text-muted">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-accent" />
                  Context-first discovery
                </span>

                <span className="flex items-center gap-2">
                  <Target size={14} className="text-accent" />
                  Business-focused scope
                </span>

                <span className="flex items-center gap-2">
                  <MessageSquare size={14} className="text-accent" />
                  Clear communication
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}