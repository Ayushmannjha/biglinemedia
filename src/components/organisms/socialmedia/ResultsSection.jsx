import React from 'react';
import { Star } from 'lucide-react';
import { resultsData } from '../../../assets/data/ScoialMediaData';
import ResultCard from './ResultCard'; // New sub-component

const ResultsSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl border border-green-500/30 backdrop-blur-sm mb-8 animate-pulse-glow">
          <Star className="w-16 h-16 text-green-400 mx-auto" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Tangible Transformation, Real Results
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Don't just take our word for it. Our data speaks volumes about the impact we deliver.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {resultsData.map((result, index) => (
          <ResultCard key={index} {...result} delay={index * 150} />
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-2xl border border-green-500/30 backdrop-blur-sm">
          <div className="text-green-400 text-sm font-medium">
            → We measure success by your growth and amplified presence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;