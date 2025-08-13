// src/components/cards/CityCard.jsx
  import React from 'react';

  const CityCard = ({ imageSrc, title, category }) => {
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-70 object-cover"
          />
          <div className="bg-black bg-opacity-80 p-4 text-white">
            <p className="text-xs text-gray-300">{category}</p>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    );
  };

  export default CityCard;
