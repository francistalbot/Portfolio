import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {projects} from "@/config/projects";
import Link from "next/link";
import type { Icon } from "@/components/ui/icons";
import { getTechnology } from "@/lib/technologies";
import { Pill } from "@/components/ui/pill";

const Projects = () => {
    const featuredProjects = projects.filter(project => project.featured);
    return (
    <section id="projects" className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Mes Projets
        </h2>
      <BentoGrid.Root >
        {featuredProjects.map((project, i) =>
            <BentoGrid.Item
              key={project.id}
              className= {`  ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""} ${i === 1 ? "md:row-span-2 lg:row-span-1 lg:col-span-1" : ""}${i === 2 ? "md:row-span-2 lg:row-span-2 lg:col-span-1" : ""}${i === 4 ? "md:row-span-1 md:col-span-2 lg:col-span-2" : ""}`}
            > 
         
            <div className="flex flex-wrap items-center gap-3" >
              {project.technologies.map((technology) => {
                const tech = getTechnology(technology);
                if (!tech || !tech.icon) return null;
                const Icon = Icons[tech.icon];
                return (
                  <a
                    href={tech.url}
                    key={tech.name}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={tech.name}
                  >
                    <Icon className="size-6" />
                  </a>
                );
              })}
            </div>
            <BentoGrid.Body className="flex flex-col justify-start mb-auto">
              <BentoGrid.Title>
                <Link href={`/projects/${project.id}`} className="hover:underline">
                  {project.title}
                </Link>
              </BentoGrid.Title>
              <BentoGrid.Description>
                {project.description}
              </BentoGrid.Description>
            </BentoGrid.Body>
            <div className="mt-4 flex items-center justify-between">
              {project.liveUrl && (
                <Button
                  asChild
                  className="rounded-full"
                  size="sm"
                  variant="outline"
                >
                  <Link
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icons.Eye className="mr-2 size-4" />
                    Preview
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
              <Button
                asChild
                className="rounded-full"
                size="sm"
                variant="outline"
              >
                <Link
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icons.GitHub className="mr-2 size-4" />
                  Source code
                </Link>
              </Button>
              )}
            </div>
            </BentoGrid.Item>
            )}
      </BentoGrid.Root>

      <Button
        className="mx-auto my-8 p-5 flex w-max"
        variant="outline"
      >
        <Link href="/projects" className="text-base font-semibold">
          Voir tous mes projets
        </Link>
      </Button>
    </section>);
}
export default Projects;