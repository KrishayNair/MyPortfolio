'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Achievements.module.css";
import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

const AUTO_SCROLL_SPEED = 1;
const AUTO_SCROLL_INTERVAL_MS = 25;

function Achievements() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId = null;
    const tick = () => {
      const el = scrollRef.current;
      if (!el || isPaused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 1) return;
      el.scrollLeft += AUTO_SCROLL_SPEED;
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollLeft = 0;
      }
    };

    const startAfterLayout = setTimeout(() => {
      intervalId = setInterval(tick, AUTO_SCROLL_INTERVAL_MS);
    }, 400);

    return () => {
      clearTimeout(startAfterLayout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <div id="achievements" className={styles.mainContainer}>
      <h2 className={styles.mainHeading}>Hall of Fame</h2>
      <p className={styles.subHeading}>Extra curricular & achievements — hover to pause</p>
      <div
        ref={scrollRef}
        className={styles.hofScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={styles.hofList}>
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.id}-${index}`}
              className={styles.hofCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -3 }}
            >
              <div className={styles.hofCardGlow} />
              <div className={styles.hofCardInner}>
                <div className={styles.hofCardHeader}>
                  <div className={styles.hofCardIconWrap}>
                    <span className={styles.hofCardIcon}>{achievement.icon}</span>
                  </div>
                  <div className={styles.hofCardMeta}>
                    <span className={styles.hofCardCategory}>{achievement.category}</span>
                    <span className={styles.hofCardYear}>{achievement.year}</span>
                  </div>
                </div>
                <h3 className={styles.hofCardTitle}>{achievement.title}</h3>
                <p className={styles.hofCardDescription}>{achievement.description}</p>
                {achievement.highlight && (
                  <p className={styles.hofCardHighlight}>{achievement.highlight}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className={styles.viewAllWrap}>
        <Link href="/achievements" className={styles.viewAllButton}>
          View all on dedicated page
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
