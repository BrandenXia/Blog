"use client";

import { useCallback, useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import cn from "@/lib/cn";

type TocItem = {
  id: string;
  title: string;
  level: number;
  position: number;
};

const Toc = ({ htmlFor }: { htmlFor: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);

  const { scrollY } = useScroll();

  const handleScroll = useCallback(
    (latest: number) => {
      const active = toc.find((item) => item.position > latest);
      if (active) setActive(active.id);
    },
    [toc],
  );

  useEffect(() => {
    const article = document.getElementById(htmlFor);
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    )
      .map((heading, index) => ({
        id: heading.id,
        title: heading.textContent || "",
        headingLevel: parseInt(heading.tagName[1]),
        sort: index,
        position: heading.getBoundingClientRect().top,
      }))
      .sort((a, b) => a.headingLevel - b.headingLevel || a.sort - b.sort);

    const toc: (TocItem & { sort: number })[] = [];

    for (let i = 0; i < headings.length; i++) {
      const prevH = headings[i - 1];
      const h = headings[i];
      const last = toc.at(-1);

      if (!last) {
        toc.push({ level: 0, ...h });
        continue;
      }

      toc.push({
        level:
          h.headingLevel === prevH.headingLevel ? last.level : last.level + 1,
        ...h,
      });
    }

    toc.sort((a, b) => a.sort - b.sort);

    setToc(toc);
  }, [htmlFor]);

  useMotionValueEvent(scrollY, "change", handleScroll);

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium">Table of Contents</h2>
      <hr />
      <ul className="text-neutral/75">
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${item.level}rem` }}>
            <a
              className={cn(
                "transition-colors duration-200 hover:text-base-content",
                active === item.id && "text-primary",
              )}
              href={`#${item.id}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
