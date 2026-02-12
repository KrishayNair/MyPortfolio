/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MENULINKS, SKILLS } from "../../constants";
import styles from './Skills.module.css';

const Skills = () => {
  const targetSection = useRef(null);

  // Normalize skill names for image paths
  const normalizeSkillName = (skill) => {
    return skill.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  // Combine all skills: SRE/cloud/networking first, then rest
  const allSkills = [
    ...(SKILLS.sreCloudNetworking || []),
    ...SKILLS.languagesAndTools,
    ...SKILLS.librariesAndFrameworks,
    ...SKILLS.databases,
    ...SKILLS.other,
  ];

  // Format skill name for display
  const formatSkillName = (skill) => {
    return skill
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  return (
    <section
      className={styles.skillsSection}
      id={MENULINKS[1].ref}
      ref={targetSection}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>My Skills</h1>
        </div>
        <div className={styles.skillsGrid}>
          {allSkills.map((skill, index) => {
            const normalizedName = normalizeSkillName(skill);
            const displayName = formatSkillName(skill);
            return (
              <motion.div
                key={skill}
                className={styles.skillItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Image
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={40}
                  height={40}
                  className={styles.skillIcon}
                  onError={(e) => {
                    // Fallback: try normalized name
                    const normalizedPath = `/skills/${normalizedName}.svg`;
                    if (e.target.src !== normalizedPath) {
                      e.target.src = normalizedPath;
                    }
                  }}
                />
                <div className={styles.tooltip}>
                  <span className={styles.tooltipText}>{displayName}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
