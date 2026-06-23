const steps = [
  {
    number: "01",
    title: "Research",
    description: "We study your business, audience, and competitors to uncover real growth opportunities.",
  },
  {
    number: "02",
    title: "Discovery",
    description: "Through focused conversations we clarify goals, requirements, and what success looks like.",
  },
  {
    number: "03",
    title: "Strategy",
    description: "We build a tailored roadmap covering technology, design, and timelines aligned to your goals.",
  },
  {
    number: "04",
    title: "Design",
    description: "Our designers craft wireframes and visual concepts that bring your brand vision to life.",
  },
  {
    number: "05",
    title: "Development",
    description: "Our engineers build the product using modern, scalable code with regular progress reviews.",
  },
  {
    number: "06",
    title: "Testing",
    description: "We rigorously test functionality, performance, and security before anything goes live.",
  },
  {
    number: "07",
    title: "Launch",
    description: "We handle deployment and ensure a smooth go-live with zero unexpected downtime.",
  },
  {
    number: "08",
    title: "Optimization",
    description: "Post-launch we monitor performance and continuously refine for better results.",
  },
];

export default function Process() {
  return (
    <section className="section bg-surface/60 border-y border-border">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge mb-4">How We Work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Our proven <span className="text-gradient">8-step process</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <span className="font-display font-bold text-4xl text-white/10 block mb-3 leading-none">
                {step.number}
              </span>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}