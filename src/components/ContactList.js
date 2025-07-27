import React from 'react';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>{c.name} — {c.phone}</li>
      ))}
    </ul>
  );
};

export default ContactList;
