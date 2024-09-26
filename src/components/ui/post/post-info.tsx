import { Post } from "@/lib/posts";
import Link from "next/link";

const PostInfo = ({ post }: { post: Post }) => (
  <Link href={`/posts/${post.slug}`} data-id={post.slug} className="w-full">
    <span className="flex flex-col space-y-2 px-7 py-5">
      <h2 className="text-2xl font-medium">{post.metadata.title}</h2>
      <span className="flex items-center space-x-2.5 text-sm text-neutral">
        <time dateTime={post.metadata.date} className="flex items-center">
          <span className="i-ph-clock mr-1 size-4" />
          {post.metadata.date}
        </time>
        <span className="font-mono text-primary underline before:content-['@']">
          {post.metadata.category}
        </span>
        {post.metadata.tags.map((tag, index) => (
          <span
            key={index}
            className="font-mono italic text-secondary before:content-['#']"
          >
            {tag}
          </span>
        ))}
      </span>
    </span>
  </Link>
);

export default PostInfo;
