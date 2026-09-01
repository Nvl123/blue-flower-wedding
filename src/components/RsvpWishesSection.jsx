import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquareHeart, UserCheck, HelpCircle, XCircle, HeartHandshake, Sparkles } from 'lucide-react';
import { GoldDivider } from './IslamicOrnaments';
import { CornerFlowerAccent } from './FloralElements';
import { triggerCelebration } from '../utils/confetti';

export const RsvpWishesSection = ({ initialWishes = [], defaultGuestName = "" }) => {
  const [wishes, setWishes] = useState([]);
  const [formData, setFormData] = useState({
    name: defaultGuestName || "",
    attendance: "Hadir",
    pax: "1",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultGuestName && !formData.name) {
      setFormData(prev => ({ ...prev, name: defaultGuestName }));
    }
  }, [defaultGuestName]);

  // Load from LocalStorage or default initial wishes
  useEffect(() => {
    const saved = localStorage.getItem('wedding_wishes_v1');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(initialWishes);
      }
    } else {
      setWishes(initialWishes);
    }
  }, [initialWishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const newWish = {
      id: Date.now(),
      name: formData.name.trim(),
      attendance: formData.attendance,
      pax: formData.pax,
      timestamp: "Baru saja",
      message: formData.message.trim()
    };

    setTimeout(() => {
      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem('wedding_wishes_v1', JSON.stringify(updatedWishes));
      
      triggerCelebration();
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData(prev => ({ ...prev, message: "" }));

      setTimeout(() => setIsSuccess(false), 5000);
    }, 600);
  };

  const getBadgeStyle = (attendance) => {
    switch (attendance) {
      case 'Hadir':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
      case 'Tidak Hadir':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/40';
      default:
        return 'bg-amber-950/80 text-amber-300 border-amber-500/40';
    }
  };

  const getBadgeIcon = (attendance) => {
    switch (attendance) {
      case 'Hadir':
        return <UserCheck size={11} className="text-emerald-400" />;
      case 'Tidak Hadir':
        return <XCircle size={11} className="text-rose-400" />;
      default:
        return <HelpCircle size={11} className="text-amber-400" />;
    }
  };

  return (
    <section id="ucapan" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <GoldDivider subtitle="Konfirmasi & Doa Restu" title="Buku Ucapan & RSVP" />
          <p className="text-dusty-200 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed mt-2 px-2">
            Mohon konfirmasi kehadiran serta titipkan untaian doa dan harapan terbaik Anda untuk kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Form RSVP (5 cols on large) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-card rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 border border-gold-400/30 shadow-luxury relative"
          >
            {/* Flower Accent */}
            <CornerFlowerAccent position="top-right" variant={1} size="sm" />

            <h4 className="font-serif text-lg sm:text-xl font-bold text-gold-200 mb-3 sm:mb-4 flex items-center gap-2">
              <MessageSquareHeart size={18} className="text-gold-400" />
              <span>Kirim Ucapan & RSVP</span>
            </h4>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-2.5 sm:p-3 mb-3 sm:mb-4 rounded-xl bg-emerald-900/60 border border-emerald-400/50 text-emerald-200 text-[11px] sm:text-xs flex items-center gap-2"
              >
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Jazakumullahu khair! Ucapan Anda telah tersimpan.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-xs sm:text-sm relative z-10">
              <div>
                <label className="block text-dusty-200 font-medium mb-1 text-[11px] sm:text-xs">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso & Keluarga"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-900/90 border border-gold-400/30 text-slate-100 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-dusty-200 font-medium mb-1 text-[11px] sm:text-xs">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {['Hadir', 'Ragu-ragu', 'Tidak Hadir'].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() => setFormData({ ...formData, attendance: status })}
                      className={`py-2 px-1 rounded-xl text-[10px] xs:text-[11px] sm:text-xs font-medium border transition-all cursor-pointer truncate text-center ${
                        formData.attendance === status
                          ? 'bg-gold-500/25 border-gold-400 text-gold-200 shadow-sm'
                          : 'bg-navy-900/60 border-dusty-700/60 text-dusty-300 hover:border-gold-400/50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {formData.attendance === 'Hadir' && (
                <div>
                  <label className="block text-dusty-200 font-medium mb-1 text-[11px] sm:text-xs">
                    Jumlah Orang yang Hadir
                  </label>
                  <select
                    value={formData.pax}
                    onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-900/90 border border-gold-400/30 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors cursor-pointer"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4+">4 Orang / Lebih</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-dusty-200 font-medium mb-1 text-[11px] sm:text-xs">
                  Untaian Doa & Ucapan *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan doa restu untuk kedua mempelai..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-900/90 border border-gold-400/30 text-slate-100 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-900 font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <Send size={15} />
                <span>{isSubmitting ? "Mengirimkan Doa..." : "Kirim Ucapan & Doa"}</span>
              </button>
            </form>
          </motion.div>

          {/* List of Wishes (7 cols on large) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 border border-gold-400/30 shadow-luxury flex flex-col h-[380px] xs:h-[440px] sm:h-[500px] relative"
          >
            {/* Flower Accent */}
            <CornerFlowerAccent position="top-right" variant={2} size="sm" />

            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gold-400/20 mb-3 sm:mb-4 relative z-10">
              <h4 className="font-serif text-base sm:text-lg font-bold text-gold-200 flex items-center gap-2">
                <HeartHandshake size={18} className="text-gold-400" />
                <span>Untaian Doa ({wishes.length})</span>
              </h4>
              <span className="text-[11px] sm:text-xs text-dusty-300">
                Terima kasih atas doanya
              </span>
            </div>

            {/* Scrollable list of comments */}
            <div className="flex-1 overflow-y-auto space-y-2.5 sm:space-y-3.5 pr-1.5 custom-scrollbar relative z-10">
              {wishes.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-900/80 border border-gold-400/20 text-xs sm:text-sm hover:border-gold-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className="font-serif font-semibold text-gold-300 truncate text-xs sm:text-sm">
                      {item.name}
                    </span>
                    
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium border ${getBadgeStyle(item.attendance)}`}>
                      {getBadgeIcon(item.attendance)}
                      <span>{item.attendance}</span>
                    </span>
                  </div>

                  <p className="text-slate-200 text-[11px] sm:text-[13px] font-light leading-relaxed my-1.5">
                    {item.message}
                  </p>

                  <div className="text-[9px] sm:text-[10px] text-dusty-400 text-right">
                    {item.timestamp}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
