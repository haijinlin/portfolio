import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

const highlights = [
  { value: "7", label: "connected product case studies" },
  { value: "6", label: "independently deployed LifeHub modules" },
  { value: "3", label: "core disciplines: product, development and operations" },
];

const experience = [
  ["Full Stack Developer · Freelancer", "Self-employed · Melbourne", "Jun 2024 — Present", "Building responsive web products, client websites and privacy-conscious workflow tools with modern analytics and deployment practices."],
  ["Web Developer & Marketing Coordinator", "Aorta Australia · Melbourne", "Apr 2023 — May 2024", "Owned WordPress delivery, landing pages, SEO, analytics and Google Ads while providing day-to-day technical support."],
  ["Web Developer", "ROI Growth Agency · Melbourne", "Jul 2022 — Apr 2023", "Delivered and maintained client websites, improved performance and UX, and implemented technical SEO recommendations."],
  ["IT Specialist", "HIT Dental & Medical Supplies · Melbourne", "Apr 2017 — Feb 2022", "Supported Microsoft 365, networking, hardware, e-commerce operations and staff training across daily business systems."],
];

const skillGroups = [
  ["Product engineering", ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "PWA"]],
  ["Web delivery", ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "WooCommerce", "Shopify"]],
  ["Growth & analytics", ["Google Analytics", "Search Console", "Google Ads", "Tag Manager", "SEO audits"]],
  ["IT & operations", ["Microsoft 365", "Windows & macOS", "Networking", "GitHub", "Vercel", "User support"]],
] as const;

export default async function HomePage() {
  const projects = await getProjects();
  const lifeHub = projects.find((project) => project.featured);
  const modules = projects.filter((project) => project.category === "lifehub-module");

  return <>
    <Hero />
    <section className="mx-auto grid max-w-6xl gap-3 px-5 pb-8 sm:grid-cols-3">
      {highlights.map((item) => <div key={item.label} className="rounded-2xl border border-border bg-card/70 p-5"><strong className="text-3xl font-semibold">{item.value}</strong><p className="mt-1 text-sm text-muted-foreground">{item.label}</p></div>)}
    </section>

    {lifeHub && <Section title="LifeHub" eyebrow="Featured product platform">
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div><h3 className="text-xl font-semibold">Six focused apps, one calm home base.</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">LifeHub demonstrates staged integration, independent deployments, responsive UX and privacy-first portfolio presentation—not just a single CRUD application.</p></div>
        <Link href="/projects/lifehub" className="shrink-0 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Explore LifeHub →</Link>
      </div>
      <ProjectCard project={lifeHub} />
    </Section>}

    <Section title="Six modules, six real workflows" eyebrow="Inside LifeHub">
      <p className="mb-6 max-w-3xl text-muted-foreground">Each module remains independently usable and deployable. Public case studies use synthetic screenshots so product decisions stay visible without exposing private data.</p>
      <div className="grid gap-6 md:grid-cols-2">{modules.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      <Link href="/projects" className="mt-6 inline-flex text-sm font-medium underline decoration-transparent underline-offset-4 hover:decoration-current">View the complete project collection →</Link>
    </Section>

    <Section title="What I bring" eyebrow="Product-minded delivery">
      <div className="grid gap-4 md:grid-cols-3">{[["Build", "Turn real workflow problems into responsive, maintainable web applications."], ["Connect", "Bring together authentication, databases, analytics, deployment and third-party services."], ["Support", "Keep products usable after launch through troubleshooting, iteration and clear user guidance."]].map(([title, copy]) => <article key={title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
    </Section>

    <Section title="Experience" eyebrow="Selected roles">
      <div className="space-y-4">{experience.map(([role, company, dates, summary]) => <article key={role} className="rounded-2xl border border-border bg-card/60 p-5"><div className="flex flex-col gap-1 sm:flex-row sm:justify-between"><div><h3 className="text-lg font-semibold">{role}</h3><p className="text-sm text-muted-foreground">{company}</p></div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{dates}</p></div><p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">{summary}</p></article>)}</div>
    </Section>

    <Section title="Skills & tools" eyebrow="Practical toolkit">
      <div className="grid gap-4 md:grid-cols-2">{skillGroups.map(([title, items]) => <div key={title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 text-sm">{item}</span>)}</div></div>)}</div>
    </Section>

    <Section title="Let’s work together" eyebrow="Melbourne, Australia">
      <div className="rounded-2xl border border-border bg-card/70 p-6 sm:flex sm:items-center sm:justify-between"><div><h3 className="text-xl font-semibold">Open to web, front-end, digital operations and IT-focused opportunities.</h3><p className="mt-2 text-sm text-muted-foreground">Permanent Resident · English, Mandarin and Cantonese</p></div><a href="mailto:contact@haydenlin.com.au?subject=Opportunity%20for%20Hayden" className="mt-5 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background sm:mt-0">Email Hayden</a></div>
    </Section>
  </>;
}
