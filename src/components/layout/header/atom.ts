import { atom } from "jotai";

import config from "@data/config";

const {
  layout: { headerHeight },
} = config;

const scrollLimit = headerHeight * 4;

const scrollYAtom = atom<number>(0);

const scrollProgressAtom = atom((get) => {
  const scrollY = get(scrollYAtom);
  const scrollProgress = scrollY / scrollLimit;
  return scrollProgress > 1 ? 1 : scrollProgress;
});

export { scrollYAtom, scrollProgressAtom };
