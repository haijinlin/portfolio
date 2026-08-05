import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";

const baseUrl = "https://www.haydenlin.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs();
  const projectPages = slugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: slug === "lifehub" ? 0.9 : 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/freelance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...projectPages,
  ];
}
