"use client"

import { motion } from "framer-motion"
import { Gavel, Cpu, ShieldCheck, Scale, Users, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
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
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 mb-12"
          >
            <h3 className="text-xl font-semibold mb-4">About CLTI</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              The Center for Law, Technology & Innovation (CLTI) is dedicated to bridging the gap between law,
              technology, and policy in an era of rapid digital transformation. Covering domains such as artificial
              intelligence, blockchain, cybersecurity, fintech, and data privacy, CLTI equips students with the
              expertise to address the legal, ethical, and regulatory challenges shaping the digital economy.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Through research, experiential learning, and interdisciplinary collaborations, we empower future leaders
              to navigate and influence the evolving landscape of law and technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4">What is LEXHACK 2025?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              LEXHACK 2025 is a one-of-a-kind interdisciplinary hackathon that challenges participants to develop,
              defend, and present groundbreaking technological solutions while addressing the legal, compliance, and
              regulatory implications associated with them.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Unlike conventional hackathons that focus solely on technology, LEXHACK 2025 integrates law, policy, and
              business strategy into the innovation process. Over an intense 24-hour competition, teams will
              conceptualize, build, and pitch tech-driven solutions that are not only innovative and scalable but also
              legally sound and commercially viable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Gavel className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Legal Innovation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Reimagine legal services delivery</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Leverage AI for legal challenges</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <ShieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Protect sensitive legal data</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Scale className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Access to Justice</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Bridge the justice gap with tech</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Cross-disciplinary teamwork</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
              <Award className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Recognition</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Showcase your legal-tech skills</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

