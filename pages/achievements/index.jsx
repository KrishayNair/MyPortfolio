import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { achievements } from '../../data/achievements';
import styles from './achievements.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AchievementsPage() {
  return (
    <>
      <Head>
        <title>Hall of Fame - Achievements | Krishay Nair</title>
        <meta name="description" content="Awards, hackathon wins, and achievements—a hall of fame of milestones and recognition." />
      </Head>

      <div className={styles.container}>
        <Navbar />

        <main className={styles.main}>
          <motion.header
            className={styles.hero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.heroLabel}>Recognition & milestones</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleCursive}>Hall of</span>{' '}
              <span className={styles.heroTitleNormal}>Fame</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Awards, hackathon wins, and moments that shaped the journey.
            </p>
          </motion.header>

          <div className={styles.grid}>
            {achievements.map((achievement, index) => {
              const tagline = achievement.description.split(/[.!?]/)[0]?.trim() + (achievement.description.includes('.') ? '.' : '') || achievement.description.slice(0, 80) + '…';
              return (
                <motion.article
                  key={achievement.id}
                  className={styles.card}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
                >
                  <div className={styles.cardShine} />
                  <div className={styles.cardGlow} />
                  <div className={styles.cardAccent} />
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNumber}>{index + 1}</span>
                      <motion.div
                        className={styles.cardIconWrap}
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                      >
                        <span className={styles.cardIcon}>{achievement.icon}</span>
                      </motion.div>
                      <motion.span
                        className={styles.cardYear}
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        {achievement.year}
                      </motion.span>
                    </div>
                    <span className={styles.cardCategory}>{achievement.category}</span>
                    <h2 className={styles.cardTitle}>{achievement.title}</h2>
                    <p className={styles.cardTagline}>{tagline}</p>
                    <p className={styles.cardDescription}>{achievement.description}</p>
                    {achievement.highlight && (
                      <p className={styles.cardHighlight}>{achievement.highlight}</p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className={styles.backWrap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/#achievements" className={styles.backLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
}
