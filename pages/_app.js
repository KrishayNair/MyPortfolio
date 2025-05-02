import '../styles/globals.css'
import GreenCursor from '../components/_GreenCursor';

function MyApp({ Component, pageProps }) {
  return <>
    <GreenCursor />
    <Component {...pageProps} />
  </>;
}

export default MyApp; 