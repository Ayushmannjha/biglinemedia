import React, { useState, useEffect } from 'react';

const SectionWrapper = ({ children, sectionId, setRef, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    }
    // Optionally, reset isVisible to false if you want the animation to replay on re-entry
    // else {
    //   setIsVisible(false);
    // }
  }, [isActive]);

  return (
    <section 
      ref={setRef}
      data-section={sectionId}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;