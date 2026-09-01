import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { petalImages } from '../assets/petals';

export const PetalShower = ({ isActive }) => {
  // Generate random particles once per trigger
  const particles = useMemo(() => {
    if (!isActive) return [];
    
    return Array.from({ length: 32 }).map((_, index) => {
      const petalImg = petalImages[index % petalImages.length];
      const startX = Math.random() * 96 + 2; // 2% to 98%
      const startY = Math.random() * 20 - 15; // -15vh to 5vh
      const endY = 105 + Math.random() * 15; // 105vh to 120vh
      
      // Horizontal drift swing
      const drift1 = (Math.random() - 0.5) * 80;
      const drift2 = (Math.random() - 0.5) * 120;
      const drift3 = (Math.random() - 0.5) * 80;
      
      const duration = 3.5 + Math.random() * 2.5; // 3.5s to 6s
      const delay = Math.random() * 0.7; // 0 to 0.7s
      const size = 28 + Math.random() * 28; // 28px to 56px
      const rotateInit = Math.random() * 360;
      const rotateEnd = rotateInit + (Math.random() > 0.5 ? 360 : -360) + Math.random() * 180;
      const rotateZ = (Math.random() - 0.5) * 45;

      return {
        id: index,
        img: petalImg,
        startX,
        startY,
        endY,
        drift1,
        drift2,
        drift3,
        duration,
        delay,
        size,
        rotateInit,
        rotateEnd,
        rotateZ,
      };
    });
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                top: `${p.startY}vh`,
                left: `${p.startX}vw`,
                opacity: 0,
                scale: 0.6,
                rotate: p.rotateInit,
                rotateX: 0,
                rotateY: 0,
              }}
              animate={{
                top: `${p.endY}vh`,
                left: [
                  `${p.startX}vw`,
                  `calc(${p.startX}vw + ${p.drift1}px)`,
                  `calc(${p.startX}vw + ${p.drift2}px)`,
                  `calc(${p.startX}vw + ${p.drift3}px)`,
                ],
                opacity: [0, 0.95, 1, 0.85, 0],
                scale: [0.6, 1.05, 1, 0.95, 0.8],
                rotate: [p.rotateInit, p.rotateInit + 120, p.rotateInit + 240, p.rotateEnd],
                rotateX: [0, 60, 180, 240, 360],
                rotateY: [0, 45, 180, 270, 360],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.size,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={p.img}
                alt="Falling Petal"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] pointer-events-none"
                draggable="false"
              />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
