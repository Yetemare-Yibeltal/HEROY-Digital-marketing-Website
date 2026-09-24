"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Info,
  ChevronDown,
  Search,
  Hammer,
  PackageCheck,
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
  LineChart,
  Lightbulb,
  Rocket,
  ClipboardCheck,
  Settings2,
  Eye,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface ApproachCase {
  id: string;
  industry: string;
  service: string;
  gradient: string;
  glow: string;
  scenario: string;
  approach: string;
  deliverables: string[];
  typicalTimeline: string;
  tags: string[];
  focus: string;
}

interface Principle {
  icon: typeof Target;
  title: string;
  text: string;
}

interface DeliveryStage {
  number: string;
  title: string;
  text: string;
  deliverables: string[];
}

const cases: ApproachCase[] = [
  {
    id: "saas-rebuild",
    industry: "SaaS / Technology",
    service: "Web Development + SEO",
    gradient: "from-violet-600/50 to-cyan-600/40",
    glow: "rgba(124,92,255,0.35)",
    scenario:
      "A SaaS company with a slow, outdated platform losing customers to faster competitors, and organic traffic declining year over year.",
    approach:
      "Rebuild the digital experience around a modern application architecture, improve rendering and information architecture for search visibility, and address technical SEO during development rather than treating search as a post-launch task.",
    deliverables: [
      "Modern frontend and backend architecture",
      "Technical SEO improvements including sitemaps and structured data",
      "Core Web Vitals and performance optimization",
      "Content and information architecture roadmap",
    ],
    typicalTimeline: "3–4 months",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "SEO"],
    focus: "Performance, discoverability, conversion",
  },
  {
    id: "health-app",
    industry: "Healthcare",
    service: "Mobile App Development",
    gradient: "from-emerald-600/50 to-teal-600/40",
    glow: "rgba(34,197,94,0.35)",
    scenario:
      "A healthcare provider needing a secure, privacy-conscious patient app that works across Android and iOS without maintaining two separate application codebases.",
    approach:
      "Build a cross-platform mobile experience around clearly defined user journeys, privacy-conscious data handling, reliable authentication, and carefully scoped integrations. Sensitive workflows should be reviewed against the applicable regulatory and organizational requirements before implementation.",
    deliverables: [
      "Cross-platform mobile application",
      "Appointment booking and reminder workflows",
      "Privacy-conscious data architecture",
      "Integration planning for healthcare services",
    ],
    typicalTimeline: "4–5 months",
    tags: ["React Native", "Node.js", "MongoDB", "API Integration"],
    focus: "Trust, usability, privacy",
  },
  {
    id: "real-estate-leads",
    industry: "Real Estate",
    service: "Website + Digital Marketing",
    gradient: "from-pink-600/50 to-rose-600/40",
    glow: "rgba(236,72,153,0.35)",
    scenario:
      "A real estate agency relying heavily on referrals, with an outdated website that makes properties difficult to discover and creates friction for prospective buyers and tenants.",
    approach:
      "Create a search-friendly property experience with clear listing structures, useful filtering, strong calls to action, and measurable lead capture. Paid and organic acquisition can then be connected to the website so traffic has a clear path toward enquiry.",
    deliverables: [
      "Property discovery and listing experience",
      "Search and filtering functionality",
      "Lead capture and enquiry workflows",
      "SEO and paid acquisition planning",
    ],
    typicalTimeline: "2–3 months",
    tags: ["Next.js", "CMS", "Google Ads", "Analytics"],
    focus: "Discovery, leads, conversion",
  },
  {
    id: "ai-support",
    industry: "Customer Support / AI",
    service: "AI Solutions",
    gradient: "from-orange-600/50 to-amber-600/40",
    glow: "rgba(249,115,22,0.35)",
    scenario:
      "A support team overwhelmed with repetitive questions, fragmented documentation, and manual ticket routing.",
    approach:
      "Design an AI-assisted support workflow around the organization's approved knowledge sources, clear confidence boundaries, logging, and human escalation. The objective is not simply to add a chatbot, but to improve how information moves between customers, AI systems, and support teams.",
    deliverables: [
      "AI assistant connected to approved knowledge sources",
      "Question classification and routing workflows",
      "Human handoff for complex or sensitive requests",
      "Usage, quality, and escalation monitoring",
    ],
    typicalTimeline: "6–8 weeks",
    tags: ["AI Integration", "Node.js", "LLM APIs", "Knowledge Base"],
    focus: "Automation, support, governance",
  },
  {
    id: "manufacturing-3d",
    industry: "Manufacturing",
    service: "3D Interactive Website",
    gradient: "from-blue-600/50 to-indigo-600/40",
    glow: "rgba(99,102,241,0.35)",
    scenario:
      "An industrial equipment manufacturer whose complex products are difficult to explain through static photography and conventional product pages.",
    approach:
      "Use interactive 3D and structured product information where it genuinely improves understanding. The experience should remain accessible and performant, with progressive enhancement for devices that cannot support advanced rendering.",
    deliverables: [
      "Interactive 3D product presentation",
      "Product configuration and feature exploration",
      "Technical visualization for complex components",
      "Lead capture connected to the product journey",
    ],
    typicalTimeline: "2–3 months",
    tags: ["Three.js", "WebGL", "React", "3D"],
    focus: "Product education, engagement, sales enablement",
  },
  {
    id: "ecommerce-custom",
    industry: "E-commerce",
    service: "E-commerce Development",
    gradient: "from-teal-600/50 to-emerald-600/40",
    glow: "rgba(20,184,166,0.35)",
    scenario:
      "An online retailer reaching the limits of an off-the-shelf platform, with requirements around custom pricing, product structures, B2B accounts, and operational workflows.",
    approach:
      "Design a flexible commerce architecture around the business rules that actually matter. Where a headless or custom approach is justified, the storefront, commerce services, payments, inventory, and administrative workflows should be designed as a connected system.",
    deliverables: [
      "Custom or headless storefront architecture",
      "Flexible pricing and account workflows",
      "Inventory and order management integrations",
      "Analytics and conversion measurement",
    ],
    typicalTimeline: "3–4 months",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Commerce APIs"],
    focus: "Commerce, scalability, operations",
  },
];

