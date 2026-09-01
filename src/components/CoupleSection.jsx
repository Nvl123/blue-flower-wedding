import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';
import { GoldDivider, IslamicArchFrame, DecorativeMandala } from './IslamicOrnaments';
import { CornerFlowerAccent } from './FloralElements';

export const CoupleSection = ({ couple }) => {
  return (
    <section id="mempelai" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      
      {/* Background Decorative Mandala */}
      <div className="absolute top-10 right-0 -mr-20 opacity-15 pointer-events-none hidden sm:block">
        <DecorativeMandala className="w-80 h-80 text-gold-400" />
      </div>
      <div className="absolute bottom-10 left-0 -ml-20 opacity-15 pointer-events-none hidden sm:block">
        <DecorativeMandala className="w-80 h-80 text-gold-400" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Salam & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <span className="font-arabic text-xl sm:text-3xl text-gold-300 block mb-2 sm:mb-3">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </span>
          <GoldDivider subtitle="Maha Suci Allah SWT" title="Kedua Mempelai" />
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto font-light leading-relaxed mt-2 px-2">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:
          </p>
        </motion.div>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
          
          {/* Mempelai Wanita (Nur Faizah) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center relative"
          >
            <IslamicArchFrame className="w-full flex-1 flex flex-col items-center text-center relative">
              {/* Individual Flower Corner Accent */}
              <CornerFlowerAccent position="top-right" variant={1} size="sm" />

              {/* Photo Frame */}
              <div className="relative w-36 h-48 xs:w-44 xs:h-56 sm:w-48 sm:h-60 rounded-t-[2.8rem] sm:rounded-t-[3.5rem] rounded-b-2xl overflow-hidden border-2 border-gold-400/50 p-1 mb-4 sm:mb-5 group shadow-lg">
                <img
                  src={couple.bride.image}
                  alt={couple.bride.fullName}
                  className="w-full h-full object-cover rounded-t-[2.6rem] sm:rounded-t-[3.3rem] rounded-b-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Names & Parents */}
              <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-gold-200 mb-1">
                {couple.bride.fullName}
              </h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400/90 font-medium mb-2 sm:mb-3">
                {couple.bride.role}
              </p>

              <div className="w-10 sm:w-12 h-[1px] bg-gold-400/40 my-1.5 sm:my-2"></div>

              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xs mt-1 leading-relaxed px-1">
                {couple.bride.parents}
              </p>

              {/* Instagram link */}
              {couple.bride.instagram && (
                <a
                  href={`https://instagram.com/${couple.bride.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 sm:mt-4 px-3 py-1.5 rounded-full bg-navy-900/80 border border-gold-400/30 text-gold-300 text-xs hover:border-gold-400 hover:text-gold-200 transition-all"
                >
                  <Instagram size={13} />
                  <span>{couple.bride.instagram}</span>
                </a>
              )}
            </IslamicArchFrame>
          </motion.div>

          {/* Mempelai Pria (Ahmad Fiki) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center relative"
          >
            <IslamicArchFrame className="w-full flex-1 flex flex-col items-center text-center relative">
              {/* Individual Flower Corner Accent */}
              <CornerFlowerAccent position="top-left" variant={3} size="sm" />

              {/* Photo Frame */}
              <div className="relative w-36 h-48 xs:w-44 xs:h-56 sm:w-48 sm:h-60 rounded-t-[2.8rem] sm:rounded-t-[3.5rem] rounded-b-2xl overflow-hidden border-2 border-gold-400/50 p-1 mb-4 sm:mb-5 group shadow-lg">
                <img
                  src={couple.groom.image}
                  alt={couple.groom.fullName}
                  className="w-full h-full object-cover rounded-t-[2.6rem] sm:rounded-t-[3.3rem] rounded-b-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Names & Parents */}
              <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-gold-200 mb-1">
                {couple.groom.fullName}
              </h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400/90 font-medium mb-2 sm:mb-3">
                {couple.groom.role}
              </p>

              <div className="w-10 sm:w-12 h-[1px] bg-gold-400/40 my-1.5 sm:my-2"></div>

              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xs mt-1 leading-relaxed px-1">
                {couple.groom.parents}
              </p>

              {/* Instagram link */}
              {couple.groom.instagram && (
                <a
                  href={`https://instagram.com/${couple.groom.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 sm:mt-4 px-3 py-1.5 rounded-full bg-navy-900/80 border border-gold-400/30 text-gold-300 text-xs hover:border-gold-400 hover:text-gold-200 transition-all"
                >
                  <Instagram size={13} />
                  <span>{couple.groom.instagram}</span>
                </a>
              )}
            </IslamicArchFrame>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
