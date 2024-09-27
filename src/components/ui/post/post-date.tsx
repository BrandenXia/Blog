const PostDate = ({ date }: { date: string }) => (
  <time dateTime={date} className="flex items-center">
    <span className="i-ph-clock mr-1 size-4" />
    {date}
  </time>
);

export default PostDate;
