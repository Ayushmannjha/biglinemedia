

import { motion} from 'framer-motion';
const ServiceButton = ({ icon, title, isActive, onClick, gradient }) => (
  <motion.button
    onClick={onClick}
    className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
      isActive
        ? `bg-gradient-to-br ${gradient} text-white shadow-2xl scale-105`
        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:shadow-xl border border-gray-200'
    }`}
    whileHover={{
      y: -8,
      transition: { type: "spring", stiffness: 300 }
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", damping: 20 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <div className="relative z-10">
      <motion.div
        className={`text-3xl mb-3 ${isActive ? 'text-white' : 'text-indigo-600'}`}
        animate={{ rotate: isActive ? 360 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="font-bold text-lg"
        animate={{ x: isActive ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {title}
      </motion.h3>
    </div>
  </motion.button>
);

export default ServiceButton;