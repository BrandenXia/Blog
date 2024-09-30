import { JSXWrapper } from "@/types/jsx-wrapper";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Layout: JSXWrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
