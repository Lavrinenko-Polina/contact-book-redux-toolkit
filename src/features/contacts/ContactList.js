import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from './contactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => dispatch(removeContact(contact.id))}>Видалити</button>
        </li>
      ))}
    </ul>
  );
}
