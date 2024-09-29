import { JSXWrapper } from "@/types/jsx-wrapper";

const Layout: JSXWrapper = ({ children }) => (
  <div className="mx-auto flex max-w-screen-xl">{children}</div>
);

export default Layout;
