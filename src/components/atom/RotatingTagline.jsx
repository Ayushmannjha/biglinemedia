import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingTagline = ({ taglines, interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, interval);

    return () => clearInterval(tagInterval);
  }, [taglines.length, interval]);

  return (
    <div className="text-center mb-10 min-h-[4rem]">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {taglines[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTagline;
