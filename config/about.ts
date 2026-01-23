export type AboutItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  items?: string[];
  category?: string;
};

export const aboutItems: AboutItem[] = [
  {
    id: "frontend",
    title: "Développement Front-end",
    description: "Interface utilisateur & expérience",
    category: "frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Développement Back-end",
    description: "Architecture & bases de données",
    category: "backend",
    items: [
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "MongoDB",
      "Firebase",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    id: "tools",
    title: "Outils et environnements",
    description: "Développement & déploiement",
    category: "tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Postman",
      "Vercel",
      "Cypress",
    ],
  },
];
