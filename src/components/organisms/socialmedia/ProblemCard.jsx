import React from 'react';

const ProblemCard = ({ icon: Icon, title, stat, description, color, animationDelay }) => {
  return (
    <div 
      className={`group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 animate-slide-in-bottom`}
      style={{ animationDelay: animationDelay }}
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <div className="text-3xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
        {stat}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ProblemCard;