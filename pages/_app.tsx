import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GreenCursor from '../components/_GreenCursor'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GreenCursor />
    <Component {...pageProps} />
  </>;
}
