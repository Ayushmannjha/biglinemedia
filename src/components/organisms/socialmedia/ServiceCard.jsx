import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, color, features, delay }) => {
  return (
    <div
      className="relative h-full w-full"
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {/* Inner zoomable wrapper */}
      <div
        className="group relative h-full w-full p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden transform-gpu transition-transform duration-500 will-change-transform hover:scale-[1.03] z-10"
      >
        {/* Subtle animated gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
        ></div>

        <div className="relative z-10">
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${color} p-5 mb-6 group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-full h-full text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
            {description}
          </p>

          {/* Feature list */}
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow icon on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <ArrowRight className="w-5 h-5 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
