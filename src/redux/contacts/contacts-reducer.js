import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.fetchContactsPending, state => {
      state.isLoading = true;
      state.error = null;
      return { ...state, isLoading: true, error: null };
    })
    .addCase(actions.fetchContactsFulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    })
    .addCase(actions.fetchContactsRejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(actions.deleteContactPending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(actions.deleteContactFulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    })
    .addCase(actions.deleteContactRejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(actions.addContactPending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(actions.addContactFulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    })
    .addCase(actions.addContactRejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
});

export default contactsReducer;
