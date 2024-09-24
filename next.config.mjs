import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
