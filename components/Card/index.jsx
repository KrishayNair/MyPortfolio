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
        className={styles.card + ' bg-[#0a1814] border-2 border-[#003a2d] rounded-2xl shadow-lg transition-all duration-200 hover:border-[var(--accent-green)] hover:shadow-[0_0_24px_#00ffb2cc]'}
      >
        <h2 className='title text-white font-bold text-2xl mb-2'>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className='text-xs w-72 sm:mb-1 text-gray-200'>{description}</p>
            <p className='w-72 mb-4 font-bold text-[var(--accent-green)]'>Technologies Used :{tech}</p>
           <a href="https://github.com/KrishayNair/SecureClick" target="_blank" rel="noopener noreferrer">
            <button   className="relative inline-flex h-12 ml-4 mr-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] focus:ring-offset-2 focus:ring-offset-black bg-black border-2 border-[var(--accent-green)] transition-all duration-200 hover:bg-[var(--accent-green)] hover:text-black hover:shadow-[0_0_16px_#00ffb2cc]">
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-[var(--accent-green)] backdrop-blur-3xl transition-all duration-200 hover:bg-[var(--accent-green)] hover:text-black">
          Github Repo
        </span>
      </button>
      </a>
      
      <a href="https://devfolio.co/projects/secureclick-8dcc" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] focus:ring-offset-2 focus:ring-offset-black bg-black border-2 border-[var(--accent-green)] transition-all duration-200 hover:bg-[var(--accent-green)] hover:text-black hover:shadow-[0_0_16px_#00ffb2cc]">
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-[var(--accent-green)] backdrop-blur-3xl transition-all duration-200 hover:bg-[var(--accent-green)] hover:text-black">
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
                className="rounded-xl border border-[var(--accent-green)] shadow-[0_0_12px_#00ffb255]"
              />
            </motion.div>
            
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card