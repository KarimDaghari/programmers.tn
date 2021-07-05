import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
      <p className={styles.title}>
      Services🎁 </p>


        <div className={styles.grid}>
          <a href="/consultalt" className={styles.card}>
            <h2>Consultant &rarr;</h2>
            <p>We provide in depth Technical Consultant.🧙</p>
          </a>

          <a href="/mentorship" className={styles.card}>
            <h2>Mentorship &rarr;</h2>
            <p>Find experts to guide to your next big project! 👨‍💻</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Internships &rarr;</h2>
            <p>For students here's some Special offers for interns! 🌱</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>more.. &rarr;</h2>
            <p>
              We're still tweaking some ideas. take a look! 🔥
            </p>
          </a>
        </div>
      </main>

   
      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors. </p>
      </footer>
    </div>
  )
}
