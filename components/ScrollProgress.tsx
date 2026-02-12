'use client';

import { useScroll, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, var(--accent-blue, #3b82f6), #2563eb)',
        zIndex: 9999,
      }}
    />
  );
}
