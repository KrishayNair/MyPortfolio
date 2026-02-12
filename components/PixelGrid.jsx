'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PixelGrid.module.css';

function PixelGrid() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [theme, setTheme] = useState('dark');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Fade out as we scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  // Grid dimensions - optimized for performance
  const cellSize = 55;
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Calculate optimal grid size
      const calculatedCols = Math.ceil(width / cellSize);
      const calculatedRows = Math.ceil(height / cellSize);
      setCols(calculatedCols);
      setRows(calculatedRows);
    };

    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme);
    };

    updateDimensions();
    checkTheme();
    
    window.addEventListener('resize', updateDimensions);
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  const getHoverColor = (index) => {
    // Generate hover colors with blue accent - same for both themes
    // Use golden angle for even distribution
    const goldenAngle = 137.508;
    const hue = (index * goldenAngle) % 360;
    
    // Prefer blue/cyan/indigo hues (200-250) for better theme integration
    let adjustedHue;
    if (hue < 60) {
      adjustedHue = 200 + (hue / 60) * 30; // Blue to cyan
    } else if (hue < 180) {
      adjustedHue = 230 + ((hue - 60) / 120) * 20; // Cyan to blue
    } else {
      adjustedHue = hue; // Keep other hues
    }
    
    const saturation = 50 + (index % 30);
    
    // Same brightness for both themes - looks better
    const lightness = 50 + (index % 30);
    
    return `hsl(${Math.round(adjustedHue)}, ${saturation}%, ${lightness}%)`;
  };

  // Limit cells for performance on smaller screens
  const getMaxCells = () => {
    if (typeof window === 'undefined') return 1000;
    const width = window.innerWidth;
    if (width < 768) return 400;
    if (width < 1200) return 800;
    return cols * rows;
  };
  
  const totalCells = Math.min(cols * rows, getMaxCells());

  return (
    <motion.div
      ref={containerRef}
      className={styles.pixelGrid}
      style={{
        opacity,
        scale,
      }}
    >
      <div 
        className={styles.gridContainer}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => {
          const isHovered = hoveredCell === index;
          
          return (
            <motion.div
              key={index}
              className={styles.gridCell}
              onMouseEnter={() => setHoveredCell(index)}
              onMouseLeave={() => setHoveredCell(null)}
              animate={{
                backgroundColor: isHovered 
                  ? getHoverColor(index)
                  : 'transparent',
                scale: isHovered ? 1.15 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{
                duration: 0.15,
                ease: 'easeOut'
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default PixelGrid;
