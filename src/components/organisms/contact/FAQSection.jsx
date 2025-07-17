
import React from 'react';
import { motion } from 'framer-motion';
const FAQSection = ({ faqItems }) => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions 🤔
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((faq, index) => (
          <motion.details
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors font-medium text-gray-800 flex items-center justify-between">
              {faq.question}
              <span className="text-indigo-600">⌄</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              {faq.answer}
            </div>
          </motion.details>
        ))}
      </div>
    </div>
  </motion.section>
);

export default FAQSection;