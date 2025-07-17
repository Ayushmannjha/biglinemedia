import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../../hooks/blogs/useIntersectionObserver'; // Adjust path if needed

const FadeInAnimation = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting && !isVisible) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay, isVisible]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'left': return 'translateX(30px)';
        case 'right': return 'translateX(-30px)';
        default: return 'translateY(30px)';
      }
    }
    return 'translateY(0px)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform()
      }}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation;