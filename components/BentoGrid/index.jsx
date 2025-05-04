'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const BentoGrid = ({ projects }) => {
  const carouselRefs = useRef({});

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
    
    projects.forEach((project, projectIndex) => {
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
  }, [projects]);

  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ backgroundColor: project.color }}
        >
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
          <div className={styles.content}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.tech}>Technologies Used: {project.tech}</p>
            
            {project.achievements && (
              <div className={styles.achievements}>
                <h3 className={styles.achievementsTitle}>Achievements</h3>
                <div className={styles.achievementsList}>
                  {project.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className={styles.achievement}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                      <span className={styles.achievementIcon}>{achievement.icon}</span>
                      <div className={styles.achievementContent}>
                        <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                        <p className={styles.achievementDescription}>{achievement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.buttonContainer}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>
                  <span className={styles.buttonText}>Github Repo</span>
                </button>
              </a>
              {project.liveUrls?.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <button className={`${styles.button} ${styles.liveButton}`}>
                    <span className={styles.buttonText}>{link.title}</span>
                  </button>
                </a>
              ))}
              <Link href={project.detailsUrl}>
                <button className={styles.button}>
                  <span className={styles.buttonText}>More Details</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid; 