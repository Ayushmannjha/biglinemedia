import React, { useState } from 'react';
import { useImageValidator, generateOptimizedImageUrl } from '../../hooks/useImagePreloader';

const OptimizedAvatar = ({ 
  src, 
  alt, 
  name,
  className = "w-12 h-12", 
  fallbackType = 'initials', // 'initials' or 'placeholder'
  optimizeImage = true
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Get optimized image URL
  const optimizedSrc = optimizeImage && src ? generateOptimizedImageUrl(src, {
    width: 150,
    height: 150,
    fit: 'crop',
    crop: 'face'
  }) : src;

  // Validate image URL
  const { isValid: isImageValid, isLoading } = useImageValidator(optimizedSrc);

  // Generate initials from name
  const generateInitials = (fullName) => {
    if (!fullName) return '??';
    return fullName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Generate consistent color based on name
  const getAvatarColor = (name) => {
    if (!name) return 'bg-gradient-to-br from-gray-500 to-gray-600';
    
    const colors = [
      'bg-gradient-to-br from-blue-500 to-purple-600',
      'bg-gradient-to-br from-green-500 to-teal-600', 
      'bg-gradient-to-br from-orange-500 to-red-600',
      'bg-gradient-to-br from-pink-500 to-rose-600',
      'bg-gradient-to-br from-indigo-500 to-blue-600',
      'bg-gradient-to-br from-purple-500 to-pink-600',
      'bg-gradient-to-br from-teal-500 to-cyan-600',
      'bg-gradient-to-br from-yellow-500 to-orange-600'
    ];
    
    // Generate consistent color based on name length and first character
    const index = (name.length + name.charCodeAt(0)) % colors.length;
    return colors[index];
  };

  // Render initials fallback
  const renderInitialsFallback = () => {
    const initials = generateInitials(name);
    const bgColor = getAvatarColor(name);
    
    return (
      <div 
        className={`${className} ${bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
        title={name}
      >
        {initials}
      </div>
    );
  };

  // Render placeholder fallback
  const renderPlaceholderFallback = () => {
    return (
      <div 
        className={`${className} bg-gray-300 rounded-full flex items-center justify-center`}
        title={name}
      >
        <svg 
          className="w-1/2 h-1/2 text-gray-500" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    );
  };

  // If image failed to load or is invalid, show fallback
  if (imageError || !optimizedSrc || isImageValid === false) {
    return fallbackType === 'initials' ? renderInitialsFallback() : renderPlaceholderFallback();
  }

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {(isLoading || !imageLoaded) && (
        <div className={`${className} bg-gray-200 animate-pulse rounded-full`} />
      )}
      
      {/* Actual image */}
      <img
        src={optimizedSrc}
        alt={alt || name}
        className={`${className} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } rounded-full object-cover border-2 border-white shadow-lg transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
        title={name}
      />
    </div>
  );
};

export default OptimizedAvatar;
