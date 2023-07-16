import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeNameContact, removeNumberContact } from 'redux/contactSlice';
import { getNames, getNumbers, getFilter } from 'redux/selectors';
// import { addNameContact, addNumberContact } from 'redux/contactSlice';

const ContactList = () => {
  const names = useSelector(getNames);
  const numbers = useSelector(getNumbers);
  const filter = useSelector(getFilter);

  const mergedContacts = names.map((name, index) => ({
    id: index,
    name,
    number: numbers[index],
  }));

  const filteredContacts = mergedContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  const handleRemove = id => {
    const contactToRemove = mergedContacts.find(contact => contact.id === id);
    if (contactToRemove) {
      dispatch(removeNameContact(contactToRemove.name));
      dispatch(removeNumberContact(contactToRemove.number));
    }
  };

  console.log('making contacts list', mergedContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name + ': ' + contact.number}
          {
            <button
              className={css.button}
              type="button"
              name="delete"
              onClick={() => handleRemove(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
