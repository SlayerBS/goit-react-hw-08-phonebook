import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { editContact } from "../../redux/contacts/operations";
import ContactList from "./ContactList";
import contactsSelectors from "../../redux/contacts/selectors";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
  onEdit: (id) => dispatch(editContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
