import { createSlice, nanoid } from '@reduxjs/toolkit';

const memoContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(memoContacts);
// const phoneContacts = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: parsedContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact },
      };
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});
export const { addContact, removeContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
