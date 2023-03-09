import * as api from '../../api/contacts';
import * as actions from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsPending());
      const { data } = await api.getAllContacts();
      dispatch(actions.fetchContactsFulfilled(data));
    } catch ({ response }) {
      dispatch(actions.fetchContactsRejected(response));
    }
  };

  return func;
};

const isDublicate = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase();
  const dublicate = contacts.find(contact => {
    return contact.name.toLowerCase() === normalizedName && contact.number === number;
  });

  return Boolean(dublicate);
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        return alert(`${data.name} ${data.number} is already in contacts`);
      }
      dispatch(actions.addContactPending());
      const { data: result } = await api.addContact(data);
      dispatch(actions.addContactFulfilled(result));
    } catch ({ response }) {
      dispatch(actions.addContactRejected(response));
    }
  };

  return func();
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.deleteContactPending());
      await api.deleteContactById(id);
      dispatch(actions.deleteContactFulfilled(id));
    } catch ({ response }) {
      dispatch(actions.deleteContactRejected(response));
    }
  };

  return func();
};
