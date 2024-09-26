import config from "@data/config";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence } from "framer-motion";
import Link from "./link";
import SubMenu from "./submenu";
import AnimatedBackground from "@/components/animation/animated-background";

const { headerLinks } = config;

const Menu = () => (
  <AnimatePresence>
    <NavMenu.Root>
      <NavMenu.List className="flex items-center">
        <AnimatedBackground
          className="rounded-lg bg-accent/20"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {headerLinks.map((link, index) => (
            <NavMenu.Item key={index} data-id={index}>
              {Array.isArray(link) ? (
                <SubMenu links={link} />
              ) : (
                <button className="relative flex justify-center" role="link">
                  <Link
                    link={link}
                    className="px-5 py-2 text-[1.075rem] xl:px-8 2xl:px-10"
                  />
                </button>
              )}
            </NavMenu.Item>
          ))}
        </AnimatedBackground>
      </NavMenu.List>
    </NavMenu.Root>
  </AnimatePresence>
);

export default Menu;