const principles: Principle[] = [
  {
    icon: Target,
    title: "Start with the business problem",
    text: "We define what needs to improve before deciding which technology, campaign, platform, or feature should be built.",
  },
  {
    icon: Users,
    title: "Design around real users",
    text: "Information architecture, interfaces, content, and conversion paths are shaped around the people who actually use the experience.",
  },
  {
    icon: Gauge,
    title: "Performance is part of quality",
    text: "Speed, responsive behavior, accessibility, technical SEO, and maintainability are considered throughout delivery.",
  },
  {
    icon: BarChart3,
    title: "Make measurement intentional",
    text: "Important actions should have clearly defined measurement points so decisions can be based on evidence rather than assumptions.",
  },
  {
    icon: ShieldCheck,
    title: "Build with appropriate safeguards",
    text: "Authentication, permissions, data handling, security practices, and operational risks are considered according to the project.",
  },
  {
    icon: Layers3,
    title: "Create systems that can evolve",
    text: "The goal is not only to launch. Architecture and documentation should leave room for future content, features, campaigns, and integrations.",
  },
];

const deliveryStages: DeliveryStage[] = [
  {
    number: "01",
    title: "Discovery",
    text: "Understand the organization, users, existing digital environment, constraints, priorities, and desired outcomes.",
    deliverables: [
      "Project goals and priorities",
      "Stakeholder questions",
      "Existing-system review",
      "Initial opportunity map",
    ],
  },
  {
    number: "02",
    title: "Research & Strategy",
    text: "Translate the initial problem into a practical digital strategy and define what should be built, improved, measured, or deliberately left out.",
    deliverables: [
      "Audience and journey considerations",
      "Information architecture",
      "Technical direction",
      "Measurement strategy",
    ],
  },
  {
    number: "03",
    title: "Design",
    text: "Turn strategy into a clear, accessible, responsive experience before implementation becomes expensive to change.",
    deliverables: [
      "UX flows",
      "Interface direction",
      "Responsive layouts",
      "Content structure",
    ],
  },
  {
    number: "04",
    title: "Build & Integrate",
    text: "Develop the approved experience with appropriate frameworks, integrations, APIs, content systems, analytics, and business logic.",
    deliverables: [
      "Frontend and backend development",
      "API and system integrations",
      "CMS or administration workflows",
      "Analytics implementation",
    ],
  },
  {
    number: "05",
    title: "QA & Validation",
    text: "Review the experience across functionality, responsive behavior, accessibility, performance, SEO fundamentals, and critical user journeys.",
    deliverables: [
      "Functional testing",
      "Responsive testing",
      "Performance review",
      "SEO and accessibility checks",
    ],
  },
  {
    number: "06",
    title: "Launch & Learn",
    text: "Deploy carefully, monitor important signals, document the system, and identify useful next steps based on actual usage.",
    deliverables: [
      "Production deployment",
      "Analytics and monitoring",
      "Documentation",
      "Post-launch improvement roadmap",
    ],
  },
];

