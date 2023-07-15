// import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getShowedContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const unitedContact = filter.toLowerCase();

  return contacts.filter(
    contact => contact && contact.name && contact.name.includes(unitedContact)
  );
};
