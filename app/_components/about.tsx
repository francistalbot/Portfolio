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
        Compétences
      </h2>
      <Accordion type="single" collapsible className="w-full mx-auto space-y-4" >
        {aboutItems.map((item, i) => (
          <AccordionItem value={item.id} key={item.id} className="bg-white dark:bg-card border border-border rounded-lg p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
            <AccordionTrigger className="text-lg font-mono font-semibold text-bark-dark dark:text-foreground cursor-pointer">{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
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
