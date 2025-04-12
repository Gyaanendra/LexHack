"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Shield,
  PresentationIcon as PresentationChart,
  Lightbulb,
  Users,
  Laptop,
  Gavel,
  Cpu,
  Scale,
} from "lucide-react";
import { useMemo } from "react";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
// Removing the diagonal wavy background import
// import { DiagonalWavyBackground } from "@/components/ui/diagonal-wavy-background";

export default function Hero() {
  const animations = useMemo(
    () => ({
      fadeIn: (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
      }),
    }),
    []
  );

  const featureCards = useMemo(
    () => [
      {
        icon: Code,
        title: "Build",
        description: "Develop innovative legal-tech solutions",
      },
      {
        icon: Shield,
        title: "Defend",
        description: "Address legal and regulatory challenges",
      },
      {
        icon: Scale,
        title: "Pitch",
        description: "Present your solutions to industry experts",
      },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden py-32 md:py-48 min-h-screen flex items-center">
      {/* Wavy Background - repositioned to align with LEXHACK title */}
      <WavyBackground
        containerClassName="absolute inset-0 -translate-y-36 z-0"
        className="w-full h-full"
        colors={["#78FDFF", "#FFB2ED", "#FFEFAD"]}
        waveWidth={80}
        backgroundFill="rgba(255, 255, 255, 0.8)"
        blur={10}
        speed="slow"
        waveOpacity={0.3}
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <motion.div {...animations.fadeIn(0)}>
            <div className="inline-block mb-6 px-4 py-1.5 bg-slate-100 dark:bg-[#38290e] rounded-full border border-[#000000] dark:border-[#b89b6e] shadow-sm">
              <span className="text-sm font-medium text-[#000000] dark:text-[#1a1714]">
                April 17-18, 2025 • 24-Hour Hackathon
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...animations.fadeIn(0.1)}
            className="text-5xl md:text-6xl font-bold mb-6 text-[#000000] dark:text-[#b89b6e]"
          >
            LEXHACK 2025
          </motion.h1>

          <motion.p
            {...animations.fadeIn(0.2)}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto"
          >
            The Flagship Event of the Center for Law, Technology & Innovation
            (CLTI)
          </motion.p>

          <motion.p
            {...animations.fadeIn(0.3)}
            className="text-xl md:text-2xl italic text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto"
          >
            Where Law Meets Technology. Where Innovation Drives Change.
          </motion.p>

          <motion.div
            {...animations.fadeIn(0.4)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="https://unstop.com/o/lKoBsy6?utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#78FDFF] via-[#FFB2ED] to-[#FFEFAD] hover:opacity-90 text-slate-800 shadow-lg transition-all duration-300 group"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...animations.fadeIn(0.5)}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#38290e] flex items-center justify-center mb-4 group-hover:bg-[#000000] transition-colors duration-300">
                <card.icon className="h-6 w-6 text-[#000000] dark:text-[#b89b6e] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-slate-200">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
