import { aboutItems } from "@/config/about";
import { Icons } from "@/components/ui/icons";
import type { Icon } from "@/components/ui/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getTechnology = (technology: string): { name: string; icon: Icon; url: string } | null => {
  const techMapping: Record<string, { icon: Icon; url: string }> = {
    "React": { icon: "React", url: "https://react.dev/" },
    "Next.js": { icon: "NextJS", url: "https://nextjs.org/" },
    "React Native": { icon: "ReactNative", url: "https://reactnative.dev/" },
    "TypeScript": { icon: "TypeScript", url: "https://www.typescriptlang.org/" },
    "Tailwind CSS": { icon: "TailwindCSS", url: "https://tailwindcss.com/" },
    "Node.js": { icon: "Node", url: "https://nodejs.org/" },
    "Express": { icon: "Express", url: "https://expressjs.com/" },
    "Laravel": { icon: "Laravel", url: "https://laravel.com/" },
    "PHP": { icon: "PHP", url: "https://www.php.net/" },
    "MongoDB": { icon: "MongoDb", url: "https://www.mongodb.com/" },
    "Firebase": { icon: "Firebase", url: "https://firebase.google.com/" },
    "MySQL": { icon: "MySQL", url: "https://www.mysql.com/" },
    "PostgreSQL": { icon: "Postgres", url: "https://www.postgresql.org/" },
    "Git": { icon: "Git", url: "https://git-scm.com/" },
    "GitHub": { icon: "GitHub", url: "https://github.com/" },
    "Docker": { icon: "Docker", url: "https://www.docker.com/" },
    "Cypress": { icon: "Cypress", url: "https://www.cypress.io/" },
  };

  const mapping = techMapping[technology];
  if (!mapping) return null;

  return {
    name: technology,
    icon: mapping.icon,
    url: mapping.url,
  };
};

export default function About() {
  return (
    <section id="about" className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        Compétences
      </h2>
      <Accordion type="single" collapsible className="w-full mx-auto space-y-4" >
        {aboutItems.map((item, i) => (
          <AccordionItem value={item.id} key={item.id} className="bg-white border rounded-xl p-4 shadow-input transition duration-200 hover:shadow-xl">
            <AccordionTrigger className="text-xl font-semibold cursor-pointer">{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.items && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.items.map((skill) => {
                    const tech = getTechnology(skill);
                    if (!tech) {
                      return (
                        <div
                          key={skill}
                          className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg text-base"
                        >
                          <span className="text-gray-900 dark:text-white font-medium">
                            {skill}
                          </span>
                        </div>
                      );
                    }
                    
                    const IconComponent = Icons[tech.icon];
                    
                    return (
                      <a
                        href={tech.url}
                        key={tech.name}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={tech.name}
                        className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg text-base hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <IconComponent className="size-4" />
                        <span className="text-gray-900 dark:text-white ">
                          {tech.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <Button
        className="mx-auto my-8 p-5 flex w-max"
        variant="outline"
      >
        <Link href="/about" className="text-base font-semibold">
          En savoir plus sur moi
        </Link>
      </Button>
    </section>
  );
}
