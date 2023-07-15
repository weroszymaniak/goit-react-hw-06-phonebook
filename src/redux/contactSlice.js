import { createSlice, nanoid } from '@reduxjs/toolkit';
const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts) || [];

const initialState = parsedContacts;
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact },
      };
    },
    removeContact: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const updateLocalStorage = state => {
  localStorage.setItem('contacts', JSON.stringify(state));
};
