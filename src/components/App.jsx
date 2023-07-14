import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
