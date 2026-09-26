"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const benefits = [
  "Get a clear direction for your project from someone on our founding team",
  "Understand the right technology stack for your specific needs",
  "Receive a realistic timeline and budget estimate",
  "Ask any technical or strategic questions you have",
  "No pressure, no obligation — just honest, useful advice",
];

const topics = [
  "Website or web app project",
  "Mobile app development",
  "Digital marketing strategy",
  "SEO and organic growth",
  "Branding and design",
  "AI integration",
  "E-commerce setup",
  "SaaS development",
  "Technical architecture advice",
  "Other",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const platforms = [
  "Google Meet",
  "WhatsApp Video",
  "Zoom",
  "Phone Call",
];

const typewriterWords = [
  "Your Project",
  "Your Goals",
  "Your Strategy",
  "Your Next Step",
];

const consultationPrinciples = [
  {
    icon: Target,
    title: "Start with the problem",
    text: "We begin by understanding what you are trying to achieve, who the project serves, and what is currently preventing progress.",
  },
  {
    icon: ShieldCheck,
    title: "Recommend what fits",
    text: "Technology choices should follow the requirements. We discuss practical options rather than adding complexity that the project does not need.",
  },
  {
    icon: FileText,
    title: "Make the next step clear",
    text: "Where possible, the conversation should leave you with a clearer understanding of scope, priorities, dependencies, and the information needed to move forward.",
  },
];

const consultationStages = [
  {
    number: "01",
    title: "Understand",
    text: "We discuss your organization, audience, current situation, goals, and the reason the project matters.",
  },
  {
    number: "02",
    title: "Clarify",
    text: "We identify important requirements, constraints, integrations, content needs, technical considerations, and open questions.",
  },
  {
    number: "03",
    title: "Explore",
    text: "We consider suitable approaches across design, development, marketing, SEO, AI, mobile, or other relevant capabilities.",
  },
  {
    number: "04",
    title: "Plan",
    text: "We outline practical next steps and discuss the likely scope, delivery considerations, timeline, and budget direction.",
  },
];

const preparationItems = [
  "A short description of what you want to build, improve, or solve",
  "Who the product, website, campaign, or service is intended to serve",
  "Any existing website, application, brand materials, analytics, or technical documentation",
  "Your preferred launch window or important business deadline",
  "Known integrations, platforms, systems, or technical constraints",
  "Questions or concerns you want the consultation to address",
];

export default function ConsultationPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("Google Meet");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please enter your name and email address.");
      return;
    }

    if (!selectedTopic) {
      setError("Please choose what you'd like to discuss.");
      return;
    }

    if (!formData.date || !selectedTime) {
      setError("Please choose a preferred date and time.");
      return;
    }

    setLoading(true);

    const message = [
      `Consultation request — Topic: ${selectedTopic}`,
      `Preferred date: ${formData.date}`,
      `Preferred time: ${selectedTime}`,
      `Preferred platform: ${selectedPlatform}`,
      "",
      formData.notes.trim()
        ? `Additional notes: ${formData.notes.trim()}`
        : "Additional notes: None",
    ].join("\n");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            service: selectedTopic,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      date: "",
      notes: "",
    });
    setSelectedTopic("");
    setSelectedTime("");
    setSelectedPlatform("Google Meet");
  };

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
      <section className="section pt-32 sm:pt-36 pb-14 relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 xl:gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-5">
                <Sparkles size={14} />
                Free Consultation
              </span>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white max-w-5xl">
                Let&apos;s talk about{" "}
                <TypewriterText
                  words={typewriterWords}
                  className="text-gradient"
                />
              </h1>

              <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mt-7">
                Book a free 30-minute conversation with the HEROY team to
                explain what you are trying to achieve, identify the important
                requirements, and explore a practical direction for your next
                digital project.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted">
                  <Clock size={15} className="text-accent" />
                  30-minute focused session
                </div>

                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted">
                  <MessageCircle size={15} className="text-accent" />
                  No obligation
                </div>

                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted">
                  <Users size={15} className="text-accent" />
                  Direct conversation
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-strong rounded-3xl p-6 sm:p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                A useful first conversation
              </p>

              <h2 className="font-display font-semibold text-xl sm:text-2xl text-white leading-tight mb-4">
                Bring the challenge.
                <br />
                We&apos;ll explore the direction.
              </h2>

              <p className="text-sm text-muted leading-relaxed mb-6">
                You do not need a finished specification before contacting us.
                A clear problem, an early idea, or a project that needs
                technical direction is enough to begin the conversation.
              </p>

              <div className="space-y-3">
                {[
                  "Business goals and project context",
                  "Users, audiences, and important workflows",
                  "Technology and implementation considerations",
                  "Scope, priorities, timeline, and budget direction",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation principles */}
      <section className="section pt-0 pb-16 relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid md:grid-cols-3 gap-5">
            {consultationPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="glass rounded-2xl p-6 sm:p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon size={19} className="text-primary" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.15em] text-accent mb-2">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display font-semibold text-lg text-white mb-3">
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

      {/* Main consultation area */}
      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 xl:gap-12 items-start">
            {/* Information column */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center">
                    <Clock size={19} className="text-background" />
                  </div>

                  <div>
                    <p className="font-display font-semibold text-white">
                      30 Minutes
                    </p>
                    <p className="text-xs text-muted">
                      Free, no commitment
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  A focused half-hour call where we dig into your goals,
                  current challenges, and what success looks like for your
                  project, then suggest the best path forward.
                </p>

                <div className="mt-6 pt-5 border-t border-border grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted mb-1">
                      Format
                    </p>
                    <p className="text-sm text-white font-medium">
                      Online conversation
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted mb-1">
                      Focus
                    </p>
                    <p className="text-sm text-white font-medium">
                      Your project
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="glass rounded-3xl p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-accent mb-2">
                  Consultation outcome
                </p>

                <h3 className="font-display font-semibold text-xl text-white mb-5">
                  What you will{" "}
                  <span className="text-gradient">walk away with</span>
                </h3>

                <ul className="flex flex-col gap-4">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Video,
                    title: "Video Call",
                    text: "Meet face to face on your preferred platform",
                  },
                  {
                    icon: Users,
                    title: "Direct Access",
                    text: "Speak directly with the person building your project",
                  },
                  {
                    icon: MessageCircle,
                    title: "Follow Up",
                    text: "Receive a written summary after the call",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="glass rounded-2xl p-5 text-center"
                    >
                      <Icon
                        size={18}
                        className="text-accent mx-auto mb-3"
                      />

                      <p className="text-xs font-semibold text-white mb-1.5">
                        {item.title}
                      </p>

                      <p className="text-[11px] text-muted leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong rounded-3xl p-8 sm:p-12 text-center min-h-[600px] flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-grad-primary flex items-center justify-center mb-2">
                    <Calendar
                      size={28}
                      className="text-background"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    Request received
                  </p>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    Consultation requested!
                  </h3>

                  <p className="text-muted text-sm max-w-md text-center leading-relaxed">
                    We have received your request and will confirm your
                    consultation slot within 24 hours via email. We look
                    forward to speaking with you.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 w-full max-w-md mt-4">
                    <div className="glass rounded-xl p-4 text-left">
                      <p className="text-[10px] uppercase tracking-wide text-muted mb-1">
                        Next step
                      </p>
                      <p className="text-sm text-white">
                        Consultation confirmation
                      </p>
                    </div>

                    <div className="glass rounded-xl p-4 text-left">
                      <p className="text-[10px] uppercase tracking-wide text-muted mb-1">
                        Communication
                      </p>
                      <p className="text-sm text-white">
                        Via your email address
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-outline mt-5"
                  >
                    Book Another Session
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">
                      Start the conversation
                    </p>

                    <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white">
                      Book your free session
                    </h2>

                    <p className="text-sm text-muted leading-relaxed mt-2 max-w-2xl">
                      Share enough context for us to understand what you
                      need. You do not need a complete technical
                      specification before booking.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle
                        size={16}
                        className="shrink-0 mt-0.5"
                      />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="consultation-name"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Full Name *
                      </label>

                      <input
                        id="consultation-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="consultation-email"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Email Address *
                      </label>

                      <input
                        id="consultation-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="consultation-date"
                        className="text-xs font-semibold text-muted uppercase tracking-wide"
                      >
                        Preferred Date *
                      </label>

                      <input
                        id="consultation-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Preferred Time *
                      </span>

                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => {
                              setSelectedTime(slot);
                              setError(null);
                            }}
                            aria-pressed={selectedTime === slot}
                            className={`text-xs px-3 py-2 rounded-full border transition-all ${
                              selectedTime === slot
                                ? "bg-grad-primary text-background border-transparent"
                                : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-primary/5"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Preferred Platform
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {platforms.map((platform) => (
                        <button
                          key={platform}
                          type="button"
                          onClick={() => setSelectedPlatform(platform)}
                          aria-pressed={selectedPlatform === platform}
                          className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                            selectedPlatform === platform
                              ? "bg-grad-mix text-white border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-primary/5"
                          }`}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                      What would you like to discuss? *
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => {
                            setSelectedTopic(topic);
                            setError(null);
                          }}
                          aria-pressed={selectedTopic === topic}
                          className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                            selectedTopic === topic
                              ? "bg-grad-primary text-background border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40 hover:bg-primary/5"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="consultation-notes"
                      className="text-xs font-semibold text-muted uppercase tracking-wide"
                    >
                      Anything else we should know?
                    </label>

                    <textarea
                      id="consultation-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share any background, context, existing technology, business requirements, or specific questions you want to cover..."
                      className="bg-white/5 border border-border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="rounded-2xl border border-border bg-white/[0.02] p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={17}
                        className="text-accent shrink-0 mt-0.5"
                      />

                      <p className="text-xs text-muted leading-relaxed">
                        Please avoid sending passwords, private access keys,
                        payment information, or other highly sensitive
                        credentials through this form. Project details and
                        general business context are enough for an initial
                        consultation.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary justify-center min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Sending..."
                      : "Book My Free Consultation"}
                    <Send size={16} />
                  </button>

                  <p className="text-[11px] text-muted text-center leading-relaxed">
                    By submitting this form, you are requesting a
                    consultation with HEROY Digital Solutions. Specific
                    project scope, pricing, and delivery commitments are
                    discussed separately where applicable.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation journey */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="max-w-3xl mb-10">
            <span className="badge mb-4">
              <Sparkles size={14} />
              How the conversation works
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              From an initial idea to a{" "}
              <span className="text-gradient">clearer direction.</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mt-4">
              The first conversation is not a substitute for discovery or a
              formal technical specification. It is an opportunity to
              establish context, identify the important questions, and decide
              what should happen next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {consultationStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="glass rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="font-display font-bold text-3xl text-white/10">
                    {stage.number}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-accent"
                  />
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {stage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation section */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
            <div>
              <span className="badge mb-4">
                <FileText size={14} />
                Before the call
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                A little context makes the conversation{" "}
                <span className="text-gradient">more useful.</span>
              </h2>

              <p className="text-muted leading-relaxed mt-5">
                You do not need to prepare a formal requirements document.
                However, having a few useful details available can help us
                spend the consultation discussing the actual project rather
                than starting from assumptions.
              </p>
            </div>

            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {preparationItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service scope */}
      <section className="section relative">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="glass rounded-3xl p-7 sm:p-9 lg:p-11">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">
                  Areas we can discuss
                </p>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                  One conversation can start with a{" "}
                  <span className="text-gradient">
                    focused problem.
                  </span>
                </h2>

                <p className="text-sm text-muted leading-relaxed mt-4">
                  HEROY works across digital strategy, design, development,
                  growth, and technology. The right starting point depends on
                  your actual requirements rather than a predefined package.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-accent shrink-0"
                    />

                    <span className="text-sm text-muted">
                      {topic}
                    </span>

                    <span className="ml-auto text-[10px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pt-4 pb-20 relative">
        <div className="container-px mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-[2rem] p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-56 h-56 bg-primary/20 -top-20 -left-20" />

            <div
              className="glow-orb w-48 h-48 bg-accent/10 -bottom-24 -right-20"
              style={{ animationDelay: "3s" }}
            />

            <div className="relative">
              <span className="badge mb-5">
                <Calendar size={14} />
                Start with a conversation
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
                Have a project in mind?
                <br />
                <span className="text-gradient">
                  Let&apos;s understand it.
                </span>
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-7">
                Whether you are validating an idea, replacing an existing
                system, launching a new digital product, or improving an
                established online presence, the first step is understanding
                the problem clearly.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#consultation-form"
                  className="btn-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById("consultation-form")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </a>

                <Link href="/services" className="btn-outline">
                  Explore Services
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