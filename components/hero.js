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
        <span className={styles.info}>
          Data Science Enthusiast | Web Developer | DSA | Student{" "}
        </span>
      </h1>
      <div className={styles.social}>
        <h2 className={styles.socialHeading}>Follow Me</h2>
        <hr className={styles.socialLine} />
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/krishay-nair-667313233/"
        >
          <img
            className={styles.socialLogo}
            src="./images/Linkedin.svg"
            alt="linkedin logo"
          />
        </Link>
        <Link target="_blank" href="https://github.com/KrishayNair">
          <img
            className={styles.socialLogo}
            src="./images/GitHub.svg"
            alt="GitHub logo"
          />
        </Link>
        <Link href="mailto:krishay958@gmail.com">
          <img
            className={styles.socialLogo}
            src="./images/Gmail.svg"
            alt="Gmail logo"
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/krishay_nair/">
          <img
            className={styles.socialLogo}
            src="./images/Instagram.svg"
            alt="Instagram logo"
          />
        </Link>
        <Link target="_blank" href="https://leetcode.com/KrishayNair/">
          <img
            className={styles.socialLogo}
            src="./images/leetcode3.svg"
            alt="leetcode logo"
          />
        </Link>
      </div>
      <img
        className={styles.heroImg}
        src="./images/heroImg1.svg"
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
      <img
        className={styles.yellowRing}
        src="./images/yellowRing2.svg"
        alt="yellowRing"
      />
      <img
        className={styles.bluePill}
        src="./images/bluePill.svg"
        alt="bluePill"
      />
      <img
        className={styles.orangeCube}
        src="./images/orangeCube.svg"
        alt="orangeCube"
      />
      <img
        className={styles.whiteSphere}
        src="./images/whiteSphere.svg"
        alt="whiteSphere"
      />
    </div>
  );
}

export default hero;
