import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import vector1 from "../public/vectors/vector1.jpg";

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <p className={Styles.title}>Contact</p> <br /> <br />
      <Image
        src={vector1}
        alt="Picture of the author"
        width={550}
        height={350}
      />
    </div>
  );
}
