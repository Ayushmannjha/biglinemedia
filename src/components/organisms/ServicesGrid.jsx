import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../molecules/ServiceCard';
import { ArrowRight, Sparkles, Eye, X, ChevronDown } from 'lucide-react';
import { services } from '../../assets/data/home/ServicesGrid';
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCard && isMobile) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [selectedCard, isMobile]);

  const handleCardClick = (service) => {
    setSelectedCard(selectedCard?.title === service.title ? null : service);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 md:px-6 lg:px-16 min-h-screen overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10"
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
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10"
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

      {/* Mobile-optimized Header */}
      <motion.div 
        className="text-center mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-3 md:mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
        </motion.div>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base px-4">
          Comprehensive digital solutions designed to elevate your business
        </p>
      </motion.div>

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="space-y-4 relative z-10">
          {/* Services Grid - Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={`${service.title}-${animationKey}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1
                }}
              >
                <ServiceCard
                  service={service}
                  isSelected={selectedCard?.title === service.title}
                  onClick={() => handleCardClick(service)}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Detail Modal - Enhanced */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center"
                onClick={closeModal}
                style={{ 
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 9999
                }}
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="w-full max-w-lg bg-white rounded-t-3xl max-h-[90vh] overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    touchAction: 'none' // Prevents pull-to-refresh
                  }}
                >
                  {/* Drag Handle */}
                  <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>

                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedCard.color} flex items-center justify-center shadow-lg`}>
                        <selectedCard.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedCard.title}</h3>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Content - Scrollable */}
                  <div 
                    className="px-6 py-4 overflow-y-auto"
                    style={{ 
                      maxHeight: 'calc(90vh - 120px)',
                      overscrollBehavior: 'contain' // Prevents bounce scroll
                    }}
                  >
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">
                      {selectedCard.detailedDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-base">
                        <Eye className="w-5 h-5" />
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {selectedCard.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3 text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                            <span className="leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pb-4">
                      <Link to={selectedCard.link} className="block w-full">
                        <motion.button 
                          className={`w-full px-6 py-4 rounded-2xl bg-gradient-to-r ${selectedCard.color} text-white font-semibold shadow-lg flex items-center justify-center gap-3 text-lg`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={closeModal}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="flex flex-col lg:flex-row gap-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl relative z-10">
          {/* Services Grid - Desktop */}
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

          {/* Detail Panel - Desktop */}
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
      )}
    </section>
  );
};

export default ServicesGrid;