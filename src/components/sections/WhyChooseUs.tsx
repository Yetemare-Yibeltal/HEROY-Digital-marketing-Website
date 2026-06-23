import {
  Lightbulb,
  GraduationCap,
  ShieldCheck,
  Zap,
  HeadphonesIcon,
  MessageSquare,
  TrendingUp,
  Layers3,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Fresh, modern approaches built on the latest frameworks and design thinking.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Team",
    description: "Engineers, designers, and marketers with hands-on, real-project experience.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Security-first development practices that protect your systems and data.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile workflows that keep projects on schedule without cutting corners.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Ongoing maintenance and support whenever you need us, around the clock.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest feedback throughout every project.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Data-backed strategies and case studies that demonstrate measurable impact.",
  },
  {
    icon: Layers3,
    title: "Scalable Systems",
    description: "Architectures designed to grow with your business, from MVP to enterprise scale.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge mb-4">Why Choose HEROY</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Built different, built to{" "}
            <span className="text-gradient-warm">deliver</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="glass rounded-2xl p-6 hover:border-accent/40 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-grad-mix mx-auto flex items-center justify-center mb-4">
                  <Icon size={20} className="text-background" />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}