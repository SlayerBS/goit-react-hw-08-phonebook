import { Component } from "react";
import { connect } from "react-redux";
import { getError } from "../../redux/auth/auth-selectors";
import PropTypes from "prop-types";
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import styles from "./Error.module.css"


class Error extends Component {
  
  render() {
    const message = this.props.message;
    console.log(message);
    return <div>
      <p className={styles.error}><PriorityHighIcon/>{message}</p>
      </div>
  }
}

export default Error;