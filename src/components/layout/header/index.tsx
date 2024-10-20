import Content from "@/components/layout/header/content";
import config from "@data/config";

import Bg from "./bg";
import DataUpdater from "./data-updater";

import type { JSXWrapper } from "@/types/utils";

const {
  layout: { headerHeight },
} = config;

const Base: JSXWrapper = ({ children }) => (
  <header id="header" style={{ height: `${headerHeight}px` }} className="sticky top-0 z-10 flex">
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
