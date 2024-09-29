import { getAllCategories, getPostsBy } from "@/lib/posts";
import PostList from "./_components/post-list";

type SearchParams = {
  category?: string;
  tags?: string[] | string;
};

const metadata = {
  title: "Posts",
};

const generateStaticParams = async () => {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    searchParams: { category },
  }));
};

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const filter = {
    category: searchParams.category,
    tags:
      typeof searchParams.tags === "string"
        ? [searchParams.tags]
        : searchParams.tags,
  };

  const posts = await getPostsBy({ filter, page: 1 });

  return (
    <main className="mx-auto max-w-screen-md">
      <PostList initialPosts={posts} filter={filter} />
    </main>
  );
};

export default Page;
export { metadata, generateStaticParams };
