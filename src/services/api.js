import axios from "axios";

axios.defaults.baseURL = "http://localhost:3010";

export function fetchContacts() {
  return axios.get("/contacts");
}

export function addContact(contact) {
  console.log(contact);
  return axios.post("/contacts", contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export default { fetchContacts, addContact, deleteContact };
