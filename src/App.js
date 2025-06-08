import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './features/contacts/ContactList';

function App() {
  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
