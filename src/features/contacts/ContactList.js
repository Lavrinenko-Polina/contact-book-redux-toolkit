import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from './selectors'; 

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} — {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
