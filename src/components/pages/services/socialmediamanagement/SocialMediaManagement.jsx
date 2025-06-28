import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '../../../organisms/socialmedia/SectionWrapper';
import HeroSection from '../../../organisms/socialmedia/HeroSection';
import ProblemSection from '../../../organisms/socialmedia/ProblemSection';
import ApproachSection from '../../../organisms/socialmedia/ApproachSection';
import ServicePillarsSection from '../../../organisms/socialmedia/ServicePillarsSection';
import ResultsSection from '../../../organisms/socialmedia/ResultsSection';
import TestimonialSection from '../../../organisms/socialmedia/TestimonialSection';     
import CallToActionSection from '../../../organisms/socialmedia/CallToActionSection';
import useMousePosition from '../../../../hooks/useMousePosition';
//import "./App.css"; // Assuming you have a CSS file for styles


const SocialMediaManagement = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Custom hook for mouse position
  const mousePosition = useMousePosition();

  // Callback to set section ref
  const setSectionRef = useCallback((el, index) => {
    sectionRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.section);
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  const sectionsData = [
    { id: 'hero', component: HeroSection, dataIndex: 0 },
    { id: 'problem', component: ProblemSection, dataIndex: 1 },
    { id: 'approach', component: ApproachSection, dataIndex: 2 },
    { id: 'services', component: ServicePillarsSection, dataIndex: 3 },
    { id: 'results', component: ResultsSection, dataIndex: 4 },
    { id: 'testimonials', component: TestimonialSection, dataIndex: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1.5 : 1})`
        }}
      />

      {/* Journey Progress Indicator */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="relative">
          <div className="w-1 h-96 bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-full"></div>
          {sectionsData.slice(0, 5).map((_, index) => ( // Show 5 dots for the main sections
            <div
              key={index}
              className={`absolute w-4 h-4 rounded-full border-2 transition-all duration-500 -left-1.5 ${
                activeSection >= index 
                  ? 'bg-purple-400 border-purple-400 shadow-lg shadow-purple-400/50 scale-125' 
                  : 'bg-slate-900 border-purple-400/50 hover:scale-110'
              }`}
              style={{ top: `${index * 20}%` }}
            >
              {activeSection >= index && (
                <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {sectionsData.map((section, index) => {
        const Comp = section.component;
        return (
          <SectionWrapper 
            key={section.id}
            sectionId={index}
            setRef={(el) => setSectionRef(el, index)}
            isActive={activeSection === index} // Pass active state for section-specific animations
          >
            <Comp />
          </SectionWrapper>
        );
      })}
      
      <CallToActionSection />
     
    </div>
  );
};

export default SocialMediaManagement;