import { Component } from "react";
import { connect } from "react-redux";
import getError from "../../redux/contacts/selectors";
import { clearError } from "../../redux/contacts/actions";
import PropTypes from "prop-types";

class Error extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

const mapStateToProps = (state) => ({
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
