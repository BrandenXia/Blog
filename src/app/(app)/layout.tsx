import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { JSXWrapper } from "@/types/jsx-wrapper";

const Layout: JSXWrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
