"use client";

import { LazyMotion } from "framer-motion";
import { Provider as JotaiProvider } from "jotai";

import { JSXWrapper } from "@/types/jsx-wrapper";

const loadMotionFeatures = () => import("./motion-features").then((res) => res.default);

const Providers: JSXWrapper = ({ children }) => (
  <JotaiProvider>
    <LazyMotion features={loadMotionFeatures}>{children}</LazyMotion>
  </JotaiProvider>
);

export default Providers;
