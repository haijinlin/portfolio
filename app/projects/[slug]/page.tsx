import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects, getProjectSlugs } from "@/lib/projects";
import { Section } from "@/components/section";
import { ProjectGallery } from "@/components/project-gallery";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  const projects = await getProjects();
  const ordered = [
    ...projects.filter((item) => item.featured),
    ...projects.filter((item) => !item.featured),
  ];
  const currentIndex = ordered.findIndex((item) => item.slug === params.slug);
  const previous = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;

  return (
    <Section title={project.frontmatter.title} eyebrow={project.frontmatter.role ?? "Project"}>
      <Link href="/projects" className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition hover:text-foreground">
        ← Back to all projects
      </Link>

      <div className="space-y-3 text-sm text-muted-foreground">
        <p>{project.frontmatter.summary}</p>
        {project.frontmatter.impact && <p>Impact: {project.frontmatter.impact}</p>}
        {project.frontmatter.tags && (
          <p className="text-xs uppercase tracking-[0.24em] text-muted">{project.frontmatter.tags.join(" · ")}</p>
        )}
        {project.frontmatter.link && (
          <a href={project.frontmatter.link} className="text-foreground underline decoration-dotted" target="_blank" rel="noreferrer">
            Live link ↗
          </a>
        )}
      </div>

      {project.frontmatter.gallery && <ProjectGallery images={project.frontmatter.gallery} />}

      <div className="prose prose-invert mt-8 max-w-none text-base leading-7">
        {project.content}
      </div>

      <nav className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2" aria-label="Project navigation">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className="rounded-2xl border border-border bg-card/60 p-4 transition hover:border-accent/40 hover:bg-card">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">← Previous project</span>
            <strong className="mt-2 block text-base">{previous.title}</strong>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="rounded-2xl border border-border bg-card/60 p-4 text-right transition hover:border-accent/40 hover:bg-card">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Next project →</span>
            <strong className="mt-2 block text-base">{next.title}</strong>
          </Link>
        ) : (
          <Link href="/projects" className="rounded-2xl border border-border bg-card/60 p-4 text-right transition hover:border-accent/40 hover:bg-card">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Finished exploring</span>
            <strong className="mt-2 block text-base">Back to all projects →</strong>
          </Link>
        )}
      </nav>
    </Section>
  );
}
