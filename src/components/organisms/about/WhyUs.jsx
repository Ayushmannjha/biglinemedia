import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaChartLine,
  FaMapMarkerAlt,
  FaSyncAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCogs className="text-3xl text-blue-600 group-hover:animate-spin-slow" />,
    title: "Integrated Excellence",
    description:
      "Unlike single service providers, we offer a cohesive strategy across all your needs, ensuring seamless execution.",
  },
  {
    icon: <FaChartLine className="text-3xl text-green-600 group-hover:animate-pulse" />,
    title: "Results Driven Focus",
    description:
      "We are obsessed with your ROI. Our strategies are built on data and designed for measurable outcomes.",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-indigo-600 group-hover:animate-bounce" />,
    title: "Patna & Bihar Advantage",
    description:
      "Deeply rooted in the local landscape, we bring invaluable regional insights to your campaigns and online presence.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-purple-600 group-hover:animate-spin" />,
    title: "Agile & Adaptive",
    description:
      "The digital and political worlds change fast. We pivot quickly, keeping your strategy ahead of the curve.",
  },
];

// Motion variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          variants={item}
        >
          Why <span className="underline decoration-2 decoration-indigo-500">Choose Us</span>?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.06,
                y: -6,
                boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 14 }}
              className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUs;
