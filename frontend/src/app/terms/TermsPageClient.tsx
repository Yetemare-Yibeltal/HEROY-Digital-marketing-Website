"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to terms",
        text: "By accessing or using the HEROY website or engaging our services in any capacity, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services. These terms apply to all visitors, clients, and anyone else who accesses our website or engages our team.",
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to update these Terms and Conditions at any time. Changes take effect immediately upon posting to this page. Continued use of our website or services after changes are posted constitutes your acceptance of the updated terms. We recommend reviewing this page periodically.",
      },
    ],
  },
  {
    title: "2. Our Services",
    content: [
      {
        subtitle: "Scope of services",
        text: "HEROY provides digital transformation services including but not limited to web development, mobile app development, UI/UX design, graphics design, video editing, digital marketing, SEO, AI solutions, branding, e-commerce development, SaaS development, cloud solutions, cybersecurity, ERP and CRM systems, 3D interactive experiences, and IT consulting.",
      },
      {
        subtitle: "Service agreements",
        text: "The specific scope, deliverables, timeline, and pricing for any engagement are defined in a separate written proposal or service agreement provided to you before work begins. These Terms and Conditions apply alongside any such agreement. In the event of a conflict between these Terms and a signed service agreement, the service agreement takes precedence.",
      },
      {
        subtitle: "Service availability",
        text: "We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.",
      },
    ],
  },
  {
    title: "3. Project Engagements",
    content: [
      {
        subtitle: "Project initiation",
        text: "All projects begin with a written proposal outlining the agreed scope of work, deliverables, timeline, and pricing. Work commences only after the proposal is accepted in writing and the initial deposit payment is received. Verbal agreements do not constitute binding project commitments.",
      },
      {
        subtitle: "Scope changes",
        text: "Any changes to the agreed project scope requested after work has commenced may result in additional charges and timeline adjustments. All scope changes must be agreed upon in writing before implementation begins. We will provide a clear estimate of any cost or timeline impact before proceeding with scope changes.",
      },
      {
        subtitle: "Client cooperation",
        text: "You agree to provide timely feedback, necessary access credentials, content, approvals, and other materials required to keep the project on schedule. Delays caused by late client input may extend project timelines accordingly, and we will not be held responsible for missed deadlines caused by delayed client cooperation.",
      },
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      {
        subtitle: "Payment structure",
        text: "Our standard payment structure is 50% deposit upfront and 50% on final delivery. For larger projects, milestone-based payment schedules may be agreed upon in the project proposal. All pricing is quoted in USD unless otherwise agreed in writing.",
      },
      {
        subtitle: "Late payments",
        text: "If payment is not received by the agreed due date, we reserve the right to pause work on your project until payment is received. Continued non-payment may result in termination of the engagement. We reserve the right to charge interest on overdue amounts.",
      },
      {
        subtitle: "Refunds",
        text: "Deposits are non-refundable once work has commenced, as they compensate for time and resources allocated to your project. If we fail to deliver the agreed scope of work, we will work with you to remedy the situation or provide an appropriate refund for undelivered work.",
      },
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      {
        subtitle: "Client ownership",
        text: "Upon receipt of full payment, all final deliverables created specifically for your project — including source code, design files, written content, and custom graphics — become your property. You receive full ownership rights to use, modify, and distribute these assets.",
      },
      {
        subtitle: "Portfolio rights",
        text: "We retain the right to showcase completed work in our portfolio, on our website, and in marketing materials unless you explicitly request otherwise in writing before project commencement. We will not disclose confidential business information when showcasing your project.",
      },
      {
        subtitle: "Third-party assets",
        text: "Any third-party assets used in your project — including licensed stock photography, licensed fonts, plugins, or frameworks — remain subject to their respective licenses. You are responsible for ensuring you have the appropriate licenses for any third-party assets you request us to incorporate.",
      },
      {
        subtitle: "Pre-existing IP",
        text: "We retain ownership of all pre-existing intellectual property, including our own frameworks, component libraries, methodologies, and tools that we may incorporate into your project. You receive a license to use these as part of the delivered project but do not acquire ownership of them.",
      },
    ],
  },
  {
    title: "6. Revisions",
    content: [
      {
        subtitle: "Included revisions",
        text: "Each project plan includes a specified number of revision rounds as outlined in the proposal. A revision round consists of a single consolidated batch of feedback that we implement. Revision rounds are not individual change requests — you are expected to review the work thoroughly and provide all feedback in one submission per round.",
      },
      {
        subtitle: "Additional revisions",
        text: "Revisions requested beyond the included rounds will be billed at our standard hourly rate of $75 per hour, or agreed upon separately. We will notify you before undertaking any billable revision work.",
      },
    ],
  },
  {
    title: "7. Warranties and Guarantees",
    content: [
      {
        subtitle: "Post-launch warranty",
        text: "We provide a post-launch bug-fix warranty period as specified in your project plan — typically 30 days for Starter projects, 3 months for Growth, and 6 months for Enterprise. During this period we will fix any defects directly related to our development work at no additional cost.",
      },
      {
        subtitle: "Warranty exclusions",
        text: "The post-launch warranty does not cover issues arising from: third-party platform changes or outages, hosting environment changes, modifications made to the code by you or a third party, incompatibilities introduced by new browser versions, or features that were not part of the original agreed scope.",
      },
      {
        subtitle: "No guarantee of results",
        text: "While we apply best practices and genuine expertise to every project, we cannot guarantee specific business outcomes such as search engine rankings, conversion rates, revenue growth, or user acquisition numbers. Results depend on many factors outside our control including market conditions, competition, and client implementation.",
      },
    ],
  },
  {
    title: "8. Confidentiality",
    content: [
      {
        subtitle: "Mutual confidentiality",
        text: "Both parties agree to keep confidential any proprietary, sensitive, or non-public information shared during the course of the engagement. This includes business strategies, technical specifications, financial information, client lists, and any other information reasonably considered confidential.",
      },
      {
        subtitle: "Duration",
        text: "Confidentiality obligations survive the termination of any project engagement and remain in effect indefinitely, unless the information becomes publicly available through no fault of the receiving party.",
      },
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      {
        subtitle: "Indirect damages",
        text: "HEROY shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, including but not limited to loss of profits, loss of data, loss of business opportunity, or business interruption, even if we have been advised of the possibility of such damages.",
      },
      {
        subtitle: "Liability cap",
        text: "Our total liability to you for any claim arising out of or relating to our services shall not exceed the total amount paid by you to us for the specific project giving rise to the claim in the 12 months preceding the claim.",
      },
    ],
  },
  {
    title: "10. Termination",
    content: [
      {
        subtitle: "Termination by either party",
        text: "Either party may terminate an active project engagement by providing written notice. Notice periods and termination conditions for specific engagements are outlined in the relevant project proposal or service agreement.",
      },
      {
        subtitle: "Payment on termination",
        text: "In the event of termination by either party, you are responsible for payment for all work completed up to the termination date, calculated on a pro-rata basis against the agreed project fee. Any deposit paid is non-refundable. We will deliver all completed work to you upon receipt of final payment for work performed.",
      },
      {
        subtitle: "Termination for cause",
        text: "We reserve the right to immediately terminate an engagement and retain all payments received if you breach these terms, fail to make required payments, or engage in conduct that is abusive, illegal, or harmful to our team or reputation.",
      },
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising from these terms or our services that cannot be resolved through good-faith negotiation will be submitted to binding arbitration before being escalated to litigation.",
      },
      {
        subtitle: "Dispute resolution",
        text: "In the event of a dispute, both parties agree to first attempt resolution through direct negotiation in good faith for a period of 30 days before pursuing any other remedy. We are committed to resolving disagreements fairly and professionally.",
      },
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      {
        subtitle: "Questions about these terms",
        text: "If you have any questions about these Terms and Conditions, please contact us at Heroydigitalsolution@gmail.com or through our Contact page. We are happy to clarify any aspect of these terms before you engage our services.",
      },
    ],
  },
];

