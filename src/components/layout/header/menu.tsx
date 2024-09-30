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
        <AnimatedBackground className="rounded-lg bg-primary/20" enableHover>
          {headerLinks.map((link, index) => (
            <NavMenu.Item key={index} data-id={index}>
              {Array.isArray(link) ? (
                <SubMenu links={link} />
              ) : (
                <span className="relative flex justify-center">
                  <Link
                    link={link}
                    className="px-5 py-2 text-[1.075rem] xl:px-8 2xl:px-10"
                  />
                </span>
              )}
            </NavMenu.Item>
          ))}
        </AnimatedBackground>
      </NavMenu.List>
    </NavMenu.Root>
  </AnimatePresence>
);

export default Menu;
