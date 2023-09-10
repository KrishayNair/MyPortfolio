import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./recentWorks.module.css";
function recentWorks() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading} id="projects">
        Recent Works
      </h1>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>AyurLeaf AI</h1>

          <img
            className={styles.cardImg}
            src="./images/coverpython.png"
            alt="AyurLeaf AI"
          />
          <p className={styles.contentDetails}>
            This is a deep learning-based website addresses a critical challenge
            in Ayurvedic medicine by revolutionizing the identification and
            understanding of medicinal leaves. Traditional Ayurveda relies
            heavily on the knowledge and experience of practitioners to identify
            the vast array of plant species used for medicinal purposes. This
            manual process is time-consuming, error-prone, and often limited to
            experts.
          </p>
          <a
            href="https://youtu.be/BFtGloHww98?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>GDSC RGIT</h1>
          <img
            className={styles.cardImg}
            src="./images/covergdsc.png"
            alt="gdscImg"
          />
          <p className={styles.contentDetails}>
            This is the website I created for GDSC(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries.
            This is a community informative website to showcase events and
            details about the community . I and the GDSC RGIT web team created
            this website which we tried to make responsive and more UI friendly
            using carousels and complete detail about all the activities of the
            community.
          </p>
          <a
            href="https://gdscrgit.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>ICARUS 2023</h1>
          <img
            className={styles.cardImg}
            src="./images/covericarus.png"
            alt="icarusImg"
          />
          <p className={styles.contentDetails}>
            Icarus Fest Website: Elevate your Icarus experience with our
            user-friendly website. Crafted in React.js, this sleek platform is
            your gateway to RGITS Technical Fest, Icarus. Navigate events,
            register effortlessly, explore schedules, and stay updated with
            real-time information. Immerse yourself in a visually appealing,
            responsive, and intuitive UI design that ensures a seamless fest
            journey for the users.
          </p>
          <a
            href="https://icarus23.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>NextGen police complaint system</h1>
          <img
            className={styles.cardImg}
            src="./images/covercomplaint.png"
            alt="icarusImg"
          />
          <p className={styles.contentDetails}>
            Introducing a cutting-edge complaint system on the Polygon
            blockchain. Our platform leverages Polygon's speed and scalability
            to offer users a seamless, efficient, and transparent process for
            submitting and managing complaints. Experience rapid transaction
            processing, low fees, and enhanced security while ensuring
            accountability. Say goodbye to bureaucratic delays – embrace a
            blockchain-powered solution for swift complaint resolution.
          </p>
          <a
            href="https://youtu.be/rKCAytXvgBc?si=JTf3GDVrJiPUHHvg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>
            Believe Charity <br /> <br />
          </h1>
          <img
            className={styles.cardImg}
            src="./images/coverbelieve.png"
            alt="believe"
          />
          <p className={styles.contentDetails}>
            Empower charitable giving with our crowdfunding charity system on
            the Ethereum blockchain. Harnessing Ethereum's smart contracts, we
            provide a transparent and secure platform for donors and causes.
            Effortlessly contribute, track, and verify donations, ensuring every
            penny goes to its intended purpose. Join us in revolutionizing
            philanthropy with blockchain technology, where transparency and
            efficiency drive meaningful impact.
          </p>
          <a
            href="https://icarus23.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>
            CESS Rgit
            <br /> <br />
          </h1>
          <img
            className={styles.cardImg}
            src="./images/covercess.png"
            alt="icarusImg"
          />
          <p className={styles.contentDetails}>
            CESS - Your RGIT Computer Department Community Hub! Dive into a
            wealth of information about our department with this HTML and
            CSS-built website. Access all the essential details, including
            faculty profiles, course offerings, news, and events. Stay informed,
            connected, and engaged with our user-friendly platform, designed to
            enhance your experience within the RGIT computer science community.
            Explore CESS, your RGIT computer department's informative hub!
          </p>
          <a
            href="https://icarus23.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.detailsBtn}>More Details</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default recentWorks;
