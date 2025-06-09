import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';


export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');


const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
