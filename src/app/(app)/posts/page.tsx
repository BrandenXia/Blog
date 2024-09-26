import { getPostsBy } from "@/lib/posts";
import PostInfo from "@/components/ui/post/post-info";
import AnimatedBackground from "@/components/animation/animated-background";

const Page = async () => {
  // TODO: Add pagination
  const posts = await getPostsBy();
  return (
    <main className="mx-auto mt-8 max-w-screen-md">
      <AnimatedBackground className="rounded-xl bg-accent/10" enableHover>
        {posts.map((post, index) => (
          <PostInfo post={post} key={index} />
        ))}
      </AnimatedBackground>
    </main>
  );
};

export default Page;
