import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../../../assets/data/ScoialMediaData';
import ServiceCard from './ServiceCard'; // New sub-component

const ServicePillarsSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Our Service Pillars
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Six core competencies that transform your social media from ordinary to extraordinary
        </p>
      </div>

      {/* Services in 2x3 grid with staggered animations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index} 
            {...service} 
            delay={index * 150} // Staggered animation
          />
        ))}
      </div>Y

      {/* Call to action for services */}
      <div className="text-center mt-16">
        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Discuss Your Needs
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServicePillarsSection;