import { Fragment, Key, ReactNode } from "react";

// Fragment Wrapper that omits all props except children and key
const Frag = ({
  key,
  children,
}: unknown & { children?: ReactNode; key?: Key }) => (
  <Fragment key={key}>{children}</Fragment>
);

export default Frag;
