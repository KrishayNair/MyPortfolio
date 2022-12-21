import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
function footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainDiv}>
        <img
          className={styles.footerImg}
          src="./images/footerleft.svg"
          alt=""
        />
        <div className={styles.socials}>
          <h1 className={styles.socialHeading}>Follow Me</h1>
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
          className={styles.footerImg}
          src="./images/footerright.svg"
          alt=""
        />
      </div>
      <h1 className={styles.heading}>Designed and created by Krishay Nair</h1>
    </div>
  );
}

export default footer;
