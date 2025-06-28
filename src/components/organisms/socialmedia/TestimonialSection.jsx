import React from 'react';
import { Users, ArrowRight, Star as StarIcon } from 'lucide-react';
import { testimonialsData } from '../../../assets/data/ScoialMediaData';
import TestimonialCard from './TestimonialCard'; // New sub-component

const TestimonialSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Hear directly from the brands and individuals we've empowered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} delay={index * 150} />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
          <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Read More Success Stories
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;