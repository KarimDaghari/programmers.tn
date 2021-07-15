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
      <p className={Styles.title}>About Us ❓</p> <br /> <br />
      <p className={Styles.aboutintro}>
        <b>Who are we 👥 ?</b>
      </p>
      <p className={Styles.about2}>
        We're a bunch of Passionate developers and Engineers held together to
        initiate This startup. <br />
        We've build the largest most active programming based community in
        Tunisia and here we are providing a set of free/premium Services.
      </p>
      <p className={Styles.aboutintro}>
        <b>The Team 🏆</b>
      </p>
      <p className={Styles.about2}>
        There will be a team get to know page. For Now you can check{" "}
        <a href="/contact">Contact.</a>
      </p>
    </>
  );
}
