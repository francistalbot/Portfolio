import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const hero = () => {
    return (
        <section id="hero" className="max-w-[var(--width-text)] mx-auto px-12 py-16 relative bg-white dark:bg-card border border-border rounded-xl shadow-[0_4px_24px_rgba(44,36,22,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:top-16 before:left-6 before:w-1 before:h-[120px] before:bg-gradient-to-b before:from-moss before:to-terminal-green before:rounded before:animate-[slideDown_0.8s_ease-out]">
          {/* Hero Section */}
          <div className="text-center tracking-tight mb-8">
            <h1 className="text-4xl font-mono font-semibold text-bark-dark dark:text-foreground mb-3 animate-[fadeInUp_0.6s_ease-out]">
              Francis Talbot
            </h1>
            <div className="inline-block mb-6">
              <h2 className="text-base font-mono text-moss dark:text-sage font-medium animate-[fadeInUp_0.6s_ease-out_0.1s_backwards]">
                Développeur full-stack
              </h2>
              <span className="block w-full h-[2px] bg-terminal-green animate-expand-line"></span>
            </div>
          </div>
          <p className="text-lg font-serif text-wood dark:text-parchment mb-12 leading-[1.8] max-w-[600px] mx-auto text-center animate-[fadeInUp_0.6s_ease-out_0.2s_backwards]">
            Passionné par la structuration d'applications maintenables et scalables, je conçois des architectures backend robustes et 
            des expériences utilisateur fluides. 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/about">
                <Icons.Download className="size-4" />
                Télécharger mon CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Me contacter
              </Link>
            </Button>
          </div>
        </section>
    )
}
export default hero;