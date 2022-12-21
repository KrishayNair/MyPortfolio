import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Progress from "../components/progress"
import WhatIdo from "../components/whatIDo"
import RecentWorks from "../components/recentWorks"
import Footer from "../components/footer"
import styles from '../styles/Home.module.css'
import { url } from 'inspector'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <WhatIdo/>
      <Progress/>
      <RecentWorks/>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger

  intent="WELCOME"
  chat-title="Chat Bot"
  agent-id="f733128e-e046-43a7-9c84-fc737b195e72"
  language-code="en"
 
></df-messenger>
<Footer/>
    </div>
  )
}
