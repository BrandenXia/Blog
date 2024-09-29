type Metadata = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
};

type Filter = {
  [key in keyof Metadata]?: Metadata[key];
};

type Post = {
  slug: string;
  metadata: Metadata;
};

export type { Metadata, Filter, Post };
