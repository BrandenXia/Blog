import { MetadataRoute } from "next";

import config from "@data/config";

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
