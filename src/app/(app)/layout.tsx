import { JSXWrapper } from "@/types/jsx-wrapper";
import Header from "@/components/layout/header";

const Layout: JSXWrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <div className="flex justify-center py-8 text-neutral">
      <p>Some space for footer</p>
    </div>
  </>
);

export default Layout;
