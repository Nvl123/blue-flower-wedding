import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, ExternalLink, Check, Copy } from 'lucide-react';
import { GoldDivider, IslamicArchFrame } from './IslamicOrnaments';
import { CornerFlowerAccent } from './FloralElements';

export const EventsSection = ({ events }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMapsUrl = (query) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <section id="acara" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <GoldDivider subtitle="Agenda Acara" title="Waktu & Tempat Pelaksanaan" />
          <p className="text-dusty-200 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed mt-2 px-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Card 1: Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <IslamicArchFrame className="h-full flex flex-col justify-between text-center relative">
              <CornerFlowerAccent position="top-right" variant={2} size="sm" />

              <div className="relative z-10">
                {/* Event Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-navy-900 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                  <span>Ijab Qabul</span>
                </div>

                <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-gold-200 mb-3 sm:mb-4">
                  {events.akad.title}
                </h3>

                {/* Details */}
                <div className="space-y-3 sm:space-y-3.5 my-4 sm:my-6 text-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center justify-center gap-2 text-dusty-100">
                    <Calendar size={16} className="text-gold-400 shrink-0" />
                    <span className="font-medium">{events.akad.day}, {events.akad.date}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-dusty-100">
                    <Clock size={16} className="text-gold-400 shrink-0" />
                    <span>{events.akad.time}</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-dusty-200 pt-2 border-t border-gold-400/20">
                    <div className="flex items-center gap-1 font-semibold text-gold-300">
                      <MapPin size={15} className="text-gold-400" />
                      <span>{events.akad.venueName}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-light max-w-xs leading-relaxed px-1">
                      {events.akad.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 sm:pt-4 mt-auto relative z-10">
                <a
                  href={getMapsUrl(events.akad.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 sm:px-4 rounded-xl bg-navy-900 border border-gold-400/40 hover:bg-gold-500/20 text-gold-300 text-xs font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all group"
                >
                  <Navigation size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Petunjuk Arah (Google Maps)</span>
                </a>
              </div>
            </IslamicArchFrame>
          </motion.div>

          {/* Card 2: Resepsi Pernikahan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <IslamicArchFrame className="h-full flex flex-col justify-between text-center relative">
              <CornerFlowerAccent position="top-left" variant={1} size="sm" />

              <div className="relative z-10">
                {/* Event Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-navy-900 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                  <span>Walimatul 'Ursy</span>
                </div>

                <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-gold-200 mb-3 sm:mb-4">
                  {events.resepsi.title}
                </h3>

                {/* Details */}
                <div className="space-y-3 sm:space-y-3.5 my-4 sm:my-6 text-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center justify-center gap-2 text-dusty-100">
                    <Calendar size={16} className="text-gold-400 shrink-0" />
                    <span className="font-medium">{events.resepsi.day}, {events.resepsi.date}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-dusty-100">
                    <Clock size={16} className="text-gold-400 shrink-0" />
                    <span>{events.resepsi.time}</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-dusty-200 pt-2 border-t border-gold-400/20">
                    <div className="flex items-center gap-1 font-semibold text-gold-300">
                      <MapPin size={15} className="text-gold-400" />
                      <span>{events.resepsi.venueName}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-light max-w-xs leading-relaxed px-1">
                      {events.resepsi.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 sm:pt-4 mt-auto relative z-10">
                <a
                  href={getMapsUrl(events.resepsi.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 sm:px-4 rounded-xl bg-navy-900 border border-gold-400/40 hover:bg-gold-500/20 text-gold-300 text-xs font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all group"
                >
                  <Navigation size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Petunjuk Arah (Google Maps)</span>
                </a>
              </div>
            </IslamicArchFrame>
          </motion.div>

        </div>

        {/* Embedded Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gold-400/30 shadow-luxury relative"
        >
          <CornerFlowerAccent position="top-right" variant={3} size="sm" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
            <div>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-gold-200">
                Peta Lokasi Acara
              </h4>
              <p className="text-[11px] sm:text-xs text-dusty-200 mt-0.5">
                {events.akad.address}
              </p>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleCopyAddress(events.akad.address)}
                className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-navy-900 border border-gold-400/30 text-gold-300 hover:border-gold-400 text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? "Tersalin!" : "Salin Alamat"}</span>
              </button>

              <a
                href={getMapsUrl(events.akad.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-gold-500/20 border border-gold-400/50 text-gold-300 hover:bg-gold-500/30 text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <ExternalLink size={13} />
                <span>Buka Maps</span>
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div className="w-full h-48 xs:h-56 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-gold-400/30 relative z-10">
            <iframe
              title="Peta Lokasi Acara"
              src={events.akad.mapsEmbedUrl}
              className="w-full h-full border-0 filter brightness-95 contrast-105"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
