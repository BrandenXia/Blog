import Link from "next/link";
import Frag from "@/components/frag";

const PostTags = ({
  tags,
  withLink = false,
}: {
  tags: string[];
  withLink?: boolean;
}) => {
  const Wrapper = withLink ? Link : Frag;

  return tags.map((tag, index) => (
    <Wrapper href={`/tags/${tag}`} key={index}>
      <span className="font-mono italic text-secondary underline before:content-['#']">
        {tag}
      </span>
    </Wrapper>
  ));
};

export default PostTags;
