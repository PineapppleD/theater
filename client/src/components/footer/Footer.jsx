import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import logo from "../../logo.png";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <span className="logo">
            <img src={logo} alt="theater logo image" />
          </span>
          <div className={styles.socials}>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twiiter logo" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram logo" />
            </a>
          </div>
          <div className={styles.copyright}>&copy; 2023 Triumph</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
