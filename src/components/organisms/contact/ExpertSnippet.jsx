

import{ motion } from 'framer-motion';
const ExpertSnippet = ({ name, title, image, gradient }) => (
  <motion.div
    className={`bg-gradient-to-r ${gradient} rounded-2xl p-6 text-white mb-6`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex items-center space-x-4">
      <motion.img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full border-4 border-white/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
      />
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-white/90">{title}</p>
      </div>
    </div>
  </motion.div>
);

export default ExpertSnippet;