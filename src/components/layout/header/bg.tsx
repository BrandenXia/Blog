"use client";

import { m, mix } from "framer-motion";
import { useAtomValue } from "jotai";

import { scrollProgressAtom } from "./atom";

import type { JSXWrapper } from "@/types/utils";
import type { ComponentProps } from "react";

type CSSProperties = ComponentProps<typeof m.div>["animate"];

const Bg: JSXWrapper = ({ children }) => {
  const scrollProgress = useAtomValue(scrollProgressAtom);

  const bgMix = mix(0, 0.8, scrollProgress);
  const borderOpacityMix = mix(0, 0.8, scrollProgress);

  return (
    <m.div
      initial={false}
      animate={
        {
          "--tw-bg-opacity": bgMix,
          "--tw-border-opacity": borderOpacityMix,
          willChange: "background-color, border-color",
        } as CSSProperties
      }
      {...{
        className:
          "size-full transform-gpu border-b border-b-neutral-content bg-base-100 backdrop-blur-md backdrop-saturate-[180%] [backface-visibility:hidden] dark:border-b-0 dark:backdrop-saturate-100",
      }}
    >
      {children}
    </m.div>
  );
};

export default Bg;
