import FullPage from "@/components/full-page";

import type { JSXWrapper } from "@/types/utils";

const Layout: JSXWrapper = ({ children }) => (
  <FullPage>
    <div className="mx-auto my-16 max-w-screen-2xl">{children}</div>
  </FullPage>
);

export default Layout;
