import { siteConfig } from "@/config/site";
import { DesktopNavigation } from "./DesktopNavigation";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import Link from "next/link";
import { ModeSwitcher } from "./ModeSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full animate-delay-1000 animate-fade-down border-border/40 border-b bg-bg backdrop-blur-sm dark:bg-bg/95 supports-backdrop-filter:dark:bg-bg/60">
      <div className="mx-auto px-8 flex h-16 max-w-(--breakpoint-2xl) items-center">
        <Link href="/">
          <Icons.Logo className="size-6" />
          <span className="sr-only">Francis Talbot</span>
        </Link>

        <DesktopNavigation className="hidden md:flex"/>
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          <Link href={siteConfig.links.github}>
            <Button rel="noreferrer" size="icon" variant="link">
              <Icons.GitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <ModeSwitcher />
        </nav>
        <MobileNavigation className="ml-auto md:hidden" />
      </div>
    </header>
  );
}
