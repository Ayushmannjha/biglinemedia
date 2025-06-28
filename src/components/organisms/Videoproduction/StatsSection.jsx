// src/components/StatsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Star, Target, Zap } from 'lucide-react';
import { pulseVariants } from '../../../utils/framerVariants';

const stats = [
    { number: "150+", label: "Projects Completed", icon: Camera },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50%", label: "Average ROI Increase", icon: Target },
    { number: "24h", label: "Quick Turnaround", icon: Zap }
];

const StatsSection = () => {
    return (
        <section className="py-20 relative bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="grid md:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={{
                                hidden: { opacity: 0, y: 100, scale: 0.8 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Glowing Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-2xl blur-xl"
                                variants={pulseVariants}
                                animate="animate"
                                transition={{ delay: index * 0.5 }}
                            />

                            {/* Card Content */}
                            <div className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg group-hover:shadow-xl transition-all duration-500">
                                <motion.div
                                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <stat.icon className="text-white" size={24} />
                                </motion.div>
                                <motion.h3
                                    className="text-3xl font-bold text-purple-600 mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {stat.number}
                                </motion.h3>
                                <p className="text-gray-700">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;