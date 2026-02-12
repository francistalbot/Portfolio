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
import { getTechnology } from "@/lib/technologies";
import { Pill } from "@/components/ui/pill";

export default function About() {
  return (
    <section id="about" className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-mono font-semibold text-bark-dark dark:text-foreground mb-12">
        Technologies et compétences
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
        {aboutItems.map((item, i) => (
              <div  key={item.id} className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">      
                  {item.title}
                </h3>
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => {
                      const tech = getTechnology(technology);
                      if (!tech) return null;
                      return (
                        <Pill
                          key={technology}
                          name={technology ? tech.name : technology}
                          url={technology ? tech.url : undefined}
                          icon={technology ? tech.icon : undefined}
                     
                        />
                      );
                  })}
                </div>
              )}
            </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button
          asChild
          size="lg"
        >
          <Link href="/about">
            En savoir plus sur moi
          </Link>
        </Button>
      </div>
    </section>
  );
}
