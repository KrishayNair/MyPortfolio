'use client'
import React from "react";
import styles from "./navbar.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

function navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (e, href) => {
    e.preventDefault();
    // Navigate directly to the href with hash
    router.push(href);
  };

  return (
    <motion.div 
      className={styles.headerContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.headerLogo}>Krishay Nair</h1>
      <div className={styles.navMain}>
        <nav className={styles.navMid} aria-label="Main Navigation">
          <ul>
            <li><Link className={styles.navElement} href="/">Home</Link></li>
            <li><a className={styles.navElement} href="/#about" onClick={(e) => handleNavigation(e, '/#about')}>About</a></li>
            <li><a className={styles.navElement} href="/#projects" onClick={(e) => handleNavigation(e, '/#projects')}>Projects</a></li>
            <li><a className={styles.navElement} href="/#experience" onClick={(e) => handleNavigation(e, '/#experience')}>Experience</a></li>
            <li><a className={styles.navElement} href="/#certifications" onClick={(e) => handleNavigation(e, '/#certifications')}>Certifications</a></li>
            <li><a className={styles.navElement} href="/#blogs" onClick={(e) => handleNavigation(e, '/#blogs')}>Blog</a></li>
          </ul>
        </nav>
      </div>
     
      <div className={styles.headerActions}>
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      <a
        href="./pdf/Krishay_Nair_Resume.pdf"
        className={styles.download}
        download="resume"
      >
        <Button className={styles.downloadBtn} variant="light">
          Download CV
        </Button>
      </a>
    </div>
    </motion.div>
  );
}

export default navbar;
