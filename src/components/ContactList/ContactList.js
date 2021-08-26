import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styles from "./ContactList.module.css";
import DeleteButtons from "../../UI/DeleteButton/DeleteButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => onDelete(contact.id)}
          // className={styles.btn}
        >
          <DeleteIcon />
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
