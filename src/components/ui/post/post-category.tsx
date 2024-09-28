import Link from "next/link";
import Frag from "@/components/frag";

const PostCategory = ({
  category,
  withLink = false,
}: {
  category: string;
  withLink?: boolean;
}) => {
  const Wrapper = withLink ? Link : Frag;

  return (
    <Wrapper href={`/categories/${category}`}>
      <span className="font-mono text-primary underline before:content-['@']">
        {category}
      </span>
    </Wrapper>
  );
};

export default PostCategory;
