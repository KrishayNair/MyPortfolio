import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./recentWorks.module.css";
function recentWorks() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Recent Works</h1>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>Ecell Website</h1>
          <img
            className={styles.cardImg}
            src="./images/ecell.jpg"
            alt="ecellImg"
          />
          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>Ecell Website</h1>
          <img
            className={styles.cardImg}
            src="./images/ecell.jpg"
            alt="ecellImg"
          />
          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>Ecell Website</h1>
          <img
            className={styles.cardImg}
            src="./images/ecell.jpg"
            alt="ecellImg"
          />
          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
      </div>
    </div>
  );
}

export default recentWorks;
