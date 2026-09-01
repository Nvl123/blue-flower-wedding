import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import cloud2 from '../assets/clouds/cloud_2.png';
import cloud4 from '../assets/clouds/cloud_4.png';
import cloud8 from '../assets/clouds/cloud_8.png';
import cloud10 from '../assets/clouds/cloud_10.png';
import cloud11 from '../assets/clouds/cloud_11.png';
import ringImg from '../assets/ring.png';

export const CloudRisingTransition = ({ isTriggered, onAnimationComplete }) => {
  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onAnimationComplete}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none"
        >
          {/* Thin, Soft Translucent White-Gold Mist Layer behind clouds */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ 
              y: ['100%', '0%', '-115%'],
              opacity: [0, 0.45, 0.55, 0.2, 0]
            }}
            transition={{ 
              duration: 2.4, 
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.4, 1]
            }}
            className="absolute inset-0 w-full h-[140vh] flex flex-col justify-end pointer-events-none"
          >
            {/* Top feathered mist */}
            <div className="w-full h-56 bg-gradient-to-t from-white/40 via-white/20 to-transparent"></div>
            {/* Soft middle translucent mist */}
            <div className="w-full h-full bg-gradient-to-b from-white/30 via-sky-100/20 to-transparent"></div>
          </motion.div>

          {/* Layer 1: Foreground Dense Clouds (Rising up from bottom) */}
          <motion.div
            initial={{ y: '100vh', opacity: 1 }}
            animate={{ y: '-135vh', opacity: [1, 1, 1, 0.85, 0] }}
            transition={{ 
              duration: 2.3, 
              ease: [0.65, 0, 0.35, 1],
              delay: 0.05 
            }}
            className="absolute inset-x-0 w-full flex justify-between items-end"
          >
            <img
              src={cloud8}
              alt="Rising Cloud"
              className="w-[42rem] sm:w-[56rem] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] -translate-x-12 opacity-95"
              draggable="false"
            />
            <img
              src={cloud4}
              alt="Rising Cloud"
              className="w-[45rem] sm:w-[60rem] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] translate-x-16 opacity-95"
              draggable="false"
            />
          </motion.div>

          {/* Glowing Wedding Ring Centerpiece Transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{
              opacity: [0, 0.95, 1, 0.9, 0],
              scale: [0.7, 1.05, 1.08, 1.15, 1.25],
              y: [40, 0, -15, -45, -90],
              rotate: [0, 5, -5, 3, 0],
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: [0.4, 0, 0.2, 1],
              delay: 0.15,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Radial Golden Light Flare & Pulsing Aura */}
              <motion.div
                animate={{
                  scale: [0.8, 1.3, 1.5, 1.1],
                  opacity: [0.3, 0.9, 0.7, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: 0,
                  ease: "easeInOut",
                }}
                className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-amber-400/50 via-gold-300/40 to-yellow-100/20 filter blur-3xl"
              />

              {/* Radiant Light Rays / Glow Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-gold-300/30 opacity-75 animate-pulse"
              />
              <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-gold-400/40 opacity-60" />

              {/* Shimmering Sparkles around the Ring */}
              <motion.div
                animate={{ scale: [0.5, 1.2, 0.8], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="absolute -top-6 -right-6 text-gold-300"
              >
                <Sparkles size={32} className="filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
              </motion.div>
              <motion.div
                animate={{ scale: [0.4, 1, 0.6], opacity: [0, 0.9, 0] }}
                transition={{ duration: 1.7, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-6 text-amber-200"
              >
                <Sparkles size={26} className="filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
              </motion.div>

              {/* Wedding Ring Image */}
              <img
                src={ringImg}
                alt="Glowing Wedding Ring"
                className="w-40 sm:w-56 md:w-64 h-auto object-contain filter drop-shadow-[0_0_35px_rgba(243,220,138,0.85)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                draggable="false"
              />
            </div>
          </motion.div>

          {/* Layer 2: Middle Volumetric Clouds */}
          <motion.div
            initial={{ y: '105vh', opacity: 1 }}
            animate={{ y: '-140vh', opacity: [1, 1, 1, 0.8, 0] }}
            transition={{ 
              duration: 2.4, 
              ease: [0.65, 0, 0.35, 1],
              delay: 0.12 
            }}
            className="absolute inset-x-0 w-full flex justify-center items-end"
          >
            <img
              src={cloud10}
              alt="Rising Cloud"
              className="w-[50rem] sm:w-[70rem] h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] scale-110 opacity-90"
              draggable="false"
            />
          </motion.div>

          {/* Layer 3: Base Cloud Cushion */}
          <motion.div
            initial={{ y: '110vh', opacity: 1 }}
            animate={{ y: '-145vh', opacity: [1, 1, 1, 0.75, 0] }}
            transition={{ 
              duration: 2.5, 
              ease: [0.65, 0, 0.35, 1],
              delay: 0.18 
            }}
            className="absolute inset-x-0 w-full flex justify-around items-end"
          >
            <img
              src={cloud11}
              alt="Rising Cloud"
              className="w-[55rem] sm:w-[80rem] h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] opacity-90"
              draggable="false"
            />
            <img
              src={cloud2}
              alt="Rising Cloud"
              className="w-[48rem] sm:w-[65rem] h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] opacity-85"
              draggable="false"
            />
          </motion.div>

          {/* Soft Golden Shimmer Flash at the moment of reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.4, 0.15, 0] }}
            transition={{ duration: 2.0, ease: "easeInOut", delay: 0.15 }}
            className="absolute inset-0 bg-gradient-to-t from-gold-300/25 via-gold-400/15 to-transparent pointer-events-none"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
