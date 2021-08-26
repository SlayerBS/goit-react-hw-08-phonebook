import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../RegisterView/RegisterView.module.css";

class LoginView extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
  };

  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>LogIn</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.wrapper}
          autoComplete="off"
        >
          <label className={styles.field}>
            <span className={styles.email}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.password}>Password</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>

          <Button variant="contained" type="submit" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
