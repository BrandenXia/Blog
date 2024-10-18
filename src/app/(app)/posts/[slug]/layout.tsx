import { JSXWrapper } from "@/types/jsx-wrapper";

import "katex/dist/katex.min.css";

const Layout: JSXWrapper = ({ children }) => (
  <div className="mx-auto max-w-screen-xl xl:flex">{children}</div>
);

export default Layout;
