import React from "react";
import styles from "./contact.module.css";
function contact() {
  return (
    <div>
      <img
        className={styles.banner}
        src="./images/contactBanner.svg"
        alt="banner"
      />
      <div className={styles.contact}>
        <div className={styles.leftSide}>
          {/* <img
            className={styles.gradientLeft}
            src="./images/Eclipse.svg"
            alt=""
          /> */}
          <img
            className={styles.contactImg}
            src="./images/contactUs.svg"
            alt=""
          />
        </div>
        <div className={styles.rightSide}>
          {/* <h1> Contact Us</h1> */}

          <form className={styles.contactForm} method="POST">
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              className={styles.input}
              name="name"
              placeholder="   Enter full name..."
              type="text"
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              name="email"
              placeholder="   Enter email..."
              type="email"
            />
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textArea}
              rows="6"
              placeholder="   Enter message..."
              name="message"
              required
            ></textarea>
            <button className={styles.formBtn} type="submit">
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
