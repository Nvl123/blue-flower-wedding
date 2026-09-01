import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, CircleDot, Award } from 'lucide-react';
import { GoldDivider } from './IslamicOrnaments';

export const StorySection = ({ loveStory }) => {
  return (
    <section id="cerita" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <GoldDivider subtitle="Perjalanan Kasih" title="Kisah Cinta Kami" />
          <p className="text-dusty-200 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed mt-2 px-2">
            "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)."
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gold-400/30 ml-4 sm:ml-32 space-y-8 sm:space-y-12 pb-4">
          
          {loveStory.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Dot with Pulse */}
              <div className="absolute -left-[16px] sm:-left-[17px] top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-navy-900 border-2 border-gold-400 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                {story.icon === 'ring' ? <Sparkles size={13} /> : <Heart size={13} fill="currentColor" />}
              </div>

              {/* Date Badge */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right mb-1.5 sm:mb-0">
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-navy-800 border border-gold-400/40 text-gold-300 font-medium text-[11px] sm:text-xs shadow-sm">
                  {story.date}
                </span>
              </div>

              {/* Story Content Card */}
              <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gold-400/25 shadow-luxury">
                <h4 className="font-serif text-base sm:text-xl font-semibold text-gold-200 mb-1.5 sm:mb-2">
                  {story.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
