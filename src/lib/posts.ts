"use server";

import { cache } from "react";
import { globby } from "globby";
import { Filter, Metadata, Post } from "@/types/post";

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

const checkFilter = (metadata: Metadata, filter: Filter) => {
  for (const key in filter) {
    const objKey = key as keyof Metadata; // Type assertion

    if (typeof filter[objKey] === "string") {
      if (metadata[objKey] !== filter[objKey]) return false;
    } else if (Array.isArray(filter[objKey])) {
      if (filter[objKey].some((value) => !metadata[objKey].includes(value)))
        return false;
    }
  }
  return true;
};

type GetPostsByOptions = {
  sort?: [keyof Metadata, "asc" | "desc"];
  filter?: Filter;
  limit?: number;
  page?: number;
};

const getPostsBy = cache(
  async ({
    sort = ["date", "desc"],
    filter = {},
    limit = 20,
    page = 1,
  }: GetPostsByOptions = {}) =>
    (await getAllPosts())
      .filter(({ metadata }) => checkFilter(metadata, filter))
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

const getAllCategories: () => Promise<string[]> = cache(async () => {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map(({ metadata }) => metadata.category)));
});

const getAllTags: () => Promise<string[]> = cache(async () => {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.flatMap(({ metadata }) => metadata.tags)));
});

export {
  getFileFromSlug,
  getPostsBy,
  getPostMetadata,
  getAllCategories,
  getAllTags,
};
