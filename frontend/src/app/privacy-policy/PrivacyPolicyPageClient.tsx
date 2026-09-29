"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Cookie,
  Database,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    intro:
      "We collect information that helps us communicate with prospective clients, deliver our services, manage projects, and operate our website.",
    content: [
      {
        subtitle: "Information you provide",
        text: "When you contact HEROY, request a consultation, submit a project inquiry, subscribe to communications, or engage our services, you may provide information such as your name, email address, phone number, company name, project requirements, budget information, and other details you choose to share.",
      },
      {
        subtitle: "Information collected automatically",
        text: "When you use our website, certain technical information may be collected automatically, including your IP address, browser type and version, device information, pages visited, referring URLs, and information about how you interact with the website.",
      },
      {
        subtitle: "Communications and project information",
        text: "If you communicate with us by email, WhatsApp, through our website, or through another agreed communication channel, we may retain relevant correspondence, files, attachments, and project information as reasonably necessary to provide our services and maintain business records.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    intro:
      "We use personal information for legitimate business and service-delivery purposes, including responding to inquiries and managing client relationships.",
    content: [
      {
        subtitle: "Responding to inquiries",
        text: "We use information submitted through our website or other communication channels to respond to questions, understand project requirements, arrange consultations, and provide requested information.",
      },
      {
        subtitle: "Delivering services",
        text: "We use relevant information to plan, manage, develop, deliver, support, and improve the digital services and projects you engage HEROY to provide.",
      },
      {
        subtitle: "Business communications",
        text: "We may use your contact information for service-related communications, project updates, scheduling, account or billing matters, and other communications necessary to manage our professional relationship.",
      },
      {
        subtitle: "Marketing communications",
        text: "Where applicable and where you have provided the necessary consent, we may send information about HEROY services, insights, or updates. You can withdraw your consent or opt out of marketing communications at any time.",
      },
      {
        subtitle: "Website improvement",
        text: "We may analyze website usage in aggregate to understand visitor behavior, identify technical or usability issues, improve content, and make the website more useful and reliable.",
      },
    ],
  },
  {
    id: "how-we-share-information",
    number: "03",
    title: "How We Share Information",
    intro:
      "HEROY does not sell personal information. Information may be shared when necessary to operate our business, deliver services, or comply with legal obligations.",
    content: [
      {
        subtitle: "Service providers",
        text: "We may use trusted third-party providers for functions such as email, payment processing, hosting, project management, analytics, communications, or other business operations. These providers receive information only as reasonably necessary for the services they provide to us.",
      },
      {
        subtitle: "Professional and business requirements",
        text: "Where necessary to deliver a project, relevant information may be shared with contractors, collaborators, or other professional partners working on the engagement, subject to appropriate confidentiality and business requirements.",
      },
      {
        subtitle: "Legal and safety requirements",
        text: "We may disclose information when required by applicable law, legal process, court order, or governmental authority, or when reasonably necessary to protect our rights, users, clients, property, or the safety of others.",
      },
      {
        subtitle: "Business changes",
        text: "If HEROY is involved in a merger, acquisition, restructuring, sale of assets, or similar business transaction, personal information may be transferred as part of that transaction, subject to applicable legal requirements.",
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    number: "04",
    title: "Cookies and Analytics",
    intro:
      "Our website may use cookies and similar technologies to support functionality, understand website usage, and improve the visitor experience.",
    content: [
      {
        subtitle: "What cookies are",
        text: "Cookies are small files or similar technologies that allow a website to remember information about a visitor or recognize a returning browser or device.",
      },
      {
        subtitle: "How we use them",
        text: "Cookies and similar technologies may be used for essential website functionality, preferences, traffic analysis, performance monitoring, and understanding how visitors interact with our content.",
      },
      {
        subtitle: "Managing cookies",
        text: "Most modern browsers allow you to control, block, or delete cookies through their settings. Restricting certain cookies may affect the availability or functionality of some parts of our website.",
      },
      {
        subtitle: "Third-party analytics",
        text: "If third-party analytics or similar services are enabled on our website, those providers may process technical or usage information according to their own privacy policies and applicable settings.",
      },
    ],
  },
  {
    id: "data-security",
    number: "05",
    title: "Data Security",
    intro:
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
    content: [
      {
        subtitle: "Security measures",
        text: "Depending on the nature of the information and service involved, our measures may include encrypted connections such as HTTPS, access controls, restricted access to business systems, secure service providers, and reasonable operational security practices.",
      },
      {
        subtitle: "No absolute guarantee",
        text: "No method of transmitting information over the internet or storing information electronically can be guaranteed to be completely secure. We therefore cannot promise absolute security.",
      },
      {
        subtitle: "Security incidents",
        text: "If we become aware of a security incident affecting personal information, we will take reasonable steps to investigate, contain, and address the incident and provide notifications where required by applicable law.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "06",
    title: "Data Retention",
    intro:
      "We retain information only for as long as reasonably necessary for the purposes described in this Privacy Policy and for legitimate business or legal requirements.",
    content: [
      {
        subtitle: "Client and project records",
        text: "Project, communication, payment, and business records may be retained for as long as reasonably necessary to provide services, maintain accurate records, resolve disputes, enforce agreements, and meet applicable legal or accounting requirements.",
      },
      {
        subtitle: "Deletion and anonymization",
        text: "When personal information is no longer reasonably required for its intended purpose or a legal or business requirement, we may securely delete it or anonymize it where appropriate.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    number: "07",
    title: "Your Privacy Rights",
    intro:
      "Depending on where you live and the laws that apply to your information, you may have rights regarding how your personal information is handled.",
    content: [
      {
        subtitle: "Access",
        text: "You may request information about the personal information we hold about you, subject to applicable legal limitations.",
      },
      {
        subtitle: "Correction",
        text: "You may ask us to correct personal information that you believe is inaccurate or incomplete.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of personal information in circumstances where applicable law gives you that right. Certain information may need to be retained for legal, contractual, security, or legitimate business purposes.",
      },
      {
        subtitle: "Marketing preferences",
        text: "You may opt out of marketing communications at any time. Service-related and transactional communications may still be necessary when you have an active relationship with HEROY.",
      },
      {
        subtitle: "Other rights",
        text: "Depending on your jurisdiction, you may have additional rights relating to restriction, objection, portability, or other forms of control over personal information. These rights may be subject to applicable exceptions and verification requirements.",
      },
      {
        subtitle: "How to make a request",
        text: "To submit a privacy request, contact us at Heroydigitalsolution@gmail.com. We may need to verify your identity before processing a request. We will handle valid requests within the timeframe required by applicable law.",
      },
    ],
  },
  {
    id: "third-party-services",
    number: "08",
    title: "Third-Party Services and Links",
    intro:
      "Our website and projects may interact with third-party platforms, tools, services, or websites that operate independently from HEROY.",
    content: [
      {
        subtitle: "External websites",
        text: "Our website may contain links to third-party websites, social platforms, tools, or resources. We are not responsible for the privacy practices, content, security, or policies of those external services.",
      },
      {
        subtitle: "Third-party platforms",
        text: "Some services used to communicate, process payments, host information, analyze website traffic, or support project delivery may process information according to their own privacy policies and terms.",
      },
      {
        subtitle: "Reviewing third-party policies",
        text: "Before providing personal information to an external service, we recommend reviewing that provider's privacy policy and terms to understand how it handles your information.",
      },
    ],
  },
  {
    id: "international-data",
    number: "09",
    title: "International Data Handling",
    intro:
      "Because digital services often rely on providers and infrastructure located in different countries, personal information may sometimes be processed outside your country of residence.",
    content: [
      {
        subtitle: "Service infrastructure",
        text: "Depending on the systems used for hosting, communications, payments, analytics, or project delivery, information may be processed in countries other than the country where you are located.",
      },
      {
        subtitle: "Applicable protections",
        text: "Where applicable, we take reasonable steps to ensure that personal information is handled in accordance with relevant contractual, organizational, and legal requirements.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "10",
    title: "Children's Privacy",
    intro:
      "HEROY's services are intended for businesses, organizations, professionals, and other users who are legally able to engage with our services.",
    content: [
      {
        subtitle: "Our approach",
        text: "Our services are not directed toward children under the age of 16, and we do not knowingly seek to collect personal information from children through our website.",
      },
      {
        subtitle: "If information is submitted",
        text: "If we become aware that personal information has been submitted by a child in circumstances where collection is not permitted, we will take reasonable steps to address and delete the information where appropriate.",
      },
    ],
  },
  {
    id: "policy-changes",
    number: "11",
    title: "Changes to This Privacy Policy",
    intro:
      "Our privacy practices may evolve as our services, technology, business operations, or legal requirements change.",
    content: [
      {
        subtitle: "Policy updates",
        text: "We may update this Privacy Policy from time to time. When we make changes, we will publish the revised version on this page and update the effective or last-updated date.",
      },
      {
        subtitle: "Significant changes",
        text: "Where appropriate and where we have a suitable contact method, we may provide additional notice about significant changes that materially affect how personal information is handled.",
      },
    ],
  },
  {
    id: "contact-privacy",
    number: "12",
    title: "Contact Us About Privacy",
    intro:
      "If you have a privacy question, request, concern, or complaint, you can contact HEROY directly.",
    content: [
      {
        subtitle: "Privacy contact",
        text: "For privacy-related questions or requests, contact us at Heroydigitalsolution@gmail.com or through our Contact page.",
      },
      {
        subtitle: "What to include",
        text: "When contacting us, please provide enough information for us to understand your request and, where necessary, verify your identity before accessing or changing personal information.",
      },
    ],
  },
];

const highlights = [
  {
    icon: Database,
    title: "Information",
    description: "What we collect and why it may be needed.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    description: "Reasonable safeguards for information we handle.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    description: "How website technologies support the experience.",
  },
  {
    icon: Users,
    title: "Your rights",
    description: "Ways to request access, correction, or deletion.",
  },
];

export default function PrivacyPolicyPageClient() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/10 -top-24 -right-24" />
      <div
        className="glow-orb w-80 h-80 bg-accent/8 bottom-0 -left-24"
        style={{ animationDelay: "4s" }}
      />

      <section className="section pt-32 sm:pt-36 pb-12 relative">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge mb-5">
                  <Shield size={14} />
                  Privacy &amp; Data Protection
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-sm font-medium text-accent mb-4">
                  HEROY Digital Solutions
                </p>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6">
                  Privacy should be{" "}
                  <span className="text-gradient">clear.</span>
                </h1>

                <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
                  This Privacy Policy explains how HEROY Digital Solutions
                  collects, uses, shares, protects, and retains personal
                  information when you visit our website, communicate with our
                  team, or engage our digital services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mt-7 text-sm text-muted"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText size={14} className="text-accent" />
                  Effective: July 1, 2026
                </span>

                <span className="hidden sm:inline text-border">•</span>

                <span>Last updated: July 1, 2026</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-strong rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield size={18} className="text-accent" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Privacy overview
                  </p>
                  <h2 className="font-display font-semibold text-white">
                    What this policy covers
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Information we collect",
                  "How information is used",
                  "Cookies and analytics",
                  "Security and retention",
                  "Your privacy rights",
                  "Third-party services",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${sections.find((section) =>
                      item.toLowerCase().startsWith(
                        section.title
                          .replace(/^\d+\.\s*/, "")
                          .split(" ")
                          .slice(0, 2)
                          .join(" ")
                          .toLowerCase(),
                      ),
                    )?.id ?? "information-we-collect"}`}
                    className="flex items-center justify-between gap-3 py-2 text-sm text-muted hover:text-white transition-colors"
                  >
                    <span>{item}</span>
                    <ChevronRight size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pb-14">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-6 relative">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-16 items-start">
            <aside className="hidden lg:block sticky top-28">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                  On this page
                </p>

                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted hover:text-white hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-[10px] font-semibold text-accent w-5">
                        {section.number}
                      </span>
                      <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="max-w-4xl">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.04,
                    }}
                    className="scroll-mt-28 border-b border-border/60 py-10 first:pt-0"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <div className="hidden sm:flex shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center">
                        <span className="text-xs font-semibold text-accent">
                          {section.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                          {section.title.replace(/^\d+\.\s*/, "")}
                        </h2>

                        <p className="text-muted leading-relaxed mb-7 max-w-3xl">
                          {section.intro}
                        </p>

                        <div className="space-y-7">
                          {section.content.map((item) => (
                            <div key={item.subtitle}>
                              <h3 className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white mb-2">
                                <CheckCircle2
                                  size={15}
                                  className="text-accent shrink-0"
                                />
                                {item.subtitle}
                              </h3>

                              <p className="text-sm sm:text-[15px] text-muted leading-7">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong rounded-3xl p-7 sm:p-9 lg:p-10 mt-10 relative overflow-hidden"
              >
                <div className="glow-orb w-56 h-56 bg-primary/15 -top-20 -right-20" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Mail size={18} className="text-accent" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Privacy support
                      </p>
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                        Have a question about your information?
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed max-w-2xl mb-7">
                    If you have a privacy question, want to exercise a privacy
                    right, or need clarification about how HEROY handles
                    information, contact our team directly.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary">
                      Contact HEROY
                      <ArrowRight size={16} />
                    </Link>

                    <a
                      href="mailto:Heroydigitalsolution@gmail.com"
                      className="btn-outline"
                    >
                      Email Privacy Team
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 pb-4 text-xs text-muted">
                <span>
                  Privacy Policy · HEROY Digital Solutions · Updated July 1,
                  2026
                </span>

                <div className="flex items-center gap-4">
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}