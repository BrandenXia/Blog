import FullPage from "@/components/full-page";
import { JSXWrapper } from "@/types/jsx-wrapper";

const Layout: JSXWrapper = ({ children }) => (
  <FullPage>
    <div className="mx-auto my-16 max-w-screen-2xl">{children}</div>
  </FullPage>
);

export default Layout;
