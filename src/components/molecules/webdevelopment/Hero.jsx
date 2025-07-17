import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  CSS Setup Note:
  In a real React project, the following CSS would typically be in an `index.css` 
  or a dedicated stylesheet and imported into your application's entry point.
  The Tailwind CSS classes will work automatically if Tailwind is configured.

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
*/

// A simple component for the blinking cursor effect
const CursorBlinker = () => {
  return (
    <motion.div
      variants={{
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: 'linear',
            times: [0, 0.5, 0.5, 1],
          },
        },
      }}
      animate="blinking"
      className="inline-block h-10 md:h-14 lg:h-16 w-1 bg-cyan-600 translate-y-1"
    />
  );
};

// The Typewriter component that reveals text character by character
const Typewriter = ({ text }) => {
  // Motion variants for the container and each character
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Split the text into an array of characters
  const letters = Array.from(text);

  return (
    <motion.div
      key={text} // Add key to force re-render on text change
      style={{ display: 'inline-flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function HeroSection() {
  // Array of phrases to be typed
  const phrases = [
    'Digital Foundations',
    'Creative Solutions',
    'Seamless Experiences',
    'Powerful Web Apps',
  ];

  // State to keep track of the current phrase index
  const [phraseIndex, setPhraseIndex] = useState(0);

  // useEffect to set up the interval for changing phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden"
    >
      {/* 🎨 Animated Background SVG bubbles */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(224,242,254)', stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(240,249,255)', stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
        <motion.circle
          cx="20"
          cy="80"
          r="30"
          fill="url(#grad1)"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        />
        <motion.circle
          cx="80"
          cy="20"
          r="40"
          fill="url(#grad1)"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
            delay: 1,
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          fill="url(#grad1)"
          animate={{
            x: [0, 5, -5, 0],
            y: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
            delay: 0.5,
          }}
        />
      </svg>

      {/* 🌟 Main Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-indigo-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          We Engineer <br className="md:hidden" />
          <span className="text-cyan-600 inline-flex items-center">
            <AnimatePresence mode="wait">
              <Typewriter text={phrases[phraseIndex]} />
            </AnimatePresence>
            <CursorBlinker />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Websites structured, scalable, and intelligent—built to empower{' '}
          <span className="font-semibold text-indigo-700">your vision</span>.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          Get a Free Quote
        </motion.a>
      </div>
    </section>
  );
}
