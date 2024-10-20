"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

import cn from "@/lib/cn";

import type { ComponentPropsWithoutRef } from "react";

const ActiveLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof Link>>(
  ({ className, href, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <Link
        ref={ref}
        className={cn(href === pathname && "text-primary", className)}
        href={href}
        {...props}
      />
    );
  },
);
ActiveLink.displayName = "ActiveLink";

export default ActiveLink;
