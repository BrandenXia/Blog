"use client";

import { useRef, useState } from "react";

import cn from "@/lib/cn";

import type { ElementLike } from "@/types/utils";

const Pre: ElementLike<"pre"> = ({ children, ...props }) => {
  const ref = useRef<HTMLPreElement>(null);
  const [copy, setCopy] = useState(false);

  const getTextContent = () => ref.current?.innerText ?? "";

  return (
    <pre {...props} ref={ref} className="group relative rounded-2xl px-5 py-4">
      {children}
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(getTextContent());
          setCopy(true);
          setTimeout(() => setCopy(false), 2000);
        }}
        className="absolute right-5 top-2.5 rounded-lg p-[5px] opacity-0 transition-all ease-in-out hover:bg-primary/25 group-hover:opacity-100"
      >
        <span className="flex items-center space-x-2">
          <label className={cn("swap swap-rotate", { "swap-active": copy })}>
            <span className="swap-on i-ph-check size-4" />
            <span className="swap-off i-ph-copy size-4" />
          </label>
        </span>
      </button>
    </pre>
  );
};

export { Pre as pre };
