import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "../page";
import type { Metadata } from "next";

interface ServiceDetail {
  benefits: string[];
  process: string[];
  features: string[];
  description: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "digital-marketing": {
    description:
      "We design and execute data-driven digital marketing campaigns across search, social, and email, built to grow awareness, leads, and revenue for your business.",
    benefits: [
      "Higher qualified traffic",
      "Improved brand awareness",
      "Better marketing ROI",
      "Clear performance reporting",
    ],
    process: [
      "Audit and research",
      "Strategy and funnel design",
      "Campaign execution",
      "Optimization and reporting",
    ],
    features: [
      "Multi-channel campaigns",
      "A/B testing",
      "Audience segmentation",
      "Performance dashboards",
    ],
  },

  seo: {
    description:
      "Technical SEO, content strategy, and authoritative link building that drive long-term organic growth and search visibility across competitive markets.",
    benefits: [
      "Higher search rankings",
      "Sustainable organic traffic",
      "Improved site health",
      "Long-term cost efficiency",
    ],
    process: [
      "Technical audit",
      "Keyword research",
      "On-page optimization",
      "Link building and monitoring",
    ],
    features: [
      "Technical SEO audits",
      "Content optimization",
      "Local SEO",
      "Backlink strategy",
    ],
  },

  "web-development": {
    description:
      "We build fast, secure, and scalable websites using Next.js, React, and TypeScript, optimized for performance, SEO, and long-term maintainability.",
    benefits: [
      "Fast load times",
      "SEO-friendly architecture",
      "Scalable codebase",
      "Cross-browser compatibility",
    ],
    process: [
      "Architecture planning",
      "Frontend development",
      "Backend integration",
      "Testing and deployment",
    ],
    features: [
      "Next.js and React",
      "CMS integration",
      "API development",
      "Performance optimization",
    ],
  },

  "mobile-app-development": {
    description:
      "We design and build mobile applications that deliver smooth performance and intuitive experiences for both iOS and Android platforms.",
    benefits: [
      "Wider audience reach",
      "Native-like performance",
      "Offline capabilities",
      "App store optimization",
    ],
    process: [
      "Product discovery",
      "UI/UX design",
      "Development and testing",
      "Launch and monitoring",
    ],
    features: [
      "iOS and Android development",
      "Cross-platform (React Native)",
      "Push notifications",
      "App analytics",
    ],
  },

  "android-development": {
    description:
      "Dedicated native Android development for products that need maximum performance and deep integration with Android-specific features.",
    benefits: [
      "Best possible performance",
      "Full access to native APIs",
      "Tailored Android UX",
      "Play Store optimization",
    ],
    process: [
      "Requirements analysis",
      "Native UI design",
      "Kotlin/Java development",
      "QA and Play Store launch",
    ],
    features: [
      "Native Kotlin development",
      "Material Design UI",
      "Background services",
      "Play Store deployment",
    ],
  },

  "ui-ux-design": {
    description:
      "We research, design, and test interfaces that are intuitive, accessible, and perfectly aligned with both user needs and business objectives.",
    benefits: [
      "Improved product usability",
      "Higher user satisfaction",
      "Reduced development rework",
    ],
    process: [
      "User research",
      "Wireframing",
      "High-fidelity UI design",
      "Usability testing",
    ],
    features: [
      "User research and personas",
      "Wireframes and prototypes",
      "Design systems",
      "Accessibility audits",
    ],
  },

  "graphics-design": {
    description:
      "Social media graphics, marketing materials, and digital assets designed to capture attention and reinforce your brand identity consistently.",
    benefits: [
      "Consistent visual presence",
      "Higher engagement rates",
      "Professional brand image",
    ],
    process: [
      "Brief and research",
      "Concept design",
      "Revisions",
      "Final delivery",
    ],
    features: [
      "Social media graphics",
      "Print design",
      "Digital ad creatives",
      "Presentation design",
    ],
  },

  "video-editing": {
    description:
      "From promotional videos to social media reels, we produce and edit video content tailored to your brand, audience, and platform requirements.",
    benefits: [
      "Higher engagement rates",
      "Stronger storytelling impact",
      "Multi-platform content",
    ],
    process: [
      "Scripting and planning",
      "Filming or asset sourcing",
      "Editing and motion graphics",
      "Final delivery",
    ],
    features: [
      "Promotional videos",
      "Social media reels",
      "Motion graphics",
      "Color grading and audio",
    ],
  },

  photography: {
    description:
      "High-quality product, event, and brand photography that elevates your visual presence and gives you a consistent, professional content library.",
    benefits: [
      "Professional brand imagery",
      "Consistent visual quality",
      "Versatile content library",
    ],
    process: [
      "Planning and shot list",
      "Photoshoot session",
      "Editing and retouching",
      "Delivery and licensing",
    ],
    features: [
      "Product photography",
      "Event coverage",
      "Portrait and brand shoots",
      "Post-processing",
    ],
  },

