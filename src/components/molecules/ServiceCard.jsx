import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, Bus, GraduationCap, Leaf, Landmark, 
  ArrowRight, Sparkles, Eye, Star, ChevronRight
} from 'lucide-react';


const ServiceCard = ({ service, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300
        ${isSelected ? 'border-blue-500 shadow-lg shadow-blue-200' : 'border-gray-200 hover:border-gray-300'}
        ${service.bgColor}
      `}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        rotateX: 2
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                initial={{ 
                  x: Math.random() * 200, 
                  y: Math.random() * 150,
                  scale: 0 
                }}
                animate={{ 
                  y: -20,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative p-6 h-full flex flex-col">
        {/* Icon with pulse effect */}
        <motion.div 
          className="mb-4 relative"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          
          {/* Pulse ring */}
          <motion.div
            className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.color} opacity-30`}
            animate={{ 
              scale: isHovered ? [1, 1.3, 1] : 1,
              opacity: isHovered ? [0.3, 0, 0.3] : 0.3
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-lg font-bold text-gray-900 mb-2"
          animate={{ color: isHovered ? '#1f2937' : '#374151' }}
        >
          {service.title}
        </motion.h3>
        
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {service.description}
        </p>

        {/* Interactive features preview */}
        <motion.div 
          className="flex flex-wrap gap-1 mb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {service.features.map((feature, idx) => (
            <span 
              key={idx}
              className="text-xs bg-white bg-opacity-70 px-2 py-1 rounded-full text-gray-700 border"
            >
              {feature}
            </span>
          ))}
        </motion.div>

        {/* Action indicator */}
        <motion.div 
          className="flex items-center text-blue-600 text-sm font-medium"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span>Learn More</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </motion.div>

        {/* Selection indicator */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="absolute top-2 right-2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-white fill-current" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
