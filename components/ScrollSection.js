"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollSection.module.css";

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
    'express': 'express',
    'nestjs': 'nestjs',
    'postman': 'postman',
    'html': 'html',
    'css': 'css',
    'sass': 'sass',
  };
  
  const normalized = techName.toLowerCase().trim();
  return techMap[normalized] || null;
};

function ScrollSection() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      company: "Communicore FiberInfra Pvt Ltd",
      logo: "CFPL",
      logoColor: "#06B6D4", // Cyan
      role: "Site Reliability Intern",
      startDate: "May 2024",
      endDate: "Nov 2024",
      location: "Mumbai Metropolitan Region, India",
      locationType: "Hybrid",
      website: "",
      twitter: "",
      linkedin: "",
      technologies: ["Docker", "Docker Swarm", "Kubernetes", "Istio", "mTLS", "React.js", "GitHub Actions", "CI/CD", "Load Balancing"],
      description: [
        "Designed and deployed containerized microservices using Docker and Docker Swarm, improving application portability and simplifying environment consistency across development and staging.",
        "Worked with Kubernetes to deploy and manage scalable workloads, configuring services, ingress, health checks, and resource limits to ensure high availability and performance.",
        "Implemented Istio-based traffic management concepts including routing rules, mTLS, and service-to-service communication monitoring to improve observability and secure east-west traffic.",
        "Applied core computer networking principles (L3/L4/L7, load balancing, reverse proxy concepts) while configuring ingress controllers and traffic policies for microservices.",
        "Developed 20+ reusable React.js components (Hooks & Context API) and streamlined CI/CD pipelines using GitHub Actions, reducing deployment time by 40% and improving release reliability."
      ]
    },
    {
      company: "IIT Bombay (Education Technology Department)",
      logo: "IIT",
      logoColor: "#8B5CF6", // Purple
      role: "Site Reliability & Systems Engineering Intern",
      startDate: "Aug 2023",
      endDate: "Feb 2024",
      location: "Mumbai, IN",
      locationType: "On-Site",
      website: "",
      twitter: "",
      linkedin: "",
      technologies: ["AWS", "Docker", "GitHub Actions", "React", "Postman", "CI/CD"],
      description: [
        "Established distributed systems infrastructure supporting 100+ simultaneous users, achieving 99.9% uptime via intelligent health checks and load balancing in the AWS Mumbai region.",
        "Devised optimized API calls and state management strategies using React Developer Tools, Chrome Lighthouse and Web Vitals, Postman and Swagger, achieving 30% improvement in page load performance.",
        "Initiated and implemented a CI/CD pipeline with GitHub Actions, AWS CodeDeploy, and Docker, reducing deployment time from 30-40 minutes to under 10 minutes.",
        "Designed and deployed containerized applications using Docker, ensuring consistent environments across development, staging, and production, which eliminated 95% of environment-related issues.",
        "Implemented comprehensive monitoring and alerting systems using AWS CloudWatch, enabling proactive issue detection and reducing mean time to resolution (MTTR) by 40%.",
        "Optimized database queries and implemented caching strategies, resulting in a 50% reduction in database response times and improved overall system performance.",
        "Collaborated with the development team to establish best practices for code reviews, testing, and deployment processes, improving code quality and reducing production bugs by 35%."
      ]
    },
    {
      company: "EasyCompany",
      logo: "EC",
      logoColor: "#3B82F6", // Blue
      role: "Software Developer (SDE) Intern",
      startDate: "Nov 2022",
      endDate: "Feb 2023",
      location: "Remote",
      locationType: "Remote",
      website: "",
      twitter: "",
      linkedin: "",
      technologies: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
      description: [
        "Created responsive web interfaces with Next.js and Tailwind CSS, enhancing user experience and driving a 40% increase in user engagement.",
        "Pioneered modernization of a legacy codebase using React components, improving performance and maintainability, reducing page load time by 30%.",
        "Implemented server-side rendering (SSR) and static site generation (SSG) strategies, improving SEO rankings and initial page load performance by 35%.",
        "Developed reusable React component library, reducing code duplication by 60% and ensuring consistent UI/UX patterns across the application.",
        "Collaborated with the design team to implement pixel-perfect responsive designs, ensuring optimal user experience across desktop, tablet, and mobile devices.",
        "Optimized bundle sizes and implemented code splitting techniques, reducing initial JavaScript bundle size by 45% and improving overall application performance.",
        "Integrated third-party APIs and services, implementing error handling and loading states to ensure robust user experience even during service interruptions."
      ]
    }
  ];

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <motion.h2 
          className={styles.mainHeading} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className={styles.experiencesList}>
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems[index];
            const hasSocialLinks = exp.website || exp.twitter || exp.linkedin;
            
            return (
              <motion.div
                key={index}
                className={styles.experienceCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 24, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                {/* Header Section */}
                <div className={styles.header}>
                  <div className={styles.headerLeft}>
                    <div 
                      className={styles.logo}
                      style={{ backgroundColor: exp.logoColor }}
                    >
                      <span className={styles.logoText}>{exp.logo}</span>
                </div>
                    <div className={styles.companyInfo}>
                      <div className={styles.companyNameRow}>
                        <h2 className={styles.companyName}>{exp.company}</h2>
                        <div className={styles.socialIcons}>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={styles.socialIcon}
                              title="Website"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                              </svg>
                            </a>
                          )}
                          {exp.twitter && (
                            <a 
                              href={exp.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={styles.socialIcon}
                              title="Twitter"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                          )}
                          {exp.linkedin && (
              <a
                              href={exp.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                              className={styles.socialIcon}
                              title="LinkedIn"
              >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </a>
                          )}
                          <div className={styles.socialIcon} title="Contact">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <button
                            className={styles.expandButton}
                            onClick={() => toggleExpand(index)}
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                          >
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2"
                              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                </button>
                        </div>
                      </div>
                      <div className={styles.roleRow}>
                        <span className={styles.role}>{exp.role}</span>
                        <div className={styles.dateLocation}>
                          <span className={styles.date}>{exp.startDate} - {exp.endDate}</span>
                          <span className={styles.location}>{exp.location} ({exp.locationType})</span>
            </div>
          </div>
        </div>
      </div>
    </div>

                {/* Technologies & Tools */}
                <div className={styles.techSection}>
                  <span className={styles.techLabel}>Technologies & Tools</span>
                  <div className={styles.techBadges}>
                    {exp.technologies.map((tech, techIndex) => {
                      const iconName = getTechIcon(tech);
                      return (
                        <div key={techIndex} className={styles.techBadge}>
                          {iconName ? (
                            <Image
                              src={`/skills/${iconName}.svg`}
                              alt={tech}
                              width={20}
                              height={20}
                              className={styles.techBadgeIcon}
                            />
                          ) : null}
                          <span className={styles.techBadgeText}>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Description - Expandable */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.descriptionSection}
                    >
                      <ul className={styles.descriptionList}>
                        {exp.description.map((item, descIndex) => (
                          <li key={descIndex} className={styles.descriptionItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
