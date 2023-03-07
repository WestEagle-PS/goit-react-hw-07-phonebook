export const getContacts = store => store.contacts;

export const getFilteredItems = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
    );
  });

  return result;
};
