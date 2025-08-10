// src/pages/Team.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../../assets/data/team/teamMembers.js";
import TeamCard from "../../components/organisms/team/TeamCard";
import TeamModal from "../../components/organisms/team/TeamModal";

// Full Team component with all functionality
function Team() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedTeamMember(member);
  };

  const handleCloseModal = () => {
    setSelectedTeamMember(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MEET OUR <span className="text-indigo-600">INNOVATIVE TEAM</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our diverse team blends unparalleled expertise in digital strategy, creative content, and technical execution to empower your vision and achieve remarkable results.
        </motion.p>
      </header>
      
      {/* Team Cards Grid */}
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

      {/* Team Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <TeamModal member={selectedTeamMember} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Team;