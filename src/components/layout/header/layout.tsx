import type { ReactNode } from "react";

const Layout = ({
  left,
  center,
  right,
}: {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}) => (
  <div className="flex size-full transform-gpu items-center justify-center">
    <div className="mx-4 flex max-w-screen-2xl grow md:mx-14">
      <div className="grid w-full grid-cols-3 items-center justify-items-stretch">
        <div className="justify-self-start">{left}</div>
        <div className="flex flex-1 justify-self-center">{center}</div>
        <div className="justify-self-end">{right}</div>
      </div>
    </div>
  </div>
);

export default Layout;
