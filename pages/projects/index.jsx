import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import BentoGrid from '../../components/BentoGrid';
import { projects } from '../../data';
import styles from './all-projects.module.css';

export default function AllProjects() {
  return (
    <>
      <Head>
        <title>All Projects - Krishay Nair</title>
        <meta name="description" content="View all projects by Krishay Nair" />
      </Head>
      
      <div className={styles.container}>
        <Navbar />
        
        <main className={styles.main}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="heading-cursive">All</span>{' '}
            <span className="heading-normal">Projects</span>
          </motion.h1>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A collection of my work showcasing various technologies and solutions
          </motion.p>
          
          <BentoGrid projects={projects} showAllProjects={true} />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
