import { Icons } from "@/components/ui/icons";
import { Icon } from "lucide-react";
import Link from "next/link";
const hero = () => {
    return (
        <section id="hero" className="text-center">
{/* Hero Section */}
          <div className="tracking-tight mb-3">
          <p className="italic text-gray-600 dark:text-gray-400 ">
            Je suis
          </p>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Francis Talbot
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Développeur full-stack 
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionné par la structuration d'applications maintenables et scalables, je conçois des architectures backend robustes et 
            des expériences utilisateur fluides. 
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Icons.Download className="size-4 inline-block mr-2" />
              Télécharger mon CV
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Me contacter
            </Link>
          </div>
        </section>
    )
}
export default hero;