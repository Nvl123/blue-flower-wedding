import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from './data/weddingData';
import { ParallaxClouds } from './components/ParallaxClouds';
import { BackgroundPattern } from './components/BackgroundPattern';
import { CloudRisingTransition } from './components/CloudRisingTransition';
import { PetalShower } from './components/PetalShower';
import { CoverScreen } from './components/CoverScreen';
import { AudioPlayer } from './components/AudioPlayer';
import { NavbarFloating } from './components/NavbarFloating';
import { QuranSection } from './components/QuranSection';
import { CoupleSection } from './components/CoupleSection';
import { CountdownSection } from './components/CountdownSection';
import { EventsSection } from './components/EventsSection';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { RsvpWishesSection } from './components/RsvpWishesSection';
import { GiftSection } from './components/GiftSection';
import { FooterSection } from './components/FooterSection';
import { ShareGeneratorModal } from './components/ShareGeneratorModal';
import { FloatingPetals, CornerFloral, FloralHeaderOrnament } from './components/FloralElements';
import { Calendar, Heart, MapPin, Sparkles } from 'lucide-react';
import { DecorativeMandala, GoldDivider } from './components/IslamicOrnaments';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isRisingCloudActive, setIsRisingCloudActive] = useState(false);
  const [isPetalShowerActive, setIsPetalShowerActive] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Extract ?to= query parameter from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') || params.get('guest') || params.get('u');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam.replace(/\+/g, ' ')));
    }
  }, []);

  const handleOpenInvitation = () => {
    // Start rising cloud & glowing ring surge transition
    setIsRisingCloudActive(true);
    
    // Trigger realistic flower petal shower burst
    setIsPetalShowerActive(true);
    
    // Reveal main page
    setIsOpened(true);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Deactivate transitions when animation cycles complete
    setTimeout(() => {
      setIsRisingCloudActive(false);
    }, 2500);

    setTimeout(() => {
      setIsPetalShowerActive(false);
    }, 6000);
  };

  // Lock body scroll while on Cover Screen
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpened]);

  return (
    <div className={`relative bg-[#060e1a] text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-900 ${!isOpened ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden'}`}>
      
      {/* Cover Screen Overlay with Soft Dissolve */}
      <CoverScreen
        guestName={guestName}
        onOpenInvitation={handleOpenInvitation}
        isOpen={isOpened}
      />

      {/* Realistic Flower Petal Shower Burst on Opening */}
      <PetalShower isActive={isPetalShowerActive} />

      {/* Rising Cloud & Glowing Ring Transition Surge */}
      <CloudRisingTransition isTriggered={isRisingCloudActive} />

      {/* Luxury Patterned Background with Soft Multi-stop Gradients */}
      <BackgroundPattern />

      {/* Background Parallax Subtle Clouds, Rings & Floating Blossoms */}
      <ParallaxClouds />

      {/* Floating Flower Petals Falling Gently in Background */}
      <FloatingPetals />

      {/* Audio Player (Floating top right) */}
      <AudioPlayer
        isAutoPlayTriggered={isOpened}
        audioUrl={weddingData.audio.url}
      />

      {/* Main Content (Materializes smoothly with soft scale & fade) */}
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
        className="relative z-10"
      >
        
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 text-center overflow-hidden">
          
          {/* Floral Corner Accents */}
          <CornerFloral position="top-left" size="default" className="opacity-50 sm:opacity-70" />
          <CornerFloral position="top-right" size="default" className="opacity-50 sm:opacity-70" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-navy-800/90 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 shadow-sm"
            >
              <Sparkles size={12} className="text-gold-400" />
              <span>Walimatul 'Ursy</span>
              <Sparkles size={12} className="text-gold-400" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-dusty-200 font-light mb-1.5 sm:mb-2"
            >
              The Wedding Celebration Of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="font-serif text-3xl xs:text-4xl sm:text-6xl text-gold-200 font-bold tracking-wide my-1.5 sm:my-2 leading-tight"
            >
              Nur Faizah
              <span className="block font-script text-2xl xs:text-3xl sm:text-5xl text-gold-300 my-0.5 sm:my-1 font-normal">&</span>
              Ahmad Fiki
            </motion.h1>

            {/* Floral Ornament */}
            <FloralHeaderOrnament className="my-1.5 sm:my-2" />

            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 mt-1 sm:mt-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full glass-card border border-gold-400/40 shadow-sm"
            >
              <span className="flex items-center gap-1 font-medium">
                <Calendar size={13} className="text-gold-400" />
                {weddingData.date.dayName}, {weddingData.date.fullDate}
              </span>
              <span className="text-gold-400">•</span>
              <span className="text-gold-300/90 text-[11px] sm:text-xs font-light">
                {weddingData.date.islamicDate}
              </span>
            </motion.div>

            {/* Hero Couple Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative mt-6 sm:mt-8 w-56 h-72 xs:w-64 xs:h-80 sm:w-80 sm:h-96 rounded-t-[3.8rem] sm:rounded-t-[5rem] rounded-b-2xl sm:rounded-b-3xl overflow-hidden border-2 border-gold-400/60 p-1 sm:p-1.5 shadow-luxury"
            >
              <img
                src={weddingData.couple.coupleHeroImage}
                alt="Nur Faizah & Ahmad Fiki"
                className="w-full h-full object-cover rounded-t-[3.6rem] sm:rounded-t-[4.8rem] rounded-b-xl sm:rounded-b-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

          </div>
        </section>

        {/* Section Ayat Suci Al-Qur'an & Hadis */}
        <QuranSection quranVerse={weddingData.quranVerse} />

        {/* Section Mempelai (Bride & Groom) */}
        <CoupleSection couple={weddingData.couple} />

        {/* Section Countdown Timer & Google Calendar */}
        <CountdownSection targetDate={weddingData.date.targetDate} />

        {/* Section Acara (Akad & Resepsi) + Maps */}
        <EventsSection events={weddingData.events} />

        {/* Section Kisah Cinta (Love Story) */}
        <StorySection loveStory={weddingData.loveStory} />

        {/* Section Galeri Foto & Lightbox */}
        <GallerySection gallery={weddingData.gallery} />

        {/* Section Buku Ucapan & Doa (RSVP) */}
        <RsvpWishesSection
          initialWishes={weddingData.initialWishes}
          defaultGuestName={guestName !== "Tamu Undangan" ? guestName : ""}
        />

        {/* Section Hadiah Pernikahan (Digital Envelope & Gift) */}
        <GiftSection gifts={weddingData.gifts} />

        {/* Footer Section */}
        <FooterSection couple={weddingData.couple} />

      </motion.main>

      {/* Floating Bottom Navigation Bar */}
      {isOpened && (
        <NavbarFloating onOpenShareModal={() => setIsShareModalOpen(true)} />
      )}

      {/* WhatsApp Link & Guest Invitation Generator Modal */}
      <ShareGeneratorModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        coupleNames="Nur Faizah & Ahmad Fiki"
      />

    </div>
  );
}

export default App;
