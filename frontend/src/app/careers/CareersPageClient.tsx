"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Code2,
  Smartphone,
  Palette,
  Video,
  Bot,
  Megaphone,
  Users,
  Search,
  Rocket,
  FileText,
  MessageSquare,
  ClipboardCheck,
  Handshake,
  Plus,
  Minus,
  CheckCircle2,
  Globe2,
  Layers3,
  Gauge,
  Accessibility,
  BarChart3,
  ShieldCheck,
  Workflow,
  Laptop2,
  Target,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const departments = [
  "All",
  "Engineering",
  "Design",
  "Marketing",
  "Creative",
  "Operations",
];

const positions = [
  {
    id: "fullstack-dev",
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Code2,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    description:
      "Own features across the application stack, from responsive Next.js interfaces to Node.js services, APIs, databases, authentication, deployment, and production improvements.",
    responsibilities: [
      "Build and maintain production features across frontend and backend applications",
      "Develop reusable TypeScript components, services, APIs, and data-access layers",
      "Work with designers to translate product requirements into polished interfaces",
      "Review code, improve architecture, and document important technical decisions",
      "Debug production issues and contribute to reliable deployment workflows",
      "Communicate technical trade-offs clearly with project stakeholders",
    ],
    requirements: [
      "Professional experience with React and/or Next.js",
      "Strong TypeScript and modern JavaScript fundamentals",
      "Practical Node.js and REST API development experience",
      "Experience with PostgreSQL, MongoDB, or another production database",
      "Comfortable working with Git-based development workflows",
      "Understanding of authentication, validation, security, and deployment fundamentals",
    ],
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    description:
      "Build responsive, accessible, fast interfaces that turn design systems and product requirements into dependable experiences across desktop, tablet, and mobile.",
    responsibilities: [
      "Build reusable React and Next.js components for production websites and applications",
      "Translate Figma designs into accurate, responsive implementations",
      "Create thoughtful interaction states, transitions, forms, and navigation patterns",
      "Work with semantic HTML, responsive CSS, and accessible interaction patterns",
      "Investigate frontend performance issues and improve loading and interaction behavior",
      "Collaborate with designers, backend developers, and project stakeholders during delivery",
    ],
    requirements: [
      "Professional experience with React and TypeScript",
      "Strong CSS fundamentals and experience with Tailwind CSS",
      "Understanding of responsive design and browser compatibility",
      "Experience with component-based UI architecture",
      "Working knowledge of web accessibility and SEO fundamentals",
      "Interest in performance, Core Web Vitals, and maintainable frontend systems",
    ],
  },
  {
    id: "backend-dev",
    title: "Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Code2,
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    description:
      "Design and maintain dependable backend services, APIs, authentication systems, data models, integrations, and deployment workflows that support client and internal products.",
    responsibilities: [
      "Design and implement RESTful APIs and backend services",
      "Create maintainable database schemas and efficient queries",
      "Implement authentication, authorization, validation, and error handling",
      "Integrate third-party services and external APIs safely",
      "Contribute to deployment, monitoring, logging, and CI/CD workflows",
      "Document APIs, important architecture decisions, and operational requirements",
    ],
    requirements: [
      "Professional Node.js backend development experience",
      "Strong understanding of REST APIs and server-side application design",
      "Practical SQL and/or NoSQL database experience",
      "Understanding of authentication and application security",
      "Experience with Git and production deployment workflows",
      "Docker and cloud-platform experience is useful",
    ],
  },
  {
    id: "android-dev",
    title: "Android Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Smartphone,
    gradient: "from-emerald-500 to-green-700",
    glow: "rgba(16,185,129,0.3)",
    description:
      "Build reliable mobile experiences for Android, integrating application interfaces with APIs, device capabilities, authentication, storage, and production release workflows.",
    responsibilities: [
      "Build Android applications using Kotlin and established Android development practices",
      "Integrate REST APIs and third-party services into mobile applications",
      "Create responsive mobile interfaces aligned with platform conventions",
      "Handle application state, networking, local storage, and error states",
      "Write appropriate tests and participate in device and release QA",
      "Prepare and maintain production releases for the Google Play ecosystem",
    ],
    requirements: [
      "Professional Android development experience with Kotlin",
      "Understanding of Android application architecture",
      "Experience consuming REST APIs and handling asynchronous operations",
      "Understanding of responsive mobile UI principles",
      "Experience debugging applications across real devices",
      "React Native experience is useful for cross-platform projects",
    ],
  },
  {
    id: "ai-developer",
    title: "AI Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Bot,
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    description:
      "Design practical AI-powered product features, automation workflows, retrieval systems, conversational experiences, and API integrations where they solve a real business or product problem.",
    responsibilities: [
      "Build AI-powered product features using established model APIs and tooling",
      "Design conversational interfaces and structured AI workflows",
      "Develop retrieval-augmented generation systems where appropriate",
      "Integrate AI services with existing web applications and backend systems",
      "Evaluate model behavior, reliability, latency, cost, and user experience",
      "Document limitations, assumptions, evaluation methods, and operational requirements",
    ],
    requirements: [
      "Hands-on experience integrating modern LLM APIs",
      "Strong Python or JavaScript/TypeScript skills",
      "Understanding of prompting, structured outputs, embeddings, and retrieval",
      "Experience working with APIs, databases, and production application architecture",
      "Ability to evaluate AI outputs rather than relying on demos alone",
      "Ability to explain technical limitations and trade-offs to non-technical stakeholders",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Palette,
    gradient: "from-orange-500 to-pink-600",
    glow: "rgba(249,115,22,0.3)",
    description:
      "Design clear, useful, and visually consistent digital experiences from early product structure through high-fidelity interfaces and implementation review.",
    responsibilities: [
      "Turn product and business requirements into user flows and interface structures",
      "Create wireframes, prototypes, and high-fidelity interfaces in Figma",
      "Develop reusable components and practical design systems",
      "Define responsive layouts for desktop, tablet, and mobile experiences",
      "Work with developers during implementation and visual QA",
      "Consider usability, accessibility, content hierarchy, and interaction states",
    ],
    requirements: [
      "Professional UI/UX design experience",
      "Strong Figma workflow and component-system knowledge",
      "Portfolio demonstrating web or mobile product work",
      "Understanding of responsive interface design",
      "Working knowledge of accessibility and inclusive design principles",
      "Ability to explain design decisions using user and business context",
    ],
  },
  {
    id: "graphics-designer",
    title: "Graphics Designer",
    department: "Design",
    type: "Full-time / Contract",
    location: "Remote / Injibara, Ethiopia",
    icon: Palette,
    gradient: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.3)",
    description:
      "Create visual communication assets for digital campaigns, brand systems, social content, presentations, and selected print applications while maintaining consistent visual direction.",
    responsibilities: [
      "Create social media graphics and digital campaign assets",
      "Develop visual identity elements and brand-system assets",
      "Prepare presentation and marketing materials",
      "Adapt creative concepts across multiple formats and channels",
      "Prepare production-ready files for digital and print use",
      "Maintain consistency in typography, spacing, imagery, and brand application",
    ],
    requirements: [
      "Professional graphic design experience",
      "Strong Adobe Creative Suite or equivalent workflow",
      "Portfolio demonstrating branding and digital campaign work",
      "Understanding of typography, layout, composition, and visual hierarchy",
      "Understanding of digital image specifications and print production basics",
      "Ability to organize files and deliver work to defined specifications",
    ],
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Creative",
    type: "Full-time / Contract",
    location: "Remote / Injibara, Ethiopia",
    icon: Video,
    gradient: "from-red-500 to-orange-600",
    glow: "rgba(239,68,68,0.3)",
    description:
      "Produce structured video content for digital campaigns, brand communication, social platforms, and client presentations, combining editing discipline with practical motion design.",
    responsibilities: [
      "Edit promotional, educational, corporate, and social media video content",
      "Create motion graphics, titles, transitions, and supporting visual systems",
      "Perform basic color correction and audio cleanup",
      "Adapt videos to platform-specific aspect ratios and delivery requirements",
      "Work from creative briefs and respond to structured review feedback",
      "Maintain organized source files, project files, exports, and version history",
    ],
    requirements: [
      "Professional video editing experience",
      "Strong Premiere Pro and/or equivalent editing workflow",
      "Working knowledge of After Effects or another motion-design tool",
      "Portfolio demonstrating editing and motion work",
      "Understanding of social-video formats and delivery specifications",
      "Strong file organization and deadline management",
    ],
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Search,
    gradient: "from-violet-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    description:
      "Work across technical SEO, information architecture, search intent, content planning, on-page optimization, and measurement to improve how useful websites are discovered through search.",
    responsibilities: [
      "Perform technical SEO reviews covering crawlability, indexation, site architecture, and metadata",
      "Develop keyword research and search-intent frameworks",
      "Create practical content briefs aligned with user needs and business objectives",
      "Review internal linking, structured data, canonicalization, and page experience",
      "Monitor search performance through Google Search Console and relevant analytics tools",
      "Translate SEO findings into clear implementation tasks for developers and content teams",
    ],
    requirements: [
      "Professional SEO experience with practical website work",
      "Working knowledge of Google Search Console",
      "Understanding of technical SEO and site architecture",
      "Understanding of Core Web Vitals and page experience",
      "Ability to perform keyword research and search-intent analysis",
      "Strong analytical and written communication skills",
    ],
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Remote / Injibara, Ethiopia",
    icon: Megaphone,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    description:
      "Plan and coordinate measurable digital marketing activity across paid media, organic content, email, landing pages, analytics, and campaign reporting.",
    responsibilities: [
      "Develop channel strategies based on defined business and audience objectives",
      "Plan and coordinate paid and organic campaign activity",
      "Build practical content calendars and campaign briefs",
      "Coordinate landing-page, creative, copy, and tracking requirements",
      "Monitor campaign performance and identify optimization opportunities",
      "Prepare clear reports connecting activity with defined business metrics",
    ],
    requirements: [
      "Professional digital marketing experience",
      "Practical understanding of paid media and organic marketing channels",
      "Understanding of marketing funnels and conversion journeys",
      "Working knowledge of analytics and campaign measurement",
      "Strong written communication and campaign planning skills",
      "Ability to distinguish meaningful performance signals from vanity metrics",
    ],
  },
];

