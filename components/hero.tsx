"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Scale, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 * 12 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-slate-500"></div>
          ))}
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#754E1A]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#754E1A]/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-[#2c1e0a] rounded-full border border-[#754E1A] dark:border-[#473217]">
              <span className="text-sm font-medium text-[#754E1A] dark:text-[#b89b6e]">
                April 17-18, 2025 • 24-Hour Hackathon
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-[#754E1A] dark:text-white"
          >
            LEXHACK 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto"
          >
            The Flagship Event of the Center for Law, Technology & Innovation
            (CLTI)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl italic text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            Where Law Meets Technology. Where Innovation Drives Change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#754E1A] hover:bg-[#5e3f15] text-white shadow-lg transition-all duration-300 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#3f2a0e] flex items-center justify-center mb-4 group-hover:bg-[#754E1A] transition-colors duration-300">
              <Code className="h-6 w-6 text-[#754E1A] dark:text-[#b89b6e] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Build</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Develop innovative legal-tech solutions
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#3f2a0e] flex items-center justify-center mb-4 group-hover:bg-[#754E1A] transition-colors duration-300">
              <Shield className="h-6 w-6 text-[#754E1A] dark:text-[#b89b6e] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Defend</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Address legal and regulatory challenges
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#3f2a0e] flex items-center justify-center mb-4 group-hover:bg-[#754E1A] transition-colors duration-300">
              <Scale className="h-6 w-6 text-[#754E1A] dark:text-[#b89b6e] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pitch</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Present your solutions to industry experts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
