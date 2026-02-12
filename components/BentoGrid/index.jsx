'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Technology name to icon filename (must match public/skills/*.svg exactly)
const getTechIcon = (techName) => {
  const s = techName.toLowerCase().trim();
  const techMap = {
    'next.js': 'nextjs', nextjs: 'nextjs',
    react: 'react', 'react three fiber': 'react',
    typescript: 'typescript', 'ts': 'typescript',
    javascript: 'javascript', js: 'javascript',
    'node.js': 'nodejs', nodejs: 'nodejs',
    tailwind: 'tailwindcss', 'tailwind css': 'tailwindcss', tailwindcss: 'tailwindcss',
    postgresql: 'PostgreSQL',
    mongodb: 'mongodb',
    python: 'python',
    firebase: 'firebase',
    aws: 'AWS',
    docker: 'Docker',
    redis: 'redis',
    vite: 'vite',
    html: 'html', css: 'css',
    java: 'java', cpp: 'cpp', 'c++': 'C++1',
    redux: 'redux', sass: 'sass',
    mysql: 'mysql', webpack: 'webpack', git: 'git',
    figma: 'figma', 'chakra ui': 'chakra-ui', 'ant design': 'antdesign',
  };
  return techMap[s] ?? null;
};

const BentoGrid = ({ projects, singleColumn = false, showAllProjects = false }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (isHovering) {
      document.body.style.cursor = 'none';
      window.addEventListener('mousemove', updateCursorPosition);
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        document.body.style.cursor = '';
      };
    } else {
      document.body.style.cursor = '';
    }
  }, [isHovering, cursorX, cursorY]);

  return (
    <>
      {/* Custom Cursor */}
      {isHovering && (
        <motion.div
          className={styles.customCursor}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <span className={styles.cursorText}>View project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </motion.div>
      )}
      
      <div className={`${styles.projectsList} ${singleColumn ? styles.projectsListSingle : ''}`}>
        {displayedProjects.map((project, index) => {
        // Parse technologies
        const techList = project.tech 
          ? project.tech.split(',').map(t => t.trim())
          : [];
        
        const imageSrc = project.src || project.previewSrc;
        const liveUrl = project.liveUrls?.[0]?.url;

        return (
          <motion.article
            key={project.slug || index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className={styles.cardMedia}>
              {imageSrc ? (
                liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardMediaLink}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <img
                      src={`/images/${imageSrc}`}
                      alt={project.title}
                      className={styles.cardImg}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <span className={styles.cardMediaLabel}>View live site →</span>
                  </a>
                ) : (
                  <img
                    src={`/images/${imageSrc}`}
                    alt={project.title}
                    className={styles.cardImg}
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                )
              ) : (
                <div className={styles.cardMediaPlaceholder}>
                  <span>{project.title}</span>
                </div>
              )}
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardShortDesc}>{project.description}</p>
              <div className={styles.cardTech}>
                <span className={styles.cardTechLabel}>Technologies</span>
                <div className={styles.cardTechIcons}>
                  {techList.slice(0, 6).map((tech, techIndex) => {
                    const iconName = getTechIcon(tech);
                    const showLabel = !iconName;
                    return (
                      <span key={techIndex} className={styles.cardTechIcon} title={tech}>
                        {iconName ? (
                          <Image
                            src={`/skills/${iconName}.svg`}
                            alt={tech}
                            width={22}
                            height={22}
                            className={styles.techIconImg}
                            onError={(e) => {
                              const wrap = e.target.closest(`.${styles.cardTechIcon}`);
                              if (wrap) {
                                const img = wrap.querySelector('img');
                                const label = wrap.querySelector(`.${styles.cardTechNameLabel}`);
                                if (img) img.style.display = 'none';
                                if (label) label.style.display = 'inline-flex';
                              }
                            }}
                          />
                        ) : null}
                        <span className={styles.cardTechNameLabel} style={{ display: showLabel ? 'inline-flex' : 'none' }}>
                          {tech.trim()}
                        </span>
                      </span>
                    );
                  })}
                  {techList.length > 6 && (
                    <span className={styles.cardTechMore}>+{techList.length - 6}</span>
                  )}
                </div>
              </div>
              <div className={styles.cardActions}>
                <Link href={project.detailsUrl} className={styles.cardButton}>
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.article>
        );
        })}
      </div>

      {!showAllProjects && projects.length > 4 && (
        <motion.div className={styles.viewAllContainer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <Link href="/projects" className={styles.viewAllButton}>
              View all projects
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default BentoGrid; 