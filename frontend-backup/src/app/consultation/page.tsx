"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  Sparkles,
  Send,
  Users,
  MessageCircle,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const benefits = [
  "Get a clear direction for your project from a senior team member",
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
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM",
];

const platforms = ["Google Meet", "WhatsApp Video", "Zoom", "Phone Call"];

const typewriterWords = ["Your Project", "Your Goals", "Your Strategy", "Your Next Step"];

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("Google Meet");

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
              <Sparkles size={14} /> Free Consultation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Let&apos;s talk about{" "}
            <TypewriterText words={typewriterWords} className="text-gradient" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            Book a free 30-minute call with a senior HEROY team member.
            No sales pitch, no obligation — just focused, honest advice
            on your project.
          </motion.p>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">

            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-grad-primary flex items-center justify-center">
                    <Clock size={18} className="text-background" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white">30 Minutes</p>
                    <p className="text-xs text-muted">Free, no commitment</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  A focused half-hour call where we dig into your goals,
                  current challenges, and what success looks like for
                  your project, then suggest the best path forward.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-white mb-4">
                  What you will <span className="text-gradient">walk away with</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Video, title: "Video Call", text: "Meet face to face on your preferred platform" },
                  { icon: Users, title: "Senior Team", text: "Speak directly with an experienced specialist" },
                  { icon: MessageCircle, title: "Follow Up", text: "Receive a written summary after the call" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass rounded-xl p-4 text-center"
                    >
                      <Icon size={18} className="text-accent mx-auto mb-2" />
                      <p className="text-xs font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-[10px] text-muted leading-tight">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

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
                  className="glass-strong rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-grad-primary flex items-center justify-center mb-2">
                    <Calendar size={28} className="text-background" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Consultation booked!
                  </h3>
                  <p className="text-muted text-sm max-w-sm text-center leading-relaxed">
                    We have received your request and will confirm your
                    consultation slot within 2 hours via email. We look
                    forward to speaking with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-2"
                  >
                    Book Another Session
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-strong rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
                >
                  <h2 className="font-display font-semibold text-xl text-white">
                    Book your free session
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
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-muted outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                        Preferred Time *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                              selectedTime === slot
                                ? "bg-grad-primary text-background border-transparent"
                                : "border-border text-muted hover:text-white hover:border-primary/40"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Preferred Platform
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((platform) => (
                        <button
                          key={platform}
                          type="button"
                          onClick={() => setSelectedPlatform(platform)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            selectedPlatform === platform
                              ? "bg-grad-mix text-white border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40"
                          }`}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      What would you like to discuss? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            selectedTopic === topic
                              ? "bg-grad-primary text-background border-transparent"
                              : "border-border text-muted hover:text-white hover:border-primary/40"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share any background, context, or specific questions you want to cover..."
                      className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center">
                    Book My Free Consultation
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