'use client'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../../data';
import styles from './project.module.css';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const project = projects.find(p => p.slug === id);
  const relatedProjects = projects
    .filter(p => p.slug !== id)
    .slice(0, 3);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleBack = () => {
    router.push('/#projects');
  };

  return (
    <div className={styles.container}>
      <motion.button
        className={styles.backButton}
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      <div className={styles.projectHeader}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.liveLinks}>
          {project.liveUrls?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* {project.description && (
        <div className={styles.descriptionBlock}>
          {project.description.split(/\. (?=[A-Z])/).map((para, idx, arr) => (
            <p key={idx} style={{ marginBottom: idx < arr.length - 1 ? '1.1em' : 0 }}>
              {para.trim()}{idx < arr.length - 1 ? '.' : ''}
            </p>
          ))}
        </div>
      )} */}

      {project.certificates && (
        <section className={styles.section}>
          <h2>Certificates & Recognition</h2>
          <div className={styles.certificates}>
            {project.certificates.map((cert, index) => (
              <div key={index} className={styles.certificate}>
                <div className={styles.certificateImage}>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className={styles.certificateContent}>
                  <h3>{cert.title}</h3>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateLink}
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.imageGallery}>
            {project.images?.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <Image
                  src={`/images/${image}`}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className={styles.image}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          <div className={styles.projectInfo}>
            <section className={styles.section}>
              <h2>Overview</h2>
              <p>{project.detailedDescription.overview}</p>
            </section>

            <section className={styles.section}>
              <h2>Key Features</h2>
              <ul className={styles.featureList}>
                {project.detailedDescription.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Technical Details</h2>
              <ul className={styles.techList}>
                {project.detailedDescription.technicalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Impact</h2>
              <p>{project.detailedDescription.impact}</p>
            </section>

            {project.achievements && (
              <section className={styles.section}>
                <h2>Achievements</h2>
                <div className={styles.achievements}>
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievement}>
                      <span className={styles.achievementIcon}>{achievement.icon}</span>
                      <div className={styles.achievementContent}>
                        <h3>{achievement.title}</h3>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <section className={styles.relatedProjects}>
          <h2>More Projects</h2>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <Image
                    src={`/images/${relatedProject.src}`}
                    alt={relatedProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3>{relatedProject.title}</h3>
                <p>{relatedProject.description.substring(0, 100)}...</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 