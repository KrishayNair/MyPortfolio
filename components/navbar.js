import React from "react";
import styles from "./navbar.module.css";
import "@fontsource/poppins";
import Button from "react-bootstrap/Button";
import Link from "next/link";
function navbar() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerLogo}>Krishay Nair</h1>
      <div className={styles.navMain}>
        <nav className={styles.navMid} aria-label="Main Navigation">
          <ul>
            <li><Link className={styles.navElement} href="/">Home</Link></li>
            <li><Link className={styles.navElement} href="/#about">About</Link></li>
            <li><Link className={styles.navElement} href="#projects">Projects</Link></li>
            <li><Link className={styles.navElement} href="#experience">Experience</Link></li>
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
