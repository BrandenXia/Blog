"use client";

import { forwardRef, HTMLAttributes } from "react";
import cn from "@/lib/cn";
import config from "@data/config";

const {
  layout: { headerHeight },
} = config;

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
