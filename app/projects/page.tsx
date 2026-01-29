import Link from "next/link";
import { projects } from "@/config/projects";
import { Pill } from "@/components/ui/pill";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="max-w-6xl mx-auto px-4 sm:px-12 md:px-12 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                {project.image && project.image[0] ? (
                <img
                  //src="/img/projects/provisions-landing.png"
                  src={`/img/projects${project.image[0]}`}
                  alt={project.title}
                  className="object-scale-down w-full h-full group-hover:scale-105 transition-transform"
                />
                ) : (
                <span className="text-white text-lg font-medium">
                  Image du projet
                </span>)}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
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
