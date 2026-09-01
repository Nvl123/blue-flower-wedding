import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudioPlayer = ({ isAutoPlayTriggered, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startAudio = () => {
    if (!audioRef.current) return;
    
    // Ensure unmuted with full volume
    audioRef.current.muted = false;
    audioRef.current.volume = 1.0;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay awaiting user interaction:", err);
          setIsPlaying(false);
        });
    }
  };

  // 1. Attempt autoplay immediately on component mount (with sound)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      startAudio();
    }

    // 2. Global listener fallback: Play unmuted on any first user touch/click/scroll/keypress
    const handleFirstUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        startAudio();
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstUserInteraction, { once: true, passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  // 3. Trigger playback when "Buka Undangan" is clicked
  useEffect(() => {
    if (isAutoPlayTriggered && audioRef.current) {
      startAudio();
    }
  }, [isAutoPlayTriggered]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Play error:", err));
    }
  };

  return (
    <div className="fixed top-3.5 right-3.5 sm:top-5 sm:right-5 z-40">
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        autoPlay
        playsInline
        preload="auto"
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log(e));
          }
        }}
      />

      <motion.button
        id="btn-music-toggle"
        onClick={togglePlay}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
        className="relative group p-2.5 sm:p-3 rounded-full bg-navy-800/90 text-gold-400 border border-gold-400/40 shadow-luxury backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        {/* Pulsing ring waves when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-gold-400/60 animate-ping pointer-events-none opacity-50"></span>
        )}

        {/* Vinyl Disc Icon with Rotation */}
        <div className={`relative ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Disc size={18} className="sm:hidden text-gold-400" />
          <Disc size={22} className="hidden sm:block text-gold-400" />
        </div>

        {/* Mini Volume status badge */}
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-navy-900 border border-gold-400/60 flex items-center justify-center text-[8px] sm:text-[9px] text-gold-300">
          {isPlaying ? <Volume2 size={9} /> : <VolumeX size={9} />}
        </div>
      </motion.button>
    </div>
  );
};
