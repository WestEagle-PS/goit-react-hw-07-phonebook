export const getContacts = state => state.contacts.items;

export const getFilteredItems = state => {
  const { contacts, filter } = state;

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
