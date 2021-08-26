import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styles from "./ContactList.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ContactList = ({ contacts, onDelete, onEdit }) => (
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
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => onEdit(contact.id)}
          // className={styles.btn}
        >
          <EditIcon />
          Edit
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
