import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, title, quote, avatar, delay }) => {
  return (
    <div 
      className="h-full transform transition-all duration-1000"
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-purple-300 text-sm">{title}</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg italic leading-relaxed mb-6 flex-grow">
          "{quote}"
        </p>
        <div className="flex items-center gap-1 text-purple-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;