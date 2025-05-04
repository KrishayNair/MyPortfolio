import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Progress from "../components/progress"
import Experiences from "../components/Experiences"
import WhatIdo from "../components/whatIDo"
import ScrollSection from "../components/ScrollSection"
import RecentWorks from "../components/recentWorks"
import Footer from "../components/footer"
import styles from '../styles/Home.module.css'
import { url } from 'inspector'
import { projects } from '../data';
import BentoGrid from '../components/BentoGrid';
import Skills from "../components/Skills/Skills"
import { useScroll } from 'framer-motion';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Contact from "../components/contact"
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
     
      <Hero/>
      <WhatIdo/>
      <Skills/>
      <main ref={container} className={styles.main}>
        <h1 id="projects" className={styles.mainHeading}>Projects</h1>
        <BentoGrid projects={projects} />
      </main>

      <ScrollSection/>
      {/* <Contact/> */}
      {/* <Progress/> */}
      {/* <Timeline/> */}
      {/* <Experiences/> */}
      {/* <RecentWorks/> */}
      {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger

        intent="WELCOME"
        chat-title="Chat Bot"
        agent-id="f733128e-e046-43a7-9c84-fc737b195e72"
        language-code="en"
      
      ></df-messenger> */}
<Footer/>
    </div>
  )
}
