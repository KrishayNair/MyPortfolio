import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Progress from "../components/progress"
import Experiences from "../components/Experiences"
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
import Achievements from "../components/Achievements"
import Blogs from "../components/Blogs"
import GitHubContributions from "../components/GitHubContributions"
import Certifications from "../components/Certifications"
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // Clean up double hashes on page load and hash changes
  useEffect(() => {
    const cleanUpDoubleHashes = () => {
      const currentUrl = window.location.href;
      if (currentUrl.includes('##')) {
        // Replace double hash with single hash
        const cleanUrl = currentUrl.replace(/##/g, '#');
        window.history.replaceState(null, '', cleanUrl);
      }
    };

    // Clean up on page load
    cleanUpDoubleHashes();

    // Listen for hash changes
    const handleHashChange = () => {
      cleanUpDoubleHashes();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle scrolling to sections when page loads with hash
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      const validHashes = ['#projects', '#blogs', '#about', '#experience', '#github-contributions', '#certifications'];
      
      if (hash && validHashes.includes(hash)) {
        // Multiple attempts to ensure scrolling works
        const scrollToSection = () => {
          const sectionId = hash.substring(1); // Remove the #
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            // Get the element's position relative to the viewport
            const elementRect = sectionElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            
            // Scroll to the element with some offset for better visibility
            window.scrollTo({
              top: absoluteElementTop - 100, // 100px offset from top
              behavior: 'smooth'
            });
            return true;
          }
          return false;
        };

        // Try immediately
        if (!scrollToSection()) {
          // If not found, try after a short delay
          setTimeout(() => {
            if (!scrollToSection()) {
              // If still not found, try after a longer delay
              setTimeout(scrollToSection, 1000);
            }
          }, 100);
        }
      }
    };

    // Handle on page load with a delay to ensure all components are rendered
    setTimeout(handleHashNavigation, 200);

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    // Also handle when the component mounts and hash is present
    if (window.location.hash) {
      setTimeout(handleHashNavigation, 500);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
     
      <Hero/>
      <ScrollSection/>
      <main ref={container} className={styles.main}>
        <h1 id="projects" className={styles.mainHeading}>Projects</h1>
        <BentoGrid projects={projects} />
      </main>
      <Skills/>
      <GitHubContributions/>
      <Certifications/>
      <Blogs/>
      
      <Achievements/>
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
