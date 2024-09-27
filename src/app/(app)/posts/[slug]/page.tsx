import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/lib/posts";
import PostDate from "@/components/ui/post/post-date";
import PostCategory from "@/components/ui/post/post-category";
import PostTags from "@/components/ui/post/post-tags";
import MDXStyle from "./_components/MDXStyle";

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const metadata = await getPostMetadata(slug);
  if (!metadata) return notFound();
  const Content = await getPostContent(slug);

  return (
    <>
      <main className="flex max-w-screen-lg shrink grow flex-col space-y-8 px-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-4xl font-bold">{metadata.title}</h1>
          <div className="flex justify-center space-x-2.5 text-neutral">
            <PostDate date={metadata.date} />
            <PostCategory category={metadata.category} withLink />
            <PostTags tags={metadata.tags} withLink />
          </div>
        </div>
        <article className="space-y-4 text-[1.05rem]">
          <Content components={MDXStyle} />
        </article>
      </main>
      <aside className="lg:w-52"></aside>
    </>
  );
};

export default Page;
