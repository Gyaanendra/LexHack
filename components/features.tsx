// "use client";

// import { motion } from "framer-motion";
// import {
//   Code,
//   Shield,
//   PresentationIcon as PresentationChart,
//   Lightbulb,
//   Users,
//   Laptop,
//   Gavel,
//   Cpu,
//   Scale,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function Features() {
//   const [windowHeight, setWindowHeight] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);
//     setWindowWidth(window.innerWidth);
//   }, []);

//   return (
//     <section
//       id="features"
//       className="relative py-20 bg-white dark:bg-slate-800 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#78FDFF]/10 dark:via-[#FFB2ED]/10 dark:to-[#FFEFAD]/10 z-0" />
//       {/* Background with Shooting Stars */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {[...Array(35)].map((_, i) => {
//           const delay = Math.random() * 3;
//           const duration = Math.random() * 2.5 + 1.5;
//           const startY = Math.random() * windowHeight;
//           const endY = startY + (Math.random() * 500 - 250);
//           const endX = windowWidth + 100;
//           const Icon = i % 3 === 0 ? Gavel : i % 3 === 1 ? Cpu : Scale;
//           const color =
//             i % 3 === 0
//               ? "text-[#78FDFF] dark:text-[#FFB2ED]"
//               : i % 3 === 1
//               ? "text-[#ABFF8C] dark:text-[#FFEFAD]"
//               : "text-[#FCDCFF] dark:text-[#FF8EDB]";

//           return (
//             <motion.div
//               key={i}
//               initial={{ x: -100, y: startY, opacity: 1 }}
//               animate={{ x: endX, y: endY, opacity: 1 }}
//               transition={{
//                 duration,
//                 delay,
//                 repeat: Infinity,
//                 ease: "easeOut",
//               }}
//               className="absolute"
//             >
//               <Icon className={`h-10 w-10 ${color}`} />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Content Wrapper */}
//       <div className="relative container mx-auto px-4 z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#78FDFF] via-[#FFB2ED] to-[#FFEFAD]">
//             Event Breakdown
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
//             An intense 24-hour competition that challenges participants to
//             innovate at the intersection of law and technology.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="bg-gradient-to-br from-indigo-50 to-[#754E1A]/10 dark:from-indigo-950 dark:to-[#754E1A]/20 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800 relative overflow-hidden group"
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-[#754E1A]/20 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>

//             <div className="relative z-10">
//               <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-[#754E1A] flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
//                 <Code className="h-7 w-7 text-white" />
//               </div>

//               <h3 className="text-xl font-bold mb-4">
//                 April 17 – BUILD (Overnight Hackathon)
//               </h3>

//               <ul className="space-y-3 text-slate-700 dark:text-slate-300">
//                 <li className="flex items-start">
//                   <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
//                     ✓
//                   </span>
//                   <span>
//                     Innovation & Development: Teams will brainstorm, prototype,
//                     and develop a cutting-edge technological solution—ranging
//                     from AI-powered legal assistants and blockchain-based
//                     compliance tools to cybersecurity frameworks and fintech
//                     solutions.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 text-xs">
//                     ✓
//                   </span>
//                   <span>
//                     Collaboration & Execution: Working overnight, teams will
//                     design products that are not just technically robust but
//                     also aligned with legal frameworks and regulatory standards.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-gradient-to-br from-[#754E1A]/10 to-indigo-50 dark:from-[#754E1A]/20 dark:to-indigo-950 rounded-xl p-8 border border-[#754E1A]/20 dark:border-[#754E1A]/30 relative overflow-hidden group"
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#754E1A]/20 to-indigo-500/20 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>

//             <div className="relative z-10">
//               <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#754E1A] to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-[#754E1A]/20">
//                 <Shield className="h-7 w-7 text-white" />
//               </div>

//               <h3 className="text-xl font-bold mb-4">
//                 April 18 – DEFEND & PITCH
//               </h3>

//               <ul className="space-y-3 text-slate-700 dark:text-slate-300">
//                 <li className="flex items-start">
//                   <span className="h-5 w-5 rounded-full bg-[#754E1A]/10 dark:bg-[#754E1A]/20 flex items-center justify-center text-[#754E1A] dark:text-[#754E1A] mr-2 mt-0.5 text-xs">
//                     ✓
//                   </span>
//                   <span>
//                     Legal Analysis & Compliance: Teams must assess the legal
//                     risks and challenges associated with their innovation,
//                     including intellectual property (IP) rights, data privacy
//                     laws, compliance issues, and ethical considerations.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="h-5 w-5 rounded-full bg-[#754E1A]/10 dark:bg-[#754E1A]/20 flex items-center justify-center text-[#754E1A] dark:text-[#754E1A] mr-2 mt-0.5 text-xs">
//                     ✓
//                   </span>
//                   <span>
//                     Investor-Style Pitching: Participants will present their
//                     projects in a high-stakes, Shark Tank-style competition
//                     before a panel of industry experts, legal professionals, and
//                     investors.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mt-16 max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
//         >
//           <h3 className="text-xl font-bold mb-6 flex items-center">
//             <PresentationChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
//             Evaluation Criteria
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
//               <h4 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
//                 Technical Innovation
//               </h4>
//               <p className="text-slate-600 dark:text-slate-300 text-sm">
//                 Uniqueness and feasibility of the proposed solution
//               </p>
//             </div>

//             <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
//               <h4 className="font-semibold mb-3 text-[#754E1A] dark:text-[#754E1A]">
//                 Legal Soundness
//               </h4>
//               <p className="text-slate-600 dark:text-slate-300 text-sm">
//                 Compliance with existing laws and regulatory frameworks
//               </p>
//             </div>

//             <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
//               <h4 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
//                 Business Viability
//               </h4>
//               <p className="text-slate-600 dark:text-slate-300 text-sm">
//                 Scalability and market potential of the project
//               </p>
//             </div>

//             <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
//               <h4 className="font-semibold mb-3 text-[#754E1A] dark:text-[#754E1A]">
//                 Presentation & Defense
//               </h4>
//               <p className="text-slate-600 dark:text-slate-300 text-sm">
//                 Ability to articulate and justify the solution effectively
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
//         >
//           <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-center">
//             <Lightbulb className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0" />
//             <div>
//               <h3 className="text-lg font-semibold mb-1">Workshops & Panels</h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400">
//                 Learn from industry experts
//               </p>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-center">
//             <Users className="h-10 w-10 text-[#754E1A] dark:text-[#754E1A] mr-4 flex-shrink-0" />
//             <div>
//               <h3 className="text-lg font-semibold mb-1">Networking Events</h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400">
//                 Connect with peers and mentors
//               </p>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-center">
//             <Laptop className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0" />
//             <div>
//               <h3 className="text-lg font-semibold mb-1">
//                 Virtual Participation
//               </h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400">
//                 Join from anywhere in the world
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
