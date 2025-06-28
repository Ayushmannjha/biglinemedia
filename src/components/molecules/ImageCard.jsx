import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImageSwiperCard = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${photos[currentIndex].gradient} opacity-90`} />

      {/* Image Container */}
      <div className="relative w-full h-full">
        <img
          src={photos[currentIndex].src}
          alt={photos[currentIndex].title}
          className="w-full h-full object-cover mix-blend-overlay"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.h3
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold mb-2"
          >
            {photos[currentIndex].title}
          </motion.h3>
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-200"
          >
            {photos[currentIndex].description}
          </motion.p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwiperCard;
