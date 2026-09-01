import React from 'react';
import luxuryPattern from '../assets/luxury_pattern.png';

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Base Soft Gradient Layer */}
      <div className="absolute inset-0 soft-gradient-backdrop"></div>

      {/* Luxury Pattern with Soft Transparency & Blend */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-luminosity"
        style={{
          backgroundImage: `url(${luxuryPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '240px 240px',
        }}
      ></div>

      {/* Soft Radial Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-dusty-500/15 via-gold-500/5 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -left-40 w-[35rem] h-[35rem] bg-dusty-600/12 rounded-full blur-[140px]"></div>
      <div className="absolute top-3/4 -right-40 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[140px]"></div>
      
      {/* Top and Bottom Vignette for extra smoothness */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050c17]/90 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050c17]/90 to-transparent"></div>
    </div>
  );
};
