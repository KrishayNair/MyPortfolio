import React, { useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from "./hero.module.css";
import Link from "next/link";

function Hero() {
  // Cursor tracker state for left intro
  const introRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const rect = introRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };
  const handleMouseLeave = () => {
    setCursorPos((pos) => ({ ...pos, active: false }));
  };

  return (
    <div className={styles.hero}>
      {/* Left Side: Styled Intro */}
      <div
        className={styles.leftIntroSimple + ' ' + styles.leftIntroBig}
        ref={introRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.helloBg}>Hello...</div>
        <div className={styles.introTextBlock}>
          <div className={styles.im}>I'm</div>
          <div className={styles.krishayLine}>
            <span className={styles.krishay}>Krishay</span> <span className={styles.nair}>Nair</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.iamaline}>
            I am a{' '}
            <span className={styles.typeAnimWrapper}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1200,
                  "C.S Student",
                  1200,
                  "UI/UX Designer",
                  1200,
                  "Problem Solver",
                  1200,
                ]}
                speed={60}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </div>
        </div>
        {/* Cursor Tracker Dot */}
        {cursorPos.active && (
          <div
            className={styles.cursorTrackerDot}
            style={{
              left: cursorPos.x,
              top: cursorPos.y
            }}
          />
        )}
      </div>

      {/* Center: Title and Desk */}
      <div className={styles.heroContentCentered}>
        <h1 className={styles.heroTitle}>
          Innovate Today,<br />
          <span className={styles.heroMove}>Inspire <em>Tomorrow.</em></span>
        </h1>
        <div className={styles.glowBehindDesk}></div>
        <div className={styles.deskWrapperSimple}>
          <img
            src="./images/Modern Desk.png"
            alt="Modern Desk"
            className={styles.deskImgHero}
          />
          <div className={styles.deskFloorShadow}></div>
        </div>
      </div>

      {/* Right Side: Large, Interactive Socials with Green Accent Line */}
      <div className={styles.rightSocialsBar}>
        <div className={styles.socialHeading}>Follow Me</div>
        <div className={styles.socialLine}></div>
        <div className={styles.socialLinksVertical}>
          <a target="_blank" href="https://www.linkedin.com/in/krishay-nair-667313233/" className={styles.socialIconSquare}>
            <img className={styles.socialIconImg} src="./images/Linkedin.svg" alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://github.com/KrishayNair" className={styles.socialIconSquare}>
            <img className={styles.socialIconImg} src="./images/GitHub.svg" alt="GitHub" />
          </a>
          <a href="mailto:krishay958@gmail.com" className={styles.socialIconSquare}>
            <img className={styles.socialIconImg} src="./images/Gmail.svg" alt="Email" />
          </a>
          <a target="_blank" href="https://www.instagram.com/krishay_nair/" className={styles.socialIconSquare}>
            <img className={styles.socialIconImg} src="./images/Instagram.svg" alt="Instagram" />
          </a>
          <a target="_blank" href="https://leetcode.com/KrishayNair/" className={styles.socialIconSquare}>
            <img className={styles.socialIconImg} src="./images/leetcode3.svg" alt="LeetCode" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
