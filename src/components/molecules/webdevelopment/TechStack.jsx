import { motion } from "framer-motion";
import React from "react";
// Import icons from lucide-react
import {
  Orbit,
  LayoutTemplate,
  Store,
  Flame,
  Box,
  Wind,
  Move,
  Database,
  CheckCircle,
} from "lucide-react";

// --- ANIMATION VARIANTS ---

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const toolVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
  },
};

// --- DATA WITH ICONS ---

const tools = [
  { name: "React.js", icon: <Orbit size={22} /> },
  { name: "WordPress", icon: <LayoutTemplate size={22} /> },
  { name: "Shopify", icon: <Store size={22} /> },
  { name: "Laravel", icon: <Flame size={22} /> },
  { name: "Node.js", icon: <Box size={22} /> },
  { name: "Tailwind CSS", icon: <Wind size={22} /> },
  { name: "Framer Motion", icon: <Move size={22} /> },
  { name: "MongoDB", icon: <Database size={22} /> },
];

// --- COMPONENT ---

export default function TechStack() {
  return (
    <motion.section
      id="techstack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
      // --- BACKGROUND ANIMATION ADDED (TAILWIND V4) ---
      // 1. The gradient is expanded using `bg-[length:200%_200%]`
      // 2. The custom animation is applied using `animate-background-pan`
      //    (Note: In v4, Tailwind automatically creates this class from the --animation-background-pan variable in your CSS)
      className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 bg-[length:200%_200%] animate-background-pan"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-14">
           <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">
             <CheckCircle size={36} strokeWidth={2.5} />
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
             Technologies We Master
           </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={toolVariant}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex items-center gap-4 px-6 py-3 bg-white shadow-md hover:shadow-xl rounded-full border border-slate-200 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600"
            >
              <span className="text-indigo-600 group-hover:text-white transition-colors duration-300">{tool.icon}</span>
              <span className="text-lg font-medium text-slate-700 group-hover:text-white transition-colors duration-300">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}