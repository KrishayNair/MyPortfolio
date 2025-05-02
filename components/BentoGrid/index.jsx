'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { motion } from 'framer-motion';

const BentoGrid = ({ projects }) => {
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
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.tech}>Technologies Used: {project.tech}</p>
            <div className={styles.buttonContainer}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>
                  <span className={styles.buttonText}>Github Repo</span>
                </button>
              </a>
              <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>
                  <span className={styles.buttonText}>More Details</span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid; 