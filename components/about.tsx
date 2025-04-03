"use client"

import { motion } from "framer-motion"
import { Gavel, Cpu, Scale } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-blue-200 dark:via-pink-200 dark:to-yellow-200 z-0" />

      {/* Shooting and Scattering Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(35)].map((_, i) => {
          // Randomized values for scattered motion
          const delay = Math.random() * 3; // Reduce delay (faster intensity)
          const duration = Math.random() * 2.5 + 1.5; // Faster speed (1.5s - 4s)
          const startY = Math.random() * window.innerHeight; // Random start Y position
          const endY = startY + (Math.random() * 500 - 250); // More scattering (-250px to +250px)
          const endX = window.innerWidth + 100; // Ensure icons go beyond screen width
          const Icon = i % 3 === 0 ? Gavel : i % 3 === 1 ? Cpu : Scale; // Cycle through icons
          const color = i % 3 === 0 ? "text-purple-500 dark:text-pink-400"
                       : i % 3 === 1 ? "text-blue-500 dark:text-green-400"
                       : "text-red-500 dark:text-yellow-400";

          return (
            <motion.div
              key={i}
              initial={{ x: -100, y: startY, opacity: 1 }} // Start from left edge at random Y position
              animate={{ x: endX, y: endY, opacity: 1 }} // Move right while scattering randomly in Y direction
              transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }} // Smooth shooting effect
              className="absolute"
            >
              <Icon className={`h-10 w-10 ${color}`} /> {/* Increased size */}
            </motion.div>
          );
        })}
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              About
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-12"
          >
            <h3 className="text-xl font-semibold mb-4">About CLTI</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              The Center for Law, Technology & Innovation (CLTI) is dedicated to bridging the gap between law,
              technology, and policy in an era of rapid digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4">What is LEXHACK 2025?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              LEXHACK 2025 is an interdisciplinary hackathon that challenges participants to develop, defend, and present
              groundbreaking technological solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
