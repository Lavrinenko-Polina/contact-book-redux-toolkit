import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    dispatch(addContact({ contact: { name, phone }, userId: user.id }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім’я" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
      <button type="submit">Додати</button>
    </form>
  );
};

export default ContactForm;