export default function TermsPageClient() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-primary/10 -top-20 -right-20" />
      <div
        className="glow-orb w-72 h-72 bg-accent/8 bottom-20 -left-24"
        style={{ animationDelay: "4s" }}
      />

      {/* Hero */}
      <section className="section pt-32 sm:pt-36 pb-12 relative">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-5">
                <FileText size={14} />
                Legal
              </span>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white max-w-4xl">
                Terms &amp;{" "}
                <span className="text-gradient">Conditions</span>
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mt-6">
                These Terms and Conditions govern your use of the HEROY
                website and your engagement of our services. Please read
                them carefully before using our website or commissioning
                any work from our team.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-7 text-sm text-muted">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
                  <Sparkles size={14} className="text-accent" />
                  <span>Effective date: July 1, 2026</span>
                </div>

                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
                  <FileText size={14} className="text-accent" />
                  <span>Last updated: July 1, 2026</span>
                </div>
              </div>
            </motion.div>

            {/* Document overview */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-strong rounded-3xl p-6 lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-primary" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Terms overview
                  </p>
                  <p className="text-xs text-muted">
                    HEROY Digital Solutions
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: FileText,
                    label: "12",
                    text: "Legal sections",
                  },
                  {
                    icon: Scale,
                    label: "Written",
                    text: "Project agreements",
                  },
                  {
                    icon: LockKeyhole,
                    label: "Confidential",
                    text: "Client information",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-background/20 p-3"
                    >
                      <Icon size={16} className="text-accent shrink-0" />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted leading-relaxed">
                  Please review these terms alongside any project-specific
                  proposal or service agreement before work begins.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Section navigation */}
      <section className="relative pb-8">
        <div className="container-px mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass rounded-2xl p-4 sm:p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText size={15} className="text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  On this page
                </p>
                <p className="text-xs text-muted">
                  Navigate directly to a section
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {sections.map((section) => {
                const sectionId = `terms-section-${section.title
                  .split(".")[0]
                  .trim()}`;

                return (
                  <a
                    key={section.title}
                    href={`#${sectionId}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-white hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    {section.title}
                    <ChevronRight size={12} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms content */}
      <section className="section pt-4 relative">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12">
            {/* Desktop document marker */}
            <div className="hidden lg:block">
              <div className="sticky top-28 glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                  Legal document
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span>Current terms</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span>Project engagements</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span>Client responsibilities</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span>Service conditions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              {sections.map((section, i) => {
                const sectionId = `terms-section-${section.title
                  .split(".")[0]
                  .trim()}`;

                return (
                  <motion.article
                    key={section.title}
                    id={sectionId}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: (i % 3) * 0.04,
                    }}
                    className="glass rounded-3xl overflow-hidden scroll-mt-28"
                  >
                    <div className="px-6 sm:px-8 lg:px-10 py-6 sm:py-7 border-b border-border bg-white/[0.015]">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-accent mb-1.5">
                            Section {i + 1}
                          </p>

                          <h2 className="font-display font-semibold text-xl sm:text-2xl text-white leading-tight">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 sm:px-8 lg:px-10 py-7 sm:py-9">
                      <div className="flex flex-col gap-8">
                        {section.content.map((item, itemIndex) => (
                          <div
                            key={item.subtitle}
                            className="relative pl-5 sm:pl-6"
                          >
                            <div className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-accent" />

                            <div className="flex items-start gap-3 mb-2">
                              <span className="text-[11px] font-medium text-muted tracking-wide pt-0.5">
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>

                              <h3 className="text-sm sm:text-base font-semibold text-accent">
                                {item.subtitle}
                              </h3>
                            </div>

                            <p className="text-sm sm:text-[15px] text-muted leading-7 pl-8">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pt-4 pb-20 relative">
        <div className="container-px mx-auto max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-[2rem] p-7 sm:p-10 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-56 h-56 bg-primary/20 -top-20 -left-20" />
            <div
              className="glow-orb w-48 h-48 bg-accent/10 -bottom-24 -right-20"
              style={{ animationDelay: "3s" }}
            />

            <div className="relative">
              <div className="mx-auto mb-5 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText size={21} className="text-primary" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                Need clarification?
              </p>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Questions about our{" "}
                <span className="text-gradient">terms?</span>
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-7">
                We are happy to clarify anything before you engage our
                services. Reach out and we will respond personally.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>

                <Link href="/privacy-policy" className="btn-outline">
                  Privacy Policy
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