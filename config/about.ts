

import type { techMapping} from "@/lib/technologies";


export type AboutItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  technologies?:  string[];
  category?: string;
};


export const aboutItems: AboutItem[] = [
  {
    id: "frontend",
    title: "Développement Front-end",
    description: "Interface utilisateur & expérience",
    category: "frontend",
    technologies: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "reactnative",
      "tailwindcss",
      "figma",
      "Responsive Design", 
      "Accessibility"
    ],
  },
  {
    id: "backend",
    title: "Développement Back-end",
    description: "Architecture & bases de données",
    category: "backend",
    technologies: [
      "node",
      "express",
      "laravel",
      "php",
      "mongodb",
      "firebase",
      "mysql",
      "jwt",
      "restfulapis",
      "MVC Architecture"
    ],
  },
  {
    id: "tools",
    title: "Outils et environnements",
    description: "Développement & déploiement",
    category: "tools",
    technologies: [
      "git",
      "github",
      "docker",
      "vscode",
      "postman",
      "vercel",
      "cypress",
    ],
  },
];
