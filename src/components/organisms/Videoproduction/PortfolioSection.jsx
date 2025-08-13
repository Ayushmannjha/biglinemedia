// src/components/PortfolioSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Modal from './Modal'; // Import the new Modal component
import { containerVariants, cardVariants, pulseVariants } from '../../../utils/framerVariants';
import { getPlaceholderImageUrl } from '../../../utils/imageUtils';


// Portfolio data using environment-friendly URLs
const portfolioItems = [
    {
        title: "Startup Explainer: InnovateApp",
        description: "A concise animated explainer that simplified a complex SaaS product for early adopters.",
        image:getPlaceholderImageUrl(800, 450, "InnovateApp Explainer", "f9a8d4", "ffffff"),
      
        impact: "Increased user sign-ups by 20% in the first month.",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Local Business Promo: The Daily Crumb",
        description: "A vibrant social media reel showcasing a local bakery's unique atmosphere and offerings.",
        image: getPlaceholderImageUrl(800, 450, "Daily Crumb Promo", "fca5a5", "ffffff"),
      
        impact: "Generated a 15% increase in local foot traffic.",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Online Course Intro: Digital Mastery",
        description: "Professional intro/outro animations for an online entrepreneur's new course series.",
        image: getPlaceholderImageUrl(800, 450, "Digital Mastery Intro", "94a3b8", "ffffff"),
       
        impact: "Enhanced course professionalism and viewer retention.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Product Demo: EcoGadget",
        description: "A clear and engaging demonstration of a new sustainable tech gadget's features.",
        image: getPlaceholderImageUrl(800, 450, "EcoGadget Demo", "34d399", "ffffff"),
        
        impact: "Boosted pre-orders by 10% during launch campaign.",
        color: "from-green-500 to-teal-500"
    },
    {
        title: "Brand Story: Artisan Crafts",
        description: "A short, heartfelt video telling the story behind a local artisan's unique creations.",
        image: getPlaceholderImageUrl(800, 450, "Artisan Story", "fcd34d", "ffffff"),
     
        impact: "Increased brand engagement and social media shares.",
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Social Media Ad: Fitness Hub",
        description: "Dynamic and energetic short ad designed to drive sign-ups for a new fitness studio.",
        image: getPlaceholderImageUrl(800, 450, "Fitness Ad", "8b5cf6", "ffffff"),
  
        impact: "Achieved 2x higher click-through rate on social platforms.",
        color: "from-indigo-500 to-purple-500"
    },
];

const PortfolioSection = React.forwardRef((props, ref) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="portfolio" ref={ref} className="py-20 relative bg-gradient-to-r from-blue-500 to-purple-500 text-gray-800">
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
                            Our Creative Portfolio
                        </span>
                        <motion.div
                            className="absolute -inset-4 bg-purple-300/10 rounded-2xl blur-2xl"
                            variants={pulseVariants}
                            animate="animate"
                        />
                    </motion.h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        See how our high-impact videos have helped startups and small businesses achieve their goals.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={() => openModal(item)} // Open modal on click
                        >
                            {/* Video Placeholder / Image */}
                            <div className="relative w-full h-48 bg-black flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center"
                                    >
                                        <Play className="text-white" size={32} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span className="font-semibold">Impact:</span>
                                    <span className="text-purple-600 font-medium">{item.impact}</span>
                                </div>
                            </div>
                            {/* Decorative element on hover */}
                            <motion.div
                                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                
            </div>

            {/* Portfolio Detail Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={closeModal}
                videoEmbedUrl={selectedProject?.videoEmbedUrl}  // Pass videoEmbedUrl here
            >
                {selectedProject && (
                    <>
                        <div className="md:w-1/2 flex-shrink-0">
                            {/* Conditionally render video embed or image */}
                            {selectedProject.videoEmbedUrl?.includes("instagram.com") ? (
                                <div className="w-full rounded-lg overflow-hidden">
                                    <blockquote
                                        className="instagram-media"
                                        data-instgrm-permalink={selectedProject.videoEmbedUrl}
                                        data-instgrm-version="14"
                                        style={{ width: '100%', maxWidth: '540px', margin: '0 auto' }}
                                    />
                                </div>
                            ) : selectedProject.videoEmbedUrl ? (
                                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full rounded-lg border-none"
                                        src={selectedProject.videoEmbedUrl}
                                        title={selectedProject.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto rounded-lg shadow-md mb-4"
                                />
                            )}
                        </div>

                        <div className="md:w-1/2 text-gray-800 text-left">
                            <h3 id="modal-title" className="text-3xl font-bold mb-3 text-gray-900">
                                {selectedProject.title}
                            </h3>
                            <p id="modal-description" className="text-lg mb-4 leading-relaxed">
                                {selectedProject.description}
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                                <p className="font-semibold text-gray-700 mb-2">Project Impact:</p>
                                <p className="text-purple-600 font-medium text-lg">{selectedProject.impact}</p>
                            </div>
                            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                                View Full Case Study
                            </button>
                        </div>
                    </>
                )}
            </Modal>

        </section>
    );
});

export default PortfolioSection;