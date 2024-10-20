import { getPostsBy } from "@/lib/posts";
import config from "@data/config";

import type { MetadataRoute } from "next";

const { siteUrl } = config;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getPostsBy({ limit: "all" });

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}`,
      lastModified: post.metadata.date,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
};

export default sitemap;
