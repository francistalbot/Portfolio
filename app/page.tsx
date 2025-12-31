import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Développeur passionné par la création d'applications web modernes et
            performantes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Section compétences */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Développement Web
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Création d'applications web avec React, Next.js et TypeScript.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              UI/UX Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Conception d'interfaces utilisateur modernes et intuitives.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Optimisation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Performance et optimisation pour une expérience utilisateur
              optimale.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
