"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Judges() {
  const judges = [
    {
      name: "Alexandra Chen",
      role: "Chief Legal Innovation Officer",
      company: "Global Law Partners",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former Supreme Court clerk with expertise in legal technology and AI ethics.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Founder & CEO",
      company: "LegalTech Ventures",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Serial entrepreneur who has founded three successful legal-tech startups.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Dr. Sophia Rodriguez",
      role: "Professor of Law & Computer Science",
      company: "Stanford University",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading researcher in computational law and legal AI systems.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jonathan Lee",
      role: "Partner",
      company: "Tech Law Associates",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in intellectual property and technology law for startups.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "CTO",
      company: "JusticeTech Solutions",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former Google engineer focused on access to justice technologies.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Wilson",
      role: "Managing Partner",
      company: "Legal Innovation Fund",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Venture capitalist with a portfolio of over 20 legal-tech companies.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="judges" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Meet Our Judges
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our distinguished panel of judges brings together expertise from law, technology, academia, and venture
            capital to evaluate your innovations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={judge.image || "/placeholder.svg"}
                  alt={judge.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex gap-3">
                      {judge.social.linkedin && (
                        <a
                          href={judge.social.linkedin}
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {judge.social.twitter && (
                        <a
                          href={judge.social.twitter}
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {judge.social.github && (
                        <a
                          href={judge.social.github}
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{judge.role}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{judge.company}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{judge.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

