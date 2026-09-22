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
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const departments = ["All", "Engineering", "Design", "Marketing", "Creative", "Operations"];

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
      "We are looking for a skilled Full Stack Developer to own features end-to-end across our Next.js frontend and Node.js backend stack, working on real client projects from day one.",
    responsibilities: [
      "Build and maintain full-stack features across multiple client projects",
      "Write clean, well-tested TypeScript code on both frontend and backend",
      "Collaborate with designers to implement pixel-perfect UI components",
      "Participate in code reviews and architectural decisions",
      "Communicate directly with clients on technical requirements",
    ],
    requirements: [
      "2+ years of experience with React or Next.js",
      "Strong Node.js and REST API development skills",
      "Experience with PostgreSQL or MongoDB",
      "Familiarity with Git and CI/CD workflows",
      "Strong written and verbal English communication",
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
      "We need a detail-oriented Frontend Developer with a strong eye for design to build polished, performant interfaces using React, Next.js, and Tailwind CSS.",
    responsibilities: [
      "Build responsive, accessible, high-performance frontend components",
      "Implement Framer Motion animations and interactive UI elements",
      "Work closely with designers to translate Figma designs into code",
      "Optimize for Core Web Vitals and cross-browser compatibility",
      "Maintain and improve our internal component library",
    ],
    requirements: [
      "2+ years of experience with React and TypeScript",
      "Strong understanding of CSS and Tailwind CSS",
      "Experience with animation libraries (Framer Motion preferred)",
      "Attention to detail and pixel-perfect implementation",
      "Understanding of web performance and SEO best practices",
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
      "We are looking for a Backend Engineer to design and build scalable APIs, services, and infrastructure for our client projects and internal tools.",
    responsibilities: [
      "Design and build RESTful and GraphQL APIs",
      "Manage database architecture and query optimization",
      "Implement authentication, authorization, and security best practices",
      "Set up and maintain CI/CD pipelines and deployment infrastructure",
      "Write comprehensive API documentation",
    ],
    requirements: [
      "2+ years of Node.js and Express development experience",
      "Strong SQL and NoSQL database knowledge",
      "Experience with AWS or similar cloud platforms",
      "Understanding of security best practices",
      "Experience with Docker and containerization",
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
      "We need an Android Developer to build native and cross-platform mobile applications for our clients across healthcare, e-commerce, and productivity sectors.",
    responsibilities: [
      "Build native Android applications in Kotlin",
      "Develop cross-platform apps using React Native",
      "Integrate REST APIs and third-party SDKs",
      "Write unit tests and conduct thorough QA testing",
      "Manage Play Store submissions and updates",
    ],
    requirements: [
      "2+ years of Android development in Kotlin",
      "Experience with React Native is a strong plus",
      "Understanding of Material Design guidelines",
      "Experience with Play Store submission process",
      "Familiarity with offline-first app architecture",
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
      "We are looking for an AI Developer to design and build AI-powered features, chatbots, automation systems, and intelligent integrations for our clients.",
    responsibilities: [
      "Design and build AI chatbots and conversational interfaces",
      "Integrate large language model APIs into client products",
      "Build automation workflows and intelligent data pipelines",
      "Train and fine-tune models on client-specific data",
      "Research and evaluate new AI tools and frameworks",
    ],
    requirements: [
      "Experience building with OpenAI, Anthropic, or similar APIs",
      "Strong Python or JavaScript/TypeScript skills",
      "Understanding of prompt engineering and RAG architectures",
      "Experience with vector databases (Pinecone, Weaviate, or similar)",
      "Ability to explain AI concepts clearly to non-technical clients",
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
      "We need a creative and analytical UI/UX Designer to design interfaces that are intuitive, beautiful, and aligned with business goals across all our client projects.",
    responsibilities: [
      "Conduct user research and create user personas and journey maps",
      "Design wireframes, prototypes, and high-fidelity UI mockups in Figma",
      "Build and maintain comprehensive design systems",
      "Collaborate closely with developers during implementation",
      "Run usability tests and iterate based on user feedback",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Expert-level Figma skills",
      "Strong portfolio demonstrating web and mobile UI work",
      "Understanding of accessibility and inclusive design principles",
      "Ability to clearly communicate design decisions to stakeholders",
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
      "We are looking for a versatile Graphics Designer to create compelling visual assets for our clients — social media, print, advertising, and brand identity.",
    responsibilities: [
      "Design social media graphics, banners, and digital ad creatives",
      "Create brand identity assets including logos and style guides",
      "Produce print-ready materials for marketing campaigns",
      "Design presentation decks and sales materials",
      "Maintain brand consistency across all visual deliverables",
    ],
    requirements: [
      "3+ years of graphic design experience",
      "Expert-level Adobe Creative Suite (Illustrator, Photoshop)",
      "Strong portfolio with brand identity and social media work",
      "Understanding of print and digital design specifications",
      "Ability to work to tight deadlines across multiple projects",
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
      "We need a skilled Video Editor who can also create motion graphics to produce promotional videos, social media reels, and brand content for our clients.",
    responsibilities: [
      "Edit promotional videos, corporate content, and social media reels",
      "Create motion graphics, lower thirds, and animated transitions",
      "Color grade and audio mix all video deliverables",
      "Work with clients to understand creative briefs and deliver on time",
      "Manage video assets and maintain organized project files",
    ],
    requirements: [
      "3+ years of video editing experience",
      "Expert-level Adobe Premiere Pro and After Effects",
      "Strong motion graphics portfolio",
      "Understanding of social media video formats and specifications",
      "Ability to manage multiple projects simultaneously",
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
      "We are looking for an SEO Specialist to plan and execute technical SEO, content strategy, and link building campaigns that drive measurable organic growth for our clients.",
    responsibilities: [
      "Conduct comprehensive technical SEO audits and implement fixes",
      "Develop and execute keyword and content strategies",
      "Plan and execute link building campaigns",
      "Monitor rankings, traffic, and conversions in Google Search Console and Ahrefs",
      "Report on campaign progress and ROI to clients monthly",
    ],
    requirements: [
      "2+ years of SEO experience with demonstrated results",
      "Proficiency with Ahrefs, Semrush, and Google Search Console",
      "Strong understanding of technical SEO and Core Web Vitals",
      "Experience creating content briefs and working with writers",
      "Analytical mindset with strong data interpretation skills",
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
      "We need a performance-driven Digital Marketing Manager to plan and execute paid and organic campaigns across multiple channels for our growing client base.",
    responsibilities: [
      "Plan and execute Google Ads, Meta Ads, and LinkedIn campaigns",
      "Develop and manage content calendars and social media strategies",
      "Set up marketing automation and email nurture sequences",
      "Track and report on campaign performance across all channels",
      "Identify growth opportunities and present strategic recommendations",
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Hands-on experience with Google Ads and Meta Ads Manager",
      "Strong understanding of marketing funnels and attribution",
      "Experience with email marketing platforms",
      "Data-driven mindset with strong analytical skills",
    ],
  },
];

const perks = [
  { icon: Code2, title: "Real Projects", text: "Work on live client projects from day one, not internal tools or test environments." },
  { icon: Users, title: "Collaborative Team", text: "A tight-knit team of engineers, designers, and marketers who genuinely support each other." },
  { icon: Bot, title: "AI-First Culture", text: "We integrate the latest AI tools into our workflow so you always work with the most modern stack." },
  { icon: Sparkles, title: "Continuous Learning", text: "Regular internal knowledge sharing, tool reviews, and skill development sessions." },
  { icon: MapPin, title: "Remote-First", text: "Work from anywhere while staying connected with a team based in Injibara, Ethiopia." },
  { icon: Rocket, title: "Fast Growth", text: "As the agency grows, so do the team members who helped build it — leadership opportunities for everyone." },
];

const hiringSteps = [
  {
    icon: FileText,
    title: "Apply",
    text: "Send your portfolio, CV, and a short note on what you'd want to work on. No lengthy application forms.",
  },
  {
    icon: ClipboardCheck,
    title: "Portfolio Review",
    text: "We review your past work in detail — we care far more about what you've shipped than where you studied.",
  },
  {
    icon: MessageSquare,
    title: "Conversation",
    text: "A relaxed call to talk through your experience, how you work, and what you're looking for next.",
  },
  {
    icon: Handshake,
    title: "Paid Trial Task",
    text: "A small, paid, real-world task scoped to a few hours — the best way for both sides to know it's a fit.",
  },
];

const careerFaqs = [
  {
    q: "Is this fully remote?",
    a: "Yes — all roles are remote-first. Our core team is based in Injibara, Ethiopia, and we coordinate through WhatsApp, Telegram, and scheduled calls, so you can work from wherever suits you.",
  },
  {
    q: "How is compensation structured?",
    a: "We discuss compensation openly during the interview process, based on role, experience, and whether the position is full-time or contract. There's no rigid band we won't discuss — we'd rather have a direct conversation than hide behind a vague range.",
  },
  {
    q: "What's it like working at a 3-person studio?",
    a: "You'll have far more ownership and visibility than at a large agency — your work ships directly to real clients, and your input on process and tooling actually shapes how the studio operates as it grows.",
  },
  {
    q: "Do you hire contractors as well as full-time staff?",
    a: "Yes. Several roles are open to either full-time or contract arrangements, depending on your availability and what fits the workload at the time.",
  },
];

const typewriterWords = ["Engineers", "Designers", "Marketers", "Creators", "Innovators"];

function PositionCard({ position, index }: { position: typeof positions[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = position.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="glass rounded-2xl overflow-hidden"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${position.glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
      }}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${position.gradient} flex items-center justify-center shrink-0`}>
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
                  <Briefcase size={11} /> {position.type}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {position.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> Open now
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
            <div className="px-6 pb-6 grid sm:grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
                  Responsibilities
                </h4>
                <ul className="flex flex-col gap-2">
                  {position.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-white/80 flex items-start gap-2">
                      <span className="text-accent mt-1 text-xs">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
                  Requirements
                </h4>
                <ul className="flex flex-col gap-2">
                  {position.requirements.map((r) => (
                    <li key={r} className="text-sm text-white/80 flex items-start gap-2">
                      <span className="text-accent mt-1 text-xs">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="btn-primary inline-flex"
              >
                Apply for this Role
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
  const filtered = activeDept === "All"
    ? positions
    : positions.filter((p) => p.department === activeDept);

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
              <Sparkles size={14} /> Join HEROY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            We are looking for{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-3"
          >
            Join a team of builders who are passionate about crafting
            world-class digital products from Ethiopia, for the world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted text-sm leading-relaxed"
          >
            We're a small, growing studio — joining now means real ownership
            over the work you do and a direct hand in shaping how we operate
            as we scale.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="glass rounded-2xl p-6"
                >
                  <Icon size={20} className="text-accent mb-3" />
                  <h3 className="font-display font-semibold text-base text-white mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{perk.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Hiring process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="badge mb-4">Hiring Process</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                How we{" "}
                <span className="text-gradient">hire</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                No black-box process. Four straightforward steps, usually
                completed within one to two weeks.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass-strong rounded-2xl p-6 relative overflow-hidden"
                  >
                    <span className="absolute top-4 right-5 font-display font-bold text-3xl text-white/5">
                      0{i + 1}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-grad-mix flex items-center justify-center mb-4 relative">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveDept(dept)}
                  className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${activeDept === dept
                      ? "bg-grad-primary text-background border-transparent"
                      : "border-border text-muted hover:text-white hover:border-primary/40"
                    }`}
                  style={
                    activeDept === dept
                      ? { boxShadow: "0 8px 24px rgba(124,92,255,0.4)" }
                      : undefined
                  }
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="flex flex-col gap-4 mb-20">
              {filtered.map((position, i) => (
                <PositionCard key={position.id} position={position} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Careers FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-8"
            >
              Candidate <span className="text-gradient">FAQ</span>
            </motion.h2>

            <div className="flex flex-col gap-3">
              {careerFaqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-display font-semibold text-sm text-white">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/5 border border-border flex items-center justify-center shrink-0 text-muted">
                      {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-primary/25 -top-20 -left-20" />
            <div className="glow-orb w-48 h-48 bg-accent/20 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                Do not see the right role?{" "}
                <span className="text-gradient">Reach out anyway</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
                We are always interested in meeting talented people. Send
                us your portfolio and tell us how you want to contribute
                to what we are building.
              </p>
              <Link href="/contact" className="btn-primary">
                Send Us Your Portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}