import type { ReactNode } from "react";
import { getMdxContent, getMdxList, getMdxSlugs } from "@/lib/mdx";

export type Project = {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  category?: string;
  tags?: string[];
  impact?: string;
  link?: string;
  role?: string;
};

export async function getProjects(): Promise<Project[]> {
  return (await getMdxList("projects")) as Project[];
}

export async function getProject(slug: string): Promise<{ frontmatter: Project; content: ReactNode } | null> {
  const entry = await getMdxContent("projects", slug);
  if (!entry.frontmatter.title) return null;
  return entry as { frontmatter: Project; content: ReactNode };
}

export async function getProjectSlugs() {
  return getMdxSlugs("projects");
}
