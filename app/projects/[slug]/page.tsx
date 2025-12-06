import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { Section } from "@/components/section";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  return (
    <Section title={project.frontmatter.title} eyebrow={project.frontmatter.role ?? "Project"}>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>{project.frontmatter.summary}</p>
        {project.frontmatter.impact && <p>Impact: {project.frontmatter.impact}</p>}
        {project.frontmatter.tags && (
          <p className="text-xs uppercase tracking-[0.24em] text-muted">{project.frontmatter.tags.join(" · ")}</p>
        )}
        {project.frontmatter.link && (
          <a href={project.frontmatter.link} className="text-foreground underline decoration-dotted">
            Live link ↗
          </a>
        )}
      </div>
      <div className="prose prose-invert mt-8 max-w-none text-base leading-7">
        {project.content}
      </div>
    </Section>
  );
}
