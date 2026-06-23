const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "10+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
];

const clients = [
  "Nexora", "Bluepeak", "Orbitly", "Vertex Labs", "Skyline Co",
  "Dataforge", "Northwind", "Cresta", "Pulse Health", "Meridian",
];

export default function Trust() {
  return (
    <section className="relative section border-y border-border bg-surface/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-3xl sm:text-4xl text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-8">
          Trusted by ambitious teams across 20+ countries
        </p>

        <div className="overflow-hidden">
          <div className="flex gap-16 w-max animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="font-display font-bold text-xl text-white/15 hover:text-white/40 transition-colors whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}