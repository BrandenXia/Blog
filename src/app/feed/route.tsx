import RSS from "rss";

import { getPostsBy } from "@/lib/posts";
import config from "@data/config";

const { siteUrl } = config;

const GET = async () => {
  const posts = await getPostsBy({ limit: "all" });

  const rss = new RSS({
    title: config.metadata.title.default,
    description: config.metadata.description,
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image_url: `${siteUrl}/icon`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${config.avatar.alt}`,
  });

  posts.map((post) => {
    rss.item({
      date: post.metadata.date,
      description: post.metadata.summary,
      title: post.metadata.title,
      url: `${siteUrl}/posts/${post.slug}`,
    });
  });

  return new Response(rss.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};

export { GET };
