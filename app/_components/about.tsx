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
    <section id="about" className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        Compétences
      </h2>
      <Accordion type="single" collapsible className="w-full mx-auto space-y-4" >
        {aboutItems.map((item, i) => (
          <AccordionItem value={item.id} key={item.id} className="bg-white border rounded-xl p-4 shadow-input transition duration-200 hover:shadow-xl">
            <AccordionTrigger className="text-xl font-semibold cursor-pointer">{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.technologies && (
                <div className="mt-4 flex flex-wrap gap-3">
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
