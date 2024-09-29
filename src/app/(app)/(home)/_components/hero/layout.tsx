import { JSXWrapper } from "@/types/jsx-wrapper";
import FullPage from "@/components/full-page";
import config from "@data/config";

const {
  layout: { headerHeight },
} = config;

const Layout: JSXWrapper = ({ children }) => {
  return (
    <FullPage>
      <div
        style={{ marginTop: `-${headerHeight}px` }}
        className="relative flex h-screen justify-center overflow-hidden md:mx-16 lg:mx-28 xl:mx-48"
      >
        <div className="flex size-full max-w-screen-lg flex-col-reverse items-center justify-center space-y-12 space-y-reverse md:flex-row md:justify-between md:space-y-0">
          {children}
        </div>
        <div className="absolute bottom-4 flex flex-col items-center space-y-3.5">
          <span className="text-sm text-neutral">Scroll to continue...</span>
          <span className="i-ph-caret-down size-[18px] motion-safe:animate-bounce" />
        </div>
      </div>
    </FullPage>
  );
};

export default Layout;
