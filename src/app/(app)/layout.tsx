import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import type { JSXWrapper } from "@/types/utils";

const Layout: JSXWrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
