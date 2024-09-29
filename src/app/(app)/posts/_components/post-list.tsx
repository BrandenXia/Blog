"use client";

import { Filter, Post } from "@/types/post";
import { useCallback, useEffect, useState } from "react";
import { getPostsBy } from "@/lib/posts";
import PostInfo from "@/components/ui/post/post-info";
import { AnimatePresence, m } from "framer-motion";

const limit = 20;

const PostList = ({
  initialPosts,
  filter,
}: {
  initialPosts: Post[];
  filter: Filter;
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(initialPosts.length === limit);

  const [activeId, setActiveId] = useState<string | null>(null);

  const loadMore = useCallback(async () => {
    if (!hasMore) return;

    const newPosts = await getPostsBy({ filter, page });

    if (newPosts.length < limit) {
      setHasMore(false);
      return;
    }

    setPosts((prev) => [...prev, ...newPosts]);
    setPage((prev) => prev + 1);
  }, [filter, hasMore, page]);

  useEffect(() => {
    setPosts(initialPosts);
    setPage(2);
    setHasMore(initialPosts.length === limit);
  }, [filter, initialPosts]);

  return (
    <>
      <AnimatePresence initial={false}>
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveId(post.slug)}
            onMouseLeave={() => setActiveId(null)}
          >
            <PostInfo post={post} />
            {activeId === post.slug && (
              <m.div
                layoutId="posts-background"
                className="absolute inset-0 -z-10 bg-accent/10 md:rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </div>
        ))}
      </AnimatePresence>
      {hasMore && (
        <button
          className="mt-2 w-full py-3 text-sm text-neutral transition-colors duration-300 hover:bg-neutral/5 md:rounded-xl"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default PostList;
