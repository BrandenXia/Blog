import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: "/posts",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
];

export default sitemap;
