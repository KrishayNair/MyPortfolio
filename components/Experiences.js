import React from "react";
import "@fontsource/poppins";
import Button from "react-bootstrap/Button";
import styles from "./Experiences.module.css";
function Experiences() {
  return (
    <div id="about" className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Experiences</h1>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>
            IIT Bombay (Education Technology Department)
          </h1>
          <p className={styles.subtitle}>
            {" "}
            We built a Student Query Driven Learning under the guidance of
            Asst.Professor Sumitra Sadhukhan. This SQDL App has been designed to
            enable some degree of self-directed learning in classroom
            environments{" "}
          </p>
          <p className={styles.subtitle}>Role : Web Developer</p>
          <p className={styles.subtitle}>
            Duration : 3 months (Aug 2023 - Present)
          </p>

          <img
            className={styles.cardImg}
            src="./images/coversqdl.png"
            alt="img"
          />
          <img className={styles.cardImg} src="./images/sqdl2.png" alt="img" />
          <img className={styles.cardImg} src="./images/sqdl3.png" alt="img" />
          <p className={styles.contentDetails}>
            Some Tasks :- <br /> 1. Completing the remaining work of the
            Backend. <br /> 2 SQDL front-end development. <br />
            3. Modification of SQDL (Backend and Frontend) post beta testing
          </p>
          {/* <a
            href="https://youtu.be/BFtGloHww98?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a> */}
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>
            Communicore Fiberinfra Private Limited (CFPL)
          </h1>
          <p className={styles.subtitle}>
            {" "}
            Communicore Fiberinfra Private Limited (CFPL) is a Private Limited
            Indian Non-Government Company incorporated in India. The compant
            provides fiber,radio and telecommunication based solutions.{" "}
          </p>
          <p className={styles.subtitle}>Role : Web Developer</p>
          <p className={styles.subtitle}>
            Duration : 3 months (Feb 2023 - Aug 2023)
          </p>

          <img
            className={styles.cardImg}
            src="./images/communicore2.png"
            alt="img"
          />
          <img
            className={styles.cardImg}
            src="./images/communicore1.png"
            alt="img"
          />
          <img
            className={styles.cardImg}
            src="./images/communicore3.png"
            alt="img"
          />
          <p className={styles.contentDetails}>
            Some Tasks :- <br /> 1. Created the whole UI/UX design of the
            website. <br /> 2. Created a UI friendly interface for users
            <br /> 3. Connect the contact form to the backend for seamless
            interaction <br />
            4. making the site fully responsive for all devices <br />
            5. Co-ordination and Communication with the colleagues.
          </p>
          {/* <a
            href="https://youtu.be/BFtGloHww98?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a> */}
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>EasyCompany</h1>
          <p className={styles.subtitle}>
            {" "}
            The easycompany app lets you find trusted partners for your
            adventures. We use your location to list trips that will start from
            your location and you can just get on-board by a simple swipe.{" "}
          </p>
          <p className={styles.subtitle}>Role : Front-End Web Developer</p>
          <p className={styles.subtitle}>
            Duration : 3 months (Nov 2022 - Feb 2023)
          </p>

          <img
            className={styles.cardImg}
            src="./images/intern1.jpg"
            alt="img"
          />
          <img
            className={styles.cardImg}
            src="./images/intern5.jpg"
            alt="img"
          />
          <img
            className={styles.cardImg}
            src="./images/intern2.jpg"
            alt="img"
          />
          <p className={styles.contentDetails}>
            Some Tasks :- <br /> 1. Created a Mobile Version of the Ask Page.{" "}
            <br /> 2. Created Desktop and Mobile Version of Your Questions Page.
            <br /> 3. Fixed Tags Functionality on Multiple Pages. <br />
            4. Fixed Sidebar. <br />
            5. Created a Profile Page for easycommunity.
          </p>
          {/* <a
            href="https://youtu.be/BFtGloHww98?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
