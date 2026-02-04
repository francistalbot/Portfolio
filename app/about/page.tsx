import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import Link from "next/dist/client/link";
import { Pill } from "@/components/ui/pill";
import { getTechnology } from "@/lib/technologies";

export default function About() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12">
          <p className="text-xl text-bark dark:text-parchment mb-4">
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
            <h2 className="text-2xl font-bold mb-4 text-bark-dark dark:text-foreground">
              Profil
            </h2>
            <p className="text-bark dark:text-parchment">
              Fort de trois années d'expérience en développement web frontend et engagé bénévolement en
              tant que développeur Full-stack, j'allie une formation universitaire en physique et en informatique
              à des formations spécialisées complémentaires et modernes.<br/> Je poursuis activement mon
              perfectionnement professionnel afin de contribuer à des projets à impact social qui favorisent
              l'accessibilité, la solidarité et les initiatives durables.
            </p>
            <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <a 
                href="tel:438-939-7735" 
                className="group bg-card dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border "
              >
                <span className="text-xs text-wood dark:text-sage block mb-2">Téléphone</span>
                <p className="font-semibold text-bark-dark dark:text-foreground group-hover:text-moss dark:group-hover:text-terminal-green transition-colors duration-300">
                  438-939-7735
                </p>
              </a>
              
              <a 
                href="mailto:francis@frtalbot.dev" 
                className="group bg-card dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border "
              >
                <span className="text-xs text-wood dark:text-sage block mb-2">Adresse Email</span>
                <p className="font-semibold text-bark-dark dark:text-foreground group-hover:text-moss dark:group-hover:text-terminal-green transition-colors duration-300">
                  francis@frtalbot.dev
                </p>
              </a>
              
              <div className="group bg-card dark:bg-card rounded-lg p-6 shadow-sm  ">
                <span className="text-xs text-wood dark:text-sage block mb-2">Ville</span>
                <p className="font-semibold text-bark-dark dark:text-foreground  ">
                  Montréal, QC
                </p>
              </div>
            </div>
          </section>

          {/* Compétences et habiletés */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-bark-dark dark:text-foreground">
              Compétences et habiletés
            </h2>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Technologies - Frontend */}
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-bark-dark dark:text-foreground flex items-center gap-2">
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
            <h2 className="text-2xl font-bold mb-4 text-bark-dark dark:text-foreground">
              Expériences
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-bark-dark dark:text-foreground">
                      Bénévole – Développeur Web
                    </h3>
                    <p className="text-sm text-wood dark:text-sage mb-1">
                      Comité TI
                    </p>
                    <p className="text-sm text-moss dark:text-terminal-green">
                      La Remise, Coopérative de Solidarité
                    </p>
                  </div>
                  <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-moss/20 dark:bg-terminal-green/20 px-2 py-1 rounded">Depuis 2024</span>
                </div>
                <p className="text-sm text-bark dark:text-parchment mb-3">
                  Support informatique pour les ateliers publics de vélo, bois, couture et outils, contribuant à la
                  mission de solidarité, de résilience et de développement durable de la coopérative.
                </p>
                <ul className="space-y-1.5 text-sm text-bark dark:text-parchment">
                  <li className="flex items-start gap-2">
                    <span className="text-moss mt-1">•</span>
                    <span>Maintenance et amélioration du site web WordPress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-moss mt-1">•</span>
                    <span>Réalisation autonome d'application Laravel Full-stack en ReactJS, intégrés à l'infrastructure cloud existante</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-bark-dark dark:text-foreground">
                      Développeur Web - Frontend
                    </h3>
                    <p className="text-sm text-moss dark:text-terminal-green">
                      Plateforme Numérique Anekdote
                    </p>
                  </div>
                  <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-wood/20 dark:bg-wood/20 px-2 py-1 rounded">2021-2024</span>
                </div>
                <p className="text-sm text-bark dark:text-parchment mb-3">
                  Développement du frontend d'un portail web pour la gestion et les achats, intégré aux méthodes
                  d'affaires pour la vente aux particuliers.
                </p>
                <ul className="space-y-1.5 text-sm text-bark dark:text-parchment">
                  <li className="flex items-start gap-2">
                    <span className="text-moss mt-1">•</span>
                    <span>Développement avec ASP.Net Core</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-moss mt-1">•</span>
                    <span>Conception de base de données avec Entity Framework et SQL Server</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation académique */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-bark-dark dark:text-foreground">
              Formation académique
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-bark-dark dark:text-foreground">
                      AEC - Développement de sites web transactionnels
                    </h3>
                    <p className="text-sm text-bark dark:text-parchment mt-1">Collège Ahuntsic</p>
                  </div>
                  <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-moss/20 dark:bg-terminal-green/20 px-2 py-1 rounded ml-2">2026</span>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-bark-dark dark:text-foreground">
                      React JS - Avancé
                    </h3>
                    <p className="text-sm text-bark dark:text-parchment mt-1">Collège de Maisonneuve</p>
                  </div>
  <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-moss/20 dark:bg-terminal-green/20 px-2 py-1 rounded ml-2">2024</span>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-bark-dark dark:text-foreground">
                      Certificat en Informatique appliquée
                    </h3>
                    <p className="text-sm text-bark dark:text-parchment mt-1">Université de Montréal</p>
                  </div>
 <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-moss/20 dark:bg-terminal-green/20 px-2 py-1 rounded ml-2">2021</span>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-bark-dark dark:text-foreground">
                      Baccalauréat en Physique
                    </h3>
                    <p className="text-sm text-bark dark:text-parchment mt-1">Université de Montréal</p>
                  </div>
 <span className="text-xs text-wood dark:text-sage whitespace-nowrap bg-moss/20 dark:bg-terminal-green/20 px-2 py-1 rounded ml-2">2015</span>
                </div>
              </div>
            </div>
          </section>

          {/* Intérêts et loisirs */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-bark-dark dark:text-foreground">
              Intérêts et loisirs
            </h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border flex items-center gap-3">
                <span className="text-3xl">🎲</span>
                <span className="font-medium text-bark-dark dark:text-foreground">Activité ludique sur table</span>
              </div>
              
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border flex items-center gap-3">
                <span className="text-3xl">🚲</span>
                <span className="font-medium text-bark-dark dark:text-foreground">Entretien et reconditionnement de vélo</span>
              </div>
              
              <div className="bg-card dark:bg-card rounded-lg p-6 shadow-sm border border-border flex items-center gap-3">
                <span className="text-3xl">🥾</span>
                <span className="font-medium text-bark-dark dark:text-foreground">Randonnée pédestre</span>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
