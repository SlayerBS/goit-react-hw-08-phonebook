import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { editContact } from "../../redux/contacts/contacts-operations";
import ContactList from "./ContactList";
import {
  getVisibleContacts,
  getError,
} from "../../redux/contacts/contacts-selectors";

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
  onEdit: (id) => dispatch(editContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
