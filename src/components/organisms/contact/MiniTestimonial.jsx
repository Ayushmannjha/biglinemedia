
import { motion } from 'framer-motion';
const MiniTestimonial = ({ quote, author, gradient }) => (
  <motion.div
    className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white mb-6 relative overflow-hidden`}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
  >
    <motion.div
      className="absolute top-0 right-0 text-6xl opacity-20"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      "
    </motion.div>
    <p className="italic mb-3 relative z-10">"{quote}"</p>
    <p className="font-semibold text-white/90">- {author}</p>
  </motion.div>
);
export default MiniTestimonial;