const measurementAreas = [
  {
    icon: LineChart,
    title: "Acquisition",
    text: "Search visibility, campaign traffic, referral sources, landing-page engagement, and other relevant acquisition signals.",
  },
  {
    icon: Users,
    title: "Engagement",
    text: "Important interactions, content engagement, product exploration, session behavior, and meaningful user journeys.",
  },
  {
    icon: Target,
    title: "Conversion",
    text: "Form submissions, enquiries, purchases, bookings, registrations, or other business-defined conversion events.",
  },
  {
    icon: Gauge,
    title: "Experience",
    text: "Performance, Core Web Vitals, responsive behavior, accessibility, usability, and technical quality.",
  },
];

const qualityStandards = [
  {
    icon: Code2,
    title: "Engineering quality",
    text: "Maintainable code, sensible architecture, reusable components, clear interfaces, and documented technical decisions.",
  },
  {
    icon: Search,
    title: "Search readiness",
    text: "Semantic structure, crawlability, metadata, structured data where appropriate, internal linking, and technical SEO fundamentals.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Keyboard access, semantic HTML, readable contrast, meaningful labels, focus states, and accessible interaction patterns.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    text: "Appropriate authentication, authorization, input validation, secure configuration, and careful handling of sensitive information.",
  },
  {
    icon: Database,
    title: "Data & integrations",
    text: "Thoughtful API design, data models, third-party integrations, error handling, and operational considerations.",
  },
  {
    icon: Globe2,
    title: "International readiness",
    text: "Responsive experiences, clear content hierarchy, localization considerations, scalable information architecture, and performance across devices.",
  },
];

const evidenceFramework = [
  {
    icon: FileSearch,
    title: "Challenge",
    text: "What business, user, technical, or market problem required attention?",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    text: "Why was a particular direction selected and what alternatives were considered?",
  },
  {
    icon: Hammer,
    title: "Execution",
    text: "What was designed, developed, integrated, optimized, or changed?",
  },
  {
    icon: BarChart3,
    title: "Evidence",
    text: "What can be demonstrated through analytics, performance data, user feedback, or other verified evidence?",
  },
  {
    icon: CheckCircle2,
    title: "Outcome",
    text: "What changed for the organization or users, and what remains to be improved?",
  },
];

const faqs = [
  {
    question: "Are the case studies on this page completed client projects?",
    answer:
      "No. The current examples are illustrative scenarios based on common business and digital challenges. They demonstrate how HEROY could approach a project without presenting hypothetical work as completed client work.",
  },
  {
    question: "Why use illustrative scenarios instead of fictional client projects?",
    answer:
      "Because a professional portfolio should distinguish demonstrated work from examples of capability. We would rather publish fewer verified projects than create fictional clients, results, or testimonials that could mislead visitors.",
  },
  {
    question: "What will a completed HEROY case study include?",
    answer:
      "Where the information can be shared, a completed case study can document the challenge, objectives, research, strategy, design and development approach, technology, important implementation decisions, measurable evidence, outcome, and lessons learned.",
  },
  {
    question: "How do you decide which technology to use?",
    answer:
      "Technology is selected according to the project's requirements, team capabilities, performance needs, integrations, maintenance expectations, budget, and long-term direction. The newest technology is not automatically the correct technology.",
  },
  {
    question: "Do you provide digital marketing as well as development?",
    answer:
      "Yes. HEROY's service areas include digital marketing, SEO, web development, mobile applications, branding, AI solutions, and interactive digital experiences. The appropriate combination depends on the organization's goals and current digital environment.",
  },
  {
    question: "How do you measure whether a project is successful?",
    answer:
      "Success measures should be agreed according to the project. Depending on the engagement, this may include qualified enquiries, conversion events, search visibility, engagement, performance, usability, operational efficiency, or other business-defined indicators.",
  },
  {
    question: "Can a project start with strategy before development?",
    answer:
      "Yes. Strategy and discovery can be valuable when the problem is not yet clearly defined, when several technical options are possible, or when an organization needs to prioritize before committing to implementation.",
  },
  {
    question: "Do you provide ongoing improvements after launch?",
    answer:
      "Post-launch work can include maintenance, monitoring, content updates, SEO, analytics review, feature development, performance improvements, and other agreed services depending on the project.",
  },
];

