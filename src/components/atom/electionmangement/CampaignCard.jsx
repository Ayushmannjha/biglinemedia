import { motion } from "framer-motion";


const pillarsRise = {
  initial: { y: 100, opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, ease: "backOut" }
};   


const CampaignCard = ({   children,   className = "",   delay = 0,  variant = "parliament"}) => {
  const variants = {
    parliament: "bg-gradient-to-br from-blue-50 to-white border-blue-200",
    ashoka: "bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200",
    tricolor: "bg-gradient-to-r from-orange-50 via-white to-green-50 border-gray-200"
  };
  return (
    <motion.div
      className={`p-6 rounded-xl shadow-lg border-2 ${variants[variant]} ${className}`}
      variants={pillarsRise}
      initial="initial"
      animate="animate"
      transition={{ delay }}
      whileHover={{
         scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        borderColor: "#f97316"
      }}
    >
      {children}
    </motion.div>
  );
};

export default CampaignCard;
