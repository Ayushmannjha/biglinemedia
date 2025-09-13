import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

const VideoSection = ({
  video,
  overlayTitle,
  overlaySubtitle,
  children,
  showContactButton = true,
  buttonText = "Get In Touch",
  buttonVariant = "primary" // primary, secondary, outline
}) => {
const buttonVariants = {
  primary:
    "bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300",

  secondary:
    "bg-black/50 text-white border border-white/40 backdrop-blur-sm font-medium px-6 py-3 rounded-lg shadow-md hover:bg-black/70 hover:shadow-lg hover:scale-105 transition duration-300",

  outline:
    "border-2 border-white text-white bg-black/40 backdrop-blur-sm font-medium px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition duration-300"
};



  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Responsive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          poster="" // Add a poster image if available
        />
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Title and Subtitle */}
        {(overlayTitle || overlaySubtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-4xl"
          >
            {overlayTitle && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                {overlayTitle}
              </motion.h1>
            )}
            
            {overlaySubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed"
              >
                {overlaySubtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Contact Button */}
        {showContactButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 200
            }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link to="/contact">
              <motion.button
                className={`
                  group relative px-8 py-4 rounded-full font-semibold text-lg
                  transition-all duration-300 transform
                  flex items-center gap-3
                  ${buttonVariants[buttonVariant]}
                `}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated background glow */}
               
              </motion.button>
            </Link>

            {/* Secondary CTA - Call Button */}
        
          </motion.div>
        )}

        {/* Custom Children Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>

  
   

    </div>
  );
};

export default VideoSection;
