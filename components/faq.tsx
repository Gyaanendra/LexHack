"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Faq() {
  const faqs = [
    {
      question: "Who can participate in LEXHACK 2025?",
      answer:
        "LEXHACK 2025 is open to students from various disciplines. Each team must include at least one B.Tech student and one Law student to ensure a balanced skillset across disciplines. Teams can have up to 5 members.",
    },
    {
      question: "What kind of projects are expected?",
      answer:
        "Projects should address challenges at the intersection of law and technology. This could include AI-powered legal assistants, blockchain-based compliance tools, cybersecurity frameworks, fintech solutions, privacy-enhancing technologies, or access to justice platforms.",
    },
    {
      question: "Do I need coding experience to participate?",
      answer:
        "Not every team member needs coding experience. Teams should have a mix of technical and legal expertise. The interdisciplinary nature of the hackathon means that legal analysis, business strategy, and design thinking are equally valuable skills.",
    },
    {
      question: "What resources will be provided?",
      answer:
        "Participants will have access to mentors, workshops, legal APIs, databases, and technical support throughout the hackathon. Meals and refreshments will also be provided during the 24-hour event.",
    },
    {
      question: "Can I participate remotely?",
      answer:
        "Yes, LEXHACK 2025 offers a hybrid format. Remote participants will have access to all workshops, mentorship sessions, and judging via our virtual platform. We encourage at least one team member to be present for the final pitch if possible.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The registration fee is ₹150 per team, regardless of the number of members (up to the maximum of 5). This fee covers participation, meals, workshops, and event materials.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Projects will be judged on technical innovation, legal soundness, business viability, and presentation quality. Our panel of judges includes legal technology experts, practicing attorneys, technologists, and investors who will evaluate all aspects of your solution.",
    },
    {
      question: "Who owns the intellectual property created during LEXHACK 2025?",
      answer:
        "Teams retain ownership of their intellectual property. LEXHACK and its sponsors may request a non-exclusive license to showcase your project for promotional purposes, but will not claim ownership rights to your innovations.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have questions about LEXHACK 2025? Find answers to common inquiries below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 dark:text-slate-300 mb-6">Still have questions? Contact us directly.</p>
            <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-100 dark:border-indigo-800">
              <a href="mailto:info@lexhack.com" className="text-indigo-600 dark:text-indigo-400 font-medium">
                info@lexhack.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Are You Ready to Shape the Future of Law & Technology?
            </h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 px-8 py-6 text-lg"
            >
              Register for LEXHACK 2025
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

