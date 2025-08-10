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

        {/* User Info */}
        <div className="flex items-center gap-4">
          <OptimizedAvatar 
            src={image}
            alt={name}
            name={name}
            className="w-12 h-12 border-2 border-white/40"
            fallbackType="initials"
          />
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-white/70">
              {position} • {organization}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
