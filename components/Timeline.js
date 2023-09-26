import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import styles from "./Timeline.module.css";
const Timeline = () => {
  return (
    <div>
      <Box className={styles.main}>
        <h1 className={styles.heading}>Experiences</h1>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            contentStyle={{
              background:
                "linear-gradient(90deg, rgba(107,9,255,1) 100%, rgba(201,0,255,1) 100%)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(217,76,172)" }}
            date="2023"
            iconStyle={{ background: "rgb(217,76,172)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h1 className={styles.subHeading}>
              IIT Bombay (Education Technology Department)
            </h1>

            <img
              src="./images/sqdlMain.png"
              height="75%"
              width="100%"
              alt="intern-1"
            />
            <Typography component="p" variant="body1" align="left">
              We built a Student Query Driven Learning under the guidance of
              Asst.Professor Sumitra Sadhukhan. This SQDL App has been designed
              to enable some degree of self-directed learning in classroom
              environments.
              <br />
              <b>Role : Web Developer</b>
              <br />
              <b>Duration : 3 months (Aug 2023 - Present)</b>
              <br />
              <b>Some Tasks :-</b> <br /> 1. Completing the remaining work of
              the Backend. <br /> 2 SQDL front-end development. <br />
              3. Modification of SQDL (Backend and Frontend) post beta testing
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background:
                "linear-gradient(90deg, rgba(107,9,255,1) 100%, rgba(201,0,255,1) 100%)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(217,76,172)" }}
            date="2023"
            iconStyle={{ background: "rgb(217,76,172)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h1 className={styles.subHeading}>
              Communicore Fiberinfra Private Limited (CFPL)
            </h1>
            <img
              src="./images/communicore2.png"
              height="75%"
              width="100%"
              alt="intern-2"
            />
            <Typography component="p" variant="body1" align="left">
              Communicore Fiberinfra Private Limited (CFPL) is a Private Limited
              Indian Non-Government Company incorporated in India. The compant
              provides fiber,radio and telecommunication based solutions.
              <br />
              <b>Role : Web Developer</b>
              <br />
              <b>Duration : 3 months (Feb 2023 - Aug 2023)</b>
              <br />
              <b>Some Tasks :-</b> <br /> 1. Created the whole UI/UX design of
              the website. <br /> 2. Created a UI friendly interface for users
              <br /> 3. Connect the contact form to the backend for seamless
              interaction <br />
              4. making the site fully responsive for all devices <br />
              5. Co-ordination and Communication with the colleagues.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background:
                "linear-gradient(90deg, rgba(107,9,255,1) 100%, rgba(201,0,255,1) 100%)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(217,76,172)" }}
            date="2022"
            iconStyle={{ background: "rgb(217,76,172)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h1 className={styles.subHeading}>EasyCompany</h1>
            <img
              src="./images/intern1.jpg"
              height="75%"
              width="100%"
              alt="intern-3"
            />
            <Typography component="p" variant="body1" align="left">
              The easycompany app lets you find trusted partners for your
              adventures. We use your location to list trips that will start
              from your location and you can just get on-board by a simple
              swipe.
              <br />
              <b>Role : Web Developer</b>
              <br />
              <b>Duration : 3 months (Nov 2022 - Feb 2023)</b>
              <br />
              <b>Some Tasks :-</b> <br /> 1. Created a Mobile Version of the Ask
              Page. <br /> 2. Created Desktop and Mobile Version of Your
              Questions Page.
              <br /> 3. Fixed Tags Functionality on Multiple Pages. <br />
              4. Fixed Sidebar. <br />
              5. Created a Profile Page for easycommunity.
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>{" "}
      </Box>
    </div>
  );
};

export default Timeline;
