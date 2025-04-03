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
import Spline from "@splinetool/react-spline";
import { useMemo } from "react";

export default function Hero() {
  // Define animations and feature cards as constants to avoid recreation on each render
  const animations = useMemo(
    () => ({
      fadeIn: (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
      }),
      scale: {
        initial: { scale: 1 },
        animate: { scale: 1.5 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
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

  // Background icons configuration
  const backgroundIcons = useMemo(
    () => [
      {
        Icon: Code,
        position: { top: "15%", left: "10%" },
        size: 24,
        delay: 0,
        duration: 20,
      },
      {
        Icon: Shield,
        position: { top: "25%", right: "15%" },
        size: 28,
        delay: 0.5,
        duration: 25,
      },
      {
        Icon: PresentationChart,
        position: { bottom: "20%", left: "20%" },
        size: 32,
        delay: 1,
        duration: 22,
      },
      {
        Icon: Lightbulb,
        position: { top: "40%", left: "85%" },
        size: 26,
        delay: 1.5,
        duration: 18,
      },
      {
        Icon: Users,
        position: { bottom: "30%", right: "25%" },
        size: 30,
        delay: 2,
        duration: 24,
      },
      {
        Icon: Laptop,
        position: { top: "65%", left: "15%" },
        size: 28,
        delay: 2.5,
        duration: 19,
      },
      {
        Icon: Gavel,
        position: { top: "10%", left: "60%" },
        size: 34,
        delay: 3,
        duration: 23,
      },
      {
        Icon: Cpu,
        position: { bottom: "15%", right: "10%" },
        size: 22,
        delay: 3.5,
        duration: 21,
      },
      {
        Icon: Scale,
        position: { top: "50%", left: "40%" },
        size: 36,
        delay: 4,
        duration: 26,
      },
    ],
    []
  );

  // Animation for floating effect
  const floatAnimation = {
    y: ["-10px", "10px", "-10px"],
    opacity: [0.3, 0.6, 0.3],
  };

  return (
    <section className="relative overflow-hidden py-32 md:py-48 min-h-screen flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-70 dark:opacity-50">
        <motion.div className="relative w-full h-full" {...animations.scale}>
          <Spline
            scene="https://draft.spline.design/p3WmGKDAzffbsmJ8/scene.splinecode"
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              top: "-20%",
              left: "-15%",
              width: "130%",
              height: "140%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.8)",
            }}
          />
        </motion.div>
      </div>

      {/* Background Icons Layer */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {backgroundIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              ...item.position,
            }}
            initial={{ opacity: 0 }}
            animate={{
              ...floatAnimation,
              transition: {
                duration: item.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: item.delay,
                ease: "easeInOut",
              },
            }}
          >
            <item.Icon
              size={item.size}
              className="text-slate-800/10 dark:text-slate-200/10"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          {/* Event Badge */}
          <motion.div {...animations.fadeIn(0)}>
            <div className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-[#38290e] rounded-full border border-[#000000] dark:border-[#b89b6e] shadow-sm">
              <span className="text-sm font-medium text-[#000000] dark:text-[#1a1714]">
                April 17-18, 2025 • 24-Hour Hackathon
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            {...animations.fadeIn(0.1)}
            className="text-5xl md:text-6xl font-bold mb-6 text-[#000000] dark:text-[#b89b6e]"
          >
            LEXHACK 2025
          </motion.h1>

          {/* Subheadings */}
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

          {/* CTA Buttons */}
          <motion.div
            {...animations.fadeIn(0.4)}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-[#000000] hover:bg-[#5e3f15] text-white shadow-lg transition-all duration-300 group
                        dark:bg-[#b89b6e] dark:hover:bg-[#a6895d] dark:text-slate-900"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 hover:bg-slate-100 text-slate-700
                         dark:border-[#b89b6e] dark:hover:bg-[#38290e] dark:text-[#b89b6e]"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          {...animations.fadeIn(0.5)}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
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
