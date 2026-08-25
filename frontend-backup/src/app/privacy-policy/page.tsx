"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information you provide directly",
        text: "When you fill out a contact form, book a consultation, subscribe to our newsletter, or engage our services, we collect information you provide including your name, email address, phone number, company name, and project details.",
      },
      {
        subtitle: "Information collected automatically",
        text: "When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, pages visited, time spent on pages, referring URLs, and device information. This is collected through standard analytics tools.",
      },
      {
        subtitle: "Communications",
        text: "When you contact us by email, WhatsApp, or through our contact form, we retain records of those communications including any attachments you send, in order to provide support and improve our services.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Service delivery",
        text: "We use your information to respond to inquiries, provide the services you have requested, manage your project, send project updates and deliverables, and process payments.",
      },
      {
        subtitle: "Communications",
        text: "We may send you service-related communications, project updates, and — with your consent — marketing communications about our services. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.",
      },
      {
        subtitle: "Improvement and analytics",
        text: "We analyze usage data in aggregate form to understand how our website is used, which pages are most visited, and where we can improve the user experience. This analysis does not identify individual users.",
      },
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      {
        subtitle: "We do not sell your data",
        text: "We do not sell, rent, or trade your personal information to any third party for their own marketing or commercial purposes. Your information is used only to deliver and improve our services to you.",
      },
      {
        subtitle: "Service providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our business — such as email hosting providers, payment processors, project management tools, and analytics platforms. These providers are contractually required to keep your information confidential and use it only for the purposes we specify.",
      },
      {
        subtitle: "Legal requirements",
        text: "We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, or investigate fraud.",
      },
    ],
  },
  {
    title: "4. Data Security",
    content: [
      {
        subtitle: "Security measures",
        text: "We implement reasonable technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted connections (HTTPS), access controls, and regular security reviews.",
      },
      {
        subtitle: "Limitations",
        text: "While we take data security seriously, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we commit to notifying you promptly if we become aware of a security breach that affects your data.",
      },
    ],
  },
  {
    title: "5. Cookies and Tracking",
    content: [
      {
        subtitle: "What we use",
        text: "Our website uses cookies and similar tracking technologies to improve functionality, remember your preferences, analyze traffic, and understand how visitors use our site. Cookies are small text files stored on your device by your browser.",
      },
      {
        subtitle: "Your control",
        text: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, accept only certain types, or delete existing cookies. Note that disabling cookies may affect the functionality of some parts of our website.",
      },
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      {
        subtitle: "Retention periods",
        text: "We retain personal information for as long as necessary to fulfill the purposes described in this policy, including providing services, maintaining business records, complying with legal obligations, and resolving disputes. When information is no longer needed, we securely delete or anonymize it.",
      },
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      {
        subtitle: "Access and correction",
        text: "You have the right to request access to the personal information we hold about you and to request corrections if any information is inaccurate or incomplete.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that we delete your personal information, subject to certain exceptions such as information we are required to retain for legal or legitimate business purposes.",
      },
      {
        subtitle: "Objection and restriction",
        text: "You may have the right to object to certain processing of your personal information or to request that we restrict how we use it, depending on your jurisdiction and the specific processing activity.",
      },
      {
        subtitle: "How to exercise your rights",
        text: "To exercise any of these rights, please contact us at hello@heroy.dev. We will respond to all requests within 30 days. We may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      {
        subtitle: "External websites",
        text: "Our website may contain links to third-party websites, tools, or social media platforms. We are not responsible for the privacy practices, content, or security of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      {
        subtitle: "Age restriction",
        text: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child under 16, we will delete it promptly. If you believe we may have collected information from a child, please contact us immediately.",
      },
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      {
        subtitle: "Updates",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will post the updated policy on this page with a revised effective date. For significant changes, we may also notify you directly by email if we have your contact information.",
      },
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      {
        subtitle: "Privacy questions",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at hello@heroy.dev or through our Contact page. We take all privacy inquiries seriously and will respond promptly.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-primary/10 -top-20 -right-20" />
      <div className="glow-orb w-64 h-64 bg-accent/8 bottom-0 -left-20" style={{ animationDelay: "4s" }} />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Shield size={14} /> Legal
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 text-white">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted mb-6">
              <Sparkles size={14} className="text-accent" />
              <span>Effective date: July 1, 2026</span>
              <span className="text-border">·</span>
              <span>Last updated: July 1, 2026</span>
            </div>
            <p className="text-muted leading-relaxed">
              This Privacy Policy explains how HEROY Digital Agency
              collects, uses, stores, and protects your personal
              information when you visit our website or engage our
              services. We are committed to handling your data with
              transparency and respect.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex flex-col gap-8 mb-16">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="glass rounded-2xl p-6 sm:p-8"
              >
                <h2 className="font-display font-semibold text-lg text-white mb-5 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-5">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="text-sm font-semibold text-accent mb-1.5">
                        {item.subtitle}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-48 h-48 bg-primary/20 -top-10 -left-10" />
            <div className="relative">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Questions about your <span className="text-gradient">privacy?</span>
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto mb-6">
                We take every privacy concern seriously. Contact us
                directly and we will respond personally within 24 hours.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}