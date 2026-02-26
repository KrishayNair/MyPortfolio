import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data';
import styles from './project.module.css';

// Helpers (pure, safe for empty text)
function getBriefText(text) {
  if (!text || typeof text !== 'string') return '';
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
}
function getBriefAchievement(text) {
  if (!text || typeof text !== 'string') return '';
  const words = text.split(' ');
  return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
}

export default function ProjectDetail({ project: projectFromProps }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    overview: false,
    features: false,
    technical: false,
    impact: false,
    achievements: false
  });

  // Prefer props (SSG) so page loads correctly on direct hit / refresh; fallback to client lookup for client nav
  const project = useMemo(() => {
    if (projectFromProps) return projectFromProps;
    const id = router.query.id;
    if (!id) return null;
    return projects.find(p => p.slug === id) || null;
  }, [projectFromProps, router.query.id]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projects.filter(p => p.slug !== project.slug).slice(0, 3);
  }, [project]);

  const techStack = useMemo(() => {
    if (!project?.tech) return [];
    return project.tech.split(',').map(t => t.trim().replace(/\./g, ''));
  }, [project]);

  // Loading: no project yet and router not ready (avoids flash of "not found" on first paint)
  if (!project && !router.isReady) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.loadingSkeleton}>
            <div className={styles.skeletonLine} style={{ width: '120px', marginBottom: '2rem' }} />
            <div className={styles.skeletonLine} style={{ width: '70%', height: '2.5rem', marginBottom: '1rem' }} />
            <div className={styles.skeletonLine} style={{ width: '90%', height: '1.25rem', marginBottom: '2rem' }} />
            <div className={styles.skeletonLine} style={{ width: '100%', height: '400px', marginBottom: '2rem' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <Head><title>Project not found</title></Head>
          <p className={styles.notFound}>Project not found.</p>
          <Link href="/#projects" className={styles.backLink}>← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    router.push('/#projects');
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Carousel navigation
  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && project.images) {
      nextImage();
    }
    if (isRightSwipe && project.images) {
      prevImage();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && project.images) {
      prevImage();
    } else if (e.key === 'ArrowRight' && project.images) {
      nextImage();
    }
  };

  return (
    <div className={styles.pageWrapper}>
    <Head>
      <title>{project.title} | Projects</title>
      <meta name="description" content={getBriefText(project.description)} />
    </Head>
    <div className={styles.container}>
      <motion.button
        className={styles.backButton}
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.briefDescription}>
            {getBriefText(project.description)}
          </p>
          
          <div className={styles.projectMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>2 months</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Full Stack</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Status</span>
              <span className={styles.statusBadge}>Completed</span>
            </div>
          </div>

          <div className={styles.actionButtons}>
            {project.liveUrls && project.liveUrls.length > 0 && (
              project.liveUrls.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                >
                  {link.title} →
                </a>
              ))
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButtonSecondary}
              >
                Source Code →
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div 
          className={styles.carouselSection}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className={styles.carouselContainer}>
            <button
              className={styles.carouselButton}
              onClick={prevImage}
              aria-label="Previous image"
            >
              ←
            </button>
            
            <div className={styles.carouselImageWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className={styles.carouselImageContainer}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/images/${project.images[currentImageIndex]}`}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className={styles.carouselImage}
                    style={{ objectFit: 'contain', objectPosition: 'center center' }}
                    priority={currentImageIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className={styles.carouselButton}
              onClick={nextImage}
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Carousel Dots */}
          {project.images.length > 1 && (
            <div className={styles.carouselDots}>
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselDot} ${index === currentImageIndex ? styles.carouselDotActive : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Technology Stack */}
      {techStack.length > 0 && (
        <section className={styles.techStackSection}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techTags}>
            {techStack.slice(0, 8).map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
            {techStack.length > 8 && (
              <span className={styles.techTag}>+{techStack.length - 8} more</span>
            )}
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <div className={styles.textContent}>
          <p className={styles.briefText}>
            {getBriefText(project.detailedDescription?.overview || project.description)}
          </p>
          <AnimatePresence>
            {expandedSections.overview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.expandedContent}
              >
                <p>{project.detailedDescription?.overview || project.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {project.detailedDescription?.overview && (
            <button
              className={styles.expandButton}
              onClick={() => toggleSection('overview')}
            >
              {expandedSections.overview ? 'Show Less' : 'View More Details →'}
            </button>
          )}
        </div>
      </section>

      {/* Key Features */}
      {project.detailedDescription?.features && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.textContent}>
            <ul className={styles.featureList}>
              {project.detailedDescription.features.slice(0, 3).map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature.replace(/^[^\s]+\s/, '').split('.')[0]}
                </li>
              ))}
            </ul>
            <AnimatePresence>
              {expandedSections.features && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.featureList}
                >
                  {project.detailedDescription.features.slice(3).map((feature, index) => (
                    <li key={index + 3} className={styles.featureItem}>
                      {feature.replace(/^[^\s]+\s/, '')}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {project.detailedDescription.features.length > 3 && (
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('features')}
              >
                {expandedSections.features ? 'Show Less' : 'View More Details →'}
              </button>
            )}
          </div>
        </section>
      )}

      {/* Technical Details */}
      {project.detailedDescription?.technicalDetails && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Technical Details</h2>
          <div className={styles.textContent}>
            <ul className={styles.techList}>
              {project.detailedDescription.technicalDetails.slice(0, 3).map((detail, index) => (
                <li key={index} className={styles.techItem}>
                  {detail.replace(/^[^\s]+\s/, '').split('.')[0]}
                </li>
              ))}
            </ul>
            <AnimatePresence>
              {expandedSections.technical && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.techList}
                >
                  {project.detailedDescription.technicalDetails.slice(3).map((detail, index) => (
                    <li key={index + 3} className={styles.techItem}>
                      {detail.replace(/^[^\s]+\s/, '')}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {project.detailedDescription.technicalDetails.length > 3 && (
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('technical')}
              >
                {expandedSections.technical ? 'Show Less' : 'View More Details →'}
              </button>
            )}
          </div>
        </section>
      )}

      {/* Impact */}
      {project.detailedDescription?.impact && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Impact</h2>
          <div className={styles.textContent}>
            <p className={styles.briefText}>
              {getBriefText(project.detailedDescription.impact)}
            </p>
            <AnimatePresence>
              {expandedSections.impact && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.expandedContent}
                >
                  <p>{project.detailedDescription.impact}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className={styles.expandButton}
              onClick={() => toggleSection('impact')}
            >
              {expandedSections.impact ? 'Show Less' : 'View More Details →'}
            </button>
          </div>
        </section>
      )}

      {/* Achievements - Brief */}
      {project.achievements && project.achievements.length > 0 && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <div className={styles.achievementsGrid}>
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={styles.achievementIcon}>{achievement.icon}</span>
                <div className={styles.achievementContent}>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementBrief}>
                    {getBriefAchievement(achievement.description)}
                  </p>
                  <AnimatePresence>
                    {expandedSections.achievements && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.achievementFull}
                      >
                        {achievement.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            className={styles.expandButton}
            onClick={() => toggleSection('achievements')}
          >
            {expandedSections.achievements ? 'Show Less' : 'View More Details →'}
          </button>
        </section>
      )}

      {/* Certificates */}
      {project.certificates && project.certificates.length > 0 && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Certificates & Recognition</h2>
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
                    View Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className={styles.relatedProjects}>
        <h2 className={styles.relatedTitle}>Related Projects</h2>
        <div className={styles.relatedGrid}>
          {relatedProjects.map((relatedProject) => (
            <Link
              key={relatedProject.slug}
              href={`/projects/${relatedProject.slug}`}
              className={styles.relatedCard}
            >
              <div className={styles.relatedImage}>
                <Image
                  src={`/images/${relatedProject.src || relatedProject.previewSrc}`}
                  alt={relatedProject.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.relatedCardContent}>
                <h3>{relatedProject.title}</h3>
                <p>{getBriefText(relatedProject.description)}</p>
                {relatedProject.tech && (
                  <div className={styles.relatedTech}>
                    {relatedProject.tech.split(',').slice(0, 3).map((tech, i) => (
                      <span key={i} className={styles.relatedTechTag}>{tech.trim()}</span>
                    ))}
                    {relatedProject.tech.split(',').length > 3 && (
                      <span className={styles.relatedTechTag}>+{relatedProject.tech.split(',').length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/#projects" className={styles.viewAllButton}>
          View All Projects
        </Link>
      </section>
    </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projects
    .filter((p) => p.slug != null && String(p.slug).trim() !== '')
    .map((p) => ({ params: { id: String(p.slug) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.id) || null;
  if (!project) return { notFound: true };
  return { props: { project } };
}
