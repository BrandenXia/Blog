"use client";

import { JSXWrapper } from "@/lib/typeUtils";
import { Provider as JotaiProvider } from "jotai";
import { LazyMotion } from "framer-motion";

const loadMotionFeatures = () =>
  import("./motion-features").then((res) => res.default);

const Providers: JSXWrapper = ({ children }) => (
  <JotaiProvider>
    <LazyMotion features={loadMotionFeatures}>{children}</LazyMotion>
  </JotaiProvider>
);

export default Providers;
