import { createSlice } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts) || [];

const initialState = parsedContacts;

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    removeContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state));
      }
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
