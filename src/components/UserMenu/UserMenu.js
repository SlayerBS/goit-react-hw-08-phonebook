import React from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { getUsername } from "../../redux/auth/auth-selectors.js";
import styles from "./UserMenu.module.css";
import LetterAvatar from "../../UI/UserAvatar/UserAvatar";
import { Button } from "@material-ui/core";

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.wrapper}>
    <LetterAvatar />
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      type="submit"
      color="primary"
      className={styles.button}
      onClick={onLogout}
    >
      {" "}
      Log Out
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
