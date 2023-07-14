import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getShowedContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getShowedContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    console.log('submit', name);

    // onSubmit({ id: nanoid(), ...formValues });
    // reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  // const reset = () => {
  //   setFormValues(INITIAL_STATE);
  // };

  // const { name, number } = formValues;
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
          // pattern="^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я]*)*$"
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
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact{' '}
      </button>
    </form>
  );
};
export default ContactForm;
