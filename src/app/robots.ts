import config from "@data/config";

import type { MetadataRoute } from "next";

const { siteUrl } = config;

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/_next/", "/api/"],
  },
  sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
