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
    <section id="projects" className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-mono font-semibold text-bark-dark dark:text-foreground mb-12">
            Mes Projets
        </h2>
      <BentoGrid.Root >
        {featuredProjects.map((project, i) =>
            <BentoGrid.Item
              key={project.id}
              className= {`  ${i === 0 ? "md:col-span-2 lg:col-span-3" : ""} ${i === 1 ? "md:row-span-2 lg:row-span-2 lg:col-span-1" : ""} ${i === 2 ? " lg:row-span-1 lg:col-span-2" : ""}`}
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
                    className="text-moss dark:text-sage transition-colors duration-[250ms] ease-out hover:text-terminal-green dark:hover:text-terminal-green"
                  >
                    <Icon className="size-5" />
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
            <div className="flex items-center gap-2 flex-wrap">
              {project.liveUrl && (
                <Button
                  asChild
                  className="h-8 px-3 text-xs font-medium "
                  variant="default"
                >
                  <Link
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icons.Eye className="mr-1.5 size-3.5" />
                    Preview
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
              <Button
                asChild
                className="h-8 px-3 text-xs font-medium "
                variant="outline"
              >
                <Link
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icons.GitHub className="mr-2 size-4 " />
                  Code Source
                </Link>
              </Button>
              )}
            </div>
            </BentoGrid.Item>
            )}
      </BentoGrid.Root>

      <div className="flex justify-center mt-6">
        <Button
          asChild
          size="lg"
        >
          <Link href="/projects">
            Voir tous mes projets
          </Link>
        </Button>
      </div>
    </section>);
}
export default Projects;