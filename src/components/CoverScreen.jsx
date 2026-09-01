import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Sparkles, Calendar, MapPin } from 'lucide-react';
import { BismillahCalligraphy, DecorativeMandala } from './IslamicOrnaments';
import { CornerFloral, CornerFlowerAccent } from './FloralElements';
import luxuryPattern from '../assets/luxury_pattern.png';
import cloud2 from '../assets/clouds/cloud_2.png';
import cloud8 from '../assets/clouds/cloud_8.png';

export const CoverScreen = ({ guestName, onOpenInvitation, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    onOpenInvitation();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02, 
            y: -20,
            transition: { duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.1 }
          }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#060e1a] overflow-hidden select-none p-3 sm:p-4"
        >
          {/* Base Soft Gradient Layer */}
          <div className="absolute inset-0 soft-gradient-backdrop"></div>

          {/* Luxury Pattern with Soft Transparency & Blend */}
          <div
            className="absolute inset-0 opacity-[0.12] sm:opacity-[0.15] mix-blend-luminosity"
            style={{
              backgroundImage: `url(${luxuryPattern})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '220px 220px',
            }}
          ></div>
          
          {/* Outer Screen Corner Floral Bouquets */}
          <CornerFloral position="top-left" size="default" className="opacity-60 sm:opacity-80" />
          <CornerFloral position="top-right" size="default" className="opacity-60 sm:opacity-80" />
          <CornerFloral position="bottom-left" size="default" className="opacity-60 sm:opacity-80" />
          <CornerFloral position="bottom-right" size="default" className="opacity-60 sm:opacity-80" />

          {/* Ambient Clouds on Cover Screen */}
          <div className="absolute -top-10 left-0 w-60 sm:w-96 opacity-20 sm:opacity-25 pointer-events-none animate-float-slow">
            <img src={cloud2} alt="Ambient Cloud" className="w-full h-auto object-contain" draggable="false" />
          </div>
          <div className="absolute -bottom-10 right-0 w-64 sm:w-[32rem] opacity-25 sm:opacity-30 pointer-events-none animate-float-medium">
            <img src={cloud8} alt="Ambient Cloud" className="w-full h-auto object-contain" draggable="false" />
          </div>

          {/* Soft glowing ambient orbs */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[32rem] sm:h-[32rem] bg-dusty-500/15 sm:bg-dusty-500/20 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none"></div>
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[32rem] sm:h-[32rem] bg-gold-500/10 sm:bg-gold-500/15 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none"></div>

          {/* Decorative Islamic Mandalas (hidden on very small phones to avoid clutter) */}
          <div className="hidden sm:block absolute top-1/2 -left-20 -translate-y-1/2 opacity-20">
            <DecorativeMandala className="w-56 h-56 text-gold-400 animate-spin-slow" />
          </div>
          <div className="hidden sm:block absolute top-1/2 -right-20 -translate-y-1/2 opacity-20">
            <DecorativeMandala className="w-56 h-56 text-gold-400 animate-spin-slow" />
          </div>

          {/* Main Glass Card with Individual Flower Corner Accents */}
          <motion.div
            animate={isOpening ? { scale: 0.97, opacity: 0.8 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg p-4 xs:p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl glass-card border border-gold-400/30 text-center shadow-luxury flex flex-col items-center justify-between"
          >
            {/* Card Corner Flower Accents */}
            <CornerFlowerAccent position="top-right" variant={1} size="sm" />
            <CornerFlowerAccent position="bottom-left" variant={2} size="sm" />

            {/* Subtle Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-navy-800/90 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-2 sm:mb-3 shadow-inner"
            >
              <Sparkles size={11} className="text-gold-400" />
              <span>Walimatul 'Ursy</span>
              <Sparkles size={11} className="text-gold-400" />
            </motion.div>

            {/* Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              <BismillahCalligraphy className="w-44 sm:w-60 text-gold-400 my-0.5 sm:my-1" />
            </motion.div>

            {/* Invitation Pre-heading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-dusty-300/90 font-light mt-1 sm:mt-2"
            >
              The Wedding Invitation Of
            </motion.p>

            {/* Bride & Groom Main Titles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="my-2 sm:my-4"
            >
              <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-slate-100 font-bold tracking-wide">
                Nur Faizah
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3 my-0.5 sm:my-1 text-gold-400">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
                <span className="font-script text-2xl sm:text-4xl text-gold-300">&</span>
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
              </div>
              <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-slate-100 font-bold tracking-wide">
                Ahmad Fiki
              </h1>
            </motion.div>

            {/* Date and Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-dusty-200/90 mb-3 sm:mb-5 bg-navy-900/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-dusty-700/50"
            >
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-gold-400" />
                Minggu, 4 Okt 2026
              </span>
              <span className="text-gold-400/60">•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-gold-400" />
                Bondowoso
              </span>
            </motion.div>

            {/* Guest Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full bg-navy-900/90 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-gold-400/25 mb-3 sm:mb-5 shadow-inner text-center relative"
            >
              <p className="text-[10px] sm:text-xs text-dusty-300 font-light tracking-wider">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </p>
              <h3 className="text-base sm:text-xl font-serif font-semibold text-gold-300 mt-1 truncate capitalize">
                {guestName || "Tamu Undangan"}
              </h3>
              <p className="text-[10px] text-slate-400 mt-0.5 font-light italic">
                *Mohon maaf bila ada kesalahan penulisan nama/gelar
              </p>
            </motion.div>

            {/* Open Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={handleOpen}
              id="btn-buka-undangan"
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-900 font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 flex items-center justify-center gap-2 transition-all duration-300 group cursor-pointer"
            >
              <MailOpen size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Buka Undangan</span>
            </motion.button>

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
