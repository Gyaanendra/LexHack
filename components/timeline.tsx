"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Code,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Tag,
  Star,
  Scale,
  Gavel,
  FileText,
  Briefcase,
  Server,
  Database,
  Cpu,
  Laptop,
  MonitorSmartphone,
  Network,
  Lock,
  FileCode,
  Scroll,
  BookOpenCheck,
} from "lucide-react";
// Define types for timeline items
interface TimelineItem {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  tags: string[];
  speakers: string[];
  highlights: string[];
  importance: "high" | "medium" | "critical";
  timezone?: string;
}

// Define component props if any (currently none, but added for future extensibility)
interface TimelineProps {}

// Type for expanded items state
type ExpandedItems = Record<number, boolean>;

export default function Timeline({}: TimelineProps) {
  const timelineItems: TimelineItem[] = [
    {
      date: "April 17, 2025",
      time: "06:00 PM - 11:00 AM (next day)",
      title: "BUILD - Overnight Hackathon",
      description:
        "Unleash Innovation: Teams will brainstorm, prototype, and develop groundbreaking tech solutions—think AI-driven legal assistants, blockchain-powered compliance tools and next-gen AI frameworks.",
      location: "N & P block",
      tags: ["Hackathon", "Development", "Innovation"],
      speakers: [],
      highlights: ["Overnight coding session", "Mentors available throughout"],
      importance: "high",
      timezone: "IST",
    },
    {
      date: "April 18, 2025",
      time: "01:00 PM - 04:00 PM",
      title: "DEFEND : Courtroom Battle",
      description:
        "Face the Law: Your innovation will be tested against IP rights, data privacy laws, compliance challenges, and ethical dilemmas. Can you prove your idea is legally airtight?",
      location: "Moot Courtroom",
      tags: ["Legal Defense", "Compliance", "Ethics"],
      speakers: [],
      highlights: ["Legal experts as judges", "Real-world scenario testing"],
      importance: "high",
      timezone: "IST",
    },
    {
      date: "April 18, 2025",
      time: "04:30 PM - 07:00 PM",
      title: "PITCH : Shark Tank style funding round",
      description:
        "In a high-pressure investor-style showdown, teams will pitch their projects before top industry experts, legal heavyweights, and venture capitalists.",
      location: "Bennett Hatchery",
      tags: ["Pitch", "Funding", "Presentation"],
      speakers: [],
      highlights: ["Venture capitalists present", "Investment opportunities"],
      importance: "high",
      timezone: "IST",
    },
    {
      date: "April 18, 2025",
      time: "08:00 PM - 11:00 PM",
      title: "RELAX : Movie Night & Surprises",
      description:
        "Unwind after the intense competition with a special movie screening and other fun surprises to celebrate your hard work and innovation.",
      location: "Lecture Hall",
      tags: ["Entertainment", "Networking", "Celebration"],
      speakers: [],
      highlights: ["Movie screening", "Surprise activities", "Refreshments"],
      importance: "medium",
      timezone: "IST",
    },
  ];

  const timelineRef = useRef<HTMLElement>(null);
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  const [activeDay, setActiveDay] = useState<string>("All Days");
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"],
  });

  // Create a spring animation for the timeline progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Group items by date for day filtering
  const days = ["All Days", ...new Set(timelineItems.map((item) => item.date))];

  // Filter timeline items based on selected day
  const filteredItems =
    activeDay === "All Days"
      ? timelineItems
      : timelineItems.filter((item) => item.date === activeDay);

  // Toggle expanded state for a timeline item
  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Get importance styling
  const getImportanceStyles = (importance: TimelineItem["importance"]) => {
    switch (importance) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "high":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
      case "medium":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  // Handle brochure download
  const handleDownloadBrochure = () => {
    // Path to your PDF file - adjust this to the actual path of your brochure
    const pdfPath = "/Lexhack.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "LexHack-Event-Brochure.pdf";
    link.target = "_blank";

    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={timelineRef}
      id="timeline"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden isolate"
    >
      {/* Animated flowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-indigo-600/5 dark:bg-indigo-600/10"
          style={{ top: "10%", left: "5%" }}
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600/5 dark:bg-purple-600/10"
          style={{ top: "30%", right: "10%" }}
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-indigo-400/5 dark:bg-indigo-400/10"
          style={{ bottom: "15%", left: "15%" }}
          animate={{
            y: [0, -25, 0],
            x: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Flowing lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1500,100 C1650,200 1850,0 2000,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeOpacity="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              y: [0, 20, 0],
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              y: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          />
          <motion.path
            d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300 C1150,400 1350,200 1500,300 C1650,400 1850,200 2000,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeOpacity="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              y: [0, -20, 0],
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 0.5 },
              y: {
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Law-related icons */}
        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ top: "15%", left: "20%" }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Scale size={48} />
        </motion.div>

        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ top: "70%", right: "15%" }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            y: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            },
            rotate: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        >
          <Gavel size={48} />
        </motion.div>

        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ top: "40%", left: "10%" }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            y: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
            rotate: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <FileText size={40} />
        </motion.div>

        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ bottom: "20%", right: "25%" }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, -4, 0, 4, 0],
          }}
          transition={{
            y: {
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            },
            rotate: {
              duration: 17,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            },
          }}
        >
          <Briefcase size={44} />
        </motion.div>

        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ top: "25%", right: "30%" }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            y: {
              duration: 11,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.5,
            },
            rotate: {
              duration: 19,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.5,
            },
          }}
        >
          <Scroll size={42} />
        </motion.div>

        <motion.div
          className="absolute text-indigo-500/30 dark:text-indigo-400/30"
          style={{ bottom: "30%", left: "30%" }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            },
            rotate: {
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        >
          <BookOpenCheck size={46} />
        </motion.div>

        {/* Tech-related icons */}
        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ top: "25%", left: "75%" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            y: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            },
            rotate: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        >
          <Code size={40} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ bottom: "15%", left: "20%" }}
          animate={{
            y: [0, 12, 0],
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.5,
            },
            rotate: {
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.5,
            },
          }}
        >
          <Server size={38} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ top: "60%", left: "15%" }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            y: {
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            },
            rotate: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        >
          <Database size={36} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ top: "35%", right: "20%" }}
          animate={{
            y: [0, 8, 0],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            y: {
              duration: 11,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3.5,
            },
            rotate: {
              duration: 17,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3.5,
            },
          }}
        >
          <Cpu size={34} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ bottom: "40%", right: "10%" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -4, 0, 4, 0],
          }}
          transition={{
            y: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            rotate: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Laptop size={42} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ top: "10%", right: "25%" }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            },
            rotate: {
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        >
          <MonitorSmartphone size={40} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ bottom: "25%", left: "75%" }}
          animate={{
            y: [0, 12, 0],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            y: {
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
            rotate: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <Network size={38} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ top: "50%", right: "30%" }}
          animate={{
            y: [0, 8, 0],
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            y: {
              duration: 11,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            },
            rotate: {
              duration: 17,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            },
          }}
        >
          <Lock size={36} />
        </motion.div>

        <motion.div
          className="absolute text-purple-500/30 dark:text-purple-400/30"
          style={{ bottom: "60%", left: "25%" }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.2,
            },
            rotate: {
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.2,
            },
          }}
        >
          <FileCode size={40} />
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Event Timeline
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Three days of innovation, collaboration, and legal-tech exploration.
            Here's what to expect during LexHack.
          </p>

          {/* Day filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.map((day, index) => (
              <motion.button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDay === day
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/20"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {day === "All Days"
                  ? day
                  : new Date(day).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
              </motion.button>
            ))}
          </div>

          {/* Timeline legend */}
          {/* <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center text-xs">
              <span className="w-3 h-3 rounded-full bg-red-400 mr-1"></span>
              <span className="text-slate-600 dark:text-slate-400">Critical Events</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="w-3 h-3 rounded-full bg-indigo-400 mr-1"></span>
              <span className="text-slate-600 dark:text-slate-400">High Priority</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="w-3 h-3 rounded-full bg-purple-400 mr-1"></span>
              <span className="text-slate-600 dark:text-slate-400">Regular Sessions</span>
            </div>
          </div> */}
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Background Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          {/* Animated Progress overlay */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 transform md:-translate-x-1/2 origin-top z-10"
            style={{ scaleY }}
          />

          {/* Decorative elements */}
          <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-indigo-600 transform md:-translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute left-0 md:left-1/2 bottom-0 w-6 h-6 rounded-full bg-purple-600 transform md:-translate-x-1/2 translate-y-1/2 z-20"></div>

          {filteredItems.map((item, index) => {
            const isExpanded = expandedItems[index] || false;
            const importanceColor =
              item.importance === "critical"
                ? "border-red-400 dark:border-red-600"
                : item.importance === "high"
                ? "border-indigo-400 dark:border-indigo-600"
                : "border-purple-400 dark:border-purple-600";

            return (
              <motion.div
                key={`${item.date}-${item.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                    : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2 pl-12 md:pl-0`}
              >
                {/* Timeline dot with pulse effect */}
                <motion.div
                  className={`absolute left-0 md:left-auto md:right-0 top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 ${importanceColor} transform md:translate-x-1/2 flex items-center justify-center z-20`}
                  whileInView={{
                    boxShadow: [
                      "0 0 0 0 rgba(99, 102, 241, 0.4)",
                      "0 0 0 10px rgba(99, 102, 241, 0)",
                    ],
                    transition: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    },
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                />

                {/* Timeline item card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 ${
                    index % 2 === 0 ? "md:rounded-r-none" : "md:rounded-l-none"
                  }`}
                >
                  {/* Card header */}
                  <div
                    className={`${getImportanceStyles(
                      item.importance
                    )} px-6 py-3 flex justify-between items-center`}
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="p-1 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
                      aria-label={
                        isExpanded ? "Collapse details" : "Expand details"
                      }
                    >
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>

                  <div className="p-6">
                    {/* Basic info always visible */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>
                          {new Date(item.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center mb-2 text-sm text-slate-500 dark:text-slate-400">
                        <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Speakers section */}
                          {item.speakers.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-medium text-sm mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                <Users size={16} className="mr-1" /> Speakers
                              </h4>
                              <ul className="space-y-1">
                                {item.speakers.map((speaker, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                  >
                                    <span className="mr-2">•</span> {speaker}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Highlights section */}
                          {item.highlights.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-medium text-sm mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                <Star size={16} className="mr-1" /> Highlights
                              </h4>
                              <ul className="space-y-1">
                                {item.highlights.map((highlight, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                  >
                                    <span className="mr-2">•</span> {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Action buttons */}
                          <div className="flex gap-2 mt-4 justify-end">
                            <button className="px-3 py-1 text-xs font-medium rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors">
                              Add to Calendar
                            </button>
                            <button className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                              Remind Me
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Show more/less button for small screens */}
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors md:hidden flex items-center"
                    >
                      {isExpanded ? "Show less" : "Show more"}
                      {isExpanded ? (
                        <ChevronUp size={14} className="ml-1" />
                      ) : (
                        <ChevronDown size={14} className="ml-1" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Time connector line */}
                <div
                  className={`absolute top-3 w-12 h-0.5 ${
                    item.importance === "critical"
                      ? "bg-red-400"
                      : item.importance === "high"
                      ? "bg-indigo-400"
                      : "bg-purple-400"
                  } ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:right-0"
                      : "left-0"
                  }`}
                />
              </motion.div>
            );
          })}

          {/* Empty state when no items match filter */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 px-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <Calendar className="h-12 w-12 mx-auto mb-4 text-slate-400" />
              <h3 className="text-xl font-bold mb-2">No events scheduled</h3>
              <p className="text-slate-600 dark:text-slate-300">
                There are no events scheduled for this day. Please select
                another day or view all events.
              </p>
            </motion.div>
          )}
        </div>

        {/* Timeline navigation */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
              <Calendar size={16} />
            </button>
            <button
              onClick={handleDownloadBrochure}
              className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center"
            >
              <FileText size={16} className="mr-2" />
              Download Brochure
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
