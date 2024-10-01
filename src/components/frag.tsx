import { Fragment, ReactNode } from "react";

// Fragment Wrapper that omits all props except children and key
const Frag = ({ children }: unknown & { children?: ReactNode }) => <Fragment>{children}</Fragment>;

export default Frag;
