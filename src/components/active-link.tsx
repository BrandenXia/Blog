"use client";

import { ComponentPropsWithoutRef, forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/lib/cn";

const ActiveLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof Link>
>(({ className, href, ...props }, ref) => {
  const pathname = usePathname();

  return (
    <Link
      ref={ref}
      className={cn(href === pathname && "text-accent", className)}
      href={href}
      {...props}
    />
  );
});
ActiveLink.displayName = "ActiveLink";

export default ActiveLink;
