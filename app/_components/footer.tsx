import {Button} from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";

export const Footer = () => {
  return (
    <footer className="bg-parchment dark:bg-bark py-12 mt-20">
      <div className="max-w-[var(--width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Logo et Description */}
          <div className="space-y-4">
              <Icons.LogoFT className="size-8 text-moss dark:text-sage" />
            <p className="font-serif text-sm text-bark dark:text-parchment">
              {siteConfig.description}
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-semibold text-bark-dark dark:text-foreground">
              Liens Rapides
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="font-serif text-sm text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
              >
                Accueil
              </Link>
              <Link
                href="/projects"
                className="font-serif text-sm text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
              >
                Projets
              </Link>
              <Link
                href="/about"
                className="font-serif text-sm text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
              >
                À propos
              </Link>
            </nav>
          </div>

          {/* Colonne 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-semibold text-bark-dark dark:text-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 font-serif text-sm text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
              >
                {siteConfig.email}
              </a>
              <p className="font-serif text-sm text-bark dark:text-parchment">
                Montréal, QC, Canada
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
                  aria-label="LinkedIn"
                >
                  <Icons.LinkedIn className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood dark:text-parchment hover:text-moss dark:hover:text-sage transition-colors duration-[250ms] ease-out"
                  aria-label="GitHub"
                >
                  <Icons.GitHub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barre horizontale */}
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-center font-serif text-sm text-bark dark:text-parchment">
            &copy; {new Date().getFullYear()} - {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}