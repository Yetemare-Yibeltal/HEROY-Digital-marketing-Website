"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Globe2,
  BriefcaseBusiness,
  Target,
  Layers3,
  ShieldCheck,
  Zap,
  CalendarDays,
  FileText,
  Code2,
  Megaphone,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "Heroydigitalsolution@gmail.com",
    description: "For project briefs, partnerships, and detailed enquiries.",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    href: "mailto:Heroydigitalsolution@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+251 92 385 3252",
    description: "A direct channel for quick project questions and conversations.",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    href: "https://wa.me/251923853252",
  },
  {
    icon: Phone,
    title: "Telegram",
    value: "@heroy_digital_solution2026",
    description: "Message the team directly through Telegram.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    href: "https://t.me/heroy_digital_solution2026",
  },
  {
    icon: MapPin,
    title: "Studio",
    value: "Injibara, Awi Zone",
    description: "Amhara Region, Ethiopia — working with clients remotely.",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    href: "https://www.google.com/maps/search/?api=1&query=Injibara%2C+Awi+Zone%2C+Amhara%2C+Ethiopia",
  },
];

const services = [
  "Digital Marketing",
  "SEO Services",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Graphics Design",
  "Video Editing",
  "AI Solutions",
  "Branding",
  "E-commerce",
  "SaaS Development",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
  "Not sure yet",
];

const quickFaqs = [
  {
    q: "How fast will I hear back?",
    a: "We aim to review enquiries promptly and provide a clear next step based on the project information you share.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. The initial discovery conversation is intended to understand your goals, requirements, and whether the project is a good fit.",
  },
  {
    q: "Do I need a full brief ready?",
    a: "No. A rough idea, business goal, existing website, or problem statement is enough to begin the conversation.",
  },
  {
    q: "Can you work with an existing team?",
    a: "Yes. We can collaborate with founders, internal marketing teams, developers, designers, or other external specialists.",
  },
];

const typewriterWords = [
  "Your Project",
  "Your Growth",
  "Your Digital Product",
  "Your Next Campaign",
];

const projectSignals = [
  {
    icon: Target,
    title: "Clear objectives",
    text: "Tell us what you want to achieve, who you are trying to reach, and what success should look like.",
  },
  {
    icon: Layers3,
    title: "The right scope",
    text: "Share the services, features, channels, integrations, or deliverables you already have in mind.",
  },
  {
    icon: BarChart3,
    title: "Business context",
    text: "Existing websites, campaigns, analytics, products, competitors, or previous work can help us understand the opportunity.",
  },
];