const perks = [
  {
    icon: Layers3,
    title: "Real Product Work",
    text: "Work is connected to actual websites, applications, campaigns, brand systems, and digital experiences rather than artificial practice projects.",
  },
  {
    icon: Users,
    title: "Small-Team Collaboration",
    text: "A compact studio environment means designers, developers, marketers, and creative specialists work closely across project boundaries.",
  },
  {
    icon: Bot,
    title: "Practical AI Adoption",
    text: "Explore AI where it improves research, production, automation, development, or decision-making while keeping human review in the workflow.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    text: "Build knowledge through project retrospectives, technical discussions, tool exploration, documentation, and shared problem solving.",
  },
  {
    icon: Globe2,
    title: "Remote-First Collaboration",
    text: "The working model is designed around distributed collaboration, written communication, scheduled meetings, and clear project ownership.",
  },
  {
    icon: Rocket,
    title: "Growing Studio",
    text: "As the studio develops, team members can contribute to processes, standards, systems, and the direction of future work.",
  },
];

const workingStandards = [
  {
    icon: Gauge,
    title: "Performance",
    text: "We treat page speed, responsive behavior, asset efficiency, and Core Web Vitals as engineering considerations rather than visual polish added at the end.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Interfaces should consider semantic structure, keyboard interaction, readable content, focus states, labels, contrast, and inclusive interaction patterns.",
  },
  {
    icon: Search,
    title: "Search Visibility",
    text: "SEO is considered through information architecture, useful content, crawlability, metadata, structured data, internal linking, and measurable search performance.",
  },
  {
    icon: BarChart3,
    title: "Measurement",
    text: "Marketing and product decisions should connect to observable goals, meaningful events, conversion paths, and useful reporting rather than unsupported performance claims.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Delivery",
    text: "Production work requires attention to validation, security, permissions, data handling, error states, backups, deployment, and maintainability.",
  },
  {
    icon: Workflow,
    title: "Clear Handover",
    text: "Designs, code, content, analytics, and project decisions should be documented well enough for another team member to understand and continue the work.",
  },
];

