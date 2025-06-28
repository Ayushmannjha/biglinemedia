// src/components/HeroSection.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { pulseVariants, orbitalVariants, heroScale, heroRotate } from '../../../utils/framerVariants';

const HeroSection = ({ scrollToPortfolio, scrollY }) => { // Accept scrollY as prop
    // Define scroll-linked MotionValues directly using useTransform on the received scrollY
    const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);
    const heroRotate = useTransform(scrollY, [0, 300], [0, 2]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0"
                variants={orbitalVariants}
                animate="animate"
            >
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-60" />
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-300 rounded-full opacity-40" />
                <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-80" />
            </motion.div>

            {/* Main Hero Content */}
            <motion.div
                style={{ scale: heroScale, rotateY: heroRotate }} // Use internally defined MotionValues
                className="container mx-auto px-6 text-center relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Animated Title */}
                    <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                        <motion.span
                            className="inline-block text-gray-900"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            High Impact,
                        </motion.span>
                        <br />
                        <motion.span
                            className="inline-block text-purple-600 relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Low Budget
                            <motion.div
                                className="absolute -inset-2 bg-purple-300/20 rounded-lg blur-lg"
                                variants={pulseVariants}
                                animate="animate"
                            />
                        </motion.span>
                        <motion.span
                            className="block text-gray-900"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            Videos
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Professional video production that drives growth without breaking the bank. Your success is our mission.
                    </motion.p>

                    {/* Animated CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <motion.button
                            onClick={scrollToPortfolio}
                            className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold text-white group overflow-hidden"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span className="relative z-10 flex items-center">
                                Start Your Project
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <ArrowRight className="ml-2" size={20} />
                                </motion.div>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white/20 rounded-full"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        <motion.button
                            className="relative border border-gray-300 px-8 py-4 rounded-full text-lg font-semibold text-gray-800 group"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span className="relative z-10 flex items-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <Play className="mr-2" size={20} />
                                </motion.div>
                                Watch Our Work
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{
                        y: [0, 15, 0],
                        opacity: [1, 0.5, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="text-gray-600" size={32} />
                </motion.div>
            </motion.div>
            </section>
    );
};

export default HeroSection;