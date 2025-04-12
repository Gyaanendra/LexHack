"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Bookmark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// Define FAQ interfaces
interface FAQ {
  question: string;
  answer: string;
  popular?: boolean;
}

interface FAQCategories {
  [key: string]: FAQ[];
}

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");

  // Group FAQs into categories
  const faqCategories: FAQCategories = {
    general: [
      {
        question: "Who can participate in LEXHACK 2025?",
        answer:
          "LEXHACK 2025 is open to students from various disciplines. Each team must include at least one B.Tech student and one Law student to ensure a balanced skillset across disciplines. Teams can have up to 5 members.",
        popular: true,
      },
      {
        question: "What kind of projects are expected?",
        answer:
          "Projects should address challenges at the intersection of law and technology. This could include AI-powered legal assistants, blockchain-based compliance tools, cybersecurity frameworks, fintech solutions, privacy-enhancing technologies, or access to justice platforms.",
      },
      {
        question: "Can I participate remotely?",
        answer:
          "Yes, LEXHACK 2025 offers a hybrid format. Remote participants will have access to all workshops, mentorship sessions, and judging via our virtual platform. We encourage at least one team member to be present for the final pitch if possible.",
      },
    ],
    technical: [
      {
        question: "Do I need coding experience to participate?",
        answer:
          "Not every team member needs coding experience. Teams should have a mix of technical and legal expertise. The interdisciplinary nature of the hackathon means that legal analysis, business strategy, and design thinking are equally valuable skills.",
        popular: true,
      },
      {
        question: "What resources will be provided?",
        answer:
          "Participants will have access to mentors, workshops, legal APIs, databases, and technical support throughout the hackathon. Meals and refreshments will also be provided during the 24-hour event.",
      },
    ],
    logistics: [
      {
        question: "What is the registration fee?",
        answer:
          "The registration fee is ₹250 per team, regardless of the number of members (up to the maximum of 5). This fee covers participation, meals, workshops, and event materials.",
      },
      {
        question: "How are winners selected?",
        answer:
          "Projects will be judged on technical innovation, legal soundness, business viability, and presentation quality. Our panel of judges includes legal technology experts, practicing attorneys, technologists, and investors who will evaluate all aspects of your solution.",
      },
      {
        question:
          "Who owns the intellectual property created during LEXHACK 2025?",
        answer:
          "Teams retain ownership of their intellectual property. LEXHACK and its sponsors may request a non-exclusive license to showcase your project for promotional purposes, but will not claim ownership rights to your innovations.",
        popular: true,
      },
    ],
  };

  // Filter FAQs based on search query
  const getFilteredFaqs = () => {
    if (!searchQuery.trim()) return null;

    const results: FAQ[] = [];
    Object.values(faqCategories).forEach((category) => {
      category.forEach((faq) => {
        if (
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push(faq);
        }
      });
    });

    return results;
  };

  const filteredFaqs = getFilteredFaqs();

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Have questions about LEXHACK 2025? Find answers to common inquiries
            below.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {filteredFaqs ? (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Search Results ({filteredFaqs.length})
              </h3>

              <AnimatePresence>
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={`search-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AccordionItem
                        value={`search-item-${index}`}
                        className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left font-medium group">
                          <div className="flex items-center">
                            {faq.popular && (
                              <span className="mr-2 px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                                Popular
                              </span>
                            )}
                            <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2 text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </AnimatePresence>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Clear search and show all FAQs
                </button>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="general" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="logistics">Logistics</TabsTrigger>
              </TabsList>

              {Object.entries(faqCategories).map(([category, faqs]) => (
                <TabsContent key={category} value={category}>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-sm"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left font-medium group">
                            <div className="flex items-center">
                              {faq.popular && (
                                <span className="mr-2 px-2 py-0.5 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                                  Popular
                                </span>
                              )}
                              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 pt-2 text-slate-600 dark:text-slate-300 animate-in fade-in-10 slide-in-from-top-5">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-start">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg mr-4">
                <Bookmark className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Still have questions?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Contact our team directly and we'll get back to you as soon as
                  possible.
                </p>
                <a
                  href="mailto:clti.sol@bennett.edu.in"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  clti.sol@bennett.edu.in
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
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
            <Link
              href="https://unstop.com/o/lKoBsy6?utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#78FDFF] via-[#FFB2ED] to-[#FFEFAD] hover:opacity-90 text-slate-800 shadow-lg shadow-[#78FDFF]/20 hover:shadow-[#78FDFF]/40 transition-all duration-300 w-60 h-12">
                Register Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
