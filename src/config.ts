import { Metadata } from "next";

type Layout = {
  headerHeight: number;
};

type Avatar = {
  alt: string;
} & (
  | {
      source: "local";
      src: string;
    }
  | {
      source: "github";
      userId: number;
    }
);

type NamedLink = { text: string; href: string };
type HeaderLinks = (NamedLink | NamedLink[])[];

type Config = {
  headerLinks: HeaderLinks;
  layout: Layout;
  avatar: Avatar;
  metadata: Metadata;
};

export type { Config, Layout, Avatar, NamedLink, HeaderLinks };
