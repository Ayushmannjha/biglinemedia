
import React, { useEffect, useState } from "react";
import { motion,useInView  } from "framer-motion";
const StatCounter = ({ end, suffix = "", label, icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / 2000, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      setTimeout(() => requestAnimationFrame(animate), delay * 100);
    }
  }, [inView, end, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl border-2 border-orange-200"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-orange-700">
        {count}{suffix}
      </div>
      <div className="text-sm text-green-700 font-medium">{label}</div>
    </motion.div>
  );
};


export default StatCounter;