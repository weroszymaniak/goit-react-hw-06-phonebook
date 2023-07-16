import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, setName, setNumber } from 'redux/contactSlice';

const ContactForm = () => {
  const name = useSelector(state => state.contacts.name);
  const number = useSelector(state => state.contacts.number);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name: inputName, value } = e.target;
    if (inputName === 'name') {
      dispatch(setName(value));
    } else if (inputName === 'number') {
      dispatch(setNumber(value));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
