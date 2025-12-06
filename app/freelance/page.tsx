import Link from "next/link";
import { Section } from "@/components/section";

export const metadata = {
  title: "Freelance Services - Hayden Lin"
};

const services = [
  {
    title: "Web & landing pages",
    desc: "Design, build, and launch fast, responsive sites in WordPress or React/Next with clean handoff."
  },
  {
    title: "Analytics & tracking",
    desc: "GA/GSC/Tag Manager setup, events, and dashboards so you know what’s working."
  },
  {
    title: "SEO & performance",
    desc: "Technical checks, metadata, site speed fixes, and content hygiene to rank and convert."
  },
  {
    title: "Ads & marketing ops",
    desc: "Google Ads and social campaigns, tagging, and reporting with clear attribution."
  },
  {
    title: "Ongoing support",
    desc: "Updates, A/B tweaks, uptime/perf monitoring, and light IT help for small teams."
  }
];

const process = [
  { title: "Discover", desc: "Goals, audience, and quick audit of current site/stack." },
  { title: "Plan", desc: "Scope, timeline, and success metrics with a lean backlog." },
  { title: "Build", desc: "Implement, test, and track—ship iteratively." },
  { title: "Optimize", desc: "Tune SEO/ads, performance, and content based on data." }
];

const stack = [
  "Next.js/React",
  "WordPress/PHP",
  "Tailwind/Bootstrap",
  "Google Ads",
  "GA/GSC/Tag Manager",
  "Mailchimp/Email",
  "SEO Audits",
  "Performance"
];

export default function FreelancePage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-background/80 py-16">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,212,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,158,199,0.12),transparent_40%)] blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Freelance · Web & Marketing Tech</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Websites that launch fast, measure well, and keep improving.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              I build and maintain sites, connect analytics and ads, and handle ongoing support. Based in Melbourne, available for remote or hybrid work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://haydenlin.com.au"
                className="rounded-full bg-foreground px-5 py-2 text-background transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View haydenlin.com.au
              </Link>
              <Link
                href="mailto:contact@haydenlin.com.au?subject=Freelance%20inquiry"
                className="rounded-full border border-border px-5 py-2 transition hover:-translate-y-0.5 hover:border-foreground"
              >
                Email about a project
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-accent/15 via-card to-accent-2/15" />
            <p className="mt-3 text-sm text-muted-foreground">Placeholder for a hero/portfolio image or service graphic.</p>
          </div>
        </div>
      </section>

      <Section title="Services" eyebrow="What I deliver">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Process" eyebrow="How we’ll work">
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((step, idx) => (
            <div key={step.title} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Step {idx + 1}</div>
              <h4 className="mt-2 text-base font-semibold">{step.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Toolkit" eyebrow="Tech I use">
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Ready to talk?" eyebrow="Next steps">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="https://haydenlin.com.au"
            className="rounded-full bg-foreground px-5 py-2 text-background transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Visit haydenlin.com.au
          </Link>
          <Link
            href="mailto:contact@haydenlin.com.au?subject=Freelance%20inquiry"
            className="rounded-full border border-border px-5 py-2 transition hover:-translate-y-0.5 hover:border-foreground"
          >
            Email Hayden
          </Link>
          <p className="text-sm text-muted-foreground">Melbourne-based, open to remote/hybrid.</p>
        </div>
      </Section>
    </div>
  );
}
