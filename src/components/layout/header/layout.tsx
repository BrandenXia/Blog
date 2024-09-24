import { ReactNode } from "react";

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
    <div className="mx-4 flex max-w-screen-2xl grow items-center md:mx-14">
      <div className="justify-start">{left}</div>
      <div className="flex flex-1 justify-center">{center}</div>
      <div className="justify-end">{right}</div>
    </div>
  </div>
);

export default Layout;
