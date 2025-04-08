import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import Timeline from "@/components/timeline";
import Prizes from "@/components/prizes";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Image from "next/image"; // Import the Image component
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Replace the LH and LEXHACK 2025 with an Image component */}
            <Image
              src="/logo.png" // Path to your logo in the public folder
              alt="LEXHACK 2025 Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed
              className="object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-14">
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-[#78FDFF] dark:text-slate-300 dark:hover:text-[#ABFF8C] transition-colors"
            >
              About
            </a>
            <a
              href="#timeline"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              Timeline
            </a>
            <a
              href="#prizes"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              Why Participate
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="https://unstop.com/o/lKoBsy6?utm_medium=Share&utm_source=shortUrl" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#78FDFF] via-[#FFB2ED] to-[#FFEFAD] hover:opacity-90 text-slate-800 shadow-lg shadow-[#78FDFF]/20 hover:shadow-[#78FDFF]/40 transition-all duration-300">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        {/* <Features /> */}
        <Timeline />
        <Prizes />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
