import React from "react";
import styles from "./navbar.module.css";
import "@fontsource/poppins";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useRouter } from "next/router";
function navbar() {
  const router = useRouter();

  const handleNavigation = (e, href) => {
    e.preventDefault();
    // Navigate directly to the href with hash
    router.push(href);
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerLogo}>Krishay Nair</h1>
      <div className={styles.navMain}>
        <nav className={styles.navMid} aria-label="Main Navigation">
          <ul>
            <li><Link className={styles.navElement} href="/">Home</Link></li>
            <li><a className={styles.navElement} href="/#about" onClick={(e) => handleNavigation(e, '/#about')}>About</a></li>
            <li><a className={styles.navElement} href="/#projects" onClick={(e) => handleNavigation(e, '/#projects')}>Projects</a></li>
            <li><a className={styles.navElement} href="/#experience" onClick={(e) => handleNavigation(e, '/#experience')}>Experience</a></li>
            {/* <li><Link className={styles.navElement} href="/contactus">Contact</Link></li> */}
          </ul>
        </nav>
      </div>
     
      <a
        href="./pdf/krishaynairupdated.pdf"
        className={styles.download}
        download="resume"
      >
        <Button className={styles.downloadBtn} variant="light">
          Download CV
        </Button>
      </a>
    </div>
  );
}

export default navbar;
