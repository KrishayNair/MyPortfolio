import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
function hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.gradientTop} src="./images/Eclipse.svg" alt="" />
      <h1 className={styles.bgHeader}>Hello</h1>
      <h1 className={styles.mainHeading}>
        I'm <br /> Krishay{" "}
        <span className={styles.surname}>
          Nair <br /> <hr className={styles.line} /> <br />
        </span>
        <span className={styles.info}>A Web Developer and a Student</span>
      </h1>
      <div className={styles.social}>
        <h2 className={styles.socialHeading}>Follow Me</h2>
        <hr className={styles.socialLine} />
        <img
          className={styles.socialLogo}
          src="./images/Linkedin.svg"
          alt="linkedin logo"
        />
        <img
          className={styles.socialLogo}
          src="./images/GitHub.svg"
          alt="GitHub logo"
        />
        <img
          className={styles.socialLogo}
          src="./images/Gmail.svg"
          alt="Gmail logo"
        />
        <img
          className={styles.socialLogo}
          src="./images/Instagram.svg"
          alt="Instagram logo"
        />
        <img
          className={styles.socialLogo}
          src="./images/leetcode3.svg"
          alt="leetcode logo"
        />
      </div>
      <img
        className={styles.heroImg}
        src="./images/pcImg.svg"
        alt="guy with laptop"
      />
      <img
        className={styles.pinkRing}
        src="./images/pinkRing.svg"
        alt="pink Ring"
      />
      <img
        className={styles.gradientBottom}
        src="./images/eclipseBottom3.svg"
        alt="gradient"
      />
    </div>
  );
}

export default hero;
