import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, HeartHandshake } from 'lucide-react';
import { BismillahCalligraphy, DecorativeMandala } from './IslamicOrnaments';
import { CornerFlowerAccent } from './FloralElements';

export const QuranSection = ({ quranVerse }) => {
  return (
    <section className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-dusty-700/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-gold-400/30 text-center shadow-luxury relative"
        >
          {/* Individual Flower Corner Accents */}
          <CornerFlowerAccent position="top-right" variant={2} size="sm" />
          <CornerFlowerAccent position="bottom-left" variant={3} size="sm" />

          {/* Subtle Corner Accents */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-gold-400/50"></div>
          <div className="absolute top-2.5 right-2.5 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-gold-400/50"></div>
          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-gold-400/50"></div>
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-gold-400/50"></div>

          {/* Bismillah */}
          <BismillahCalligraphy className="w-44 sm:w-64 text-gold-400 mb-4 sm:mb-6" />

          {/* Quran Arabic Verse */}
          <div className="my-4 sm:my-6 px-1 sm:px-6">
            <p className="font-arabic text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[2.1] sm:leading-[2.3] text-gold-200 text-center select-text font-normal dir-rtl tracking-wide">
              {quranVerse.arabic}
            </p>
          </div>

          {/* Translation */}
          <div className="my-4 sm:my-6 max-w-2xl mx-auto">
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light italic">
              "{quranVerse.translation}"
            </p>
            <div className="inline-block mt-3 px-3 py-1 rounded-full bg-navy-900/80 border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-semibold tracking-wider">
              {quranVerse.surah}
            </div>
          </div>

          {/* Hadith Divider */}
          {quranVerse.hadith && (
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gold-400/20">
              <div className="flex items-center justify-center gap-1.5 text-gold-400 text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2 sm:mb-3">
                <HeartHandshake size={14} />
                <span>Sabda Rasulullah ﷺ</span>
              </div>
              <p className="font-arabic text-base sm:text-xl leading-loose text-gold-300 mb-2 px-1">
                {quranVerse.hadith.arabic}
              </p>
              <p className="text-slate-300 text-[11px] sm:text-sm font-light italic max-w-xl mx-auto">
                "{quranVerse.hadith.translation}"
              </p>
              <span className="text-[10px] sm:text-[11px] text-dusty-300 mt-1 inline-block">
                ({quranVerse.hadith.source})
              </span>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};
