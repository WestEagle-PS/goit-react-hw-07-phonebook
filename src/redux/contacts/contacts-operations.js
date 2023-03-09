import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/contacts';

const isDublicate = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase();
  const dublicate = contacts.find(contact => {
    return (
      contact.name.toLowerCase() === normalizedName && contact.number === number
    );
  });

  return Boolean(dublicate);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} ${data.number} is already in contacts`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContactById(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
