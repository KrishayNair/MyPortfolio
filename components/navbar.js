import React from "react";
import styles from "./navbar.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
function navbar() {
  return (
    <div className={styles.headerContainer}>
      <h1 className="header-logo">Krishay Nair</h1>
      <nav className={styles.navMid}>
        <ul>
          <Link className={styles.navElement} href="/">
            Home
          </Link>
          <Link className={styles.navElement} href="/">
            About
          </Link>
          <Link className={styles.navElement} href="/">
            Projects
          </Link>
          <Link className={styles.navElement} href="/">
            Contact
          </Link>
        </ul>
      </nav>
      <Button className={styles.downloadBtn} variant="light">
        Download CV
      </Button>
    </div>
  );
}

export default navbar;
