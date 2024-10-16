"use client";

import { m } from "framer-motion";

import type { ReactNode } from "react";

const Activity = ({ title, children }: { title: string; children?: ReactNode }) => (
  <m.div
    variants={{
      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
    }}
    className="flex flex-col space-y-8"
  >
    <h3 className="text-xl font-medium">{title}</h3>
    <div className="overflow-auto">{children}</div>
  </m.div>
);

export default Activity;
