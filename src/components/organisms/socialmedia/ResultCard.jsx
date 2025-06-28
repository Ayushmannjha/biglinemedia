import React from 'react';

const ResultCard = ({ icon: Icon, value, label, description, color, delay }) => {
  return (
    <div 
      className="group h-full transform transition-all duration-1000"
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col items-center text-center">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${color} p-5 mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;