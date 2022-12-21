import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import styles from "./contactUs.module.css";
function contactUs() {
  return (
    <div>
      <Navbar />
      <Contact />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default contactUs;
