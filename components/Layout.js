import Navbar from "./Navbar";
import Styles from "../styles/Home.module.css";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <main className={Styles.main}>{children}</main>
      </div>
      <footer className={Styles.footer}>
        <p> Developed by @tn.programmers team and contributors.&nbsp;</p>
        <FacebookShareButton
          className={Styles.social1}
          url={"https://facebook.com/programmers.tn"}
          quote={"our Facebook."}
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>{" "}
        &nbsp;
        <LinkedinShareButton url={"https://linkedin.com/in/programmers.tn/"}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </footer>
    </>
  );
}
