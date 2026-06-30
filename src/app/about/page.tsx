import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Rocket, Users, Globe2, Award, Code2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HEROY — a digital transformation agency built by a team of Ethiopian software engineers, designers, and creatives.",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    text: "To empower businesses of every size with technology, design, and marketing systems that drive measurable growth and lasting impact, regardless of industry or location.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To become a globally recognized digital partner, known for innovation, quality, and the long-term success of every client we work with, starting from Ethiopia, reaching the world.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Integrity, transparency, craftsmanship, and curiosity guide every decision. We build things we are proud to put our name on, and we treat every client's business as our own.",
  },
  {
    icon: Rocket,
    title: "Innovation Culture",
    text: "We continuously explore AI, automation, and modern web technologies, staying ahead so our clients always have access to the latest and most effective tools.",
  },
];

const skills = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Adobe Premiere",
  "Adobe Photoshop",
  "AWS",
  "AI Integration",
];

const teamRoles = [
  "Full Stack Engineers",
  "Frontend Developers",
  "Backend Engineers",
  "Android Developers",
  "UI/UX Designers",
  "Graphics Designers",
  "Video Editors",
  "AI Developers",
  "Digital Marketers",
  "SEO Specialists",
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-36 pb-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="badge mb-4">About HEROY</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white">
            Engineers, designers, and creators —{" "}
            <span className="text-gradient">building digital systems that scale</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            HEROY is a full-service digital transformation agency built by a
            team of Ethiopian software engineers, designers, and creatives.
            We combine strategic marketing, premium design, and robust
            full-stack engineering to help organizations grow through
            technology.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 gap-6 mb-16">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center mb-5">
                  <Icon size={20} className="text-background" />
                </div>
                <h2 className="font-display font-semibold text-xl text-white mb-3">{v.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>

        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-6 mb-16">
          <div className="glass-strong rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
              <Users size={20} className="text-background" />
            </div>
            <h2 className="font-display font-semibold text-xl text-white mb-3">Team Expertise</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Our multidisciplinary team covers every discipline needed to
              take a project from idea to launch — full-stack engineering,
              mobile development, design, content creation, and digital
              marketing, all in one place.
            </p>
            <div className="flex flex-wrap gap-2">
              {teamRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-grad-mix flex items-center justify-center mb-5">
              <Code2 size={20} className="text-background" />
            </div>
            <h2 className="font-display font-semibold text-xl text-white mb-3">Tools &amp; Technologies</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              We build on modern, production-tested tools so every product
              we deliver is fast, secure, and easy to maintain long after
              launch.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-white/5 border border-border text-muted px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-3 gap-6 mb-16">
          <div className="glass rounded-2xl p-8 text-center">
            <Award size={24} className="text-accent mx-auto mb-3" />
            <p className="font-display font-bold text-3xl text-gradient mb-1">500+</p>
            <p className="text-sm text-muted">Projects Delivered</p>
          </div>
          <div className="glass rounded-2xl p-8 text-center">
            <Users size={24} className="text-accent mx-auto mb-3" />
            <p className="font-display font-bold text-3xl text-gradient mb-1">150+</p>
            <p className="text-sm text-muted">Happy Clients</p>
          </div>
          <div className="glass rounded-2xl p-8 text-center">
            <Globe2 size={24} className="text-accent mx-auto mb-3" />
            <p className="font-display font-bold text-3xl text-gradient mb-1">20+</p>
            <p className="text-sm text-muted">Countries Served</p>
          </div>
        </div>

        <div className="container-px mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-10 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-white">
              Built on code, driven by{" "}
              <span className="text-gradient-warm">purpose</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-6">
              Every line of code, every design decision, and every marketing
              strategy we deliver is grounded in one goal — helping our
              clients succeed. That is the standard we hold ourselves to on
              every project, every time.
            </p>
            <Link href="/contact" className="btn-primary">
              Work With Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}