const hiringSteps = [
  {
    icon: FileText,
    title: "Application",
    text: "Share your CV, portfolio, LinkedIn or GitHub profile where relevant, together with a short note explaining the type of work you would like to contribute to.",
  },
  {
    icon: ClipboardCheck,
    title: "Relevant Work Review",
    text: "We review the work most relevant to the role, looking at practical skills, decision-making, quality, communication, and the contribution you made to previous projects.",
  },
  {
    icon: MessageSquare,
    title: "Conversation",
    text: "A focused conversation about your experience, working style, role expectations, availability, collaboration, and the kinds of problems you want to solve.",
  },
  {
    icon: Handshake,
    title: "Practical Evaluation",
    text: "Where appropriate, we may use a clearly scoped evaluation or paid trial task that reflects the responsibilities of the role. The scope and expectations are discussed beforehand.",
  },
];

const candidateJourney = [
  {
    icon: Target,
    title: "Understand the role",
    text: "Review the responsibilities, requirements, working arrangement, and type of work before deciding whether the opportunity fits your experience.",
  },
  {
    icon: Laptop2,
    title: "Show your work",
    text: "Use your portfolio, shipped projects, case studies, GitHub repositories, design work, campaigns, or other relevant evidence to demonstrate your practical ability.",
  },
  {
    icon: MessageSquare,
    title: "Discuss the work",
    text: "Talk through how you approach problems, collaborate with others, communicate decisions, and respond when project requirements change.",
  },
  {
    icon: CheckCircle2,
    title: "Move forward clearly",
    text: "If there is a strong role fit, the next steps, responsibilities, working arrangement, and expectations should be clear before moving forward.",
  },
];

