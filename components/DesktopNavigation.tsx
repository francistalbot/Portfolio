"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import { usePathname } from "next/navigation";

export function DesktopNavigation(
  { className }: { className?: string }
) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        e.preventDefault();
        window.location.href = `/${href}`;
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return pathname === "/" && href === "#home";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className={`${className ?? ""} flex-1`}>
      <ul className="flex gap-8 font-mono text-sm list-none">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-wood dark:text-parchment transition-colors duration-[250ms] ease-out hover:text-bark-dark dark:hover:text-white before:content-['$_'] before:text-moss before:opacity-0 before:transition-opacity before:duration-[250ms] hover:before:opacity-100 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-terminal-green after:transition-[width] after:duration-[250ms] hover:after:w-full ${
                  active
                    ? "before:opacity-100 after:w-full text-bark-dark dark:text-white"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
