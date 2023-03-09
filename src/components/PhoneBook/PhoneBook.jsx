import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneBlock from './PhoneBlock/PhoneBlock';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';

import { getFilteredItems } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './phone-book.module.scss';

const PhoneBook = () => {
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredItems);
  console.log('filteredContacts: ', filteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContacts = ({ name, number }) => {
    const action = addContact({ name, number });
    dispatch(action);
  };

  const onDeleteNumber = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My Phonebook</h2>
      <PhoneBlock title="Phonebook">
        <ContactForm onSubmit={onAddContacts} />
      </PhoneBlock>
      <PhoneBlock title="Contacts">
        <label className={css.label}>Find contacts by name:</label>
        <input
          onChange={handleFilterChange}
          className={css.textField}
          name="filter"
          value={filter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteNumber={onDeleteNumber}
        />
      </PhoneBlock>
    </div>
  );
};

export default PhoneBook;
