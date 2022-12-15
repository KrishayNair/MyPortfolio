import React from "react";
import styles from "./progress.module.css";
function progress() {
  return (
    <div>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.mainElement}>
        <div className={styles.element}>
          {/* <h1 className={styles.subHeading}>HTML</h1> */}
          <img
            className={styles.icons}
            src="./images/html.png"
            alt="htmlLogo"
          />
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          {/* <h1 className={styles.subHeading}>CSS</h1> */}
          <img className={styles.icons} src="./images/css.png" alt="cssLogo" />
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          {/* <h1 className={styles.subHeading}>ReactJS</h1> */}
          <img className={styles.icons} src="./images/js.png" alt="reactLogo" />
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          {/* <h1 className={styles.subHeading}>JavaScript</h1> */}
          <img
            className={styles.icons}
            src="./images/react.png"
            alt="reactLogo"
          />
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          <h1 className={styles.subHeading}>JavaScript</h1>
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          <h1 className={styles.subHeading}>JavaScript</h1>
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.element}>
          <h1 className={styles.subHeading}>JavaScript</h1>
          <hr />
          <h2 className={styles.skillPercent}>65%</h2>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default progress;
