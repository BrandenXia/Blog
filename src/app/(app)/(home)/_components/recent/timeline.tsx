import Link from "next/link";

import { getPostsBy } from "@/lib/posts";

const Timeline = async () => {
  const _posts = await getPostsBy();
  const posts = _posts.slice(0, 4).reverse();

  return (
    <ul className="timeline">
      {posts.map((post) => (
        <li key={post.slug}>
          <hr className="bg-neutral/30" />
          <div className="timeline-start">
            <time
              className="font-mono text-sm italic text-neutral/90"
              dateTime={post.metadata.date}
            >
              {post.metadata.date}
            </time>
          </div>
          <div className="timeline-middle">
            <span className="badge badge-primary badge-xs" />
          </div>
          <div className="timeline-end">
            <Link
              href={`/posts/${post.slug}`}
              className="font-medium transition-colors hover:text-primary"
            >
              {post.metadata.title}
            </Link>
          </div>
          <hr className="bg-neutral/30" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
