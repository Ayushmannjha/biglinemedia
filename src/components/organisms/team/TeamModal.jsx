import {motion, AnimatePresence} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons"; // faTimes is a solid icon
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // faLinkedin is a brand icon
import React from "react";



const TeamModal = ({ member, onClose }) => {
  if (!member) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: -50, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose} // Close modal on backdrop click
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:w-1/3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg"
                />
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">
                  {member.name}
                </h2>
                <p className="text-xl text-blue-600 font-semibold text-center mb-4">
                  {member.title}
                </p>
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>

              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                  About {member.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {member.bio}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {member.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertiseTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

          
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;