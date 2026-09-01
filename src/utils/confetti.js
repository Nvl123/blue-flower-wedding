import confetti from 'canvas-confetti';

export const triggerCelebration = () => {
  // Left cannon
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.8 },
    colors: ['#d4af37', '#f3dc8a', '#5c82a6', '#ffffff']
  });

  // Right cannon
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.8 },
    colors: ['#d4af37', '#f3dc8a', '#5c82a6', '#ffffff']
  });
};

export const triggerHeartConfetti = () => {
  const count = 35;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#d4af37', '#e5c558']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#a3c2e0', '#ffffff']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
};
