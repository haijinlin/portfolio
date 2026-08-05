import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies covering a commercial workflow platform, LifeHub and seven practical applications designed around real-world needs.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | Hayden Lin",
    description: "Explore a commercial workflow platform, LifeHub and seven independently deployed application case studies.",
    images: [{ url: "/projects/screenshots/lifehub-dashboard.png", alt: "LifeHub dashboard" }],
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const commercial = projects.filter((project) => project.category === "commercial");
  const platform = projects.find((project) => project.featured);
  const modules = projects.filter((project) => project.category === "lifehub-module");

  return <Section title="Projects" eyebrow="Platforms and products">
    <div className="space-y-12">
      {commercial.length > 0 && <section>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Commercial work</p>
          <h2 className="mt-1 text-2xl font-semibold">Built around real business operations</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Products shaped with stakeholders, tested against live workflows and designed for ongoing business use.</p>
        </div>
        <div className="space-y-6">
          {commercial.map((project) => {
            const preview = project.gallery?.[0];
            return (
              <article key={project.slug} className="overflow-hidden rounded-3xl border border-border bg-card/60 shadow-sm lg:grid lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative min-h-[300px] border-b border-border bg-slate-100 lg:min-h-[390px] lg:border-b-0 lg:border-r">
                  <Image
                    src={preview?.src ?? project.image ?? "/projects/construction-workflow.png"}
                    alt={preview?.alt ?? `${project.title} workflow interface`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 620px, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>Commercial workflow</span>
                    <span aria-hidden="true">·</span>
                    <span>Private case study</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  {project.impact && (
                    <div className="mt-5 rounded-2xl border border-border bg-background/45 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Operational impact</p>
                      <p className="mt-2 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                  {project.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-6">
                    <Link href={`/projects/${project.slug}`} className="inline-flex rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">View commercial case study →</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>}

      {platform && <section>
        <div className="mb-4"><p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Featured platform</p><h2 className="mt-1 text-2xl font-semibold">One connected product vision</h2></div>
        <article className="overflow-hidden rounded-3xl border border-border bg-card/60 shadow-sm lg:grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[340px] border-b border-border bg-slate-100 lg:border-b-0 lg:border-r"><Image src="/projects/screenshots/lifehub-dashboard.png" alt="LifeHub dashboard with seven connected modules" fill priority className="object-cover object-top" /></div>
          <div className="flex flex-col justify-center p-7">
            <div className="flex items-center gap-3"><Image src="/projects/lifehub.svg" alt="" width={52} height={52} className="h-13 w-13 rounded-xl" /><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Private by design</p><h3 className="text-2xl font-semibold">LifeHub</h3></div></div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">A secure personal platform that connects seven real workflow applications while keeping each app, database and access boundary independently reliable.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">{["CoCare", "RemindFlow", "HomeStock", "ApplyTrackr", "Workout", "WishTree", "GiftPocket"].map((name) => <span key={name} className="rounded-xl border border-border bg-background/40 px-3 py-2">{name}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/projects/lifehub" className="rounded-full bg-foreground px-4 py-2 text-sm text-background">View case study →</Link><span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Next.js · TypeScript · Authentication</span></div>
          </div>
        </article>
      </section>}

      <section><div className="mb-4"><p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">LifeHub modules</p><h2 className="mt-1 text-2xl font-semibold">Seven real-world applications</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">Each module solves a distinct workflow and remains independently deployable, while sharing a broader product direction.</p></div><div className="grid gap-6 md:grid-cols-2">{modules.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    </div>
  </Section>;
}
