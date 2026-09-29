import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarPlus, BellRing } from 'lucide-react';
import { GoldDivider } from './IslamicOrnaments';

export const CountdownSection = ({ targetDate = "2026-10-04T09:00:00+07:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isPassed: false,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Pernikahan Nur Faizah & Ahmad Fiki");
    const details = encodeURIComponent("Akad & Resepsi Pernikahan Nur Faizah & Ahmad Fiki di Dusun Timur Pasar RT 08/RW 01, Kec. Maesan, Kab. Bondowoso");
    const location = encodeURIComponent("Dusun Timur Pasar RT 08/RW 01, Kec. Maesan, Kab. Bondowoso");
    // 4 Oct 2026, 09:00 WIB (UTC+7 -> 2026-10-04 02:00 UTC) to 18:00 WIB (2026-10-04 11:00 UTC)
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261004T020000Z/20261004T110000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const timerItems = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldDivider subtitle="Save The Date" title="Menghitung Hari Bahagia" />
          <p className="text-dusty-200 text-xs sm:text-sm font-light mb-6 sm:mb-8 px-2">
            Insya Allah menuju ikrar suci pernikahan kami:
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-1.5 xs:gap-2 sm:gap-4 max-w-xl mx-auto mb-6 sm:mb-8">
          {timerItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-2 xs:p-3 sm:p-5 rounded-xl sm:rounded-2xl glass-card border border-gold-400/30 text-center shadow-luxury overflow-hidden"
            >
              {/* Shimmer top border */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              
              <span className="font-serif text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-gold-300 block tracking-tight">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest text-dusty-200/90 font-medium mt-0.5 sm:mt-1 block">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button */}
        <motion.button
          onClick={handleAddToCalendar}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-navy-800/90 border border-gold-400/50 text-gold-300 hover:bg-gold-500/20 hover:border-gold-400 transition-all text-xs sm:text-sm font-medium shadow-md cursor-pointer"
        >
          <CalendarPlus size={15} className="text-gold-400" />
          <span>Simpan ke Google Calendar</span>
        </motion.button>

      </div>
    </section>
  );
};
