export const getContacts = store => store.contacts.items;

export const getFilteredItems = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
    );
  });

  return result;
};
