import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { changeFilter } from "../../redux/contacts/actions";
import contactsSelectors from "../../redux/contacts/selectors";
import Container from "../../components/Container";
import Section from "../../components/Section";
import ContactsList from "../../components/ContactList";
import Filter from "../../components/Filter";
import ContactForm from "../../components/ContactForm";
import Error from "../../components/Error";
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
    const { contacts, error, clearFilter, isLoading } = this.props;
    return (
      <Container>
        {error && <Error message={error.message} />}

        <ContactForm />

        <Filter />
        <ContactsList />

        {isLoading && <LoaderSpiner />}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
  isLoading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  clearFilter: () => dispatch(changeFilter("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
