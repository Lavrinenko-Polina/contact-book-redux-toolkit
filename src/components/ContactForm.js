import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = Date.now();
    dispatch(addContact({ id, name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Ім'я" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Телефон" />
      <button type="submit">Додати</button>
    </form>
  );
}

export default ContactForm;
