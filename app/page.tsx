import Hero from "@/app/_components/hero";
import Projects from "@/app/_components/projects";
import About from "./_components/about";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main id="home" className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <Hero/>
        <Separator className="my-10" />
        <Projects/>
        <Separator className="my-10" />
        <About/>
        
      </main>
    </div>
  );
}
