import { createSelector } from 'reselect';


const selectContactsState = (state) => state.contacts;


export const selectAllContacts = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.items
);


export const selectContactsWithEmail = createSelector(
  [selectAllContacts],
  (contacts) => contacts.filter(contact => contact.email)
);
