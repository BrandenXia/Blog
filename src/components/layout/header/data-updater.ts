"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useSetAtom } from "jotai";

import { scrollYAtom } from "./atom";

const DataUpdater = () => {
  const { scrollY } = useScroll();
  const set = useSetAtom(scrollYAtom);

  useMotionValueEvent(scrollY, "change", set);

  return null;
};

export default DataUpdater;
