"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Briefcase,
  GraduationCap,
  Calendar,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Why Should You Participate?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            LEXHACK 2025 offers unique opportunities for learning, networking,
            and recognition in the legal-tech space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                <Trophy className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-300">
                Prizes & Funding
              </h3>

              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Win exciting prizes and awards</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Potential seed funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Take your idea to the next level</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Recognition in the legal-tech community</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 rounded-xl p-8 border border-purple-100 dark:border-purple-800 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                <Briefcase className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-300">
                Internship & Networking
              </h3>

              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Connect with leading law firms</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Meet technology firms and startups</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Engage with regulatory bodies</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Potential internship opportunities</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-300">
                Hands-on Learning
              </h3>

              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Practical, immersive experience</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Intersection of law, tech, and business</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Beyond theoretical case studies</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Real-world entrepreneurship skills</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Event Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h4 className="font-semibold mb-2">Venue</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Bennett University, Greater Noida
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Trophy className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h4 className="font-semibold mb-2">Registration Fee</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                ₹250 per team
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h4 className="font-semibold mb-2">Team Composition</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Up to 5 members (must include at least one B.Tech student and
                one Law student)
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">
              ⏳ Limited Slots Available! Early registrations are recommended
              due to the high demand for participation.
            </p>
            <p className="mt-6 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Innovate. Defend. Disrupt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
