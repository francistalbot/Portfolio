import Hero from "@/app/_components/hero";
import Projects from "@/app/_components/projects";
import About from "./_components/about";
import Contact from "./_components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero/>
        <Projects/>
        <About/>
        
      </main>
    </div>
  );
}
