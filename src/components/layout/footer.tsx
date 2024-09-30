import Link from "next/link";
import { ReactNode } from "react";

const HoverLink = (props: { children: ReactNode; href: string }) => (
  <Link className="hover:text-primary hover:underline" {...props} />
);

const Footer = () => (
  <footer className="mt-8 flex justify-center bg-base-300 py-8">
    <div className="max-w-screen-lg grow">
      <p className="divide-x divide-base-content/40 text-sm *:px-3">
        <span>@2023-{new Date().getFullYear()} BrandenXia</span>
        <HoverLink href="/feed">RSS</HoverLink>
        <HoverLink href="/sitemap.xml">Sitemap</HoverLink>
      </p>
    </div>
  </footer>
);

export default Footer;
