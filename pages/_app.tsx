import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import CursorPet from '../components/CursorPet'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <CursorPet />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
