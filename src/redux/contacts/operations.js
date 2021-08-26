import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  clearError,
} from "./actions";

import api from "../../services/api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
   dispatch(fetchContactsError(error.message));
  }
};

export const addContact = (name, number) => async (dispatch) => {
  const contact = { name, number };

  console.log(contact);

  dispatch(addContactRequest());
  try {
    const { data } = await api.addContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await api.deleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
