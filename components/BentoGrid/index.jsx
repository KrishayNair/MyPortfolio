'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Technology name to icon mapping
const getTechIcon = (techName) => {
  const techMap = {
    'next.js': 'nextjs',
    'nextjs': 'nextjs',
    'react': 'react',
    'typescript': 'typescript',
    'javascript': 'javascript',
    'node.js': 'nodejs',
    'nodejs': 'nodejs',
    'tailwind': 'tailwindcss',
    'tailwind css': 'tailwindcss',
    'postgresql': 'postgresql',
    'mongodb': 'mongodb',
    'python': 'python',
    'fastapi': 'fastapi',
    'django': 'django',
    'flutter': 'flutter',
    'electron': 'electron',
    'supabase': 'supabase',
    'firebase': 'firebase',
    'aws': 'amazonaws',
    'docker': 'docker',
    'redis': 'redis',
    'openai': 'openai',
    'vercel': 'vercel',
  };
  
  const normalized = techName.toLowerCase().trim();
  return techMap[normalized] || null;
};

const BentoGrid = ({ projects }) => {
  const carouselRefs = useRef({});
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const moveCarousel = (projectIndex, slideIndex) => {
    const wrapper = carouselRefs.current[`wrapper-${projectIndex}`];
    if (!wrapper) return;
    
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
    const dots = document.querySelectorAll(`.${styles.carouselDot}[data-project="${projectIndex}"]`);
    const slides = document.querySelectorAll(`.${styles.carouselSlide}[data-project="${projectIndex}"]`);
    
    dots.forEach((dot, i) => {
      dot.classList.toggle(styles.active, i === slideIndex);
    });
    slides.forEach((slide, i) => {
      slide.classList.toggle(styles.active, i === slideIndex);
    });
  };

  useEffect(() => {
    const intervals = {};
    
    displayedProjects.forEach((project, projectIndex) => {
      if (project.images?.length > 1) {
        let currentSlide = 0;
        
        intervals[projectIndex] = setInterval(() => {
          currentSlide = (currentSlide + 1) % project.images.length;
          moveCarousel(projectIndex, currentSlide);
        }, 3000);
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [displayedProjects]);

  return (
    <>
      <div className={styles.gridContainer}>
        {displayedProjects.map((project, index) => {
        // Parse technologies
        const techList = project.tech 
          ? project.tech.split(',').map(t => t.trim())
          : [];
        
        return (
          <motion.div
            key={index}
            className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image/Preview Section */}
            <div className={styles.imageContainer}>
              <Image
                src={`/images/${project.src}`}
                alt={project.title}
                fill
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.previewOverlay}>
                <div className={styles.carouselContainer}>
                  <div 
                    className={styles.carouselWrapper}
                    ref={el => carouselRefs.current[`wrapper-${index}`] = el}
                  >
                    {project.images?.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`${styles.carouselSlide} ${imgIndex === 0 ? styles.active : ''}`}
                        data-project={index}
                      >
                        <Image
                          src={`/images/${image}`}
                          alt={`${project.title} preview ${imgIndex + 1}`}
                          fill
                          style={{ objectFit: 'contain' }}
                          className={styles.carouselImage}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.carouselControls}>
                    {project.images?.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        className={`${styles.carouselDot} ${imgIndex === 0 ? styles.active : ''}`}
                        data-project={index}
                        onClick={() => moveCarousel(index, imgIndex)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
              {/* Title with Icons */}
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{project.title}</h2>
                <div className={styles.titleIcons}>
                  {project.liveUrls && project.liveUrls.length > 0 && (
                    <a 
                      href={project.liveUrls[0].url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      title="Live Site"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      title="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className={styles.description} title={project.description}>
                {(() => {
                  const sentenceRegex = /[^.!?]*[.!?]+/g;
                  const sentences = project.description.match(sentenceRegex) || [];
                  
                  if (sentences.length > 0) {
                    let intro = '';
                    let sentenceCount = 0;
                    
                    for (const sentence of sentences) {
                      const trimmedSentence = sentence.trim();
                      if (trimmedSentence) {
                        intro += (intro ? ' ' : '') + trimmedSentence;
                        sentenceCount++;
                        
                        if (sentenceCount >= 2 && intro.length > 150) {
                          break;
                        }
                        if (sentenceCount >= 3 || intro.length > 250) {
                          break;
                        }
                      }
                    }
                    
                    if (intro) {
                      return intro;
                    }
                  }
                  
                  const maxLength = 200;
                  if (project.description.length > maxLength) {
                    const truncated = project.description.substring(0, maxLength);
                    const lastSpace = truncated.lastIndexOf(' ');
                    if (lastSpace > maxLength * 0.7) {
                      return truncated.substring(0, lastSpace).trim() + '...';
                    }
                    return truncated.trim() + '...';
                  }
                  return project.description;
                })()}
              </p>

              {/* Technologies with Icons */}
              <div className={styles.techSection}>
                <span className={styles.techLabel}>Technologies</span>
                <div className={styles.techIcons}>
                  {techList.slice(0, 8).map((tech, techIndex) => {
                    const iconName = getTechIcon(tech);
                    return (
                      <div key={techIndex} className={styles.techIconWrapper} title={tech}>
                        {iconName ? (
                          <Image
                            src={`/skills/${iconName}.svg`}
                            alt={tech}
                            width={24}
                            height={24}
                            className={styles.techIcon}
                          />
                        ) : (
                          <span className={styles.techIconFallback}>{tech.charAt(0).toUpperCase()}</span>
                        )}
                      </div>
                    );
                  })}
                  {techList.length > 8 && (
                    <div className={styles.techIconWrapper} title={`+${techList.length - 8} more`}>
                      <span className={styles.techIconMore}>+{techList.length - 8}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Indicator */}
              <div className={styles.statusRow}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusText}>All Systems Operational</span>
              </div>

              {/* View Details Button */}
              <Link href={project.detailsUrl} className={styles.viewDetailsLink}>
                <span className={styles.viewDetailsText}>View Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        );
        })}
      </div>
      {projects.length > 4 && !showAll && (
        <div className={styles.viewAllContainer}>
          <button 
            className={styles.viewAllButton}
            onClick={() => setShowAll(true)}
          >
            Show all projects
          </button>
        </div>
      )}
    </>
  );
};

export default BentoGrid; 