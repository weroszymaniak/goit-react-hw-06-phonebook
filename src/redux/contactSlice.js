import { createSlice } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts);

const initialNamesState = Array.isArray(parsedContacts)
  ? parsedContacts.map(contact => contact.name)
  : [];
const initialNumbersState = Array.isArray(parsedContacts)
  ? parsedContacts.map(contact => contact.number)
  : [];

console.log('parsedContacts:', parsedContacts);
console.log('initialNamesState:', initialNamesState);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    names: initialNamesState,
    numbers: initialNumbersState,
  },
  reducers: {
    addNameContact: (state, action) => {
      state.names.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    removeNameContact: (state, action) => {
      const index = state.names.findIndex(name => name === action.payload);
      if (index !== -1) {
        state.names.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state));
      }
    },
    addNumberContact: (state, action) => {
      state.numbers.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    removeNumberContact: (state, action) => {
      const index = state.numbers.findIndex(
        number => number === action.payload
      );
      if (index !== -1) {
        state.numbers.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state));
      }
    },
  },
});

export const {
  addNameContact,
  removeNameContact,
  addNumberContact,
  removeNumberContact,
} = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
