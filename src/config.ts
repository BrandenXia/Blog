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

type Routes = "/" | "/blogs" | "/about";

type HeaderLinks = Record<string, Routes>[];

type Config = {
  headerLinks: HeaderLinks;
  layout: Layout;
  avatar: Avatar;
  metadata: Metadata;
};

export type { Config };
