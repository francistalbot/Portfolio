import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/config/projects";
import { Pill } from "@/components/ui/pill";
import { getTechnology } from "@/lib/technologies";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Retour aux projets
          </Link>
        </div>

        {/* En-tête du projet */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Pill
                name={tag}
                key={tag} 
                size="small"
              />
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              Code source
            </a>
            <a
              href={project.liveUrl}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Démo en ligne
            </a>
          </div>
        </div>

        {/* Image du projet */}
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-8 flex items-center justify-center">
          <span className="text-white text-xl font-medium">
            Capture d'écran du projet
          </span>
        </div>

        {/* Description détaillée */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            À propos du projet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Fonctionnalités */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Fonctionnalités principales
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-gray-600 dark:text-gray-400"
              >
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => {
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
        </div>
      </main>
    </div>
  );
}
