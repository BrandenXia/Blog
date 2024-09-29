import Link from "next/link";
import PostDate from "./post-date";
import PostCategory from "./post-category";
import PostTags from "./post-tags";
import type { Post } from "@/types/post";

const PostInfo = ({ post }: { post: Post }) => (
  <Link href={`/posts/${post.slug}`} className="w-full">
    <span className="flex flex-col space-y-2 px-7 py-5">
      <h2 className="text-2xl font-medium">{post.metadata.title}</h2>
      <span className="flex items-center space-x-2.5 text-sm text-neutral">
        <PostDate date={post.metadata.date} />
        <PostCategory category={post.metadata.category} />
        <PostTags tags={post.metadata.tags} />
      </span>
    </span>
  </Link>
);

export default PostInfo;
