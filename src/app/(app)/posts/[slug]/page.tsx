import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import MdxStyle from "@/components/ui/mdx";
import PostCategory from "@/components/ui/post/post-category";
import PostDate from "@/components/ui/post/post-date";
import PostTags from "@/components/ui/post/post-tags";
import { getFileFromSlug, getPostMetadata, getPostsBy } from "@/lib/posts";

import Toc from "./_components/toc";

import type { MDXContent } from "mdx/types";
import type { Metadata } from "next";

type Params = { slug: string };

const generateStaticParams = async () => {
  const posts = await getPostsBy({ limit: "all" });
  return posts.map(({ slug }) => ({ params: { slug } }));
};

const generateMetadata = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const metadata = await getPostMetadata(slug);
  if (!metadata) return {};

  return {
    title: metadata.title,
    description: metadata.summary,
  } satisfies Metadata;
};

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;

  const metadata = await getPostMetadata(slug);
  if (!metadata) return notFound();
  const file = await getFileFromSlug(slug);
  const Content = dynamic(() => import(`@data/posts/${file}`)) as MDXContent;

  return (
    <>
      <main className="mx-auto flex max-w-screen-lg grow flex-col space-y-8 px-12">
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-4xl font-bold">{metadata.title}</h1>
          <div className="flex flex-wrap justify-center space-x-2.5 text-neutral">
            <PostDate date={metadata.date} />
            <PostCategory category={metadata.category} withLink />
            <PostTags tags={metadata.tags} withLink />
          </div>
        </div>
        {metadata.summary && (
          <div className="space-y-1 rounded-2xl border px-5 py-3.5">
            <h2 className="font-semibold">Summary</h2>
            <p className="text-sm text-neutral/80">{metadata.summary}</p>
          </div>
        )}
        <article className="space-y-4 text-pretty text-[1.05rem]" id="post-content">
          <Content components={MdxStyle} />
        </article>
      </main>
      <div className="relative hidden xl:block">
        <div className="h-28" />
        <aside className="sticky top-28 h-max w-64">
          <Toc htmlFor="post-content" />
        </aside>
      </div>
    </>
  );
};

export default Page;
export { generateStaticParams, generateMetadata };
