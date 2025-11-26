import React from "react";
import styles from "./Components.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

function Components() {
  const components = [
    {
      title: "React Wheel Picker",
      description: "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. Backed by Vercel OSS Program.",
      npm: "react-wheel-picker",
      github: "https://github.com/yourusername/react-wheel-picker",
      downloads: "7k+",
      weeklyDownloads: "7k+",
      badges: ["Open Source", "Featured"],
      tags: ["React", "TypeScript", "UI Component"],
      status: "Active",
      featured: true
    },
    {
      title: "Custom Bento Grid",
      description: "A flexible and customizable bento grid component for Next.js with responsive layouts and animations.",
      npm: null,
      github: "https://github.com/KrishayNair/MyPortfolio",
      downloads: null,
      weeklyDownloads: null,
      badges: ["Open Source"],
      tags: ["Next.js", "CSS Grid", "Component"],
      status: "Active",
      featured: false
    },
    {
      title: "Animated Scroll Section",
      description: "Smooth scroll-triggered animations with GSAP integration for engaging user experiences.",
      npm: null,
      github: "https://github.com/KrishayNair/MyPortfolio",
      downloads: null,
      weeklyDownloads: null,
      badges: ["Open Source"],
      tags: ["GSAP", "Animation", "Scroll"],
      status: "Active",
      featured: false
    },
    {
      title: "Green Cursor Tracker",
      description: "Custom cursor tracking component with smooth animations and interactive effects.",
      npm: null,
      github: "https://github.com/KrishayNair/MyPortfolio",
      downloads: null,
      weeklyDownloads: null,
      badges: ["Open Source"],
      tags: ["React", "Animation", "UI"],
      status: "Active",
      featured: false
    }
  ];

  const featuredComponent = components.find(c => c.featured);
  const regularComponents = components.filter(c => !c.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="components" className={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.mainHeading}>Components</h1>
        <p className={styles.subHeading}>Open source components and libraries I've built</p>
      </motion.div>

      {featuredComponent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.featuredSection}
        >
          <h2 className={styles.sectionTitle}>Featured</h2>
          <motion.div
            className={styles.featuredCard}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.featuredHeader}>
              <div>
                <h3 className={styles.featuredTitle}>{featuredComponent.title}</h3>
                <p className={styles.featuredDescription}>{featuredComponent.description}</p>
              </div>
              <div className={styles.badges}>
                {featuredComponent.badges.map((badge, i) => (
                  <span key={i} className={styles.badge}>{badge}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.featuredStats}>
              {featuredComponent.npm && (
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Weekly Downloads</span>
                  <span className={styles.statValue}>{featuredComponent.weeklyDownloads}</span>
                </div>
              )}
              <div className={styles.stat}>
                <span className={styles.statLabel}>Status</span>
                <span className={styles.statValue}>{featuredComponent.status}</span>
              </div>
            </div>

            <div className={styles.tags}>
              {featuredComponent.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.featuredLinks}>
              {featuredComponent.npm && (
                <a
                  href={`https://www.npmjs.com/package/${featuredComponent.npm}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View on npm →
                </a>
              )}
              {featuredComponent.github && (
                <a
                  href={featuredComponent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.componentsSection}
      >
        <h2 className={styles.sectionTitle}>All Components</h2>
        <div className={styles.componentsGrid}>
          {regularComponents.map((component, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={styles.componentCard}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{component.title}</h3>
                <div className={styles.badges}>
                  {component.badges.map((badge, i) => (
                    <span key={i} className={styles.badgeSmall}>{badge}</span>
                  ))}
                </div>
              </div>
              
              <p className={styles.cardDescription}>{component.description}</p>
              
              <div className={styles.tags}>
                {component.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                {component.github && (
                  <a
                    href={component.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Components;

