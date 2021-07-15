import Styles from "../styles/Home.module.css";
import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/contact",
    label: "Contact"
  }
];

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      {links.map(({ href, label }) => (
        <Link href={href} key={href}>
          <a>{label}</a>
        </Link>
      ))}
    </nav>
  );
}
