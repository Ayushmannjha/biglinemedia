
import { motion } from 'framer-motion';

const trustBadgeFloat = {
  animate: {
     y: [0, -10, 0],
    scale: [1, 1.05, 1]
  },
  transition: {
     duration: 3,
     repeat: Infinity,
     ease: "easeInOut"
   }
};

const TrustBadge = ({ icon, title, subtitle, delay = 0 }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-orange-50 to-green-50 p-4 rounded-xl border-2 border-orange-200 text-center shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      variants={trustBadgeFloat}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-bold text-orange-800">{title}</h4>
      <p className="text-sm text-green-700">{subtitle}</p>
    </motion.div>
  );
};
export default TrustBadge;