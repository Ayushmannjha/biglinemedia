import React from 'react';

const VideoSection = ({
  video,
  overlayTitle,
  overlaySubtitle,
  children,
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Responsive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      
    </div>
  );
};

export default VideoSection;
