import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CityCard from '../../components/molecules/CityCard';

import RotatingTagline from '../atom/RotatingTagline';
import  { attractions } from '../../assets/data/CityHighlights.js';
import { taglines } from '../../assets/data/Taglines';



const CityHighlights = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 text-gray-900">
      <RotatingTagline taglines={taglines} />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {attractions.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <CityCard
              imageSrc={item.imageSrc}
              title={item.title}
              category={item.category}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CityHighlights;
