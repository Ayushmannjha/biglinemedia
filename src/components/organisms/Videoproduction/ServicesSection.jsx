// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Zap, Quote, Play } from 'lucide-react';
import { pulseVariants, containerVariants, cardVariants } from '../../../utils/framerVariants';

const services = [
    {
        title: "Explainer Videos",
        description: "Animated and live-action videos that clearly communicate your product or service.",
        icon: Video,
        price: "Starting at $1,500",
        color: "from-orange-500 to-red-500",
        glowColor: "orange"
    },
    {
        title: "Social Media Content",
        description: "Bite-sized video packages for Instagram, TikTok, YouTube Shorts, and LinkedIn.",
        icon: Zap,
        price: "Monthly packages from $800",
        color: "from-green-500 to-teal-500",
        glowColor: "green"
    },
    {
        title: "Client Testimonials",
        description: "Professional testimonial videos that build trust and credibility.",
        icon: Quote,
        price: "Starting at $800",
        color: "from-purple-500 to-pink-500",
        glowColor: "purple"
    },
    {
        title: "Product Demos",
        description: "Simple, effective demonstrations of how your product works.",
        icon: Play,
        price: "Starting at $1,200",
        color: "from-blue-500 to-cyan-500",
        glowColor: "blue"
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 relative bg-gray-100">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6 relative"
                        whileInView={{ scale: [0.8, 1.1, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Our Services
                        </span>
                        <motion.div
                            className="absolute -inset-4 bg-purple-300/10 rounded-2xl blur-2xl"
                            variants={pulseVariants}
                            animate="animate"
                        />
                    </motion.h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        We offer a range of video production services tailored for startups and small businesses, ensuring high quality and impactful results.
                    </p>
                </motion.div>

                {/* Column Layout for Services Cards */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 gap-12" // Changed to single column
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="relative group cursor-pointer"
                                variants={cardVariants} // Use cardVariants for entry animation
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {/* Dynamic Glow Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-xl`}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: index * 0.7
                                    }}
                                />

                                {/* Card Content */}
                                <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-500 h-full">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        {/* Animated Icon with Simple Shape */}
                                        <motion.div
                                            className={`flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gradient-to-r ${service.color} rounded-full relative overflow-hidden`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: [0, 15, -15, 0]
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="text-white z-10" size={28} />
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1 text-center sm:text-left">
                                            <motion.h3
                                                className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
                                                layoutId={`title-${index}`}
                                            >
                                                {service.title}
                                            </motion.h3>

                                            <motion.p
                                                className="text-gray-700 mb-4 leading-relaxed"
                                                initial={{ opacity: 0.8 }}
                                                whileHover={{ opacity: 1 }}
                                            >
                                                {service.description}
                                            </motion.p>

                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                                                <motion.p
                                                    className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {service.price}
                                                </motion.p>

                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            </section>
    );
};

export default ServicesSection;