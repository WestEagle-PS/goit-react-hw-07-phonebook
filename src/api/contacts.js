import axios from 'axios';

const contactsInstance = axios.create({
  baseURL:
    'https://640853f42f01352a8a8fbc5d.mockapi.io/api/phonebook/v1/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const addContacts = data => {
  return contactsInstance.post('/', data);
};

export const deleteContactById = id => {
  return contactsInstance.delete(`/${id}`);
};
