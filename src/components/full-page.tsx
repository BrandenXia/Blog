"use client";

import { forwardRef } from "react";

import config from "@data/config";

import type { HTMLAttributes } from "react";

const {
  layout: { headerHeight },
} = config;

const FullPage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...style, minHeight: `calc(100vh - ${headerHeight}px)` }}
      className={className}
      {...props}
    >
      {children}
    </div>
  ),
);
FullPage.displayName = "FullPage";

export default FullPage;
