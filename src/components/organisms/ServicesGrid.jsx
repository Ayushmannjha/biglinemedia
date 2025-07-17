import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../molecules/ServiceCard';
import { ArrowRight, Sparkles, Eye,} from 'lucide-react';
import { services } from '../../assets/data/home/ServicesGrid'; // Assuming you have a data file for services
import {Link} from "react-router-dom";

// Mock image for demo



const ServicesGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  
  
  
  const handleCardClick = (service) => {
    setSelectedCard(selectedCard?.title === service.title ? null : service);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 md:px-16 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10"
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity }
          }}
        />
      </div>

      {/* Header */}
      <motion.div 
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-blue-500" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TECH  Services
          </h2>
          <Sparkles className="w-6 h-6 text-purple-500" />
        </motion.div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of municipal services designed to serve our community with excellence
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl relative z-10">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${animationKey}`}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <ServiceCard
                service={service}
                isSelected={selectedCard?.title === service.title}
                onClick={() => handleCardClick(service)}
              />
            </motion.div>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          {selectedCard ? (
            <motion.div
              key={selectedCard.title}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.8 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="w-full lg:w-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-xl relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${selectedCard.color} opacity-5`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                {/* Header */}
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedCard.color} flex items-center justify-center shadow-lg`}>
                    <selectedCard.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCard.title}</h3>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedCard.detailedDescription}
                </motion.p>

                {/* Features */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {selectedCard.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                <Link to={selectedCard.link} className="flex-1">
                    <motion.button 
                      className={`w-full px-4 py-3 rounded-xl bg-gradient-to-r ${selectedCard.color} text-white font-medium shadow-lg flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  
                  <motion.button 
                    className="px-4 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCard(null)}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <selectedCard.icon className="w-16 h-16" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full lg:w-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-dashed border-gray-300 flex items-center justify-center text-center"
            >
              <div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <Eye className="w-12 h-12 text-gray-400 mx-auto" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Select a Service</h3>
                <p className="text-sm text-gray-500">Click on any service card to view detailed information</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesGrid;