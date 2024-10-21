import { MDXContent } from "mdx/types";
import RSS from "rss";

import { getFileFromSlug, getPostsBy } from "@/lib/posts";
import config from "@data/config";

const { siteUrl } = config;

const GET = async () => {
  const { renderToString } = await import("react-dom/server");

  const posts = await getPostsBy({ limit: "all" });

  const rss = new RSS({
    title: config.metadata.title.default,
    description: "feedId:71201767557218304+userId:61208281719806976",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image_url: `${siteUrl}/icon`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${config.avatar.alt}`,
  });

  await Promise.all(
    posts.map(async (post) => {
      const file = await getFileFromSlug(post.slug);
      if (!file) return;
      const Content = (await import(`@data/posts/${file}`)).default as MDXContent;

      rss.item({
        date: post.metadata.date,
        description: renderToString(<Content />),
        title: post.metadata.title,
        url: `${siteUrl}/posts/${post.slug}`,
      });
    }),
  );

  return new Response(rss.xml(), {
    headers: { "Content-Type": "application/xml" },
  });
};

export { GET };
