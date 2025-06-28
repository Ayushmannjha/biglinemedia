

import  {motion} from 'framer-motion';
import CampaignCard from './CampaignCard';
const CampaignFeatureCard = ({ icon, title, desc, delay, credential }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50, rotateY: -30 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
         y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <CampaignCard variant="parliament" className="text-center h-full">
        <motion.div
          className="text-5xl mb-4"
          whileHover={{
             rotate: [0, -10, 10, -10, 0],
            scale: 1.2
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-blue-800 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        {credential && (
          <div className="mt-4 p-2 bg-green-100 rounded-lg">
            <span className="text-xs text-green-800 font-semibold">{credential}</span>
          </div>
        )}
      </CampaignCard>
    </motion.div>
  );
};

export default CampaignFeatureCard;