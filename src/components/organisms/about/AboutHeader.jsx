import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/image1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // spring-like easing
    },
  },
};

const AboutHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-300 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>

      <motion.div
        className="relative flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text */}
        <motion.div className="flex-1" variants={itemVariants}>
          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6"
            variants={itemVariants}
          >
            Your Partner for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Unmatched Success
            </span>{" "}
            in Elections, Web & Social Media
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            At{" "}
            <strong className="text-indigo-600">
              [Your Company Name]
            </strong>
            , we don't just manage, we elevate. Discover how our specialized
            expertise drives measurable results.
          </motion.p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 group transform-gpu"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <motion.img
              src={image1}
              alt="Team Collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHeader;
