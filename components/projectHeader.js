import React from "react";
import styles from "./projectHeader.module.css";
function projectHeader() {
  return (
    <div>
      <img
        className={styles.banner}
        src="./images/projectBanner3.svg"
        alt="banner"
      />
    </div>
  );
}

export default projectHeader;
