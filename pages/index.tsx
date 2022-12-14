import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/navbar"
import Hero from "../components/hero"

import WhatIdo from "../components/whatIDo"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <WhatIdo/>
    </div>
  )
}
