// src/components/CtaSection.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { floatingY } from '../../../utils/framerVariants.js'; // Import specific variant functions

const CtaSection = ({ scrollY }) => { // Accept scrollY as prop
    // Define scroll-linked MotionValue directly using useTransform on the received scrollY
    const floatingY = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <section className="py-20 relative bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <motion.div
                className="container mx-auto px-6 text-center"
                style={{ y: floatingY }} // Use internally defined MotionValue
            >
                <motion.div
                    className="relative bg-white/10 rounded-3xl p-12 border border-white/20 group overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                >
                    {/* Animated Background Pattern */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                        }}
                    />

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Ready to <span className="text-pink-300">Transform</span> Your Business?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Get your free consultation and discover how professional video can drive your growth without breaking your budget.
                    </motion.p>

                    <motion.button
                        className="relative bg-white text-blue-600 hover:bg-gray-100 px-12 py-5 rounded-full text-lg font-semibold group overflow-hidden z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{
                            scale: 1.1,
                            y: -5,
                            boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-blue-100"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center">
                            Get Free Consultation
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="ml-2" size={20} />
                            </motion.div>
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CtaSection;

