"use client";

import { useRef } from "react";

import { ElementLike } from "@/types/utils";

const Pre: ElementLike<"pre"> = ({ children, ...props }) => {
  const ref = useRef<HTMLPreElement>(null);

  const getTextContent = () => ref.current?.innerText ?? "";

  return (
    <pre {...props} ref={ref} className="group relative rounded-2xl px-5 py-4">
      {children}
      <button
        onClick={() => navigator.clipboard.writeText(getTextContent())}
        className="absolute right-5 top-2.5 opacity-0 transition-opacity ease-in-out group-hover:opacity-100"
      >
        <span className="i-ph-copy" />
      </button>
    </pre>
  );
};

export { Pre as pre };
