'use client';

import React, { useState } from "react";
import styles from "./Achievements.module.css";
import { motion, AnimatePresence } from "framer-motion";

const VISIBLE_COUNT = 4;

function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const achievements = [
    {
      title: "Smart India Hackathon 2024 Winner",
      icon: "🏆",
      description: "Recognized as the winning project in the prestigious Smart India Hackathon 2024",
      category: "National Competition",
      year: "2024"
    },
    {
      title: "Government Adoption",
      icon: "🏛️",
      description: "Officially being adapted by Government of India, Department of Post for nationwide implementation",
      category: "Government Recognition",
      year: "2024"
    },
    {
      title: "Quasar 2.0 Winner",
      icon: "🎓",
      description: "Secured 2nd place in the Smart Education domain at the Quasar 2.0 national-level competition",
      category: "Education Tech",
      year: "2024"
    },
    {
      title: "Move AI Hackathon GameFi Winner",
      icon: "💰🏅",
      description: "Won 1st prize in the GameFi Track of the Move AI Hackathon, receiving a $13,000 award",
      category: "Blockchain & AI",
      year: "2024"
    },
    {
      title: "Legal Tech Hackathon Winner",
      icon: "⚖️",
      description: "Recognized as the winning project in the Legal Tech Hackathon",
      category: "Legal Technology",
      year: "2024"
    },
    {
      title: "Adopted by Legal Professionals",
      icon: "⚖️",
      description: "Used and recommended by High Court and Supreme Court lawyers",
      category: "Professional Adoption",
      year: "2024"
    },
    {
      title: "Top 10 in IIIT Pune Ideathon",
      icon: "🏆",
      description: "Recognized for significantly reducing complaint resolution time",
      category: "Innovation",
      year: "2024"
    },
    {
      title: "Best Social Impact Award",
      icon: "🏆",
      description: "Recognized for innovative use of blockchain in philanthropy",
      category: "Social Impact",
      year: "2024"
    },
    {
      title: "AI Innovation Award",
      icon: "🤖",
      description: "Recognized for innovative use of AI in traditional medicine",
      category: "Healthcare AI",
      year: "2024"
    },
    {
      title: "Community Excellence",
      icon: "👥",
      description: "Recognized as one of the most active GDSC chapters",
      category: "Community Leadership",
      year: "2023"
    },
    {
      title: "Design Award",
      icon: "🎨",
      description: "Awarded for outstanding UI/UX design",
      category: "Design Excellence",
      year: "2023"
    },
    {
      title: "Cultural Preservation Initiative",
      icon: "🎨",
      description: "Promoted the preservation of Indian traditional crafts by providing artisans with a global platform",
      category: "Cultural Impact",
      year: "2024"
    }
  ];

  const visibleAchievements = showAll ? achievements : achievements.slice(0, VISIBLE_COUNT);
  const hasMore = achievements.length > VISIBLE_COUNT;

  return (
    <div id="achievements" className={styles.mainContainer}>
      <h2 className={styles.mainHeading}>Extra Curricular & Achievements</h2>
      <div className={styles.achievementsContainer}>
        <div className={styles.achievementsGrid}>
          <AnimatePresence mode="popLayout">
            {visibleAchievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.title}-${achievement.category}-${achievement.year}`}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
              >
                <div className={styles.achievementHeader}>
                  <div className={styles.achievementIcon}>{achievement.icon}</div>
                  <div className={styles.achievementInfo}>
                    <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                    <span className={styles.achievementCategory}>{achievement.category}</span>
                  </div>
                  <span className={styles.achievementYear}>{achievement.year}</span>
                </div>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {hasMore && (
          <motion.button
            type="button"
            className={styles.seeMoreButton}
            onClick={() => setShowAll((prev) => !prev)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAll ? "See less" : `See more (+${achievements.length - VISIBLE_COUNT})`}
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Achievements;
