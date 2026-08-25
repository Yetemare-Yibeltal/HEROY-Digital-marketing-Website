import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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
    benefits: ["Higher qualified traffic", "Improved brand awareness", "Better marketing ROI", "Clear performance reporting"],
    process: ["Audit and research", "Strategy and funnel design", "Campaign execution", "Optimization and reporting"],
    features: ["Multi-channel campaigns", "A/B testing", "Audience segmentation", "Performance dashboards"],
  },
  seo: {
    description:
      "Technical SEO, content strategy, and authoritative link building that drive long-term organic growth and search visibility across competitive markets.",
    benefits: ["Higher search rankings", "Sustainable organic traffic", "Improved site health", "Long-term cost efficiency"],
    process: ["Technical audit", "Keyword research", "On-page optimization", "Link building and monitoring"],
    features: ["Technical SEO audits", "Content optimization", "Local SEO", "Backlink strategy"],
  },
  "web-development": {
    description:
      "We build fast, secure, and scalable websites using Next.js, React, and TypeScript, optimized for performance, SEO, and long-term maintainability.",
    benefits: ["Fast load times", "SEO-friendly architecture", "Scalable codebase", "Cross-browser compatibility"],
    process: ["Architecture planning", "Frontend development", "Backend integration", "Testing and deployment"],
    features: ["Next.js and React", "CMS integration", "API development", "Performance optimization"],
  },
  "mobile-app-development": {
    description:
      "We design and build mobile applications that deliver smooth performance and intuitive experiences for both iOS and Android platforms.",
    benefits: ["Wider audience reach", "Native-like performance", "Offline capabilities", "App store optimization"],
    process: ["Product discovery", "UI/UX design", "Development and testing", "Launch and monitoring"],
    features: ["iOS and Android development", "Cross-platform (React Native)", "Push notifications", "App analytics"],
  },
  "android-development": {
    description:
      "Dedicated native Android development for products that need maximum performance and deep integration with Android-specific features.",
    benefits: ["Best possible performance", "Full access to native APIs", "Tailored Android UX", "Play Store optimization"],
    process: ["Requirements analysis", "Native UI design", "Kotlin/Java development", "QA and Play Store launch"],
    features: ["Native Kotlin development", "Material Design UI", "Background services", "Play Store deployment"],
  },
  "ui-ux-design": {
    description:
      "We research, design, and test interfaces that are intuitive, accessible, and perfectly aligned with both user needs and business objectives.",
    benefits: ["Improved product usability", "Higher user satisfaction", "Reduced development rework"],
    process: ["User research", "Wireframing", "High-fidelity UI design", "Usability testing"],
    features: ["User research and personas", "Wireframes and prototypes", "Design systems", "Accessibility audits"],
  },
  "graphics-design": {
    description:
      "Social media graphics, marketing materials, and digital assets designed to capture attention and reinforce your brand identity consistently.",
    benefits: ["Consistent visual presence", "Higher engagement rates", "Professional brand image"],
    process: ["Brief and research", "Concept design", "Revisions", "Final delivery"],
    features: ["Social media graphics", "Print design", "Digital ad creatives", "Presentation design"],
  },
  "video-editing": {
    description:
      "From promotional videos to social media reels, we produce and edit video content tailored to your brand, audience, and platform requirements.",
    benefits: ["Higher engagement rates", "Stronger storytelling impact", "Multi-platform content"],
    process: ["Scripting and planning", "Filming or asset sourcing", "Editing and motion graphics", "Final delivery"],
    features: ["Promotional videos", "Social media reels", "Motion graphics", "Color grading and audio"],
  },
  photography: {
    description:
      "High-quality product, event, and brand photography that elevates your visual presence and gives you a consistent, professional content library.",
    benefits: ["Professional brand imagery", "Consistent visual quality", "Versatile content library"],
    process: ["Planning and shot list", "Photoshoot session", "Editing and retouching", "Delivery and licensing"],
    features: ["Product photography", "Event coverage", "Portrait and brand shoots", "Post-processing"],
  },
  "content-creation": {
    description:
      "Blog posts, website copy, and marketing content crafted to educate your audience, support SEO goals, and drive measurable conversions.",
    benefits: ["Improved SEO performance", "Stronger brand voice", "Higher audience engagement"],
    process: ["Content strategy", "Research and writing", "Editing and optimization", "Publishing and scheduling"],
    features: ["Blog and article writing", "Website copywriting", "Email sequences", "Content calendars"],
  },
  "social-media-marketing": {
    description:
      "We manage and grow your social presence with content strategy, community engagement, and targeted campaigns that convert followers into customers.",
    benefits: ["Larger engaged audience", "Improved brand loyalty", "Increased website traffic"],
    process: ["Audit and strategy", "Content planning", "Posting and engagement", "Performance analysis"],
    features: ["Content calendars", "Paid social campaigns", "Community management", "Analytics reporting"],
  },
  ecommerce: {
    description:
      "We build custom e-commerce platforms with seamless checkout, inventory management, and payment integrations that maximize conversion rates.",
    benefits: ["Increased online sales", "Streamlined order management", "Secure payment processing"],
    process: ["Platform planning", "Store design and UX", "Development and integration", "Launch and support"],
    features: ["Custom storefronts", "Payment gateway integration", "Inventory management", "Analytics dashboards"],
  },
  "saas-development": {
    description:
      "End-to-end SaaS product development, multi-tenant architecture, subscription billing, admin dashboards, and scalable cloud infrastructure.",
    benefits: ["Recurring revenue model", "Scalable architecture", "Faster time to market"],
    process: ["Product discovery", "Architecture design", "MVP development", "Launch and iteration"],
    features: ["Multi-tenant architecture", "Subscription billing", "Admin dashboards", "API-first design"],
  },
  "ai-solutions": {
    description:
      "We integrate AI capabilities, chatbots, recommendation engines, and workflow automation, into your products and internal processes.",
    benefits: ["Automated workflows", "Smarter user experiences", "Significant competitive advantage"],
    process: ["Use case discovery", "Model selection and training", "Integration and testing", "Monitoring and tuning"],
    features: ["AI chatbots", "Recommendation systems", "Process automation", "Custom AI integrations"],
  },
  "cloud-solutions": {
    description:
      "We design and manage cloud infrastructure on AWS and Vercel, ensuring your product scales reliably with the security and uptime your users expect.",
    benefits: ["Improved scalability", "Reduced downtime", "Cost-optimized infrastructure"],
    process: ["Infrastructure audit", "Architecture design", "Migration and setup", "Monitoring and optimization"],
    features: ["Cloud architecture design", "CI/CD pipelines", "Auto-scaling", "Monitoring and alerting"],
  },
  cybersecurity: {
    description:
      "Security audits, vulnerability assessments, and implementation of security best practices to keep your digital assets, data, and users protected.",
    benefits: ["Reduced security risks", "Regulatory compliance support", "Greater customer trust"],
    process: ["Security audit", "Vulnerability assessment", "Remediation planning", "Ongoing monitoring"],
    features: ["Security audits", "Penetration testing", "Compliance support", "Incident response planning"],
  },
  "erp-crm": {
    description:
      "We build tailored ERP and CRM systems that streamline business operations, sales pipelines, and customer relationship management at any scale.",
    benefits: ["Streamlined operations", "Better business data visibility", "Improved customer relationships"],
    process: ["Requirements analysis", "System architecture design", "Development and testing", "Training and rollout"],
    features: ["Custom workflows", "Reporting dashboards", "Role-based access control", "Third-party integrations"],
  },
  "3d-experiences": {
    description:
      "We create interactive 3D websites, product configurators, and WebGL experiences that make brands impossible to forget.",
    benefits: ["Memorable brand experience", "Higher time-on-site", "Strong competitive differentiation"],
    process: ["Concept and storyboard", "3D asset creation", "Three.js development", "Performance optimization"],
    features: ["Three.js and WebGL development", "Interactive 3D scenes", "Product configurators", "AR/VR prototypes"],
  },
  "it-consulting": {
    description:
      "We advise on technology strategy and implement automation systems that reduce manual work, cut costs, and dramatically improve operational efficiency.",
    benefits: ["Reduced operational costs", "Improved team efficiency", "Informed technology decisions"],
    process: ["Needs assessment", "Strategy and roadmap", "Implementation", "Review and iteration"],
    features: ["Technology roadmaps", "Workflow automation", "Tool and API integration", "Staff training"],
  },
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  const detail = serviceDetails[params.slug];

  if (!service || !detail) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="section pt-36 pb-16">
        <div className="container-px mx-auto max-w-5xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> All Services
          </Link>

          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
          >
            <Icon size={24} className="text-white" />
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-white">
            {service.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            {detail.description}
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="glass rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-white mb-4">Benefits</h2>
              <ul className="flex flex-col gap-3">
                {detail.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-5 h-5 rounded-full bg-grad-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-background" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-white mb-4">Features</h2>
              <ul className="flex flex-col gap-3">
                {detail.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-5 h-5 rounded-full bg-grad-mix flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-background" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-display font-semibold text-lg text-white mb-5">Our Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detail.process.map((step, i) => (
                <div key={step} className="glass rounded-xl p-5">
                  <span className="font-display font-bold text-3xl text-white/10 block mb-2 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-10 text-center mb-14">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-white">
              Ready to get started with{" "}
              <span className="text-gradient">{service.title}</span>?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-6">
              Let&apos;s discuss your goals and put together a tailored plan
              for your project.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>

          <h2 className="font-display font-semibold text-lg text-white mb-5">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors block"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.gradient} flex items-center justify-center mb-4`}
                  >
                    <RIcon size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-1">
                    {r.title}
                  </h3>
                  <p className="text-xs text-muted">{r.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}