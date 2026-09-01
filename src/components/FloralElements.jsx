import React from 'react';
import { motion } from 'framer-motion';
import leftUpFlower from '../assets/floral/left_up_flower.png';
import rightBottomFlower from '../assets/floral/right_bottom_flower.png';
import flower1 from '../assets/floral/individual_flower_1.png';
import flower2 from '../assets/floral/individual_flower_2.png';
import flower3 from '../assets/floral/individual_flower_3.png';
import { petal2, petal4, petal6, petal7, petal9, petal11 } from '../assets/petals';

// Realistic Floral Corner Component (specifically for fixed outer screen corners)
export const CornerFloral = ({ position = "top-left", className = "", size = "default" }) => {
  let imgSource = leftUpFlower;
  let transformClasses = "top-0 left-0";
  
  if (position === "top-left") {
    imgSource = leftUpFlower;
    transformClasses = "top-0 left-0";
  } else if (position === "top-right") {
    imgSource = leftUpFlower;
    transformClasses = "top-0 right-0 scale-x-[-1]";
  } else if (position === "bottom-right") {
    imgSource = rightBottomFlower;
    transformClasses = "bottom-0 right-0";
  } else if (position === "bottom-left") {
    imgSource = rightBottomFlower;
    transformClasses = "bottom-0 left-0 scale-x-[-1]";
  }

  const sizeClasses = {
    small: "w-16 sm:w-32 md:w-44",
    default: "w-20 xs:w-24 sm:w-44 md:w-60 lg:w-72",
    large: "w-24 xs:w-28 sm:w-52 md:w-68 lg:w-80",
  }[size] || "w-20 xs:w-24 sm:w-44 md:w-60 lg:w-72";

  return (
    <div
      className={`absolute pointer-events-none z-10 select-none ${transformClasses} ${sizeClasses} ${className}`}
    >
      <img
        src={imgSource}
        alt="Floral Corner"
        className="w-full h-auto object-contain filter drop-shadow-lg"
        loading="lazy"
        draggable="false"
      />
    </div>
  );
};

// Corner Accent for Cards/Containers using individual whole flowers
export const CornerFlowerAccent = ({ 
  position = "top-right", 
  variant = 1, 
  size = "md",
  className = "" 
}) => {
  const flowerMap = {
    1: flower1,
    2: flower2,
    3: flower3,
  };

  const selectedFlower = flowerMap[variant] || flower1;

  const positionClasses = {
    "top-right": "-top-3 sm:-top-5 -right-3 sm:-right-5 rotate-12",
    "top-left": "-top-3 sm:-top-5 -left-3 sm:-left-5 -rotate-12",
    "bottom-right": "-bottom-3 sm:-bottom-5 -right-3 sm:-right-5 rotate-45",
    "bottom-left": "-bottom-3 sm:-bottom-5 -left-3 sm:-left-5 -rotate-45",
  }[position] || "-top-4 -right-4";

  const sizeClasses = {
    sm: "w-10 sm:w-14 md:w-16",
    md: "w-12 xs:w-14 sm:w-20 md:w-24",
    lg: "w-16 xs:w-18 sm:w-26 md:w-30",
  }[size] || "w-12 sm:w-20";

  return (
    <div
      className={`absolute pointer-events-none z-20 select-none ${positionClasses} ${sizeClasses} ${className}`}
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        src={selectedFlower}
        alt="Flower Corner Accent"
        className="w-full h-auto object-contain filter drop-shadow-md"
        draggable="false"
      />
    </div>
  );
};

// Floating Falling Petals & Small Individual Blossoms in Background
export const FloatingPetals = () => {
  const floatingItems = [
    { id: 1, img: flower1, left: '6%', delay: 0, duration: 16, size: 22, opacity: 0.6 },
    { id: 2, img: petal2, left: '18%', delay: 4, duration: 18, size: 18, opacity: 0.7 },
    { id: 3, img: flower2, left: '38%', delay: 2, duration: 20, size: 20, opacity: 0.55 },
    { id: 4, img: petal6, left: '52%', delay: 7, duration: 17, size: 20, opacity: 0.65 },
    { id: 5, img: flower3, left: '68%', delay: 3, duration: 19, size: 22, opacity: 0.55 },
    { id: 6, img: petal9, left: '82%', delay: 5.5, duration: 16, size: 20, opacity: 0.7 },
    { id: 7, img: petal11, left: '94%', delay: 1, duration: 15, size: 16, opacity: 0.65 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: '-10%', x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, 15, -10, 10, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0, item.opacity, item.opacity * 1.1, item.opacity * 0.9, 0]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: item.left,
            width: item.size,
            height: item.size * 1.2,
          }}
        >
          <img
            src={item.img}
            alt="Floating Blossom"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
            draggable="false"
          />
        </motion.div>
      ))}
    </div>
  );
};

// Section Floral Header Divider
export const FloralHeaderOrnament = ({ className = "" }) => (
  <div className={`flex items-center justify-center my-2 sm:my-3 ${className}`}>
    <div className="flex items-center gap-2 sm:gap-3 w-full max-w-[240px] sm:max-w-xs justify-center">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-400/60 to-gold-400"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border border-gold-400 bg-navy-900/80 flex items-center justify-center">
        <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
      </div>
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400/80"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border border-gold-400 bg-navy-900/80 flex items-center justify-center">
        <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-400/60 to-gold-400"></div>
    </div>
  </div>
);
