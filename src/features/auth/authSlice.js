import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://68615d6c8e7486408445c0e6.mockapi.io/contacts';

export const registerUser = createAsyncThunk('auth/register', async (user) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await res.json();
});

export const loginUser = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  const res = await fetch(API_URL);
  const users = await res.json();
  const found = users.find(u => u.username === user.username && u.password === user.password);
  return found || rejectWithValue('Invalid credentials');
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export default authSlice.reducer;
