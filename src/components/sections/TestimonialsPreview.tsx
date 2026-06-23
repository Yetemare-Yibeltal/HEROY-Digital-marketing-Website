import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mekuriyaw Temesgen",
    position: "CEO",
    company: "Nexora Tech",
    review:
      "HEROY rebuilt our entire platform and the results were immediate — faster load times, better rankings, and a huge jump in conversions. Their communication throughout was excellent.",
    rating: 5,
    featured: false,
  },
  {
    name: "Daniel Mengesha",
    position: "Marketing Director",
    company: "Bluepeak Retail",
    review:
      "The digital marketing strategy HEROY put together doubled our organic traffic in under six months. A genuinely data-driven and reliable team that delivers exactly what they promise.",
    rating: 5,
    featured: true,
  },
  {
    name: "Ahmed Okafor",
    position: "Founder",
    company: "Pulse Health",
    review:
      "Our mobile app launch was flawless thanks to HEROY's development team. They understood our needs deeply and delivered on time and on budget without cutting any corners.",
    rating: 5,
    featured: false,
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="section bg-surface/60 border-y border-border">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="badge mb-4">Client Feedback</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              What our <span className="text-gradient">clients say</span>
            </h2>
          </div>
          <Link href="/testimonials" className="btn-outline shrink-0">
            All Testimonials
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 flex flex-col ${
                t.featured
                  ? "bg-grad-primary border-transparent"
                  : "glass"
              }`}
            >
              <Quote
                size={28}
                className={`mb-4 ${
                  t.featured ? "text-background/30" : "text-primary/40"
                }`}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={
                      t.featured
                        ? "text-background/80 fill-background/80"
                        : "text-accent-gold fill-accent-gold"
                    }
                  />
                ))}
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 flex-1 ${
                  t.featured ? "text-background/90" : "text-muted"
                }`}
              >
                {t.review}
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${
                    t.featured
                      ? "bg-background/20 text-background"
                      : "bg-grad-primary text-background"
                  }`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      t.featured ? "text-background" : "text-white"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs ${
                      t.featured ? "text-background/70" : "text-muted"
                    }`}
                  >
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}