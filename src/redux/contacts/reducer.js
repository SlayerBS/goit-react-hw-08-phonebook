import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
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

const initialState = {
  contacts: [],
  filter: "",
  loading: false,
  error: null,
};

const items = createReducer(initialState.contacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const onError = (_, { payload }) => payload;

const loading = createReducer(initialState.loading, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(initialState.error, {
  [fetchContactsError]: onError,
  [addContactError]: onError,
  [deleteContactError]: onError,
  [clearError]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
