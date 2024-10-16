"use client";

import { m, Transition, useInView, UseInViewOptions, Variant } from "framer-motion";
import { ReactNode, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

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
