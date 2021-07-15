import Head from "next/head";
import Styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <h1 className={Styles.title}>
        Welcome to 👉 <a href="/services">programmers.tn</a>
      </h1>
      <h2 className={Styles.second}>
        A startup that's dedicated to Tunisian students and Engineers. 👷
      </h2>
      <h3 className={Styles.third}>
        ❝Where the mentee comes to become the mentor.❞ 👨‍🏫
      </h3>
    </>
  );
}
