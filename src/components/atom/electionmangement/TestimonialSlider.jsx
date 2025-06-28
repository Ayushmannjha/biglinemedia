import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';    



const TestimonialSlider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border-2 border-orange-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🗣️</div>
          <p className="text-lg italic text-gray-700 mb-4">
            "{testimonials[current].quote}"
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
               src={testimonials[current].avatar}
               alt={testimonials[current].author}
              className="w-16 h-16 rounded-full border-4 border-orange-300"
            />
            <div>
              <p className="font-bold text-blue-800">{testimonials[current].author}</p>
              <p className="text-sm text-green-700">{testimonials[current].position}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-orange-500' : 'bg-gray-300'}`}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};
 

export default TestimonialSlider;