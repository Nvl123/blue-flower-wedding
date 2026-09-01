import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { GoldDivider } from './IslamicOrnaments';
import { LightboxModal } from './LightboxModal';

export const GallerySection = ({ gallery }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="galeri" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <GoldDivider subtitle="Momen Bahagia" title="Galeri Foto" />
          <p className="text-dusty-200 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed mt-2 px-2">
            Potret kebersamaan dan kenangan indah menuju lembaran baru kehidupan kami.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setActivePhotoIndex(index)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-gold-400/30 group cursor-pointer shadow-lg bg-navy-900 ${
                photo.aspect === 'portrait' ? 'row-span-2 min-h-[220px] xs:min-h-[260px] sm:min-h-[380px]' : 'min-h-[120px] xs:min-h-[140px] sm:min-h-[220px]'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 text-gold-300 text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                  <Eye size={13} />
                  <span>Lihat Foto</span>
                </div>
                <p className="text-white text-[10px] sm:text-xs font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>

              {/* Corner Golden Accent */}
              <div className="absolute top-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t border-r border-gold-400/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={gallery}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
