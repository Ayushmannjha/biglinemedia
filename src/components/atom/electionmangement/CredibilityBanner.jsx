

import { motion } from "framer-motion";

const pillarsRise = {
  initial: { y: 100, opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, ease: "backOut" }
};


const parliamentWave = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const CredibilityBanner = () => {
  const certifications = [
    { icon: "📈", text: "Data-Driven Insights" }, // Changed
    { icon: "🔒", text: "Secure Data Handling" }, // Changed
    { icon: "🗣️", text: "Effective Communication" }, // Changed
    { icon: "🛡️", text: "Strategic Planning" } // Changed
  ];
  return (
    <motion.div
      className="bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           className="flex justify-center items-center space-x-8 text-white"
          variants={parliamentWave}
          initial="initial"
          animate="animate"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-2"
              variants={pillarsRise}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">{cert.icon}</span>
              <span className="font-semibold">{cert.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CredibilityBanner;