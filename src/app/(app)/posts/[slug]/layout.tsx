import { JSXWrapper } from "@/lib/typeUtils";

const Layout: JSXWrapper = ({ children }) => (
  <div className="mx-auto flex max-w-screen-xl">{children}</div>
);

export default Layout;
