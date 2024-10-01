import * as m from "framer-motion/m";
import type { NamedLink } from "@/config";

import AnimatedBackground from "@/components/animation/animated-background";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import Link from "./link";

const SubMenu = ({ links }: { links: NamedLink[] }) => (
  <NavMenu.Trigger className="relative flex justify-center">
    <Link link={links[0]} className="px-5 py-2 text-[1.075rem] xl:px-8 2xl:px-10" />
    <NavMenu.Content asChild>
      <m.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-[calc(100%+1.15rem)] z-20 w-max overflow-hidden rounded-lg bg-base-100 drop-shadow"
      >
        <AnimatedBackground className="bg-primary/20" enableHover>
          {links.slice(1).map((link, index) => (
            <li
              key={index}
              data-id={index}
              className="flex w-full justify-center px-5 py-2 hover:text-primary"
            >
              <Link link={link} />
            </li>
          ))}
        </AnimatedBackground>
      </m.ul>
    </NavMenu.Content>
  </NavMenu.Trigger>
);

export default SubMenu;
