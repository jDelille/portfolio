import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>Justin Delille</h2>
        <ul className={styles.links}>
          <li>
            <Link href={"/project/simprove"}>Simprove</Link>
          </li>
          <li>
            <Link href={"/project/muunifi"}>Muunifi</Link>
          </li>
          <li>
            <Link href={"/project/fretify"}>Fretify</Link>
          </li>
        </ul>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Justin Delille. All rights reserved.</p>
        </div>
        <div className={styles.scrollToTop}>
          <Link href="#top">Back to Top</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
