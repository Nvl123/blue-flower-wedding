import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, CreditCard, Copy, Check, ChevronDown, ChevronUp, MapPin, Package } from 'lucide-react';
import { GoldDivider } from './IslamicOrnaments';
import { CornerFlowerAccent } from './FloralElements';

export const GiftSection = ({ gifts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="hadiah" className="relative py-14 sm:py-20 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <GoldDivider subtitle="Tanda Kasih" title="Wedding Gift" />
          <p className="text-dusty-200 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed mt-2 px-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah bentuk ungkapan kasih, kami menyediakan amplop digital & alamat di bawah ini.
          </p>
        </motion.div>

        {/* Toggle Button */}
        <div className="text-center mb-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-navy-800/90 border border-gold-400/50 text-gold-300 font-medium text-xs sm:text-sm shadow-luxury hover:bg-gold-500/20 transition-all cursor-pointer"
          >
            <Gift size={16} className="text-gold-400" />
            <span>{isOpen ? "Tutup Informasi Amplop Digital" : "Kirim Hadiah / Amplop Digital"}</span>
            {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </motion.button>
        </div>

        {/* Expandable Gift Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6 overflow-hidden pt-2"
            >
              {/* Bank Accounts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {gifts.bankAccounts.map((account, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl glass-card border border-gold-400/30 shadow-luxury relative flex flex-col justify-between"
                  >
                    <CornerFlowerAccent position="top-right" variant={(idx % 3) + 1} size="sm" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <CreditCard size={16} className="text-gold-400" />
                          <span className="font-semibold text-xs sm:text-sm text-gold-200">
                            {account.bank}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-300 text-[10px] font-bold tracking-wider">
                          {account.logo}
                        </span>
                      </div>

                      <div className="bg-navy-900/90 rounded-xl p-2.5 sm:p-3 border border-gold-400/20 my-2">
                        <span className="text-[10px] sm:text-[11px] text-dusty-400 block mb-0.5">
                          Nomor Rekening / No. HP:
                        </span>
                        <span className="font-mono text-sm xs:text-base sm:text-lg font-bold text-slate-100 tracking-wider">
                          {account.accountNumber}
                        </span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-dusty-200 mt-1">
                        a.n <span className="font-semibold text-gold-300">{account.holder}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(account.accountNumber, `bank-${idx}`)}
                      className="mt-3 sm:mt-4 w-full py-2 px-3 rounded-xl bg-navy-900 border border-gold-400/40 hover:bg-gold-500/20 text-gold-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer relative z-10"
                    >
                      {copiedKey === `bank-${idx}` ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-300 text-xs">Nomor Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Salin Nomor</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Physical Gift Delivery Card */}
              {gifts.physicalGift && (
                <div className="p-4 sm:p-6 rounded-2xl glass-card border border-gold-400/30 shadow-luxury relative">
                  <CornerFlowerAccent position="top-right" variant={2} size="sm" />

                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3 relative z-10">
                    <Package size={18} className="text-gold-400" />
                    <h4 className="font-serif text-sm sm:text-lg font-semibold text-gold-200">
                      Kirim Kado Fisik
                    </h4>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-200 bg-navy-900/80 p-3 sm:p-4 rounded-xl border border-gold-400/20 relative z-10">
                    <p className="font-medium text-gold-300">
                      Penerima: {gifts.physicalGift.recipient}
                    </p>
                    <p className="text-slate-300 leading-relaxed font-light flex items-start gap-1.5 text-[11px] sm:text-xs">
                      <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" />
                      <span>{gifts.physicalGift.address}</span>
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-dusty-400 italic pt-1">
                      {gifts.physicalGift.notes}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(gifts.physicalGift.address, 'address')}
                    className="mt-3 sm:mt-4 w-full sm:w-auto py-2 px-4 rounded-xl bg-navy-900 border border-gold-400/40 hover:bg-gold-500/20 text-gold-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer relative z-10"
                  >
                    {copiedKey === 'address' ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-300">Alamat Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Salin Alamat Lengkap</span>
                      </>
                    )}
                  </button>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
