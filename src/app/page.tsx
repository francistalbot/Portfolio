import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Bienvenue sur mon Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Développeur passionné par la création d'applications web modernes
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir mes projets
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            À propos de moi
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </main>
    </div>
  );
}
