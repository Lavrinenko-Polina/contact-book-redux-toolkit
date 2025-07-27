import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../features/contacts/contactsSlice';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const ContactBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Мої контакти</h2>
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactBook;
