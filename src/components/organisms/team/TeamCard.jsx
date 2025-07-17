// src/components/TeamCard.jsx (or wherever your TeamCard component resides)

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import SkillBar from "./SkillBar"; // Ensure this path is correct

const TeamCard = ({ member, onCardClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // --- MODIFIED HANDLERS ---
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  // --- END MODIFIED HANDLERS ---

  // Only render the Industry tab content
  const renderTabContent = () => {
    return (
      <motion.div
        key="industry-tab"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="p-4 text-sm text-gray-700 h-full overflow-y-auto"
      >
        <p className="mb-2">
          <span className="font-semibold">Years in Industry:</span>{" "}
          {member.industry.yearsInIndustry}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Years at DM:</span>{" "}
          {member.industry.yearsAtDM}
        </p>
        <h4 className="font-bold text-md mb-2">Key Skills:</h4>
        {Object.entries(member.industry.skills).map(([skill, value]) => (
          <SkillBar key={skill} label={skill} value={value} />
        ))}
      </motion.div>
    );
  };

  return (
    <motion.div
      className={`relative w-72 h-96 rounded-lg shadow-lg cursor-pointer transform-gpu perspective-1000 ${member.cardBg}`}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // --- ADDED HOVER LISTENERS HERE ---
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // --- END ADDED HOVER LISTENERS ---
      onClick={() => onCardClick(member)} // Always allow modal to open on click (front or back)
    >
      <motion.div
        className="absolute w-full h-full rounded-lg"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of the card */}
        <div
          className="absolute w-full h-full bg-white rounded-lg backface-hidden flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-md"
          />
          <h3 className="text-xl font-bold text-gray-800 text-center">
            {member.name}
          </h3>
          <p className="text-md text-gray-600 text-center">
            {member.title}
          </p>
          {/* Removed the FLIP CARD button as it's now hover-based */}
        </div>

        {/* Back of the card */}
        <div
          className="absolute w-full h-full bg-white rounded-lg backface-hidden overflow-hidden flex flex-col"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex justify-center bg-gray-100 p-2 border-b border-gray-200">
            <span className="py-2 px-3 text-sm font-semibold text-gray-700">
              Professional Details
            </span>
          </div>
          <div className="flex-grow relative">
            <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
          </div>
          {/* Removed the FLIP BACK button as it's now hover-based */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;