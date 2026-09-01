import React from 'react';

export const BismillahCalligraphy = ({ className = "w-44 sm:w-64 text-gold-400" }) => (
  <div className={`flex justify-center my-2 sm:my-3 ${className}`}>
    <svg viewBox="0 0 500 120" className="w-full h-auto fill-current opacity-95 hover:opacity-100 transition-opacity">
      <path d="M250 15 C 220 15, 180 25, 150 45 C 130 58, 110 70, 80 72 C 60 73, 40 68, 20 58 C 30 70, 50 82, 80 82 C 120 82, 150 62, 180 48 C 210 34, 240 28, 270 28 C 310 28, 350 40, 390 60 C 430 80, 460 85, 485 85 C 470 70, 440 60, 410 48 C 360 28, 300 15, 250 15 Z" fill="currentColor" opacity="0.3"/>
      {/* Stylized Arabic calligraphy text */}
      <text
        x="50%"
        y="65%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="font-arabic font-bold text-3xl fill-current tracking-wider"
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </text>
    </svg>
  </div>
);

export const IslamicArchFrame = ({ children, className = "" }) => (
  <div className={`relative p-4 xs:p-5 sm:p-8 rounded-t-[3rem] sm:rounded-t-[4rem] rounded-b-2xl border border-gold-400/30 bg-navy-800/80 backdrop-blur-md shadow-luxury ${className}`}>
    {/* Arch top accent */}
    <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-5 sm:h-6 border-t-2 border-l-2 border-r-2 border-gold-400/50 rounded-t-full flex items-center justify-center">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 animate-pulse"></div>
    </div>
    
    {/* Corner Motifs */}
    <div className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t border-l border-gold-400/40"></div>
    <div className="absolute top-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t border-r border-gold-400/40"></div>
    <div className="absolute bottom-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b border-l border-gold-400/40"></div>
    <div className="absolute bottom-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b border-r border-gold-400/40"></div>

    {children}
  </div>
);

export const GoldDivider = ({ title = "", subtitle = "", className = "" }) => (
  <div className={`flex flex-col items-center justify-center my-4 sm:my-6 text-center px-1 ${className}`}>
    {subtitle && (
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-400/90 font-medium mb-1">
        {subtitle}
      </span>
    )}
    <div className="flex items-center gap-2 sm:gap-3 w-full max-w-[260px] sm:max-w-xs justify-center">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-400/60 to-gold-400"></div>
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 border border-gold-400 bg-navy-900/80 flex items-center justify-center">
        <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
      </div>
      {title && (
        <h3 className="font-serif text-lg xs:text-xl sm:text-2xl text-slate-100 px-1 sm:px-2 font-medium">
          {title}
        </h3>
      )}
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 border border-gold-400 bg-navy-900/80 flex items-center justify-center">
        <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-400/60 to-gold-400"></div>
    </div>
  </div>
);

export const DecorativeMandala = ({ className = "w-24 h-24 text-gold-400/20" }) => (
  <svg viewBox="0 0 100 100" className={`fill-none stroke-current stroke-1 ${className}`}>
    <circle cx="50" cy="50" r="45" strokeDasharray="2 3" />
    <circle cx="50" cy="50" r="38" />
    <circle cx="50" cy="50" r="28" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="16" />
    {/* 8-point geometric star */}
    <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
    <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
  </svg>
);
