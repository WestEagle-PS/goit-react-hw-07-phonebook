import css from './contact-list.module.scss';

const ContactList = ({ contacts, onDeleteNumber }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.listItem} key={id}>
      {name}: {number}{' '}
      <button className={css.btn} onClick={() => onDeleteNumber(id)}>
        delete
      </button>
    </li>
  ));

  return <ol className={css.list}>{elements}</ol>;
};

export default ContactList;
