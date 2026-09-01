import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { BismillahCalligraphy, GoldDivider, DecorativeMandala } from './IslamicOrnaments';

export const FooterSection = ({ couple }) => {
  return (
    <footer className="relative pt-14 sm:pt-20 pb-24 sm:pb-28 px-3 sm:px-6 bg-navy-950/90 border-t border-gold-400/20 text-center overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none hidden sm:block">
        <DecorativeMandala className="w-96 h-96 text-gold-400" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        <span className="font-arabic text-lg sm:text-2xl text-gold-300 block mb-2 px-1">
          وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </span>

        <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto my-3 sm:my-4 px-2">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.
        </p>

        <p className="text-[10px] sm:text-xs text-dusty-300 uppercase tracking-widest font-medium mt-4 sm:mt-6">
          Kami yang berbahagia,
        </p>

        <div className="my-3 sm:my-4">
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-gold-200">
            {couple.bride.shortName} & {couple.groom.shortName}
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 font-light mt-1">
            Beserta Keluarga Besar Bapak Juma'i & Bapak Buhari
          </p>
        </div>

        <div className="w-12 sm:w-16 h-[1px] bg-gold-400/40 mx-auto my-4 sm:my-6"></div>

        <p className="text-[10px] sm:text-[11px] text-dusty-400 flex items-center justify-center gap-1">
          <span>Dibuat dengan penuh kebahagiaan</span>
          <Heart size={11} className="text-rose-400 fill-rose-400" />
          <span>• The Wedding of Faizah & Fiki</span>
        </p>

      </div>
    </footer>
  );
};