const typewriterWords = [
  "Challenges",
  "Strategy",
  "Execution",
  "Evidence",
  "Outcomes",
];

export default function CaseStudiesPageClient() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("All");

  const industries = useMemo(
    () => ["All", ...Array.from(new Set(cases.map((item) => item.industry)))],
    [],
  );

  const filteredCases = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return cases.filter((item) => {
      const matchesIndustry =
        activeIndustry === "All" || item.industry === activeIndustry;

      if (!query) {
        return matchesIndustry;
      }

      const searchableText = [
        item.industry,
        item.service,
        item.scenario,
        item.approach,
        item.focus,
        ...item.deliverables,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesIndustry && searchableText.includes(query);
    });
  }, [activeIndustry, searchQuery]);

  return (
    <section className="section pt-32 sm:pt-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-[35%] -left-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-orb w-72 h-72 bg-accent-pink/10 bottom-[18%] right-1/4"
        style={{ animationDelay: "5s" }}
      />

      <div className="container-px mx-auto max-w-[1600px] relative">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center mb-8"
        >
          <span className="badge mb-5">
            <Sparkles size={14} />
            Case Studies & Approach
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white">
            How we turn digital{" "}
            <TypewriterText
              words={typewriterWords}
              className="text-gradient"
            />{" "}
            into practical solutions.
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            Explore representative business challenges and how HEROY would
            approach them across strategy, design, development, digital
            marketing, SEO, AI, and interactive experiences.
          </p>
        </motion.div>

        {/* Transparency notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-5 sm:p-6 max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-start gap-3">
            <Info className="text-accent shrink-0 mt-0.5" size={18} />

            <div>
              <h2 className="text-sm font-semibold text-white mb-1">
                A transparent portfolio, by design
              </h2>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                The scenarios below are illustrative. They describe real types
                of challenges businesses commonly face and how HEROY would
                approach them. They are not presented as completed projects for
                named clients. As verified projects are completed and approved
                for publication, this section can evolve into documented case
                studies with real evidence, screenshots, technologies, and
                outcomes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Strategic overview */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">Our Case Study Standard</span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              A case study should explain{" "}
              <span className="text-gradient">the thinking, not just the
              output.</span>
            </h2>

            <p className="text-muted mt-4 leading-relaxed max-w-2xl">
              Strong digital work is more than a polished interface. A useful
              case study should make it possible to understand the problem,
              decisions, implementation, evidence, and business or user impact
              behind the finished experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="glass-strong rounded-2xl p-6 sm:p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                    <Icon size={19} className="text-background" />
                  </div>

                  <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Case study explorer */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"
          >
            <div>
              <span className="badge mb-4">
                <FileSearch size={14} />
                Explore Scenarios
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Representative{" "}
                <span className="text-gradient">digital challenges</span>
              </h2>

              <p className="text-muted max-w-2xl mt-3 leading-relaxed">
                Browse by industry or search for a capability, technology,
                business challenge, or delivery area.
              </p>
            </div>

            <div className="text-xs text-muted">
              {filteredCases.length} of {cases.length} scenarios
            </div>
          </motion.div>

          {/* Search */}
          <div className="glass rounded-2xl p-3 mb-5">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search challenges, services, technologies..."
                  aria-label="Search case study scenarios"
                  className="w-full bg-transparent border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      activeIndustry === industry
                        ? "bg-white text-background border-white"
                        : "bg-white/5 text-muted border-border hover:text-white hover:border-white/20"
                    }`}
                    aria-pressed={activeIndustry === industry}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scenarios */}
          <div className="flex flex-col gap-5">
            {filteredCases.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.06,
                  }}
                  className="glass rounded-2xl overflow-hidden relative group"
                  onMouseEnter={(event) => {
                    event.currentTarget.style.boxShadow = `0 20px 60px ${item.glow}`;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.boxShadow =
                      "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setOpenId(isOpen ? null : item.id)
                    }
                    className="w-full text-left p-6 sm:p-7 lg:p-8 flex items-start justify-between gap-5"
                    aria-expanded={isOpen}
                    aria-controls={`case-study-${item.id}`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                          {item.industry}
                        </span>

                        <span className="text-white/20">·</span>

                        <span className="text-[10px] text-muted">
                          {item.service}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug mb-3">
                        {item.scenario}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-border text-muted">
                          Focus: {item.focus}
                        </span>

                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-border text-muted">
                          Typical timeline: {item.typicalTimeline}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown size={19} className="text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`case-study-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-border"
                      >
                        <div className="p-6 sm:p-7 lg:p-8 grid lg:grid-cols-[1.35fr_0.65fr] gap-8">
                          <div>
                            <div className="mb-7">
                              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                                Strategic Approach
                              </h4>

                              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                                {item.approach}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                                What Could Be Delivered
                              </h4>

                              <ul className="grid sm:grid-cols-2 gap-3">
                                {item.deliverables.map((deliverable) => (
                                  <li
                                    key={deliverable}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                                  >
                                    <CheckCircle2
                                      size={15}
                                      className="text-accent shrink-0 mt-0.5"
                                    />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="glass rounded-2xl p-5 sm:p-6 h-fit">
                            <div className="flex items-center gap-2 mb-5">
                              <Settings2 size={16} className="text-accent" />
                              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                                Delivery Snapshot
                              </h4>
                            </div>

                            <div className="space-y-5">
                              <div>
                                <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">
                                  Primary focus
                                </span>
                                <span className="text-sm text-white">
                                  {item.focus}
                                </span>
                              </div>

                              <div>
                                <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">
                                  Typical timeline
                                </span>
                                <span className="text-sm text-accent font-semibold">
                                  {item.typicalTimeline}
                                </span>
                              </div>

                              <div>
                                <span className="text-[10px] uppercase tracking-widest text-muted block mb-2">
                                  Possible technology
                                </span>

                                <div className="flex flex-wrap gap-1.5">
                                  {item.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[10px] bg-white/5 border border-border text-muted px-2 py-1 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {filteredCases.length === 0 && (
              <div className="glass rounded-2xl p-10 text-center">
                <Search size={28} className="mx-auto text-muted mb-4" />

                <h3 className="font-display font-semibold text-white mb-2">
                  No matching scenarios
                </h3>

                <p className="text-sm text-muted max-w-md mx-auto">
                  Try another industry, technology, service, or business
                  challenge.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveIndustry("All");
                  }}
                  className="btn-outline mt-5"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* What we measure */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">
              <BarChart3 size={14} />
              Measurement Framework
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Define what success{" "}
              <span className="text-gradient">means before launch.</span>
            </h2>

            <p className="text-muted mt-4 leading-relaxed max-w-2xl">
              Not every project should be measured by the same metric. We
              identify the signals that matter to the organization and connect
              implementation decisions to those signals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {measurementAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="glass rounded-2xl p-6"
                >
                  <Icon size={20} className="text-accent mb-5" />

                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Quality standards */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-4">
                <ShieldCheck size={14} />
                Technical & Digital Standards
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Quality is more than{" "}
                <span className="text-gradient">visual polish.</span>
              </h2>

              <p className="text-muted mt-4 leading-relaxed">
                A professional digital experience needs to work beneath the
                surface as well as on it. The exact requirements depend on the
                project, but these are important areas we consider during
                planning, implementation, and validation.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {qualityStandards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="glass rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center">
                        <Icon size={16} className="text-accent" />
                      </div>

                      <h3 className="font-display font-semibold text-sm text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Delivery process */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="badge mb-4">
              <Workflow size={14} />
              Delivery Framework
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              From first question to{" "}
              <span className="text-gradient">measured improvement.</span>
            </h2>

            <p className="text-muted mt-4 leading-relaxed">
              Every engagement is different, but a clear delivery framework
              helps keep decisions visible, responsibilities understandable,
              and quality consistent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {deliveryStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
                className="glass-strong rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="text-3xl font-display font-bold text-white/10">
                    {stage.number}
                  </span>

                  <Rocket size={18} className="text-accent" />
                </div>

                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed mb-5">
                  {stage.text}
                </p>

                <ul className="space-y-2">
                  {stage.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-2 text-xs text-white/70"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Evidence standard */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="glow-orb w-72 h-72 bg-primary/10 -top-28 -right-20" />

            <div className="relative">
              <div className="max-w-3xl mb-10">
                <span className="badge mb-4">
                  <Eye size={14} />
                  Future Case Study Evidence
                </span>

                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  When real projects are published,{" "}
                  <span className="text-gradient">
                    evidence comes first.
                  </span>
                </h2>

                <p className="text-muted mt-4 leading-relaxed">
                  We want completed case studies to show what actually
                  happened, not what sounds impressive. Depending on the
                  project and what can responsibly be shared, evidence may
                  include analytics, performance measurements, search data,
                  screenshots, product usage, user feedback, or documented
                  operational improvements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {evidenceFramework.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="bg-white/[0.03] border border-border rounded-2xl p-5"
                    >
                      <Icon size={18} className="text-accent mb-4" />

                      <h3 className="font-display font-semibold text-white text-sm mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[11px] text-muted leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process philosophy */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="badge mb-4">
              <ClipboardCheck size={14} />
              Every Engagement
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              What stays constant{" "}
              <span className="text-gradient">across every project</span>
            </h2>

            <p className="text-muted leading-relaxed">
              The exact scope changes from one engagement to another. The
              principles behind good delivery should not.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Search size={18} className="text-background" />
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-2">
                Understand the real problem
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                Every project starts by understanding what is actually broken,
                what users need, what the organization is trying to achieve,
                and what constraints matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="glass-strong rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <Hammer size={18} className="text-background" />
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-2">
                Build the right solution
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                Technology, design, campaigns, and integrations should solve
                the identified problem rather than exist simply because they
                are fashionable or technically interesting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="glass-strong rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
                <PackageCheck size={18} className="text-background" />
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-2">
                Deliver something maintainable
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                The goal is a system that can be understood, maintained, and
                improved after launch — not a fragile implementation that
                becomes difficult to operate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">
              <MessageSquare size={14} />
              Case Study FAQ
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Questions about how we{" "}
              <span className="text-gradient">document our work.</span>
            </h2>

            <p className="text-muted mt-4 leading-relaxed">
              A professional portfolio should make a clear distinction between
              verified work, representative examples, and future plans.
            </p>
          </motion.div>

          <div className="max-w-5xl">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between gap-5 text-left p-5 sm:p-6"
                      aria-expanded={isOpen}
                      aria-controls={`case-faq-${index}`}
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown size={18} className="text-muted" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`case-faq-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 border-t border-border pt-4">
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
        </section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="glow-orb w-72 h-72 bg-primary/20 -top-24 -left-24" />

          <div
            className="glow-orb w-60 h-60 bg-accent/15 -bottom-24 -right-20"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-3xl mx-auto">
            <span className="badge mb-5">
              <Sparkles size={14} />
              Start With Your Challenge
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Your situation doesn't need to fit{" "}
              <span className="text-gradient">a template.</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
              Tell us what you are trying to improve, what is currently getting
              in the way, and what success would look like. We can then discuss
              the appropriate strategy, scope, technology, timeline, and next
              steps.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultation" className="btn-primary">
                Book a Consultation
                <ArrowRight size={16} />
              </Link>

              <Link href="/contact" className="btn-outline">
                Discuss Your Project
                <ArrowRight size={16} />
              </Link>

              <Link href="/portfolio" className="btn-outline">
                Explore Portfolio
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-[11px] text-muted">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-accent" />
                Clear scope
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-accent" />
                Practical recommendations
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-accent" />
                Evidence-led decisions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}