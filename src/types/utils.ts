import { ComponentProps, FC } from "react";

import IntrinsicElements = React.JSX.IntrinsicElements;

type ElementLike<T extends keyof IntrinsicElements> = FC<ComponentProps<T>>;

export type { ElementLike };
