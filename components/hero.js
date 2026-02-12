import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import styles from "./hero.module.css";
import Link from "next/link";
import PixelGrid from "./PixelGrid";

function Hero() {
  const [hasMounted, setHasMounted] = useState(false);
  const mouseX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  useEffect(() => {
    const t = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const techStack = [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Docker', icon: 'Docker' },
    { name: 'Kubernetes', icon: 'Kubernetes' },
  ];

  const titleWords = "Hi, I'm Krishay Nair — Site Reliability Engineer".split(' ');

  return (
    <section className={styles.hero} id="home">
      {/* Animated background elements */}
      <div className={styles.heroBackground}>
        <PixelGrid />
      </div>

      <div className={styles.heroContainer}>
        {!hasMounted ? (
          <div className={`${styles.heroContent} ${styles.heroContentPlaceholder}`} aria-hidden="true" />
        ) : (
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className={word === 'Krishay' || word === 'Nair' ? styles.nameHighlight : ''}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.045,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={word === 'Krishay' || word === 'Nair' ? { 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                } : {}}
              >
                {word === 'Krishay' || word === 'Nair' ? (
                  <>
                    <motion.span
                      className={word === 'Krishay' ? styles.nameHighlightFirst : styles.nameHighlightLast}
                    >
                      {word}
                    </motion.span>
                    {word === 'Krishay' && '\u00A0'}
                  </>
                ) : (
                  word
                )}
                {index < titleWords.length - 1 && word !== 'Krishay' && ' '}
              </motion.span>
            ))}
          </motion.h1>
            
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            I build reliable systems at scale — from container orchestration and service mesh to observability and secure networking. Working with{' '}
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                className={styles.techBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.45, 
                  delay: 0.55 + index * 0.035,
                  type: 'spring',
                  stiffness: 180,
                  damping: 18
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)',
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
              >
                {tech.name}
              </motion.span>
            ))}
            {' '}and cloud-native tooling. Focused on SRE, DevOps, and networking — high availability, performance, and automation.
          </motion.p>
            
          {/* Tech Stack Badges */}
          <motion.div 
            className={styles.techStackContainer}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={styles.techBadgeItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 360, damping: 20, delay: 0.7 + index * 0.04 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={`/skills/${tech.icon}.svg`}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className={styles.techBadgeIcon}
                />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.ctaButtonsRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a 
              href="./pdf/Krishay_Nair_Resume.pdf"
              download="Krishay_Nair_Resume.pdf"
              className={styles.ctaButtonResume}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div
                className={styles.buttonGlow}
                whileHover={{ opacity: 1, scale: 1.1 }}
                initial={{ opacity: 0 }}
              />
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </motion.svg>
              <span>Resume / CV</span>
            </motion.a>
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.97 }} 
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link href="mailto:krishay958@gmail.com" className={styles.ctaButtonContact}>
                <motion.div
                  className={styles.buttonGlow}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  initial={{ opacity: 0 }}
                />
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  whileHover={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </motion.svg>
                <span>Get in touch</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className={styles.socialLinksRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a 
              target="_blank" 
              href="https://www.linkedin.com/in/krishay-nair-667313233/" 
              className={styles.socialLink} 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div className={styles.socialGlow} whileHover={{ opacity: 1 }} />
              <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </motion.svg>
            </motion.a>
            <motion.a 
              target="_blank" 
              href="https://github.com/KrishayNair" 
              className={styles.socialLink} 
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -4, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div className={styles.socialGlow} whileHover={{ opacity: 1 }} />
              <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
            </motion.a>
            <motion.a 
              href="mailto:krishay958@gmail.com" 
              className={styles.socialLink} 
              aria-label="Email"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div className={styles.socialGlow} whileHover={{ opacity: 1 }} />
              <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" whileHover={{ y: [0, -3, 0] }} transition={{ duration: 0.3 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </motion.svg>
            </motion.a>
            <motion.a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://medium.com/@krishay958" 
              className={styles.socialLink} 
              aria-label="Medium"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div className={styles.socialGlow} whileHover={{ opacity: 1 }} />
              <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <path d="M13.54 12l-5.27-5.27L13.54 1.46 18.81 6.73 13.54 12zm-1.08 0L1.46 22.54l1.27 1.27L13.46 13.27l-1-1.27zm1.08 0l5.27 5.27L13.46 22.54 8.19 17.27l4.27-5.27zm-1.08 0l-1 1.27L2.73 1.46l1.27-1.27L12.46 12z"/>
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  );
}

export default Hero;
