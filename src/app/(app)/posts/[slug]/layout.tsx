import { JSXWrapper } from "@/types/jsx-wrapper";

const Layout: JSXWrapper = ({ children }) => (
  <div className="mx-auto max-w-screen-xl xl:flex">{children}</div>
);

export default Layout;
