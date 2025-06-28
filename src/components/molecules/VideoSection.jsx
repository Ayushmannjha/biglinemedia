import React from 'react';

const VideoSection = ({
  videoSrc,
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
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full w-full bg-black/50">
        {overlayTitle && (
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-amber-300 leading-tight">
            {overlayTitle}
          </h1>
        )}
        {overlaySubtitle && (
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl text-amber-300 leading-relaxed">
            {overlaySubtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default VideoSection;
