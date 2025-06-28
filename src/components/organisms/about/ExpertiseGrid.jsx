import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Securing Victories: Our Election Management Spectrum",
    items: [
      "Voter Analytics & Targeting",
      "Campaign Strategy & Messaging",
      "Ground Operations & Volunteer Management",
      "Media & Public Relations",
      "Polling & Survey Analysis",
    ],
  },
  {
    title: "Mastering Your Digital Domain: Web Management Services",
    items: [
      "Custom Web Design & Development",
      "E-commerce Solutions",
      "Content Management & Updates",
      "SEO & Analytics",
      "Web Security Maintenance",
    ],
  },
  {
    title: "Connecting & Converting: Social Media Management",
    items: [
      "Strategy & Consulting",
      "Content Creation & Curation",
      "Community Engagement",
      "Paid Social Campaigns",
      "Reputation Management",
    ],
  },
];

const ExpertiseGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardItem = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { x: -10, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const hoverEffect = {
    y: -8,
    scale: 1.02,
    boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Expertise in Action
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((block, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={hoverEffect}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 relative overflow-hidden group"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />

              <h3 className="font-semibold text-xl text-blue-800 mb-6 pt-2">
                {block.title}
              </h3>

              <ul className="space-y-4">
                {block.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={listItem}
                    className="text-gray-700 text-sm pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
