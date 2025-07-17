// src/pages/Team.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../../assets/data/team/teamMembers.js";
import TeamCard from "../../components/organisms/team/TeamCard";
import TeamModal from "../../components/organisms/team/TeamModal";

// --- Animation Variants for individual words/phrases ---
const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// --- Continuous animation for highlighted text ---
const highlightPulseVariants = {
  initial: { scale: 1, opacity: 1 }, // Initial state for the pulse animation itself
  animate: {
    scale: [1, 1.02, 1], // Scales slightly up and back
    opacity: [1, 0.9, 1], // Fades slightly and back
    transition: {
      duration: 3, // Duration of one pulse cycle
      ease: "easeInOut",
      repeat: Infinity, // Loops indefinitely
      repeatType: "mirror", // Animates forward then backward
      delay: 1, // Start pulse after initial text animation is done
    },
  },
};

// --- Helper function to split text into animated spans, preserving bold markdown ---
const splitTextIntoAnimatedSpans = (text) => {
  const parts = text.split(/(\*\*.*?\*\*|\s+)/).filter(Boolean);

  return parts.map((part, index) => {
    // If it's a bolded part
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <motion.span
          key={index}
          variants={textRevealVariants} // This span gets the initial staggered entry
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          <motion.strong
            className="font-bold text-indigo-700 inline-block" // Essential for transforms
            variants={highlightPulseVariants} // Apply pulse variants directly to motion.strong
            initial="initial"
            animate="animate"
          >
            {part.slice(2, -2)}
          </motion.strong>
          {" "} {/* Add a space after the bolded part */}
        </motion.span>
      );
    } else {
      // Regular words get the standard entry animation
      return (
        <motion.span
          key={index}
          variants={textRevealVariants}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {part}
        </motion.span>
      );
    }
  });
};


// --- Main Team Component ---
function Team() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedTeamMember(member);
  };

  const handleCloseModal = () => {
    setSelectedTeamMember(null);
  };

  // --- Animation Variants for Container and Items ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Stagger animation for words/phrases
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  // --- End Animation Variants ---

  // The paragraph text we want to animate
  const introParagraphText = `At [Your Agency Name], our diverse team blends unparalleled expertise in **digital strategy**, **creative content**, and **technical execution** to empower your vision and achieve remarkable results.`;


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: -70, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          MEET OUR <span className="text-indigo-600">INNOVATIVE TEAM</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delayChildren: 0.5 }}
        >
          {splitTextIntoAnimatedSpans(introParagraphText)}
        </motion.p>
      </header>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={itemVariants}>
            <TeamCard member={member} onCardClick={handleCardClick} />
          </motion.div>
        ))}
      </motion.div>

      <TeamModal member={selectedTeamMember} onClose={handleCloseModal} />
    </div>
  );
}

export default Team;