import React from "react";
import styles from "./projects.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectHeader from "../components/projectHeader";
function projects() {
  return (
    <div className={styles.main}>
      <Navbar />
      <ProjectHeader />
      <h1 className="text-3xl underline"> PROJECTS</h1>
      <div className={styles.footerDiv}>
        <Footer />
      </div>
    </div>
  );
}

export default projects;
