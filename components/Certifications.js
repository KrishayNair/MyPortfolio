'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'Oct 2025',
      expires: 'Oct 2027',
      credentialId: 'OC7481909',
      icon: 'oracle',
      skills: ['Cloud', 'Oracle Cloud', 'Computer Networking', 'Databases'],
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E9C20B9E66B20A75AA42D96AB9D00DE0CF0886F7776AFC227C3E55701FAB2A40'
    },
    {
      id: 2,
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      date: 'Oct 2025',
      expires: 'Oct 2027',
      credentialId: '323242784OCI25GAIOCP',
      icon: 'oracle',
      skills: ['Large Language Models (LLM)', 'OCI Generative AI Service', 'Retrieval-Augmented Generation (RAG)', 'Chatbot Development', 'Artificial Intelligence (AI)'],
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3CD2C9D4F500B8C06C362EB4C6FD99908D6E157E9C66311616893266D49D7548'
    },
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional',
      issuer: 'Oracle',
      date: 'Oct 2025',
      expires: 'Oct 2027',
      credentialId: '323242784OCI2025MCAOCP',
      icon: 'oracle',
      skills: ['OCI-Azure', 'Oracle Database@Azure', 'Oracle Database@Google Cloud', 'Oracle Interconnect for Google Cloud', 'Oracle Cloud Infrastructure (OCI) core services', 'multicloud architectures on the OCI platform'],
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E77DC08386F64B06BE4B0F7F35B02CD18D3A169B282FFA7FF1A8CFB938FC35D0'
    },
    {
      id: 4,
      title: 'Google Cloud career readiness Associate Cloud Engineer track',
      issuer: 'Google Cloud Skills Boost',
      date: 'Apr 2024',
      expires: null,
      credentialId: 'MqlywduJ',
      icon: 'google',
      skills: ['Google Cloud Platform (GCP)'],
      url: '#'
    }
  ];

  const getIcon = (iconName) => {
    if (iconName === 'oracle') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1"/>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8"/>
        </svg>
      );
    } else if (iconName === 'google') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1"/>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" opacity="0.8"/>
          <path d="M12 6L8 10L12 14L16 10L12 6Z" fill="currentColor" opacity="0.8"/>
        </svg>
      );
    }
    return (
      <div className={styles.defaultIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1"/>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>
    );
  };

  return (
    <section className={styles.certificationsSection} id="certifications">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.mainHeading}>Certifications</h2>
          <span className={styles.count}>({certifications.length})</span>
        </motion.div>

        <div className={styles.certificationsList}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.certificationItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.certificationContent}>
                <div className={styles.iconContainer}>
                  {getIcon(cert.icon)}
                </div>
                
                <div className={styles.certificationDetails}>
                  <h3 className={styles.certificationTitle}>{cert.title}</h3>
                  <div className={styles.certificationMeta}>
                    <span className={styles.issuer}>@{cert.issuer}</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.date}>
                      {cert.date}
                      {cert.expires && ` · Expires ${cert.expires}`}
                    </span>
                  </div>
                </div>

                <a 
                  href={cert.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.arrowLink}
                  aria-label={`View ${cert.title} credential`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H3.33334M12.6667 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

