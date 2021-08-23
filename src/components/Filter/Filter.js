import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/actions";
import contactsSelectors from "../../redux/contacts/selectors";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        name="filter"
        title=""
        required
        className={styles.input}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) => dispatch(changeFilter(evt.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
