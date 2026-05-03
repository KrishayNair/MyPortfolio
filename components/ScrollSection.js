"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollSection.module.css";

// Technology name to icon filename (must match public/skills/*.svg exactly)
const getTechIcon = (techName) => {
  const s = techName.toLowerCase().trim();
  const techMap = {
    'next.js': 'nextjs', nextjs: 'nextjs',
    react: 'react', 'react.js': 'react', 'reactjs': 'react',
    typescript: 'typescript',
    javascript: 'javascript',
    'node.js': 'nodejs', nodejs: 'nodejs',
    tailwind: 'tailwindcss', 'tailwind css': 'tailwindcss', tailwindcss: 'tailwindcss',
    postgresql: 'PostgreSQL',
    mongodb: 'mongodb',
    python: 'python',
    firebase: 'firebase',
    aws: 'AWS',
    docker: 'Docker',
    redis: 'redis',
    kubernetes: 'Kubernetes',
    vite: 'vite',
    html: 'html', css: 'css', sass: 'sass',
    java: 'java', cpp: 'cpp',
    redux: 'redux', mysql: 'mysql',     webpack: 'webpack', git: 'git',
    figma: 'figma', 'chakra ui': 'chakra-ui', 'ant design': 'antdesign',
    'c++': 'C++1', cpp: 'C++1',
  };
  return techMap[s] ?? null;
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
      company: "eBay",
      logo: "eBay",
      logoSrc: "/experience-logos/ebay.svg",
      logoColor: "#E53238",
      role: "Software Engineering Intern, Network Traffic",
      startDate: "May 2026",
      endDate: "Oct 2026",
      location: "Dublin, Ireland",
      locationType: "On-site",
      website: "",
      twitter: "",
      linkedin: "",
      technologies: ["C++", "Go", "Kubernetes", "Service mesh", "Observability", "CI/CD"],
      description: [
        "Incoming role (May 2026, 6 months) with Traffic Engineering—expected focus on large-scale edge traffic (proxying, service mesh, observability) with hands-on work in C++ and Go and Kubernetes-based deployments.",
        "Planned scope: supporting reliability and performance work alongside senior engineers—protocol and PoP configuration, caching, monitoring and triage from production signals, and contributions to tooling or open source as assigned."
      ]
    },
    {
      company: "Communicore FiberInfra Pvt Ltd",
      logo: "CFPL",
      logoSrc: "/experience-logos/communicore.svg",
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
      company: "Indian Institute of Technology Bombay · Education Technology",
      logo: "IIT",
      logoSrc: "/experience-logos/iit-bombay.svg",
      logoColor: "#8B5CF6", // Purple
      role: "Software Development & Research Intern",
      startDate: "Aug 2023",
      endDate: "Feb 2024",
      location: "Mumbai, Maharashtra, India",
      locationType: "Hybrid",
      website: "",
      twitter: "",
      linkedin: "",
      technologies: ["React.js", "JavaScript", "REST APIs", "WebSockets", "Git"],
      description: [
        "Key contributor to IIT Bombay’s Student Query-Driven Learning (SQDL) app—owned the frontend from early concept through user-tested deployment.",
        "Built the interface with React.js, focusing on responsive layouts, clear UX, and a polished visual design for classroom and self-directed learning flows.",
        "Integrated backend APIs and implemented real-time, socket-based features so learners and instructors could interact without page refreshes or awkward delays.",
        "Worked closely with the backend team on contracts, data shapes, and performance so the stack stayed compatible as features shipped.",
        "Ran live sessions with 15 students for usability testing and iterated on feedback, improving clarity and engagement in the product.",
        "Strengthened practical skills in React, state management, and structuring a frontend that could grow with new SQDL features."
      ]
    },
    {
      company: "EasyCompany",
      logo: "EC",
      logoSrc: "/experience-logos/easycompany.svg",
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
                      className={`${styles.logo} ${exp.logoSrc ? styles.logoWithImage : ''}`}
                      style={exp.logoSrc ? undefined : { backgroundColor: exp.logoColor }}
                    >
                      {exp.logoSrc ? (
                        <Image
                          src={exp.logoSrc}
                          alt={`${exp.company} logo`}
                          width={44}
                          height={44}
                          className={styles.logoImg}
                          unoptimized
                        />
                      ) : (
                        <span className={styles.logoText}>{exp.logo}</span>
                      )}
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
