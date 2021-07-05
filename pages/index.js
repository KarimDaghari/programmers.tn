import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import vector1 from '../public/vectors/vector1.jpg'
import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
      <div className={styles.container}>

              <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 👉 <a href="/services">programmers.tn</a>
        </h1>
        <h2 className={styles.second}>A startup that's dedicated to Tunisian students and Engineers.</h2>
      </main>

      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors. </p>
      </footer>
    </div>
  )
}
