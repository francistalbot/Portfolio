import Link from "next/link";
import { projects } from "@/config/projects";
import { Pill } from "@/components/ui/pill";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[var(--width-content)] mx-auto px-4 sm:px-12 md:px-12 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-2xl font-mono font-semibold text-bark-dark dark:text-foreground mb-4">
            Mes Projets
          </h1>
          <p className="text-base font-serif text-bark dark:text-parchment">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white dark:bg-card rounded-lg border border-border transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)] overflow-hidden relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-moss before:to-terminal-green before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-[250ms]"
            >
              <div className="aspect-video bg-gradient-to-br from-parchment to-sage dark:from-bark to-sage/50 flex items-center justify-center">
                {project.image && project.image[0] ? (
                <img
                  src={`/img/projects${project.image[0]}`}
                  alt={project.title}
                  className="object-scale-down w-full h-full group-hover:scale-105 transition-transform duration-[250ms]"
                />
                ) : (
                  <span className="text-moss dark:text-sage text-5xl font-mono font-bold flex items-center justify-center w-full h-full">
                    {project.title?.[0]?.toUpperCase() || '?'}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-mono font-semibold text-bark-dark dark:text-foreground mb-2 group-hover:text-moss dark:group-hover:text-sage transition-colors duration-[250ms]">
                  {project.title}
                </h2>
                <p className="text-sm font-serif text-bark dark:text-parchment mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    return (
                    <Pill
                    key={tag}
                    name={tag}
                    size="small"
                    />
                  );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
