import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { approachPillars } from '../../../assets/data/ScoialMediaData';
import ApproachPillarCard from './ApproachPillarCard'; // New sub-component

const ApproachSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm mb-8 animate-float">
          <Rocket className="w-16 h-16 text-purple-400 mx-auto" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Revolutionary Approach
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          We combine cutting-edge AI technology, real-time trend analysis, and data-driven strategies 
          to create social media experiences that don't just follow trends – they set them.
        </p>
      </div>

      {/* Three-column approach pillars */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {approachPillars.map((item, index) => (
          <ApproachPillarCard key={index} {...item} animationDelay={`${index * 200}ms`} />
        ))}
      </div>

      {/* Process flow visualization */}
      <div className="relative">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">1</span>
              </div>
              <span className="text-sm text-purple-300">Analyze</span>
            </div>
            <ArrowRight className="text-purple-400" />
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">2</span>
              </div>
              <span className="text-sm text-blue-300">Create</span>
            </div>
            <ArrowRight className="text-blue-400" />
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">3</span>
              </div>
              <span className="text-sm text-cyan-300">Optimize</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;