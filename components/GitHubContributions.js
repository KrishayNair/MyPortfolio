import React, { useState, useEffect } from "react";
import styles from "./GitHubContributions.module.css";
import { motion } from "framer-motion";

function GitHubContributions() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    currentYear: 0,
    longestStreak: 0,
    currentStreak: 0
  });

  // Generate mock contribution data (you can replace this with actual GitHub API integration)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Generate 365 days of contribution data
      const mockContributions = [];
      const today = new Date();
      
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // Random contribution count (0-10) with some pattern
        const dayOfWeek = date.getDay();
        const count = dayOfWeek === 0 || dayOfWeek === 6 
          ? Math.floor(Math.random() * 5) // Fewer on weekends
          : Math.floor(Math.random() * 10);
        
        mockContributions.push({
          date: date.toISOString().split('T')[0],
          count: count,
          level: count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : 3
        });
      }

      setContributions(mockContributions);
      
      // Calculate stats
      const total = mockContributions.reduce((sum, day) => sum + day.count, 0);
      const currentYear = mockContributions
        .filter(day => new Date(day.date).getFullYear() === new Date().getFullYear())
        .reduce((sum, day) => sum + day.count, 0);
      
      // Calculate streaks (simplified)
      let currentStreak = 0;
      let longestStreak = 0;
      let tempStreak = 0;
      
      for (let i = mockContributions.length - 1; i >= 0; i--) {
        if (mockContributions[i].count > 0) {
          tempStreak++;
          if (i === mockContributions.length - 1) {
            currentStreak++;
          }
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 0;
          if (i < mockContributions.length - 1) {
            break;
          }
        }
      }
      
      setStats({
        total,
        currentYear,
        longestStreak: Math.max(longestStreak, tempStreak),
        currentStreak
      });
      setLoading(false);
    }, 500);
  }, []);

  const getMonthLabels = () => {
    const months = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    
    return months;
  };

  const getDayLabels = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };


  if (loading) {
    return (
      <div id="github-contributions" className={styles.mainContainer}>
        <h1 className={styles.mainHeading}>GitHub Contributions</h1>
        <div className={styles.loading}>Loading contributions...</div>
      </div>
    );
  }

  return (
    <div id="github-contributions" className={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.mainHeading}>GitHub Contributions</h1>
        <p className={styles.subHeading}>My coding activity and contributions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.statsGrid}
      >
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.total.toLocaleString()}</div>
          <div className={styles.statLabel}>Total Contributions</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.currentYear.toLocaleString()}</div>
          <div className={styles.statLabel}>This Year</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.longestStreak}</div>
          <div className={styles.statLabel}>Longest Streak (days)</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.currentStreak}</div>
          <div className={styles.statLabel}>Current Streak (days)</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={styles.contributionsWrapper}
      >
        <div className={styles.contributionsContainer}>
          <div className={styles.monthLabels}>
            {getMonthLabels().map((month, i) => (
              <span key={i} className={styles.monthLabel}>{month}</span>
            ))}
          </div>
          <div className={styles.contributionsGrid}>
            {contributions.map((contribution, index) => {
              const date = new Date(contribution.date);
              const dayOfWeek = date.getDay();
              const weekIndex = Math.floor(index / 7);
              
              return (
                <motion.div
                  key={contribution.date}
                  className={`${styles.contributionCell} ${styles[`level${contribution.level}`]}`}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  title={`${contribution.count} contributions on ${date.toLocaleDateString()}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.001 }}
                />
              );
            })}
          </div>
        </div>
        
        <div className={styles.legend}>
          <span className={styles.legendLabel}>Less</span>
          <div className={styles.legendCells}>
            {[0, 1, 2, 3].map(level => (
              <div
                key={level}
                className={`${styles.legendCell} ${styles[`level${level}`]}`}
              />
            ))}
          </div>
          <span className={styles.legendLabel}>More</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.githubLink}
      >
        <a
          href="https://github.com/KrishayNair"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on GitHub →
        </a>
      </motion.div>
    </div>
  );
}

export default GitHubContributions;

