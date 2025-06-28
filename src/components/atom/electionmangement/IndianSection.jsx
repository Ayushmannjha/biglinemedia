import React, { useEffect } from "react";
import { motion, useAnimation ,useInView} from "framer-motion";

const lotusBloom = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1 },
  transition: { duration: 1.2, ease: "backOut" }
};

const parliamentWave = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};


const pillarsRise = {
  initial: { y: 100, opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, ease: "backOut" }
};


const slideInFromTricolor = {
  initial: { x: -100, opacity: 0, filter: "blur(10px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};


const IndianSection = ({   title,   children,   className = "",  icon = "🇮🇳",  backgroundPattern = "ashoka"}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const patterns = {
    ashoka: "bg-gradient-to-br from-orange-100/30 via-white to-green-100/30",
    parliament: "bg-gradient-to-r from-blue-100/30 to-indigo-100/30",
    lotus: "bg-gradient-to-br from-pink-100/30 via-orange-100/30 to-yellow-100/30"
  };
  return (
    <motion.section
      ref={ref}
      className={`py-16 px-6 max-w-7xl mx-auto relative ${patterns[backgroundPattern]} ${className}`}
      initial="initial"
      animate={controls}
      variants={slideInFromTricolor}
    >
      {/* Decorative Elements (keeping them as they are general Indian symbols) */}
      <div className="absolute top-4 left-4 text-4xl opacity-10">🕉️</div>
      <div className="absolute top-4 right-4 text-4xl opacity-10">☸️</div>
      <div className="absolute bottom-4 left-4 text-4xl opacity-10">🪷</div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-10">⚖️</div>
      <motion.div
         className="text-center mb-12"
        variants={lotusBloom}
      >
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      <motion.div variants={parliamentWave}>
        {children}
      </motion.div>
    </motion.section>
  );
};
export default IndianSection;