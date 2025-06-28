// src/VideoProductionWebsite.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react'; // Only import what's used here

// Import all sub-components
import HeroSection from '../../../organisms/Videoproduction/HeroSection'
import StatsSection from '../../../organisms/Videoproduction/StatsSection';
import ServicesSection from '../../../organisms/Videoproduction/ServicesSection'; // This includes the AI infographic now
import CtaSection from '../../../organisms/Videoproduction/CtaSection';

import MessageBox from '../../../organisms/Videoproduction/MessageBox';
import PortfolioSection from '../../../organisms/Videoproduction/PortfolioSection'; // Importing PortfolioSection

import { floatingVariants } from '../../../../utils/framerVariants'; // Import specific variant functions


const VideoProduction = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [messageBoxVisible, setMessageBoxVisible] = useState(false);
    const [messageBoxContent, setMessageBoxContent] = useState('');

    // Refs for smooth scrolling
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const { scrollY } = useScroll();

    // Define header opacity directly in this component
    const headerOpacityValue = useTransform(scrollY, [0, 100], [1, 0.9]);

    // Mouse tracking for interactive elements
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouseX.set(clientX);
            mouseY.set(clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Function to show custom message box
    const showMessage = (message) => {
        setMessageBoxContent(message);
        setMessageBoxVisible(true);
    };

    // Function to hide custom message box
    const hideMessageBox = () => {
        setMessageBoxVisible(false);
        setMessageBoxContent('');
    };

    // Function for smooth scrolling
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 overflow-x-hidden relative">
            {/* Animated Background Elements - Lighter for the new theme */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-300/20 to-teal-300/20 rounded-full blur-xl"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
            </div>

            {/* Custom Cursor Follower */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-70"
                style={{
                    x: mouseXSpring,
                    y: mouseYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />

            
        

            {/* Main Content Sections */}
            <HeroSection
                scrollToPortfolio={() => scrollToSection(portfolioRef)}
                scrollY={scrollY}
            />
            <StatsSection />
            <ServicesSection ref={servicesRef} />
            <PortfolioSection ref={portfolioRef} /> {/* Portfolio Section is now fully implemented */}
                {/* About Section is now fully implemented */}
            <CtaSection scrollY={scrollY} />
        

            <MessageBox isVisible={messageBoxVisible} content={messageBoxContent} onClose={hideMessageBox} />
        </div>
    );
};




export default VideoProduction;