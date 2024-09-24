import { JSX, ReactNode } from "react";

type JSXWrapper = (
  props: Readonly<{
    children?: ReactNode;
  }>,
) => JSX.Element | null;

export type { JSXWrapper };
