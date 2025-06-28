import React from 'react';
import { Target } from 'lucide-react';
import { problemPoints } from '../../../assets/data/ScoialMediaData';
import ProblemCard from './ProblemCard'; // New sub-component

const ProblemSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/30 backdrop-blur-sm mb-8 animate-pulse-glow">
          <Target className="w-16 h-16 text-red-400 mx-auto" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          The Social Media Challenge
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          In today's fragmented digital landscape, brands struggle with inconsistent messaging, 
          low engagement rates, and missed viral opportunities.
        </p>
      </div>
      
      {/* Problems in column layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {problemPoints.map((item, index) => (
          <ProblemCard 
            key={index} 
            {...item} 
            animationDelay={`${index * 100}ms`} 
          />
        ))}
      </div>

      {/* Pain points visualization */}
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl border border-red-500/30 backdrop-blur-sm">
          <div className="text-red-400 text-sm font-medium">
            → Traditional social media management is reactive, generic, and fails to harness modern opportunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;