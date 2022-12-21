import React from "react";
import styles from "./whatIDo.module.css";
function whatIDo() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>What I Do</h1>
      {/* <h1 className={styles.bgHeading}>What I Do</h1> */}
      <div className={styles.main}>
        <div className={styles.mainElement}>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/frontend.png" alt="" />
            <h2 className={styles.subHeading}>Frontend Development</h2>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/uiux.png" alt="" />
            <h2 className={styles.subHeading}>UI/UX Design</h2>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/c-.png" alt="" />
            <h2 className={styles.subHeading}>Competitive Coding</h2>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/backend.png" alt="" />
            <h2 className={styles.subHeading}>Backend Development</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whatIDo;
