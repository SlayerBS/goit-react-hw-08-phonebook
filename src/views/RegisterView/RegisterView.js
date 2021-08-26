import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styles from "./RegisterView.module.css";

class RegisterView extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
  };

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.wrapper}
          autoComplete="off"
        >
          <label className={styles.field}>
            <span className={styles.name}>Name</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </label>

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
              autoComplete="off"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>
          <Button variant="contained" type="submit" color="primary">
            Registration
          </Button>
          {/* <button className={styles.button} type="submit">
            Registration
          </button> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
