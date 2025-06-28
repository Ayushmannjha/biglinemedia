import React from 'react';
import { Rocket, ArrowRight, MessageCircle } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 opacity-70"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-12">
          Elevate your brand with data-driven strategies and AI-powered creativity. 
          Let's build your social media legacy together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Get a Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group inline-flex items-center gap-2 text-purple-200 border border-purple-500/50 px-10 py-5 rounded-full text-xl font-semibold hover:border-white hover:text-white transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;