import React from 'react';
import { CheckCircle } from 'lucide-react';

const ApproachPillarCard = ({ icon: Icon, title, description, color, features, animationDelay }) => {
  return (
    <div className={`group relative animate-slide-in-bottom`} style={{ animationDelay: animationDelay }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} p-4 mx-auto mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachPillarCard;