import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.appBar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
