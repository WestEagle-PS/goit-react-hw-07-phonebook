import { createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts } from './contacts-actions';

const contactsReducer = createReducer([], builder => {
  builder
    .addCase(addContacts, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(deleteContacts, (state, { payload }) => {
      return state.filter(item => item.id !== payload);
    });
});

export default contactsReducer;
