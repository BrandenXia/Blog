"use client";

import { m, useInView } from "framer-motion";
import { useRef } from "react";

import type { Transition, UseInViewOptions, Variant } from "framer-motion";
import type { ReactNode, RefObject } from "react";

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const InView = ({ children, variants = defaultVariants, transition, viewOptions }: InViewProps) => {
  const ref = useRef<Element>(null);
  const isInView = useInView(ref as RefObject<Element>, viewOptions);

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </m.div>
  );
};

export default InView;
