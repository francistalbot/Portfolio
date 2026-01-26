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
                    if (!skill.icon) {
                      return (
                        <div
                          key={skill.name}
                          className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg text-base"
                        >
                          <span className="text-gray-900 dark:text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                      );
                    }
                    
                    const IconComponent = Icons[skill.icon];
                    return (
                      <a
                        href={skill.url}
                        key={skill.name}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={skill.name}
                        className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg text-base hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <IconComponent className="size-4" />
                        <span className="text-gray-900 dark:text-white ">
                          {skill.name}
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
