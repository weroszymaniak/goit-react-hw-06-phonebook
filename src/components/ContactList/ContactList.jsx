import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getShowedContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getShowedContacts);
  const dispatch = useDispatch();
  const handleRemove = id => dispatch(removeContact(id));
  console.log('making contacts list');
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
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
