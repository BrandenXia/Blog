"use client";

import { useSetAtom } from "jotai";
import { scrollYAtom } from "./atom";
import { useMotionValueEvent, useScroll } from "framer-motion";

const DataUpdater = () => {
  const { scrollY } = useScroll();
  const set = useSetAtom(scrollYAtom);

  useMotionValueEvent(scrollY, "change", set);

  return null;
};

export default DataUpdater;
