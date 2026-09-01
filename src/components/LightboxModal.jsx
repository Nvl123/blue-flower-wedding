import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ images, activeIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (activeIndex === null || !images[activeIndex]) return null;

  const currentImg = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Tutup"
        >
          <X size={24} />
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          aria-label="Foto Selanjutnya"
        >
          <ChevronRight size={28} />
        </button>

        {/* Image & Caption Container */}
        <motion.div
          key={activeIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        >
          <img
            src={currentImg.url}
            alt={currentImg.caption}
            className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border border-gold-400/40 shadow-2xl"
          />
          {currentImg.caption && (
            <p className="text-center text-slate-200 text-sm font-light italic mt-3 bg-navy-900/80 px-4 py-1.5 rounded-full border border-gold-400/30">
              {currentImg.caption} ({activeIndex + 1}/{images.length})
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
