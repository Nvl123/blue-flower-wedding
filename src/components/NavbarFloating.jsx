import React, { useState, useEffect } from 'react';
import { Home, Users, Calendar, Clock, Image, MessageSquareHeart, Gift, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const NavbarFloating = ({ onOpenShareModal }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'mempelai', label: 'Mempelai', icon: Users },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'cerita', label: 'Cerita', icon: Clock },
    { id: 'galeri', label: 'Galeri', icon: Image },
    { id: 'ucapan', label: 'Ucapan', icon: MessageSquareHeart },
    { id: 'hadiah', label: 'Hadiah', icon: Gift },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 sm:bottom-4 inset-x-0 z-40 flex items-center justify-center px-2 pointer-events-none">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-auto flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full glass-pill shadow-luxury border border-gold-400/30 text-slate-300 max-w-[98vw] sm:max-w-fit"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              className={`relative p-1.5 xs:p-2 sm:px-3 sm:py-2 rounded-full transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                isActive
                  ? 'text-navy-900 font-medium'
                  : 'text-dusty-200 hover:text-gold-300 hover:bg-navy-800/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon size={16} className="sm:hidden relative z-10" />
              <Icon size={18} className="hidden sm:block relative z-10" />
              <span className="hidden sm:inline relative z-10 text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Vertical divider */}
        <div className="w-[1px] h-4 sm:h-6 bg-gold-400/30 mx-0.5 sm:mx-1"></div>

        {/* WhatsApp Invitation Share Generator Modal Trigger */}
        <button
          onClick={onOpenShareModal}
          title="Bagikan Undangan / Generator Link Tamu"
          className="p-1.5 xs:p-2 sm:p-2.5 rounded-full text-gold-300 hover:bg-gold-500/20 transition-colors flex items-center justify-center cursor-pointer"
        >
          <Share2 size={16} className="sm:hidden" />
          <Share2 size={18} className="hidden sm:block" />
        </button>
      </motion.nav>
    </div>
  );
};
