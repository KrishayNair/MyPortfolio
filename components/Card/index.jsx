'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description,tech, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <h2 className='title'>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className='text-xs w-72 sm:mb-1'>{description}</p>
            <p className='w-72 mb-4 font-bold text-white '>Technologies Used :{tech}</p>
           <a href="https://github.com/KrishayNair/SecureClick" target="_blank" rel="noopener noreferrer">
            <button   className=" relative inline-flex h-12 ml-4 mr-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          Github Repo
        </span>
      </button>
      </a>
      
      <a href="https://devfolio.co/projects/secureclick-8dcc" target="_blank" rel="noopener noreferrer">
            <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px]  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          More Details
        </span>
      </button>
      </a>
         
            
          </div>
          
          <div className={styles.imageContainer}>
          
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
            
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card