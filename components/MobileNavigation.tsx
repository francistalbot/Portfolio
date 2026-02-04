"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./ui/icons";

export function MobileNavigation({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // L'élément n'existe pas sur cette page, naviguer vers la page principale
        e.preventDefault();
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <NavigationMenu
      className={`${className} relative px-3 py-2 text-fg/60 transition-colors hover:text-fg data-[active='true']:text-fg`}
    >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger noChevron={true} className={navigationMenuTriggerStyle()}>
            <Icons.MenuBurger className="size-5" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {navLinks.map((link) => (
              <NavigationMenuLink key={link.href} asChild>
                <Link href={link.href} onClick={(e) => handleClick(e, link.href)} className="whitespace-nowrap px-4 py-3 text-base block">
                  {link.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}