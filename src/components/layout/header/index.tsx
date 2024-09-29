import { JSXWrapper } from "@/types/jsx-wrapper";
import DataUpdater from "./data-updater";
import Bg from "./bg";
import Content from "@/components/layout/header/content";
import config from "@data/config";

const {
  layout: { headerHeight },
} = config;

const Base: JSXWrapper = ({ children }) => (
  <header
    id="header"
    style={{ height: `${headerHeight}px` }}
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
