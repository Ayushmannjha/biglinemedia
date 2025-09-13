// src/components/molecules/TestimonialCard.jsx
import { motion } from 'framer-motion';
import OptimizedAvatar from '../common/OptimizedAvatar';

const TestimonialCard = ({ name, position, organization, quote, image, rating, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Gradient Border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Quote */}
        <p className="text-md italic mb-4 leading-relaxed">"{quote}"</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400' : 'text-white/30'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.967z" />
            </svg>
          ))}
        </div>

        {/* User Info - Enhanced Responsive Version */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="relative flex-shrink-0">
            {/* Main Avatar */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/40 shadow-lg">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
              
              {/* Image */}
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-cover object-center z-10 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.opacity = '0';
                  }}
                />
              )}
              
              {/* Initials Fallback */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg z-5">
                {name?.split(' ').map(word => word.charAt(0)).join('').substring(0, 2).toUpperCase() || '?'}
              </div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
            </div>
            
            {/* Verified Badge */}
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1 min-w-0 pt-1">
            <h4 className="font-semibold text-white truncate text-base md:text-lg leading-tight">
              {name}
            </h4>
            <p className="text-sm md:text-base text-white/80 truncate font-medium mt-0.5">
              {position}
            </p>
            {organization && (
              <p className="text-xs md:text-sm text-white/60 truncate mt-1">
                @ {organization}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
