"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function Timeline() {
  const timelineItems = [
    {
      date: "June 15, 2025",
      time: "9:00 AM - 12:00 PM",
      title: "Opening Ceremony",
      description: "Welcome address, keynote speakers, and team formation.",
    },
    {
      date: "June 15, 2025",
      time: "1:00 PM - 6:00 PM",
      title: "Hacking Begins",
      description: "Teams start working on their projects with mentor support.",
    },
    {
      date: "June 16, 2025",
      time: "9:00 AM - 10:00 AM",
      title: "Workshop: Legal API Integration",
      description: "Learn how to integrate legal databases and APIs into your project.",
    },
    {
      date: "June 16, 2025",
      time: "2:00 PM - 3:00 PM",
      title: "Panel: Ethics in Legal Tech",
      description: "Industry experts discuss ethical considerations in legal technology.",
    },
    {
      date: "June 16, 2025",
      time: "7:00 PM - 9:00 PM",
      title: "Networking Dinner",
      description: "Connect with judges, mentors, and fellow participants.",
    },
    {
      date: "June 17, 2025",
      time: "9:00 AM - 12:00 PM",
      title: "Final Hacking Hours",
      description: "Last chance to refine projects before submission deadline.",
    },
    {
      date: "June 17, 2025",
      time: "1:00 PM - 4:00 PM",
      title: "Pitch Presentations",
      description: "Teams present their solutions to the judges and audience.",
    },
    {
      date: "June 17, 2025",
      time: "5:00 PM - 6:30 PM",
      title: "Awards Ceremony",
      description: "Winners announced and prizes awarded.",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Event Timeline
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Three days of innovation, collaboration, and legal-tech exploration. Here's what to expect during LexHack.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 transform md:-translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-600 dark:border-purple-600 transform md:translate-x-1/2 flex items-center justify-center">
                {index % 2 === 0 ? (
                  <Calendar className="h-3 w-3 text-indigo-600 dark:text-purple-400" />
                ) : (
                  <Clock className="h-3 w-3 text-purple-600 dark:text-indigo-400" />
                )}
              </div>

              <div
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 ${
                  index % 2 === 0 ? "md:rounded-r-none" : "md:rounded-l-none"
                }`}
              >
                <div className="flex items-center mb-3 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

