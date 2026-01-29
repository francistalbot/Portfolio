import {Button} from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Logo et Description */}
          <div className="space-y-4">
              <Icons.LogoFT className="size-8" />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Liens Rapides
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Accueil
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Projets
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                À propos
              </Link>
            </nav>
          </div>

          {/* Colonne 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                {siteConfig.email}
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Montréal, QC, Canada
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Icons.LinkedIn className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Icons.GitHub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barre horizontale */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} - {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}