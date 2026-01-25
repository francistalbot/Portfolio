import type { Icons } from "@/components/ui/icons";

export type AboutItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  items?: {icon?: keyof typeof Icons; name: string; url?: string}[];
  category?: string;
};

export const aboutItems: AboutItem[] = [
  {
    id: "frontend",
    title: "Développement Front-end",
    description: "Interface utilisateur & expérience",
    category: "frontend",
    items: [
      {icon: "Html", name: "HTML5", },
      {icon: "CSS", name: "CSS3",},
      {icon: "JavaScript", name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
      {icon: "TypeScript", name: "TypeScript", url: "https://www.typescriptlang.org"},
      {icon: "React", name: "React", url: "https://react.dev"},
      {icon: "NextJS", name: "Next.js", url: "https://nextjs.org"},
      {icon: "ReactNative", name: "React Native", url: "https://reactnative.dev"},
      {icon: "TailwindCSS", name: "Tailwind CSS", url: "https://tailwindcss.com"},
      {name: "Responsive Design",},
      {icon: "Figma", name: "Figma", url: "https://www.figma.com"},
    ],
  },
  {
    id: "backend",
    title: "Développement Back-end",
    description: "Architecture & bases de données",
    category: "backend",
    items: [
      {icon: "Node", name: "Node.js", url: "https://nodejs.org"},
      {icon: "Express", name: "Express.js", url: "https://expressjs.com"},
      {icon: "Laravel", name: "Laravel", url: "https://laravel.com"},
      {icon: "PHP", name: "PHP", url: "https://www.php.net"},
      {name: "RESTful APIs", url: "https://restfulapi.net"},
      {name: "MVC Architecture", },
      {icon: "Jwt", name: "Jwt Authentication", url: "https://jwt.io"},
      {icon: "MongoDb", name: "MongoDB", url: "https://www.mongodb.com"},
      {icon: "Firebase", name: "Firebase", url: "https://firebase.google.com"},
      {icon: "MySQL", name: "MySQL", url: "https://www.mysql.com"},
    ],
  },
  {
    id: "tools",
    title: "Outils et environnements",
    description: "Développement & déploiement",
    category: "tools",
    items: [
      {icon: "Git", name: "Git", url: "https://git-scm.com"},
      {icon: "GitHub", name: "GitHub", url: "https://github.com"},
      {icon: "Docker", name: "Docker", url: "https://www.docker.com"},
      {icon: "VSCode", name: "VS Code", url: "https://code.visualstudio.com"},
      {icon: "Postman", name: "Postman", url: "https://www.postman.com"},
      {icon: "Vercel", name: "Vercel", url: "https://vercel.com"},
      {icon: "Cypress", name: "Cypress", url: "https://www.cypress.io"},
    ],
  },
];
