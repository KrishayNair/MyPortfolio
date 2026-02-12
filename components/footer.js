'use client';
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function footer() {
  return (
    <motion.footer
      className={styles.mainContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.mainDiv}>
        <img
          className={styles.footerImg1}
          src="./images/footerleft.svg"
          alt=""
        />
        <div className={styles.socialBlock}>
          <h2 className={styles.socialHeading}>Follow Me</h2>
          <div className={styles.socials}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/krishay-nair-667313233/"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <img className={styles.socialLogo} src="./images/Linkedin.svg" alt="LinkedIn" />
            </Link>
            <Link target="_blank" href="https://github.com/KrishayNair" className={styles.socialLink} aria-label="GitHub">
              <img className={styles.socialLogo} src="./images/GitHub.svg" alt="GitHub" />
            </Link>
            <Link href="mailto:krishay958@gmail.com" className={styles.socialLink} aria-label="Email">
              <img className={styles.socialLogo} src="./images/Gmail.svg" alt="Gmail" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/krishay_nair/" className={styles.socialLink} aria-label="Instagram">
              <img className={styles.socialLogo} src="./images/Instagram.svg" alt="Instagram" />
            </Link>
          </div>
        </div>
        <img
          className={styles.footerImg2}
          src="./images/footerright.svg"
          alt=""
        />
      </div>
      <div className={styles.signatureBlock}>
        <p className={styles.credit}>Designed and created by</p>
        <p className={styles.signature}>Krishay Nair</p>
      </div>
    </motion.footer>
  );
}

export default footer;
