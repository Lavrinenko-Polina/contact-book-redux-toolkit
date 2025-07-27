import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://68615d6c8e7486408445c0e6.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (userId) => {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  return await res.json();
});

export const addContact = createAsyncThunk('contacts/add', async ({ name, phone, userId }) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, userId }),
  });
  return await res.json();
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (_, action) => action.payload)
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default contactsSlice.reducer;
