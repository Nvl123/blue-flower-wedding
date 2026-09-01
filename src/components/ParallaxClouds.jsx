import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import cloud2 from '../assets/clouds/cloud_2.png';
import cloud7 from '../assets/clouds/cloud_7.png';
import cloud8 from '../assets/clouds/cloud_8.png';
import cloud11 from '../assets/clouds/cloud_11.png';

import flower1 from '../assets/floral/individual_flower_1.png';
import flower2 from '../assets/floral/individual_flower_2.png';
import flower3 from '../assets/floral/individual_flower_3.png';
import ringImg from '../assets/ring.png';

export const ParallaxClouds = () => {
  const { scrollY } = useScroll();
  
  // Parallax scroll speeds for different layers
  const yRing = useTransform(scrollY, [0, 4000], [0, 500]);
  const yUpper = useTransform(scrollY, [0, 4000], [0, 420]);
  const yMid = useTransform(scrollY, [0, 4000], [0, 280]);
  const yLower = useTransform(scrollY, [0, 4000], [0, 180]);

  // Rotations for parallax depth
  const rotateRing = useTransform(scrollY, [0, 4000], [-8, 25]);
  const rotate1 = useTransform(scrollY, [0, 4000], [0, 40]);
  const rotate2 = useTransform(scrollY, [0, 4000], [0, -35]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 0. Parallax Wedding Ring in the Background (Upper / Hero & Quran layer) */}
      <motion.div
        style={{ y: yRing, rotate: rotateRing }}
        className="absolute top-[14%] sm:top-[16%] left-1/2 -translate-x-1/2 w-48 xs:w-56 sm:w-80 md:w-96 pointer-events-none flex items-center justify-center opacity-30 sm:opacity-40"
      >
        {/* Soft Golden Backlight Aura */}
        <div className="absolute w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-amber-400/20 via-gold-400/15 to-transparent filter blur-xl sm:blur-2xl animate-pulse" />
        
        {/* Decorative Golden Orbit Ring */}
        <div className="absolute w-44 h-44 sm:w-72 sm:h-72 rounded-full border border-gold-400/20 border-dashed animate-spin-slow opacity-50 sm:opacity-60" />

        {/* Wedding Ring Asset */}
        <img
          src={ringImg}
          alt="Parallax Wedding Ring"
          className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(243,220,138,0.35)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
          draggable="false"
        />
      </motion.div>

      {/* 1. Subtle Upper Cloud Puff (Hero / Quran section) */}
      <motion.div
        style={{ y: yUpper }}
        className="absolute top-[22%] -right-12 sm:right-6 w-56 sm:w-96 opacity-20 sm:opacity-25 filter drop-shadow-md animate-float-slow"
      >
        <img src={cloud7} alt="Floating Cloud" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* Floating Individual Flower 1 */}
      <motion.div
        style={{ y: yUpper, rotate: rotate1 }}
        className="absolute top-[25%] right-4 sm:right-24 w-14 sm:w-28 opacity-25 sm:opacity-30 filter drop-shadow-md"
      >
        <img src={flower1} alt="Floating Flower" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* 2. Subtle Midground Cloud (Mempelai / Acara section) */}
      <motion.div
        style={{ y: yMid }}
        className="absolute top-[50%] -left-16 sm:left-4 w-60 sm:w-[28rem] opacity-15 sm:opacity-20 filter drop-shadow-md animate-float-medium"
      >
        <img src={cloud2} alt="Floating Cloud" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* Floating Individual Flower 2 */}
      <motion.div
        style={{ y: yMid, rotate: rotate2 }}
        className="absolute top-[54%] left-4 sm:left-20 w-14 sm:w-28 opacity-20 sm:opacity-25 filter drop-shadow-md"
      >
        <img src={flower2} alt="Floating Flower" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* 3. Subtle Lower Cloud (Galeri / RSVP section) */}
      <motion.div
        style={{ y: yLower }}
        className="absolute top-[75%] -right-14 sm:right-8 w-60 sm:w-[30rem] opacity-20 sm:opacity-25 filter drop-shadow-md animate-float-slow"
      >
        <img src={cloud8} alt="Floating Cloud" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* Floating Individual Flower 3 */}
      <motion.div
        style={{ y: yLower, rotate: rotate1 }}
        className="absolute top-[78%] right-4 sm:right-28 w-14 sm:w-28 opacity-20 sm:opacity-25 filter drop-shadow-md"
      >
        <img src={flower3} alt="Floating Flower" className="w-full h-auto object-contain" draggable="false" />
      </motion.div>

      {/* 4. Horizon Cloud Base at Footer */}
      <div className="absolute bottom-0 inset-x-0 w-full flex justify-center opacity-20 sm:opacity-25 pointer-events-none">
        <img src={cloud11} alt="Horizon Cloud" className="w-[36rem] sm:w-[65rem] h-auto object-contain" draggable="false" />
      </div>

    </div>
  );
};
