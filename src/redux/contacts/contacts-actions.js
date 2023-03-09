import { createAction } from '@reduxjs/toolkit';

export const fetchContactsPending = createAction('contacts/fetch/pending');
export const fetchContactsFulfilled = createAction('contacts/fetch/fulfilled');
export const fetchContactsRejected = createAction('contacts/fetch/rejected');

export const addContactPending = createAction('contacts/add/pending');
export const addContactFulfilled = createAction('contacts/add/fulfilled');
export const addContactRejected = createAction('contacts/add/rejected');

export const deleteContactPending = createAction('contacts/delete/pending');
export const deleteContactFulfilled = createAction('contacts/delete/fulfilled');
export const deleteContactRejected = createAction('contacts/delete/rejected');
