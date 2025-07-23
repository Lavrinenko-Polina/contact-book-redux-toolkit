// import React from 'react';
// import ContactForm from './components/ContactForm';
// import ContactList from './features/contacts/ContactList';

// function App() {
//   return (
//     <div>
//       <h1>Книга контактів</h1>
//       <ContactForm />
//       <ContactList />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './features/contacts/contactsSlice';
import ContactForm from './components/ContactForm';
import ContactList from './features/contacts/ContactList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
