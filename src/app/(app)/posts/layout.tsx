import FullPage from "@/components/full-page";
import { JSXWrapper } from "@/lib/typeUtils";

const Layout: JSXWrapper = ({ children }) => (
  <FullPage>
    <div className="mx-auto max-w-screen-2xl">{children}</div>
  </FullPage>
);

export default Layout;
