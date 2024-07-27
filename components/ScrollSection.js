"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "flowbite-react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Experiences.module.css";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div className="mb-10">
      <h1 id="experience" className={styles.mainHeading2}>Past Experiences</h1>
      <section className="scroll-section-outer">
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section mr-10 border-4 p-6 bg-cyan-400">
              <h1 className="text-center text-bold text-3xl absolute mid-0 top-8">Experience #1</h1>
              <div className="content">
                <h1 className="text-2xl mt-12 font-extrabold">
                  IIT Bombay (Education Technology Department)
                </h1>
                <p>
                  We built a Student Query Driven Learning under the guidance of
                  Asst.Professor Sumitra Sadhukhan. This SQDL App has been
                  designed to enable some degree of self-directed learning in
                  classroom environments.
                  <br />
                  <b>Role : Web Developer</b>
                  <br />
                  <b>Duration : 6 months (August 2023 - February 2024)</b>
                  <br />
                  <b>Some Tasks :-</b> <br /> 1. Completing the remaining work
                  of the Backend. <br /> 2 SQDL front-end development. <br />
                  3. Modification of SQDL (Backend and Frontend) post beta
                  testing
                </p>
                {/* <a
                  href="http://mindeate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Live Demo
                  </button>
                </a> */}
                <a
                  href="./pdf/iitbombay.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Certificate
                  </button>
                </a>
              </div>
              {/* <div className={styles.image}> */}
              <img className={styles.image} src="./images/sqdlMain.png" alt="img" />
              {/* </div> */}
            </div>
            <div className="scroll-section mr-10 border-4 p-6 bg-sky-600">
            <h1 className={styles.heading}> Experience #2</h1>
              <div className="content">
                <h1 className="text-2xl mb-12 font-extrabold">
                  Communicore Fiberinfra Private Limited (CFPL)
                </h1>
                <p>
                  Communicore Fiberinfra Private Limited (CFPL) is a Private
                  Limited Indian Non-Government Company incorporated in India.
                  The compant provides fiber,radio and telecommunication based
                  solutions.
                  <br />
                  <b>Role : Web Developer</b>
                  <br />
                  <b>Duration : 3 months (Feb 2023 - Aug 2023)</b>
                  <br />
                  <b>Some Tasks :-</b> <br /> 1. Created the whole UI/UX design
                  of the website. <br /> 2. Created a UI friendly interface for
                  users
                  <br /> 3. Connect the contact form to the backend for seamless
                  interaction <br />
                  4. making the site fully responsive for all devices <br />
                  5. Co-ordination and Communication with the colleagues.
                </p>
                <a
                  href="http://mindeate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Live Demo
                  </button>
                </a>
                <a
                  href="./pdf/iitbombay.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Certificate
                  </button>
                </a>
              </div>
             
              <img
                className={styles.image}
                src="./images/communicore2.png"
                alt="img"
              />
              
            </div>
            <div className="scroll-section border-4 p-6 mr-8 bg-cyan-400">
            <h1 className="text-center text-bold text-3xl absolute mid-0 top-8">Experience #3</h1>
              <div className="content">
                <h1 className="text-2xl mt-20 mb-12 font-extrabold">
                Scope for Change
                </h1>
                <p>
                Scope For Change is an organization committed to empowering underprivileged communities and promoting sustainability. As a LinkedIn Marketer, I had the opportunity to enhance their online presence and amplify their mission.
                  <br />
                  <b>Role : LinkedIn Marketer</b>
                  <br />
                  <b>Duration : 1 months (Aug 2023 - Sept 2023)</b>
                  <br />
                  <b>Some Tasks :-</b> <br /> 1.Boosted LinkedIn followers and engagement through strategic marketing. <br /> 2. Created content to highlight the organization's mission and impact.
                  <br /> 3. Featured success stories and initiatives to empower communities. <br />
                  4. Analyzed LinkedIn metrics to refine content and strategy. <br />
                </p>
                <a
                  href="http://mindeate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Live Demo
                  </button>
                </a>
                <a
                  href="./pdf/scopeforchange.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Certificate
                  </button>
                </a>
              </div>
             
              <img
                className={styles.image2}
                src="./images/scopeforchange.jpeg"
                alt="img"
              />

            
             </div>
            <div className="scroll-section border-4 p-6  bg-blue-600">
            <h1 className="text-center text-bold text-3xl absolute mid-0 top-8"> Experience #4</h1>
              <div className="content">
                <h1 className="text-2xl mb-12 font-extrabold">
                EasyCompany
                </h1>
                <p>
                  The easycompany app lets you find trusted partners for your
                  adventures. We use your location to list trips that will start
                  from your location and you can just get on-board by a simple
                  swipe.
                  <br />
                  <b>Role : Web Developer</b>
                  <br />
                  <b>Duration : 3 months (Nov 2022 - Feb 2023)</b>
                  <br />
                  <b>Some Tasks :-</b> <br /> 1. Created a Mobile Version of the
                  Ask Page. <br /> 2. Created Desktop and Mobile Version of Your
                  Questions Page.
                  <br /> 3. Fixed Tags Functionality on Multiple Pages. <br />
                  4. Fixed Sidebar. <br />
                  5. Created a Profile Page for easycommunity.
                </p>
                {/* <a
                  href="http://mindeate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Live Demo
                  </button>
                </a> */}
                <a
                  href="./pdf/easycompany certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-10 mt-4">
                    Certificate
                  </button>
                </a>
              </div>
             
              <img
                className={styles.image3}
                src="./images/intern1.jpg"
                alt="img"
              />
              
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScrollSection;
