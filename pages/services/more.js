import Head from "next/head";
import Styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <p className={Styles.title}>more</p>

      <p className={Styles.about2}>
        We're a team of Technical experts in Web, SEO, Security... <br />
        Our team of experts will provide sufficient consults that will render a
        top notch Business.
      </p>
    </>
  );
}
