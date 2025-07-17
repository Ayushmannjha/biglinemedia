import { motion } from "framer-motion";
import ImageSwiperCard from "../molecules/ImageCard";
import { photos } from "../../assets/data/home/CommunityShowcase";
import React from "react";

//


const StatBox = ({ value, label, gradient }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="relative group border border-gray-200/20 rounded-xl p-6 text-center hover:border-transparent transition-all duration-300 backdrop-blur-sm bg-white/5"
  >
    {/* Gradient Border on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]`}>
      <div className="w-full h-full bg-gray-900/90 rounded-xl" />
    </div>
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
        {value}
      </h3>
      <p className="text-sm text-gray-300 font-medium mt-2 group-hover:text-white transition-colors duration-300">
        {label}
      </p>
    </div>
  </motion.div>
);

const CommunityShowcase = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10"
      >
        {/* Left: Swiper Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ImageSwiperCard photos={photos} />
        </motion.div>

        {/* Right: Text Content + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Together, Let's Make A{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Better Community
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Let's build a better community through collaboration, inclusion, and shared responsibility.
            Join us to create a sustainable and welcoming environment for everyone.
          </motion.p>

          <motion.button
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-white font-semibold mb-10 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Discover How</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <div className="grid grid-cols-3 gap-4">
            <StatBox value="5M" label="Population" gradient="from-emerald-500 to-teal-600" />
            <StatBox value="26K+" label="Businesses" gradient="from-blue-500 to-indigo-600" />
            <StatBox value="95%" label="Graduation" gradient="from-purple-500 to-violet-600" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityShowcase;

