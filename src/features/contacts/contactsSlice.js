import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://68615d6c8e7486408445c0e6.mockapi.io/contacts'; 


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
});


export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  const data = await res.json();
  return data;
});


export const removeContact = createAsyncThunk('contacts/removeContact', async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
  items: [],
  isLoading: false,
  error: null,
},
  extraReducers: builder => {
  builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(removeContact.fulfilled, (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    });
}

});

export default contactsSlice.reducer;
