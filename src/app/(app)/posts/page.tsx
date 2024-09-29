import { getPostsBy } from "@/lib/posts";
import PostList from "./_components/post-list";

type SearchParams = {
  category?: string;
  tags?: string[];
};

const metadata = {
  title: "Posts",
};

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const posts = await getPostsBy({ filter: searchParams, page: 1 });

  return (
    <main className="mx-auto max-w-screen-md">
      <PostList initialPosts={posts} filter={searchParams} />
    </main>
  );
};

export default Page;
export { metadata };
