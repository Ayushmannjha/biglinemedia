// src/components/molecules/SkillBar.jsx

import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ label, value }) => (
  <div className="mb-2"> {/* Increased margin-bottom */}
    <div className="flex justify-between text-sm font-semibold text-gray-800 mb-1"> {/* Slightly larger text */}
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"> {/* Slightly taller bar */}
      <motion.div
        className="bg-indigo-600 h-2 rounded-full" // Changed color to indigo-600
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>
    </div>
  </div>
);

export default SkillBar;