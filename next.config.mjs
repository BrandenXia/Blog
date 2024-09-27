import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "catppuccin-mocha" }],
    ],
  },
});

export default withMDX(nextConfig);
