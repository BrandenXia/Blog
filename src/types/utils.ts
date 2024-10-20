import { ComponentProps, FC, ReactNode } from "react";

import IntrinsicElements = React.JSX.IntrinsicElements;

type JSXWrapper = FC<
  Readonly<{
    children?: ReactNode;
  }>
>;

type ElementLike<T extends keyof IntrinsicElements> = FC<ComponentProps<T>>;

export type { ElementLike, JSXWrapper };
