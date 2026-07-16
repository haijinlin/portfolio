import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const platform = projects.find((project) => project.featured);
  const modules = projects.filter((project) => project.category === "lifehub-module");

  return (
    <Section title="Projects" eyebrow="Platforms and products">
      <div className="space-y-12">
        {platform && (
          <div>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Featured platform</p>
              <h2 className="mt-1 text-2xl font-semibold">One connected product vision</h2>
            </div>
            <ProjectCard project={platform} />
          </div>
        )}

        <div>
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">LifeHub modules</p>
            <h2 className="mt-1 text-2xl font-semibold">Six real-world applications</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Each module solves a distinct workflow and remains independently deployable, while sharing a broader product direction.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
