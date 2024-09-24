"use client";

import { forwardRef, HTMLAttributes } from "react";
import { layout } from "@data/config";
import cn from "@/lib/cn";

const headerHeight = layout.headerHeight;

const FullPage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...style, height: `calc(100vh - ${headerHeight}px)` }}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
FullPage.displayName = "FullPage";

export default FullPage;
