import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
  }
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // Disable typedRoutes to avoid type conflicts with external links and dynamic params
  typedRoutes: false,
  typescript: {
    ignoreBuildErrors: true
  }
};

export default withMDX(nextConfig);
