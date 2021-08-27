import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) => dispatch(changeFilter(evt.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
