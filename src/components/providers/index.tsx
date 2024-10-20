"use client";

import { LazyMotion } from "framer-motion";
import { Provider as JotaiProvider } from "jotai";

import type { JSXWrapper } from "@/types/utils";

const loadMotionFeatures = () => import("./motion-features").then((res) => res.default);

const Providers: JSXWrapper = ({ children }) => (
  <JotaiProvider>
    <LazyMotion features={loadMotionFeatures}>{children}</LazyMotion>
  </JotaiProvider>
);

export default Providers;
