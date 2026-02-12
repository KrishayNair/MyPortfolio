import React, { useState, useEffect } from "react";
import styles from "./GitHubContributions.module.css";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "KrishayNair";

function getLevel(count, maxCount) {
  if (count === 0) return 0;
  if (maxCount <= 0) return 1;
  const ratio = count / maxCount;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  return 3;
}

function GitHubContributions() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    currentYear: 0,
    longestStreak: 0,
    currentStreak: 0
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      const to = new Date();
      const from = new Date(to);
      from.setDate(from.getDate() - 364);
      const fromStr = from.toISOString().slice(0, 10) + "T00:00:00Z";
      const toStr = to.toISOString().slice(0, 10) + "T23:59:59Z";

      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            }),
          },
          body: JSON.stringify({
            query,
            variables: {
              username: GITHUB_USERNAME,
              from: fromStr,
              to: toStr,
            },
          }),
        });

        const json = await res.json();
        if (cancelled) return;

        if (json.errors) {
          setError(json.errors[0]?.message || "Failed to load contributions");
          setLoading(false);
          return;
        }

        const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
          setError("User not found or no contribution data");
          setLoading(false);
          return;
        }

        const countByDate = {};
        for (const week of calendar.weeks || []) {
          for (const day of week.contributionDays || []) {
            countByDate[day.date] = day.contributionCount;
          }
        }

        const list = [];
        for (let i = 364; i >= 0; i--) {
          const d = new Date(to);
          d.setDate(d.getDate() - i);
          const dateStr = d.toISOString().slice(0, 10);
          const count = countByDate[dateStr] ?? 0;
          list.push({ date: dateStr, count });
        }

        const maxInList = Math.max(...list.map((d) => d.count), 1);
        const normalized = list.map((d) => ({
          ...d,
          level: getLevel(d.count, maxInList),
        }));

        setContributions(normalized);

        const total = calendar.totalContributions ?? normalized.reduce((s, d) => s + d.count, 0);
        const currentYear = normalized
          .filter((d) => new Date(d.date).getFullYear() === new Date().getFullYear())
          .reduce((s, d) => s + d.count, 0);

        let longestStreak = 0;
        let currentStreak = 0;
        let tempStreak = 0;
        for (let i = normalized.length - 1; i >= 0; i--) {
          if (normalized[i].count > 0) {
            tempStreak++;
            if (i === normalized.length - 1) currentStreak++;
          } else {
            longestStreak = Math.max(longestStreak, tempStreak);
            tempStreak = 0;
            if (i < normalized.length - 1) currentStreak = 0;
          }
        }
        longestStreak = Math.max(longestStreak, tempStreak);

        setStats({
          total,
          currentYear,
          longestStreak,
          currentStreak,
        });
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load contributions");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchContributions();
    return () => { cancelled = true; };
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
        <h1 className={styles.mainHeading}><span className="heading-cursive">GitHub</span><span className="heading-normal"> Contributions</span></h1>
        <div className={styles.loading}>Loading contributions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="github-contributions" className={styles.mainContainer}>
        <h1 className={styles.mainHeading}><span className="heading-cursive">GitHub</span><span className="heading-normal"> Contributions</span></h1>
        <div className={styles.loading}>
          <p>{error}</p>
          <p className={styles.errorHint}>
            Unauthenticated requests are limited. Add <code>NEXT_PUBLIC_GITHUB_TOKEN</code> in <code>.env.local</code> for reliable access, or try again later.
          </p>
          <a href="https://github.com/KrishayNair" target="_blank" rel="noopener noreferrer" className={styles.link}>
            View on GitHub →
          </a>
        </div>
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

