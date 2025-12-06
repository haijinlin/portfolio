import type { ReactNode } from "react";
import { getMdxContent, getMdxList, getMdxSlugs } from "@/lib/mdx";

export type Post = {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  tags?: string[];
};

export async function getPosts(): Promise<Post[]> {
  return (await getMdxList("writing")) as Post[];
}

export async function getPost(slug: string): Promise<{ frontmatter: Post; content: ReactNode } | null> {
  const entry = await getMdxContent("writing", slug);
  if (!entry.frontmatter.title) return null;
  return entry as { frontmatter: Post; content: ReactNode };
}

export async function getPostSlugs() {
  return getMdxSlugs("writing");
}
