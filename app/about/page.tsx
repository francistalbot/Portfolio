import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import Link from "next/dist/client/link";
import { Pill } from "@/components/ui/pill";
import { getTechnology } from "@/lib/technologies";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Étudiant en développement web transactionnel
          </p>
          <Button variant="default" size="xl" className="mb-4 text-base font-semibold">
         <Link
                href="/francis_talbot_cv.pdf"
                target="_blank"
                download
            >
              <Icons.Download className="size-5 inline-block mr-2" />
              Télécharger mon CV (PDF)
            </Link>
          </Button>
        </div>

          {/* Profil */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Profil
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fort de trois années d'expérience en développement web frontend et engagé bénévolement en
              tant que développeur Full-stack, j'allie une formation universitaire en physique et en informatique
              à des formations spécialisées complémentaires et modernes.<br/> Je poursuis activement mon
              perfectionnement professionnel afin de contribuer à des projets à impact social qui favorisent
              l'accessibilité, la solidarité et les initiatives durables.
            </p>
            <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <a 
                href="tel:438-939-7735" 
                className="group bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent "
              >
                <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Téléphone</span>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  438-939-7735
                </p>
              </a>
              
              <a 
                href="mailto:francis@frtalbot.dev" 
                className="group bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent "
              >
                <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Adresse Email</span>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  francis@frtalbot.dev
                </p>
              </a>
              
              <div className="group bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm  ">
                <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Ville</span>
                <p className="font-semibold text-gray-900 dark:text-white  ">
                  Montréal, QC
                </p>
              </div>
            </div>
          </section>

          {/* Compétences et habiletés */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Compétences et habiletés
            </h2>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Technologies - Frontend */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.React className="size-5 text-blue-500" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['react', 'nextjs', 'typescript', 'html', 'css', 'tailwindcss', 'bootstrap', 'zustand'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Technologies - Backend */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.Node className="size-5 text-green-500" />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['node', 'express', 'php', 'laravel', 'blade'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                  <Pill name="ASP.NET Core" size="small" />
                </div>
              </div>

              {/* Technologies - Mobile */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.ReactNative className="size-5 text-purple-500" />
                  Mobile
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['reactnative', 'firebase', 'expo'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Bases de données */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.MySQL className="size-5 text-orange-500" />
                  Bases de données
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['mysql', 'mongodb', 'sqlite'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                  <Pill name="SQL Server" size="small" />
                  <Pill name="Firestore" size="small" />
                </div>
              </div>

              {/* DevOps & Outils */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.Docker className="size-5 text-red-500" />
                  DevOps & Outils
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['docker', 'githubactions', 'git', 'github', 'cypress', 'vitest', 'figma'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                  <Pill name="Kubernetes" size="small" />
                </div>
              </div>

              {/* Intégrations */}
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Icons.Paypal className="size-5 text-cyan-500" />
                  Intégrations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['restfulapis', 'jwt', 'paypalapi', 'stripeapi'].map((tech) => {
                    const technology = getTechnology(tech);
                    if (!technology) return null;
                    return (
                      <Pill
                        key={tech}
                        name={technology.name}
                        url={technology.url}
                        icon={technology.icon}
                        size="small"
                      />
                    );
                  })}
                  <Pill name="Microservices" size="small" />
                </div>
              </div>
            </div>
          </section>

          {/* Expériences */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Expériences
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Bénévole – Développeur Web
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Comité TI
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      La Remise, Coopérative de Solidarité
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">Depuis 2024</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Support informatique pour les ateliers publics de vélo, bois, couture et outils, contribuant à la
                  mission de solidarité, de résilience et de développement durable de la coopérative.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Maintenance et amélioration du site web WordPress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Réalisation autonome d'application Laravel Full-stack en ReactJS, intégrés à l'infrastructure cloud existante</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Développeur Web - Frontend
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Plateforme Numérique Anekdote
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2021-2024</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Développement du frontend d'un portail web pour la gestion et les achats, intégré aux méthodes
                  d'affaires pour la vente aux particuliers.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Développement avec ASP.Net Core</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Conception de base de données avec Entity Framework et SQL Server</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation académique */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Formation académique
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      AEC - Développement de sites web transactionnels
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Collège Ahuntsic</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded ml-2">2026</span>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      React JS - Avancé
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Collège de Maisonneuve</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded ml-2">2024</span>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Certificat en Informatique appliquée
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Université de Montréal</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded ml-2">2021</span>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Baccalauréat en Physique
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Université de Montréal</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded ml-2">2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Intérêts et loisirs */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Intérêts et loisirs
            </h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm flex items-center gap-3">
                <span className="text-3xl">🎲</span>
                <span className="font-medium text-gray-900 dark:text-white">Activité ludique sur table</span>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm flex items-center gap-3">
                <span className="text-3xl">🚲</span>
                <span className="font-medium text-gray-900 dark:text-white">Entretien et reconditionnement de vélo</span>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm flex items-center gap-3">
                <span className="text-3xl">🥾</span>
                <span className="font-medium text-gray-900 dark:text-white">Randonnée pédestre</span>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
