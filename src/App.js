import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import contactsSelectors from "./redux/contacts/selectors";
import { fetchContacts } from "./redux/contacts/operations";
import { changeFilter } from "./redux/contacts/actions";
import LoaderSpiner from "./components/Loader/Loader";
import PropTypes from "prop-types";
import Error from "./components/Error/Error";
class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { error, isLoading } = this.props;
    return (
      <Container>
        {error && <Error message={error.message} />}
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
