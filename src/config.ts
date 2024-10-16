type Layout = {
  // header height in px
  headerHeight: number;
};

type Avatar = {
  alt: string;
} & (
  | {
      source: "local";
      // local image path, should be relative to public folder
      src: string;
    }
  | {
      source: "github";
      // GitHub user id
      userId: number;
    }
);

type NamedLink = { text: string; href: string };
type HeaderLinks = (NamedLink | NamedLink[])[];

type Metadata = {
  title: {
    // site title template, example: "%s | BrandenXia's Blog"
    template: string;
    // default site title, example: "BrandenXia's Blog"
    default: string;
  };
  description: string;
};

type Config = {
  // GitHub username, example: "BrandenXia"
  githubUsername: string;
  // site base url, example: "https://xia-x.org"
  siteUrl: string;
  headerLinks: HeaderLinks;
  layout: Layout;
  avatar: Avatar;
  metadata: Metadata;
};

export type { Config, Layout, Avatar, NamedLink, HeaderLinks };
