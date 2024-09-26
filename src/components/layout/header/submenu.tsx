import type { NamedLink } from "@/config";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import Link from "./link";
import * as m from "framer-motion/m";
import AnimatedBackground from "@/components/animation/animated-background";

const SubMenu = ({ links }: { links: NamedLink[] }) => (
  <NavMenu.Trigger className="relative flex justify-center">
    <Link
      link={links[0]}
      className="px-5 py-2 text-[1.075rem] xl:px-8 2xl:px-10"
    />
    <NavMenu.Content asChild>
      <m.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-[calc(100%+1.15rem)] z-20 w-40 overflow-hidden rounded-lg bg-base-100 shadow"
      >
        <AnimatedBackground
          className="bg-accent/30"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {links.slice(1).map((link, index) => (
            <li
              key={index}
              data-id={index}
              className="flex w-full justify-center px-3 py-2 hover:text-accent"
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
