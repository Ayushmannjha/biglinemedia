import React from 'react';

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="text-center group">
      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
};

export default StatCard;