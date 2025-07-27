import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from './components/AuthForm';
import ContactBook from './components/ContactBook'; // або твій основний компонент
import { loginUser } from './features/auth/authSlice';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // Повертаємо користувача з localStorage, якщо він там є
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(loginUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  return (
    <div>
      {user ? <ContactBook /> : <AuthForm />}
    </div>
  );
};

export default App;