  "content-creation": {
    description:
      "Blog posts, website copy, and marketing content crafted to educate your audience, support SEO goals, and drive measurable conversions.",
    benefits: [
      "Improved SEO performance",
      "Stronger brand voice",
      "Higher audience engagement",
    ],
    process: [
      "Content strategy",
      "Research and writing",
      "Editing and optimization",
      "Publishing and scheduling",
    ],
    features: [
      "Blog and article writing",
      "Website copywriting",
      "Email sequences",
      "Content calendars",
    ],
  },

  "social-media-marketing": {
    description:
      "We manage and grow your social presence with content strategy, community engagement, and targeted campaigns that convert followers into customers.",
    benefits: [
      "Larger engaged audience",
      "Improved brand loyalty",
      "Increased website traffic",
    ],
    process: [
      "Audit and strategy",
      "Content planning",
      "Posting and engagement",
      "Performance analysis",
    ],
    features: [
      "Content calendars",
      "Paid social campaigns",
      "Community management",
      "Analytics reporting",
    ],
  },

  ecommerce: {
    description:
      "We build custom e-commerce platforms with seamless checkout, inventory management, and payment integrations that maximize conversion rates.",
    benefits: [
      "Increased online sales",
      "Streamlined order management",
      "Secure payment processing",
    ],
    process: [
      "Platform planning",
      "Store design and UX",
      "Development and integration",
      "Launch and support",
    ],
    features: [
      "Custom storefronts",
      "Payment gateway integration",
      "Inventory management",
      "Analytics dashboards",
    ],
  },

