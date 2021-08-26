import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
