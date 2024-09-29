type Metadata = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
};

type Post = {
  slug: string;
  metadata: Metadata;
};

export type { Metadata, Post };
