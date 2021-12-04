import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contacts-operations";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import {
  getAllContacts,
  getLoading,
} from "../../redux/contacts/contacts-selectors";
import Container from "../../components/Container";
import ContactsList from "../../components/ContactList";
import Filter from "../../components/Filter";
import ContactForm from "../../components/ContactForm";
import LoaderSpiner from "../../components/Loader/Loader";
import PropTypes from "prop-types";

class ContactsView extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Container>
        <ContactForm />
        <Filter />
        <ContactsList />
        {isLoading && <LoaderSpiner />}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getAllContacts(state),
  isLoading: getLoading(state),
  // error: contactsSelectors.getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  clearFilter: () => dispatch(changeFilter("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
