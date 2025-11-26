'use client'
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './CursorPet.module.css';

const CursorPet = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const trailRef = useRef([]);
  const lastMoveTimeRef = useRef(Date.now());

  useEffect(() => {
    let animationFrameId;
    const trail = [];

    const handleMouseMove = (e) => {
      const now = Date.now();
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);
      lastMoveTimeRef.current = now;

      // Clear movement timeout
      clearTimeout(window.cursorStopTimeout);
      window.cursorStopTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const animate = () => {
      setFollowerPos(prev => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0.5) {
          // Smooth following with spring-like physics
          const speed = Math.min(distance * 0.2, 25);
          const angle = Math.atan2(dy, dx);
          
          return {
            x: prev.x + Math.cos(angle) * speed,
            y: prev.y + Math.sin(angle) * speed
          };
        }
        return prev;
      });

      // Update trail
      if (trail.length > 0) {
        trailRef.current = trail.slice(-5); // Keep last 5 positions
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (window.cursorStopTimeout) {
        clearTimeout(window.cursorStopTimeout);
      }
    };
  }, [mousePos]);

  const distance = Math.sqrt(
    Math.pow(mousePos.x - followerPos.x, 2) + 
    Math.pow(mousePos.y - followerPos.y, 2)
  );

  return (
    <>
      {/* Main follower dot */}
      <motion.div
        className={styles.cursorFollower}
        style={{
          left: followerPos.x,
          top: followerPos.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isMoving ? 1.2 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className={styles.dot}></div>
      </motion.div>

      {/* Trailing dots */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={styles.trailDot}
          style={{
            left: followerPos.x,
            top: followerPos.y,
            opacity: isVisible && isMoving ? 0.3 / i : 0,
          }}
          animate={{
            scale: isMoving ? 0.6 / i : 0.4 / i,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25,
            delay: i * 0.05,
          }}
        >
          <div className={styles.trailDotInner}></div>
        </motion.div>
      ))}
    </>
  );
};

export default CursorPet;

