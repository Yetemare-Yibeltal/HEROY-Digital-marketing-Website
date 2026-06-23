import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "nexora-saas",
    name: "Nexora SaaS Dashboard",
    category: "SaaS Platform",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    result: "+180% Revenue",
    gradient: "from-primary/40 to-accent/30",
    wide: true,
  },
  {
    slug: "pulse-health",
    name: "Pulse Health App",
    category: "Mobile App",
    tags: ["React Native", "Node.js"],
    result: "+300% Users",
    gradient: "from-accent/30 to-primary/30",
    wide: false,
  },
  {
    slug: "skyline-real-estate",
    name: "Skyline Real Estate",
    category: "Website",
    tags: ["Next.js", "Sanity CMS"],
    result: "+220% Leads",
    gradient: "from-accent-pink/30 to-primary/30",
    wide: false,
  },
  {
    slug: "cresta-ai",
    name: "Cresta AI Assistant",
    category: "AI Product",
    tags: ["AI", "Node.js"],
    result: "+250% Efficiency",
    gradient: "from-primary/30 to-accent-gold/20",
    wide: false,
  },
  {
    slug: "northwind-3d",
    name: "Northwind 3D Showcase",
    category: "3D Website",
    tags: ["Three.js", "WebGL"],
    result: "+400% Engagement",
    gradient: "from-accent/30 to-accent-pink/30",
    wide: true,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="badge mb-4">Our Work</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-outline shrink-0">
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] glass block ${
                project.wide ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
                <div className="flex gap-1.5 flex-wrap mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-white/10 text-white px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-white">
                    {project.name}
                  </h3>
                  <span className="text-xs font-bold text-accent-gold">
                    {project.result}
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-grad-primary flex items-center justify-center text-background opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}