import { useSelector, useDispatch } from 'react-redux';
import PhoneBlock from './PhoneBlock/PhoneBlock';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import {
  getContacts,
  getFilteredItems,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import { addContacts, deleteContacts } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import css from './phone-book.module.scss';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredCOntacts = useSelector(getFilteredItems);

  const dispatch = useDispatch();

  const onAddContacts = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return alert(`${name} ${number} is already in contacts`);
    }
    const action = addContacts({ name, number });
    dispatch(action);
  };

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number === number
      );
    });

    return Boolean(dublicate);
  };

  const onDeleteNumber = id => {
    const action = deleteContacts(id);
    dispatch(action);
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
          contacts={filteredCOntacts}
          onDeleteNumber={onDeleteNumber}
        />
      </PhoneBlock>
    </div>
  );
};

export default PhoneBook;
