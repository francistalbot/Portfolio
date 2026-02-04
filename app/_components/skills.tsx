const skills = () => {
    return (
      <section id="skills" className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-card rounded-lg border border-border transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
            <h3 className="text-lg font-mono font-semibold mb-3 text-bark-dark dark:text-foreground">
              Développement Web
            </h3>
            <p className="text-sm font-serif text-bark dark:text-parchment">
              Création d'applications web avec React, Next.js et TypeScript.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-card rounded-lg border border-border transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
            <h3 className="text-lg font-mono font-semibold mb-3 text-bark-dark dark:text-foreground">
              UI/UX Design
            </h3>
            <p className="text-sm font-serif text-bark dark:text-parchment">
              Conception d'interfaces utilisateur modernes et intuitives.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-card rounded-lg border border-border transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
            <h3 className="text-lg font-mono font-semibold mb-3 text-bark-dark dark:text-foreground">
              Optimisation
            </h3>
            <p className="text-sm font-serif text-bark dark:text-parchment">
              Performance et optimisation pour une expérience utilisateur
              optimale.
            </p>
          </div>
        </div>
    </section>);
}
export default skills