import { motion } from 'framer-motion';

const HeroSection = () => (
  <motion.section
    className="py-20 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto px-6">
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", damping: 20 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Let's Connect and Build Something Great ✨
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-indigo-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Tell us about your project, and let's find the perfect solution together.
        </motion.p>
      </motion.div>
    </div>
  </motion.section>
);
export default HeroSection;