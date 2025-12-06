import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export type BaseFrontmatter = {
  title: string;
  summary?: string;
  date?: string;
  tags?: string[];
  impact?: string;
  link?: string;
  role?: string;
};

const contentDir = path.join(process.cwd(), "content");

export async function getMdxList(folder: string) {
  const dir = path.join(contentDir, folder);
  const files = await fs.readdir(dir);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const { data } = matter(raw);
        return { slug: file.replace(/\.mdx$/, ""), ...(data as BaseFrontmatter) };
      })
  );

  return entries.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export async function getMdxContent(folder: string, slug: string) {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // Cast rehype plugins to avoid type mismatches across versions
        rehypePlugins: [rehypeSlug as unknown as any, [rehypeAutolinkHeadings as unknown as any, { behavior: "wrap" }]] as any
      }
    }
  });

  return {
    frontmatter: { slug, ...(frontmatter as BaseFrontmatter) },
    content
  };
}

export async function getMdxSlugs(folder: string) {
  const dir = path.join(contentDir, folder);
  const files = await fs.readdir(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