const deliveryPrinciples = [
  {
    icon: BriefcaseBusiness,
    title: "Business-first thinking",
    text: "Projects begin with goals and requirements rather than technology for technology's sake.",
  },
  {
    icon: Code2,
    title: "Design + technology",
    text: "Strategy, experience design, engineering, content, and digital growth can be coordinated around the same objective.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent communication",
    text: "We aim to make scope, deliverables, assumptions, dependencies, and next steps understandable from the beginning.",
  },
  {
    icon: Zap,
    title: "Practical execution",
    text: "The goal is to turn a validated direction into useful digital experiences, products, campaigns, and measurable work.",
  },
];

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            service: selectedService,
            budget: selectedBudget,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-[38%] -left-24"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-orb w-72 h-72 bg-accent-pink/10 bottom-[15%] right-[10%]"
        style={{ animationDelay: "6s" }}
      />

      {/* Hero */}
      <section className="section pt-32 sm:pt-36 pb-16 relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="badge mb-5">
                <Sparkles size={14} />
                Start a conversation
              </span>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tight text-white max-w-5xl">
                Start{" "}
                <TypewriterText
                  words={typewriterWords}
                  className="text-gradient"
                />
              </h1>

              <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mt-7">
                Tell us where you are today, what you are trying to achieve,
                and what needs to change. We will use the information you
                provide to understand the opportunity and determine the most
                useful next step.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="#project-form" className="btn-primary">
                  Send Project Brief
                  <ArrowRight size={16} />
                </a>

                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:pb-2"
            >
              <div className="glass-strong rounded-3xl p-6 sm:p-7 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4 mb-7">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                        Project intake
                      </p>
                      <h2 className="font-display font-semibold text-xl text-white">
                        Start with the essentials
                      </h2>
                    </div>

                    <div className="w-11 h-11 rounded-2xl bg-grad-primary flex items-center justify-center shrink-0">
                      <FileText size={19} className="text-background" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["01", "Goals"],
                      ["02", "Scope"],
                      ["03", "Budget"],
                      ["04", "Timeline"],
                    ].map(([number, label]) => (
                      <div
                        key={number}
                        className="rounded-2xl border border-border bg-white/[0.03] p-4"
                      >
                        <span className="text-[10px] font-semibold tracking-widest text-accent">
                          {number}
                        </span>
                        <p className="font-display font-semibold text-sm text-white mt-2">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-3 mt-6 pt-5 border-t border-border">
                    <Globe2
                      size={17}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <p className="text-xs text-muted leading-relaxed">
                      HEROY is based in Ethiopia and can collaborate remotely
                      with clients, founders, organizations, and teams across
                      different markets.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={
                    method.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden group block"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 50px ${method.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at top left, ${method.glow}, transparent 70%)`,
                    }}
                  />

                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-5`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display font-semibold text-base text-white">
                        {method.title}
                      </h3>
                      <ChevronRight
                        size={15}
                        className="text-muted group-hover:text-white group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    <p className="text-sm font-medium text-accent mt-2 mb-2 break-words">
                      {method.value}
                    </p>

                    <p className="text-xs text-muted leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main contact workspace */}
      <section id="project-form" className="section relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 xl:gap-12">
            {/* Left information */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <div className="glass-strong rounded-3xl p-7 sm:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  Before we start
                </span>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-3 mb-4">
                  Give us enough context to understand the opportunity.
                </h2>

                <p className="text-muted text-sm leading-relaxed">
                  You do not need a perfect specification. A clear problem,
                  business objective, existing product, campaign idea, or
                  technical requirement is enough to begin.
                </p>

                <div className="flex flex-col gap-5 mt-8">
                  {projectSignals.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center shrink-0">
                          <Icon size={17} className="text-accent" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-muted">
                              0{index + 1}
                            </span>
                            <p className="font-display font-semibold text-sm text-white">
                              {item.title}
                            </p>
                          </div>

                          <p className="text-xs text-muted leading-relaxed mt-1.5">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <CalendarDays size={18} className="text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      What happens next?
                    </p>
                    <p className="text-xs text-muted">
                      A straightforward path from enquiry to project planning.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      step: "01",
                      title: "We review your brief",
                      text: "The information you submit helps us understand your needs and identify the relevant expertise.",
                    },
                    {
                      step: "02",
                      title: "We clarify the opportunity",
                      text: "If more context is needed, we can discuss objectives, requirements, constraints, and priorities.",
                    },
                    {
                      step: "03",
                      title: "Discovery",
                      text: "A focused conversation can turn the initial idea into a clearer project direction and scope.",
                    },
                    {
                      step: "04",
                      title: "Proposal",
                      text: "For suitable projects, the next stage can define deliverables, assumptions, timeline, and commercial details.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="font-display font-bold text-xl text-white/15 leading-none w-8 shrink-0">
                        {item.step}
                      </span>

                      <div>
                        <p className="font-display font-semibold text-sm text-white mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <Clock size={19} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Response & availability
                  </p>
                  <p className="text-xs text-muted leading-relaxed mt-1">
                    We aim to respond to enquiries within 24 hours on business
                    days. Messages received outside working hours may be
                    answered on the next business day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong rounded-3xl p-8 sm:p-12 text-center min-h-[650px] flex flex-col items-center justify-center gap-5"
                >
                  <div className="w-20 h-20 rounded-full bg-grad-primary flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-background" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-accent">
                    Enquiry received
                  </span>

                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
                    Message sent successfully.
                  </h3>

                  <p className="text-muted text-sm max-w-lg text-center leading-relaxed">
                    Thank you for sharing your project. The information has
                    been submitted for review. We will use the details you
                    provided to determine the appropriate next step.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 mt-3">
                    <Link href="/services" className="btn-primary">
                      Explore Services
                      <ArrowRight size={15} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          phone: "",
                          message: "",
                        });
                        setSelectedService("");
                        setSelectedBudget("");
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6"
                >
                  <div className="pb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-accent">
                      Project brief
                    </span>

                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2">
                      Tell us what you are building.
                    </h2>

                    <p className="text-muted text-sm leading-relaxed mt-2 max-w-2xl">
                      The more useful context you provide, the easier it is to
                      understand your project before the first conversation.
                    </p>
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Company or organization"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="+1 234 567 8900"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        What do you need?
                      </label>
                      <p className="text-xs text-muted mt-1">
                        Select the service that is closest to your current
                        requirement.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          aria-pressed={selectedService === service}
                          onClick={() => setSelectedService(service)}
                          className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                            selectedService === service
                              ? "bg-grad-primary text-background border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-white/[0.03]"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Estimated investment
                      </label>
                      <p className="text-xs text-muted mt-1">
                        This helps us understand the level of scope you are
                        considering. You can also select “Not sure yet”.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          aria-pressed={selectedBudget === budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                            selectedBudget === budget
                              ? "bg-grad-mix text-white border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-white/[0.03]"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-muted uppercase tracking-wide"
                    >
                      Project Brief *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell us about your goals, current situation, target audience, required features or services, existing website/product, important integrations, and any timeline you have in mind..."
                      className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.025] px-4 py-3">
                    <ShieldCheck
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <p className="text-[11px] text-muted leading-relaxed">
                      Please share only information relevant to your project
                      enquiry. Avoid submitting passwords, payment credentials,
                      private access keys, or other sensitive security
                      information through this form.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60"
                  >
                    {loading ? "Sending Project Brief..." : "Send Project Brief"}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working principles */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <div className="max-w-3xl mb-10">
            <span className="badge mb-4">
              <Sparkles size={14} />
              How we approach projects
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              A contact form should start a{" "}
              <span className="text-gradient">useful conversation.</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mt-5">
              Good project communication starts before development or campaign
              execution. Context, priorities, constraints, and desired
              outcomes help create a stronger foundation for the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {deliveryPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center mb-5">
                    <Icon size={18} className="text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1100px]">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Before you submit
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Common questions
            </h2>

            <p className="text-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              A few quick answers if you are still deciding what information
              to include.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {quickFaqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass rounded-2xl p-5"
              >
                <p className="text-sm font-semibold text-white mb-2">
                  {faq.q}
                </p>

                <p className="text-xs text-muted leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-7">
            <Link
              href="/faq"
              className="text-sm font-semibold text-accent inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explore the complete FAQ
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-[0.55fr_1.45fr]">
              <div className="p-7 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-border flex items-center justify-center mb-6">
                  <MapPin size={19} className="text-accent" />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  Studio location
                </span>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-3">
                  Injibara, Ethiopia
                </h2>

                <p className="text-muted text-sm leading-relaxed mt-4">
                  HEROY is based in Injibara, Awi Zone, Amhara Region,
                  Ethiopia. Our digital workflow supports remote collaboration
                  with clients and teams beyond our local area.
                </p>

                <div className="flex items-center gap-2 mt-6 text-xs text-muted">
                  <Globe2 size={15} className="text-accent" />
                  Remote collaboration available
                </div>
              </div>

              <div className="min-h-[320px]">
                <iframe
                  title="HEROY Digital Solutions location in Injibara, Ethiopia"
                  src="https://www.google.com/maps?q=Injibara,+Awi+Zone,+Amhara,+Ethiopia&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    minHeight: "320px",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pt-4 pb-28 relative">
        <div className="container-px mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

            <div className="relative">
              <span className="badge mb-5">
                <MessageCircle size={14} />
                Ready when you are
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Have an idea worth{" "}
                <span className="text-gradient">exploring?</span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
                Start with the project brief above or contact us directly.
                Whether you are defining a new digital product, improving an
                existing website, launching a campaign, or exploring a
                technology solution, the first step is a conversation.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a href="#project-form" className="btn-primary">
                  Start Your Project
                  <ArrowRight size={16} />
                </a>

                <Link href="/consultation" className="btn-outline">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}