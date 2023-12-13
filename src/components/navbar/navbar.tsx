import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { FC } from "react";

interface Props {
  orientation?: "vertical" | "horizontal";
}

export const Navbar: FC<Props> = ({ orientation = "horizontal" }) => {
  return (
    <NavigationMenu orientation={orientation}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://drive.google.com/file/d/177wVaIZpe7ojKyPYmQnEvYB5lCeacisj/view?usp=sharing"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              target="_blank"
              rel="noopener noreferrer"
              className={navigationMenuTriggerStyle()}
            >
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