const careerFaqs = [
  {
    q: "Where is the team based?",
    a: "HEROY's core team is based in Injibara, Ethiopia, while the working model is remote-first. Collaboration can include scheduled calls, written project communication, and shared digital workspaces.",
  },
  {
    q: "Can I apply if I am not based in Injibara?",
    a: "Yes. The roles listed here are structured around remote collaboration. If a particular role has location, timezone, or availability requirements, those details should be discussed during the application process.",
  },
  {
    q: "How should I present my portfolio?",
    a: "Show the work most relevant to the role. For development, repositories, live products, technical decisions, and shipped features can be useful. For design and creative roles, case studies should explain the problem, your contribution, process, and final work. For marketing roles, explain the objective, channel, responsibilities, measurement approach, and lessons learned where you can share them.",
  },
  {
    q: "Will there always be a technical or creative test?",
    a: "Not necessarily. The process depends on the role and the information already available from your portfolio and conversations. If a practical evaluation is useful, it should be clearly scoped and relevant to the actual responsibilities of the position.",
  },
  {
    q: "Do you consider contract and full-time arrangements?",
    a: "Some roles can be structured as full-time or contract work depending on the position, project requirements, availability, and mutual fit. The specific arrangement should be discussed before an engagement begins.",
  },
  {
    q: "What should I expect from the first conversation?",
    a: "Expect a practical discussion about your background, previous work, the role, communication, availability, and the type of projects you want to work on. You should also use the conversation to ask questions and understand the role before making a decision.",
  },
];

const typewriterWords = [
  "Engineers",
  "Designers",
  "Marketers",
  "Creators",
  "Problem Solvers",
];

