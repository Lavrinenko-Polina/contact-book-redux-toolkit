import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';

const AuthForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: name.toLowerCase(), name };
    dispatch(loginUser(user));
  };

  return (
    <div>
      <h2>Авторизація</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ім’я"
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
};

export default AuthForm;
