import Head from "next/head";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <p className={Styles.title}>Services🎁 </p>
      <div className={Styles.grid}>
        <a href="services/consultant" className={Styles.card}>
          <h2>Consultant &rarr;</h2>
          <p>We provide in depth Technical Consultant. 🧙</p>
        </a>

        <a href="services/mentorship" className={Styles.card}>
          <h2>Mentorship &rarr;</h2>
          <p>Find experts to guide you to your next big project! 👨‍💻</p>
        </a>

        <a href="services/internship" className={Styles.card}>
          <h2>Internships &rarr;</h2>
          <p>For students here's some Special offers for interns! 🌱</p>
        </a>

        <a href="services/more" className={Styles.card}>
          <h2>more.. &rarr;</h2>
          <p>We're still tweaking some ideas. take a look! 🔥</p>
        </a>
      </div>
    </>
  );
}
