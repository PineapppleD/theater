import { NavLink } from "react-router-dom";

import logo from "../../../src/logo.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <span className="logo">
          <img src={logo} alt="theater logo image" />
        </span>
        <ul className={styles.navbar}>
          <li className="navbar-item">
            <NavLink to="/actors" className={styles.navlink}>Actors</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/authors" className={styles.navlink}>Authors</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/performances" className={styles.navlink}>Performances</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/conductors" className={styles.navlink}>Conductors</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/producers" className={styles.navlink}>Producers</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/admin" className={styles.navlink}>Admin</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.welcome}>
        <p className={styles.welcome_text}>
          Welcome to Triumph theatre’s website. Here you can see general
          information about performances
        </p>
      </div>
    </div>
  );
};

export default Header;
