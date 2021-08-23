import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import contactsSelectors from "../../redux/contacts/selectors";

import styles from "./ContactForm.module.css";
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: false,
    errorMessage: null,
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    console.log({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.name && this.state.number !== "") {
      const { name, number } = this.state;
      this.props.onSubmit(name, number);
      this.reset();
      return;
    }
    alert("Please, input name and number");
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={styles.input}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