  "saas-development": {
    description:
      "End-to-end SaaS product development, multi-tenant architecture, subscription billing, admin dashboards, and scalable cloud infrastructure.",
    benefits: [
      "Recurring revenue model",
      "Scalable architecture",
      "Faster time to market",
    ],
    process: [
      "Product discovery",
      "Architecture design",
      "MVP development",
      "Launch and iteration",
    ],
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Admin dashboards",
      "API-first design",
    ],
  },

  "ai-solutions": {
    description:
      "We integrate AI capabilities, chatbots, recommendation engines, and workflow automation into your products and internal processes.",
    benefits: [
      "Automated workflows",
      "Smarter user experiences",
      "Competitive differentiation",
    ],
    process: [
      "Use case discovery",
      "Model selection and training",
      "Integration and testing",
      "Monitoring and tuning",
    ],
    features: [
      "AI chatbots",
      "Recommendation systems",
      "Process automation",
      "Custom AI integrations",
    ],
  },

  "cloud-solutions": {
    description:
      "We design and manage cloud infrastructure on AWS and Vercel, helping products scale reliably with security, observability, and operational resilience in mind.",
    benefits: [
      "Improved scalability",
      "Reduced operational risk",
      "Cost-aware infrastructure",
    ],
    process: [
      "Infrastructure audit",
      "Architecture design",
      "Migration and setup",
      "Monitoring and optimization",
    ],
    features: [
      "Cloud architecture design",
      "CI/CD pipelines",
      "Auto-scaling",
      "Monitoring and alerting",
    ],
  },

  cybersecurity: {
    description:
      "Security audits, vulnerability assessments, and implementation of security best practices to help protect digital assets, data, applications, and users.",
    benefits: [
      "Reduced security risks",
      "Compliance support",
      "Greater customer confidence",
    ],
    process: [
      "Security audit",
      "Vulnerability assessment",
      "Remediation planning",
      "Ongoing monitoring",
    ],
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance support",
      "Incident response planning",
    ],
  },

  "erp-crm": {
    description:
      "We build tailored ERP and CRM systems that streamline business operations, sales pipelines, and customer relationship management at different organizational scales.",
    benefits: [
      "Streamlined operations",
      "Better business data visibility",
      "Improved customer relationships",
    ],
    process: [
      "Requirements analysis",
      "System architecture design",
      "Development and testing",
      "Training and rollout",
    ],
    features: [
      "Custom workflows",
      "Reporting dashboards",
      "Role-based access control",
      "Third-party integrations",
    ],
  },

  "3d-experiences": {
    description:
      "We create interactive 3D websites, product configurators, and WebGL experiences designed to create distinctive digital brand experiences.",
    benefits: [
      "Memorable brand experience",
      "Higher engagement potential",
      "Strong competitive differentiation",
    ],
    process: [
      "Concept and storyboard",
      "3D asset creation",
      "Three.js development",
      "Performance optimization",
    ],
    features: [
      "Three.js and WebGL development",
      "Interactive 3D scenes",
      "Product configurators",
      "AR/VR prototypes",
    ],
  },

  "it-consulting": {
    description:
      "We advise on technology strategy and implement automation systems that can reduce manual work, improve operational efficiency, and support informed technology decisions.",
    benefits: [
      "Reduced operational overhead",
      "Improved team efficiency",
      "Informed technology decisions",
    ],
    process: [
      "Needs assessment",
      "Strategy and roadmap",
      "Implementation",
      "Review and iteration",
    ],
    features: [
      "Technology roadmaps",
      "Workflow automation",
      "Tool and API integration",
      "Staff training",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | HEROY Digital Solutions",
      description:
        "The requested HEROY Digital Solutions service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://heroy.dev/services/${slug}`;

  return {
    title: `${service.title} | HEROY Digital Solutions`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} services`,
      `${service.title} Ethiopia`,
      "HEROY Digital Solutions",
      "digital solutions Ethiopia",
      "digital agency Ethiopia",
    ],
    authors: [
      {
        name: "HEROY Digital Solutions",
        url: "https://heroy.dev",
      },
    ],
    creator: "HEROY Digital Solutions",
    publisher: "HEROY Digital Solutions",
    category: "Technology",

    openGraph: {
      title: `${service.title} | HEROY Digital Solutions`,
      description: service.shortDescription,
      url: canonicalUrl,
      siteName: "HEROY Digital Solutions",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} | HEROY Digital Solutions`,
      description: service.shortDescription,
      creator: "@heroy_digital_solution2026",
    },

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) {
    notFound();
  }

  const Icon = service.icon;
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="section pt-32 sm:pt-36 pb-12 relative overflow-hidden">
        <div className="glow-orb w-96 h-96 bg-primary/15 -top-24 -right-24" />
        <div
          className="glow-orb w-64 h-64 bg-accent/10 top-48 -left-24"
          style={{ animationDelay: "3s" }}
        />

        <div className="container-px mx-auto max-w-6xl relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>

          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-end">
            <div>
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
              >
                <Icon size={27} className="text-white" />
              </div>

              <div className="badge mb-5 inline-flex items-center gap-2">
                <Sparkles size={12} />
                HEROY Digital Solutions
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white max-w-4xl">
                {service.title}
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
                {detail.description}
              </p>
            </div>

            <div className="hidden lg:block glass rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted mb-3">
                Service Focus
              </p>

              <p className="text-sm text-white leading-relaxed">
                Strategy, implementation, quality, and measurable digital
                progress aligned with your project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 sm:p-7">
              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  What it can support
                </span>

                <h2 className="font-display font-semibold text-xl text-white mt-2">
                  Benefits
                </h2>
              </div>

              <ul className="flex flex-col gap-3.5">
                {detail.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-grad-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-background" />
                    </span>

                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-7">
              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  Core capabilities
                </span>

                <h2 className="font-display font-semibold text-xl text-white mt-2">
                  Features
                </h2>
              </div>

              <ul className="flex flex-col gap-3.5">
                {detail.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-grad-mix flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-background" />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                How we work
              </span>

              <h2 className="font-display font-semibold text-xl sm:text-2xl text-white mt-2">
                Our Process
              </h2>

              <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
                A structured delivery process helps keep scope, priorities,
                technical decisions, and validation aligned throughout the
                engagement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detail.process.map((step, i) => (
                <div
                  key={step}
                  className="glass rounded-xl p-5 hover:border-primary/30 transition-colors"
                >
                  <span className="font-display font-bold text-3xl text-white/10 block mb-3 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm text-white font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-7 sm:p-10 text-center mb-16 relative overflow-hidden">
            <div className="glow-orb w-48 h-48 bg-primary/20 -top-16 -left-16" />

            <div
              className="glow-orb w-40 h-40 bg-accent/15 -bottom-16 -right-16"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative">
              <div className="badge mb-4 inline-flex">
                Start with a conversation
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-white">
                Ready to explore{" "}
                <span className="text-gradient">{service.title}</span>?
              </h2>

              <p className="text-muted max-w-2xl mx-auto mb-7 leading-relaxed">
                Tell us what you are trying to achieve, where the project
                stands today, and what constraints or priorities matter most.
                We can then discuss an appropriate scope and delivery approach.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>

                <Link href="/consultation" className="btn-outline">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                Explore further
              </span>

              <h2 className="font-display font-semibold text-xl sm:text-2xl text-white mt-2">
                Related Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((relatedService) => {
                const RelatedIcon = relatedService.icon;

                return (
                  <Link
                    key={relatedService.slug}
                    href={`/services/${relatedService.slug}`}
                    className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 block"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${relatedService.gradient} flex items-center justify-center mb-5`}
                    >
                      <RelatedIcon size={19} className="text-white" />
                    </div>

                    <h3 className="font-display font-semibold text-base text-white mb-2 group-hover:text-accent transition-colors">
                      {relatedService.title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {relatedService.shortDescription}
                    </p>

                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs text-muted group-hover:text-white transition-colors">
                      Explore service
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}