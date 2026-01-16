"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function DesktopNavigation(
  { className }: { className?: string }
) {
  const isMobile = useIsMobile();

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
      viewport={isMobile}
      className={`${className ?? ""
      } relative px-3 py-2 text-fg/60 transition-colors hover:text-fg data-[active='true']:text-fg`}
    >
      <NavigationMenuList className="flex-wrap">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} !text-base text-gray-600 dark:text-gray-200 hover:text-fg`}
            >
              <Link href={link.href} onClick={(e) => handleClick(e, link.href)}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
