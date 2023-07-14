import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.status;

export const getShowedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const unitedContact = filter && filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact &&
        contact.name &&
        contact.name.toLowerCase().includes(unitedContact)
    );
  }
);
