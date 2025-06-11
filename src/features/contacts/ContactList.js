import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../store'; 

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  
  if (!Array.isArray(contacts)) {
    return <p>Помилка</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} — {contact.phone}
          <button onClick={() => dispatch(removeContact(contact.id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}