import { cache } from "react";
import { globby } from "globby";
import { MDXContent } from "mdx/types";

type Metadata = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
};

type Post = {
  slug: string;
  metadata: Metadata;
};

const getFiles: () => Promise<string[]> = cache(
  async () => await globby(["*.mdx", "*/index.mdx"], { cwd: "./data/posts" }),
);

const getMetadata: (file: string) => Promise<Metadata> = cache(async (file) => {
  const { metadata } = await import(`@data/posts/${file}`);
  return metadata as Metadata;
});

const getFileFromSlug: (slug: string) => Promise<string | undefined> = cache(
  async (slug) => {
    const files = await getFiles();
    return files.find((file) => file.startsWith(slug));
  },
);

const getAllPosts: () => Promise<Post[]> = cache(async () => {
  const files = await getFiles();
  return await Promise.all(
    files.map(async (file) => ({
      slug: file.endsWith("/index.mdx")
        ? file.slice(0, -"/index.mdx".length)
        : file.slice(0, -".mdx".length),
      metadata: await getMetadata(file),
    })),
  );
});

type GetPostsByOptions = {
  sort?: [keyof Metadata, "asc" | "desc"];
  filter?: (metadata: Metadata) => boolean;
  limit?: number;
  page?: number;
};

const getPostsBy = cache(
  async ({
    sort = ["date", "desc"],
    filter = () => true,
    limit = 30,
    page = 1,
  }: GetPostsByOptions = {}) =>
    (await getAllPosts())
      .filter(({ metadata }) => filter(metadata))
      .sort((a, b) => {
        const [key, order] = sort;
        return order === "asc"
          ? a.metadata[key] > b.metadata[key]
            ? 1
            : -1
          : a.metadata[key] < b.metadata[key]
            ? 1
            : -1;
      })
      .slice((page - 1) * limit, page * limit),
);

const getPostMetadata: (slug: string) => Promise<Metadata | null> = cache(
  async (slug) => {
    const file = await getFileFromSlug(slug);
    return file ? await getMetadata(file) : null;
  },
);

const getPostContent: (slug: string) => Promise<MDXContent> = cache(
  async (slug) => {
    const file = await getFileFromSlug(slug);
    return (await import(`@data/posts/${file}`)).default;
  },
);

const getAllCategories: () => Promise<string[]> = cache(async () => {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map(({ metadata }) => metadata.category)));
});

const getAllTags: () => Promise<string[]> = cache(async () => {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.flatMap(({ metadata }) => metadata.tags)));
});

export {
  getPostsBy,
  getPostMetadata,
  getPostContent,
  getAllCategories,
  getAllTags,
};
export type { Metadata, Post };
