/* eslint-disable import/no-anonymous-default-export */
const getLoading = (state) => state.contacts.loading;
const getAllContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getError = (state) => state.contacts.error;

const getVisibleContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default {
  getLoading,
  getAllContacts,
  getFilter,
  getError,
  getVisibleContacts,
};
