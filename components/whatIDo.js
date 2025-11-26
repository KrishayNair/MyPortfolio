import React from "react";
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
            <h2 className={styles.subHeading}>Full Stack Development</h2>
            <p className={styles.description}>Building end-to-end web applications with modern frameworks like React, Next.js, Node.js, and Python. Creating scalable, responsive, and performant solutions.</p>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/uiux.png" alt="" />
            <h2 className={styles.subHeading}>UI/UX Design</h2>
            <p className={styles.description}>Crafting intuitive and engaging user experiences through thoughtful design, user research, and modern design principles. Focus on accessibility and usability.</p>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/c-.png" alt="" />
            <h2 className={styles.subHeading}>Software Engineering</h2>
            <p className={styles.description}>Developing robust software solutions with clean code practices, system design, and algorithmic problem-solving. Expertise in multiple programming languages and frameworks.</p>
          </div>
          <div className={styles.element}>
            <img
              className={styles.icons}
              src="./images/data-science.png"
              alt=""
            />
            <h2 className={styles.subHeading}>Business Analytics</h2>
            <p className={styles.description}>Leveraging data to drive business decisions through statistical analysis, machine learning, and data visualization. Transforming raw data into actionable insights.</p>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/consulting.png" alt="" />
            <h2 className={styles.subHeading}>Tech Consulting</h2>
            <p className={styles.description}>Providing strategic technology guidance to organizations, helping them adopt modern solutions, optimize processes, and achieve digital transformation goals.</p>
          </div>
          <div className={styles.element}>
            <img className={styles.icons} src="./images/ai.png" alt="" />
            <h2 className={styles.subHeading}>AI & Machine Learning</h2>
            <p className={styles.description}>Building intelligent systems using AI/ML technologies, including natural language processing, computer vision, and predictive analytics for real-world applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whatIDo;
