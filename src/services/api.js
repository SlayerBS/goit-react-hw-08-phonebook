import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_DB_HOST;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export function signUp(credentials) {
  return axios.post("/users/signup", credentials);
}

export function logIn(credentials) {
  return axios.post("/users/login", credentials);
}

export function logOut() {
  return axios.post("/users/logout");
}

export function getCurrentUser() {
  return axios.get("/users/current");
}

export function fetchContacts() {
  return axios.get("/contacts");
}

export function addContact(contact) {
  return axios.post("/contacts", contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export function updateContact(id) {
  return axios.patch(`/contacts/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  token,
  signUp,
  logIn,
  logOut,
  getCurrentUser,
  fetchContacts,
  addContact,
  deleteContact,
};
