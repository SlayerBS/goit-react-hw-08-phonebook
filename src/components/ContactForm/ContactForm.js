import toast from "react-hot-toast";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import contactsSelectors from "../../redux/contacts/selectors";
import { Button } from "@material-ui/core";
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

    const { name, number } = this.state;
    console.log(this.props.contacts);

    const isUser = this.props.contacts.find((user) => user.name === name);
    if (!isUser) {
      this.props.onSubmit(name, number);
      toast.success(`${name} added to your contacts`);
    } else toast.error(`${name} is already on contacts`);
    this.reset();
  };

  // if (this.state.name && this.state.number !== "") {
  // const { name, number } = this.state;
  // this.props.onSubmit(name, number);
  // this.reset();
  // return;
  // }
  // alert("Please, input name and number");
  // };

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
        <Button variant="contained" type="submit" color="primary">
          Add contact
        </Button>
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
