import { JSXWrapper } from "@/lib/typeUtils";
import Header from "@/components/layout/header";

const Layout: JSXWrapper = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
