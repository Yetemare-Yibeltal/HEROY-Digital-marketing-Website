"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@heroy.dev",
    description: "We respond within 24 hours on business days.",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,92,255,0.3)",
    href: "mailto:hello@heroy.dev",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+251 900 000 000",
    description: "Chat with us directly for quick questions.",
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.3)",
    href: "https://wa.me/251900000000",
  },
  {
    icon: Phone,
    title: "Telegram",
    value: "@heroydev",
    description: "Message us on Telegram anytime.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.3)",
    href: "https://t.me/heroydev",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Injibara, Awi Zone",
    description: "Amhara Region, Ethiopia",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    href: "#",
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

const typewriterWords = ["Today", "Your Project", "Your Goals", "Your Vision"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <Sparkles size={14} /> Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Start{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            Tell us about your project and we will respond within 24 hours
            with a clear plan, timeline, and cost estimate.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden group block"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${method.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left, ${method.glow}, transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm font-medium text-accent mb-1">{method.value}</p>
                    <p className="text-xs text-muted">{method.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <div className="glass-strong rounded-2xl p-6">
                <h2 className="font-display font-semibold text-xl text-white mb-4">
                  What happens <span className="text-gradient">next?</span>
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    { step: "01", title: "We review your brief", text: "Our team reads every submission carefully and assigns the right specialist to your project type." },
                    { step: "02", title: "We respond within 24h", text: "You receive a personalized response — not a template — with initial thoughts and any clarifying questions." },
                    { step: "03", title: "We schedule a discovery call", text: "A focused 30-minute call to align on goals, scope, and timeline before we put together a proposal." },
                    { step: "04", title: "You receive a detailed proposal", text: "A clear document covering scope, deliverables, timeline, and pricing tailored to your project." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="font-display font-bold text-2xl text-white/10 leading-none w-8 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-display font-semibold text-sm text-white mb-1">{item.title}</p>
                        <p className="text-xs text-muted leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-5 flex items-center gap-4">
                <Clock size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Response time</p>
                  <p className="text-xs text-muted">We respond to all messages within 24 hours on business days. Usually much faster.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-grad-primary flex items-center justify-center mb-2">
                    <CheckCircle2 size={28} className="text-background" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message sent!
                  </h3>
                  <p className="text-muted text-sm max-w-sm text-center leading-relaxed">
                    Thanks for reaching out. Our team will review your project
                    brief and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-strong rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
                >
                  <h2 className="font-display font-semibold text-xl text-white">
                    Tell us about your project
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Service Needed *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            selectedService === service
                              ? "bg-grad-primary text-background border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            selectedBudget === budget
                              ? "bg-grad-mix text-white border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Project Brief *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, goals, and any specific requirements or deadlines..."
                      className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center">
                    Send Project Brief
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}