function PositionCard({
  position,
  index,
}: {
  position: (typeof positions)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = position.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="glass rounded-2xl overflow-hidden transition-shadow duration-300"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${position.glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 rgba(0,0,0,0)";
      }}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${position.gradient} flex items-center justify-center shrink-0`}
        >
          <Icon size={20} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-1">
                {position.title}
              </h3>

              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Briefcase size={11} />
                  {position.type}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {position.location}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  Application status discussed during review
                </span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown size={20} className="text-muted" />
            </motion.div>
          </div>

          <p className="text-sm text-muted mt-3 leading-relaxed">
            {position.description}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 grid lg:grid-cols-2 gap-8 border-t border-border pt-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
                  Responsibilities
                </h4>

                <ul className="flex flex-col gap-3">
                  {position.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="text-sm text-white/80 flex items-start gap-3 leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
                  What we are looking for
                </h4>

                <ul className="flex flex-col gap-3">
                  {position.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="text-sm text-white/80 flex items-start gap-3 leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 pb-6">
              <Link href="/contact" className="btn-primary inline-flex">
                Discuss This Role
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareersPageClient() {
  const [activeDept, setActiveDept] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered =
    activeDept === "All"
      ? positions
      : positions.filter((position) => position.department === activeDept);

  return (
    <div className="relative overflow-hidden">
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
      <section className="section pt-36 pb-16 relative">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge mb-5">
                  <Sparkles size={14} />
                  Careers at HEROY
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6 text-white tracking-tight"
              >
                Build useful digital work with{" "}
                <TypewriterText
                  words={typewriterWords}
                  className="text-gradient"
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted text-lg sm:text-xl leading-relaxed mb-6 max-w-3xl"
              >
                HEROY Digital Solutions brings together engineering, design,
                marketing, AI, and creative production to build and improve
                digital experiences for businesses and organizations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl"
              >
                We are building a distributed team from Ethiopia with an
                emphasis on practical delivery, clear communication, strong
                fundamentals, and work that can be reviewed rather than
                described with empty promises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                <a href="#positions" className="btn-primary">
                  Explore Roles
                  <ArrowRight size={16} />
                </a>

                <a href="#how-we-work" className="btn-outline">
                  How We Work
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-strong rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grad-primary opacity-[0.04]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                      The working model
                    </p>
                    <h2 className="font-display font-semibold text-xl text-white">
                      Small team. Serious work.
                    </h2>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center">
                    <Globe2 size={19} className="text-accent" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Cross-functional",
                      text: "Engineering, design, marketing and creative disciplines work together.",
                    },
                    {
                      icon: Laptop2,
                      title: "Remote-first",
                      text: "Work is organized around digital collaboration and clear ownership.",
                    },
                    {
                      icon: Target,
                      title: "Outcome-aware",
                      text: "Projects start with a purpose, audience, requirement, or measurable objective.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Quality-minded",
                      text: "Accessibility, performance, security, maintainability, and clarity matter.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.025] border border-border/70"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-accent" />
                        </div>

                        <div>
                          <h3 className="font-display font-semibold text-sm text-white mb-1">
                            {item.title}
                          </h3>

                          <p className="text-xs text-muted leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What working here means */}
      <section className="section pt-0 relative" id="how-we-work">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <span className="badge mb-4">
              <Layers3 size={14} />
              How We Work
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              A digital studio built around{" "}
              <span className="text-gradient">practical delivery</span>
            </h2>

            <p className="text-muted leading-relaxed">
              Professional digital work is more than a polished screenshot.
              It requires understanding the problem, making sound decisions,
              implementing carefully, testing the result, communicating
              clearly, and maintaining the work after delivery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {candidateJourney.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-5 font-display font-bold text-4xl text-white/[0.035]">
                    0{index + 1}
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center mb-5">
                    <Icon size={18} className="text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Standards */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Gauge size={14} />
                Delivery Standards
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                The details behind{" "}
                <span className="text-gradient">good digital work</span>
              </h2>

              <p className="text-sm text-muted leading-relaxed">
                These are the areas candidates may encounter during projects,
                reviews, implementation, or handover. They are practical
                disciplines rather than decorative claims.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {workingStandards.map((standard, index) => {
                const Icon = standard.icon;

                return (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.08,
                    }}
                    className="glass rounded-2xl p-6"
                  >
                    <Icon size={21} className="text-accent mb-4" />

                    <h3 className="font-display font-semibold text-white mb-2">
                      {standard.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {standard.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Perks */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">Working at HEROY</span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                What you can{" "}
                <span className="text-gradient">expect</span>
              </h2>

              <p className="text-sm text-muted leading-relaxed">
                We focus on the practical parts of a small digital studio:
                responsibility, collaboration, learning, and meaningful
                contribution to the work.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {perks.map((perk, index) => {
                const Icon = perk.icon;

                return (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.08,
                    }}
                    className="glass rounded-2xl p-6"
                  >
                    <Icon size={20} className="text-accent mb-4" />

                    <h3 className="font-display font-semibold text-base text-white mb-2">
                      {perk.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {perk.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Hiring process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="badge mb-4">
                <Workflow size={14} />
                Hiring Process
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                A clear path from{" "}
                <span className="text-gradient">application to conversation</span>
              </h2>

              <p className="text-sm text-muted leading-relaxed">
                The process can vary by role. We aim to keep it relevant to
                the work, avoid unnecessary steps, and give candidates enough
                context to decide whether the opportunity is right for them.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="glass-strong rounded-2xl p-6 relative overflow-hidden"
                  >
                    <span className="absolute top-4 right-5 font-display font-bold text-4xl text-white/5">
                      0{index + 1}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-5 relative">
                      <Icon size={18} className="text-background" />
                    </div>

                    <h3 className="font-display font-semibold text-white text-sm mb-2 relative">
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

          {/* Positions */}
          <div id="positions" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <span className="badge mb-4">
                    <Briefcase size={14} />
                    Opportunities
                  </span>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
                    Roles across{" "}
                    <span className="text-gradient">the studio</span>
                  </h2>

                  <p className="text-sm text-muted max-w-2xl leading-relaxed">
                    Explore the disciplines we recruit across. Openings and
                    engagement arrangements can change with project needs, so
                    the application conversation is the right place to confirm
                    the current status of a specific role.
                  </p>
                </div>

                <div className="text-sm text-muted">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "role" : "roles"} shown
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                {departments.map((department) => (
                  <button
                    key={department}
                    type="button"
                    onClick={() => setActiveDept(department)}
                    aria-pressed={activeDept === department}
                    className={`text-sm font-medium px-5 py-2.5 rounded-full border transition-all ${
                      activeDept === department
                        ? "bg-grad-primary text-background border-transparent"
                        : "border-border text-muted hover:text-white hover:border-primary/40"
                    }`}
                    style={
                      activeDept === department
                        ? {
                            boxShadow:
                              "0 8px 24px rgba(124,92,255,0.4)",
                          }
                        : undefined
                    }
                  >
                    {department}
                  </button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="flex flex-col gap-4 mb-20"
              >
                {filtered.map((position, index) => (
                  <PositionCard
                    key={position.id}
                    position={position}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Candidate FAQ */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="badge mb-4">
                <MessageSquare size={14} />
                Candidate FAQ
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Questions candidates{" "}
                <span className="text-gradient">usually ask</span>
              </h2>

              <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
                The information below is intended to make the application
                process easier to understand before you contact the team.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {careerFaqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    aria-expanded={openFaq === index}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center shrink-0 text-muted">
                      {openFaq === index ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm text-muted leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />

            <div
              className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative max-w-3xl mx-auto">
              <span className="badge mb-5">
                <Sparkles size={14} />
                Start a conversation
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-5 text-white">
                Do not see the exact role you are looking for?{" "}
                <span className="text-gradient">
                  Tell us what you can build.
                </span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                If your experience is relevant to digital products,
                engineering, design, marketing, AI, or creative production,
                you can still introduce yourself. Share the work you are
                proud of, explain where you can contribute, and give us enough
                context to understand your strengths.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Send Your Portfolio
                  <ArrowRight size={16} />
                </Link>

                <Link href="/about" className="btn-outline">
                  Learn About HEROY
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}