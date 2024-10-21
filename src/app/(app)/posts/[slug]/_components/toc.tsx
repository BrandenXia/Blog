"use client";

import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

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

    const headings = Array.from(article.querySelectorAll("h1, h2, h3, h4, h5, h6"))
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
        level: h.headingLevel === prevH.headingLevel ? last.level : last.level + 1,
        ...h,
      });
    }

    toc.sort((a, b) => a.sort - b.sort);

    setToc(toc);
  }, [htmlFor]);

  useMotionValueEvent(scrollY, "change", handleScroll);

  return (
    <div className="space-y-2">
      {toc.length > 0 && <h3 className="text-lg font-semibold">Table of Contents</h3>}
      <ul className="pl-2 text-[15px] text-neutral/75">
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${item.level / 1.5}rem` }}>
            <a
              className={cn(
                "flex items-center transition-colors duration-200 hover:text-base-content",
                active === item.id && "-ml-2 text-primary",
              )}
              href={`#${item.id}`}
            >
              {active === item.id && (
                <m.span layoutId="active-toc" className="mr-2 h-4 w-0.5 bg-primary" />
              )}
              <m.span layout>{item.title}</m.span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
