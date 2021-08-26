import React from "react";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";
import styles from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.navWrapper}>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
