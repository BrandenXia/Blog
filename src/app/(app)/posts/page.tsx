import { getPostsBy } from "@/lib/posts";
import PostInfo from "@/components/ui/post/post-info";
import AnimatedBackground from "@/components/animation/animated-background";

const metadata = {
  title: "Posts",
};

const Page = async () => {
  // TODO: Add pagination
  const posts = await getPostsBy();
  return (
    <main className="mx-auto max-w-screen-md">
      <AnimatedBackground className="bg-accent/10 md:rounded-xl" enableHover>
        {posts.map((post, index) => (
          <PostInfo post={post} key={index} />
        ))}
      </AnimatedBackground>
    </main>
  );
};

export default Page;
export { metadata };
