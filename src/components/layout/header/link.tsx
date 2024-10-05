import ActiveLink from "@/components/active-link";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import type { NamedLink } from "@/config";

const Link = ({ link, className }: { link: NamedLink; className?: string }) => (
  <NavMenu.Link asChild className={className}>
    <ActiveLink href={link.href}>{link.text}</ActiveLink>
  </NavMenu.Link>
);

export default Link;
