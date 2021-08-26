import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "../RegisterView/RegisterView.module.css";
import PropTypes from "prop-types";

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

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
