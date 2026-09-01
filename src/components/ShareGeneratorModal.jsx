import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Copy, Check, Send, Link2, Sparkles, MessageCircle } from 'lucide-react';

export const ShareGeneratorModal = ({ isOpen, onClose, coupleNames = "Nur Faizah & Ahmad Fiki" }) => {
  const [guestName, setGuestName] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://wedding-nur-fiki.com';
  const encodedName = guestName.trim() ? encodeURIComponent(guestName.trim()) : '';
  const generatedLink = encodedName ? `${currentUrl}?to=${encodedName}` : currentUrl;

  const whatsappMessage = `*Undangan Pernikahan (Walimatul 'Ursy)*
*${coupleNames}*

_Assalamu'alaikum Warahmatullahi Wabarakatuh_

Kepada Yth. Bapak/Ibu/Saudara/i:
*${guestName.trim() || "Tamu Undangan"}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

🔗 *Buka Undangan Digital:*
${generatedLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu bagi kedua mempelai.

_Wassalamu'alaikum Warahmatullahi Wabarakatuh_
*Nur Faizah & Ahmad Fiki*`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl glass-card border border-gold-400/40 p-4 sm:p-6 shadow-2xl overflow-y-auto max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gold-400/20 mb-3">
            <div className="flex items-center gap-2">
              <Share2 size={18} className="text-gold-400" />
              <h3 className="font-serif text-base sm:text-lg font-bold text-gold-200">
                Generator Undangan Tamu
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-slate-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-dusty-200 mb-3 font-light">
            Ketik nama tamu untuk membuat link undangan personal dan template pesan WhatsApp otomatis:
          </p>

          {/* Name Input */}
          <div className="mb-3">
            <label className="block text-[11px] sm:text-xs text-dusty-200 font-medium mb-1">
              Nama Tamu / Keluarga:
            </label>
            <input
              type="text"
              placeholder="Contoh: Budi Santoso & Istri"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-navy-900 border border-gold-400/30 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400 placeholder-slate-500"
            />
          </div>

          {/* Generated URL Preview */}
          <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-navy-900/90 border border-gold-400/20">
            <span className="text-[10px] sm:text-[11px] text-dusty-400 block mb-1">
              Link URL Khusus Tamu:
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-gold-300 font-mono truncate">
                {generatedLink}
              </span>
              <button
                onClick={handleCopyLink}
                className="shrink-0 px-2 py-1 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 text-xs border border-gold-400/40 flex items-center gap-1 cursor-pointer"
              >
                {copiedLink ? <Check size={12} className="text-emerald-400" /> : <Link2 size={12} />}
                <span>{copiedLink ? "Tersalin" : "Salin Link"}</span>
              </button>
            </div>
          </div>

          {/* Message Preview */}
          <div className="mb-4">
            <span className="text-[11px] sm:text-xs text-dusty-200 font-medium block mb-1">
              Format Pesan WhatsApp Siap Kirim:
            </span>
            <div className="p-3 rounded-xl bg-navy-900/90 border border-gold-400/20 max-h-32 sm:max-h-40 overflow-y-auto text-[10px] sm:text-[11px] text-slate-300 whitespace-pre-line leading-relaxed font-sans custom-scrollbar">
              {whatsappMessage}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button
              onClick={handleCopyMessage}
              className="py-2 sm:py-2.5 px-2.5 rounded-xl bg-navy-900 border border-gold-400/40 hover:bg-gold-500/20 text-gold-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {copiedMsg ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copiedMsg ? "Pesan Tersalin!" : "Salin Teks WA"}</span>
            </button>

            <button
              onClick={handleSendWhatsApp}
              className="py-2 sm:py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>Buka WhatsApp</span>
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
