import { JSXWrapper } from "@/lib/typeUtils";
import DataUpdater from "./data-updater";
import Bg from "./bg";
import Content from "@/components/layout/header/content";
import { layout } from "@data/config";

const Base: JSXWrapper = ({ children }) => (
  <header
    id="header"
    style={{ height: `${layout.headerHeight}px` }}
    className="sticky top-0 z-10 flex"
  >
    {children}
  </header>
);

const Header = () => (
  <Base>
    <DataUpdater />
    <Bg>
      <Content />
    </Bg>
  </Base>
);

export default Header;
