// import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
// export const getShowedContacts = state => {
//   const contacts = state.contacts;
//   const filter = state.filter;
//   const unitedContact = filter;

//   return contacts.filter(contact => contact.name.includes(unitedContact));
// };
