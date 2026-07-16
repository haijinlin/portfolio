import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const listed = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <Section title="Projects" eyebrow="What I’ve built">
      <div className="grid gap-6 md:grid-cols-2">
        {listed.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
