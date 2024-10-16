import { MetadataRoute } from "next";

import { getPostsBy } from "@/lib/posts";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getPostsBy({ limit: "all" });

  return [
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
    ...posts.map((post) => ({
      url: `/posts/${post.slug}`,
      lastModified: post.metadata.date,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
};

export default sitemap;
