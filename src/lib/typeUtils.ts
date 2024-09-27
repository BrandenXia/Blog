import { FC, ReactNode } from "react";

type JSXWrapper = FC<
  Readonly<{
    children?: ReactNode;
  }>
>;

export type { JSXWrapper };
