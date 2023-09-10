import React from "react";
import "@fontsource/poppins";
import styles from "./whatIDo.module.css";
function whatIDo() {
  return (
    <div id="about" className={styles.mainContainer}>
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
            <img
              className={styles.icons}
              src="./images/data-science.png"
              alt=""
            />
            <h2 className={styles.subHeading}>Data Science</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whatIDo;
