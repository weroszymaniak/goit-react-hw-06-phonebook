import { createSlice } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts) || [];

const initialState = {
  name: '',
  number: '',
  contacts: parsedContacts,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { addContact, removeContact, setName, setNumber } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
