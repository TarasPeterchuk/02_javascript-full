const sortContacts = (contacts, order = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  return contacts.sort((a, b) => {
    return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
};

const contacts = [
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Ann', phoneNumber: '333-33-33' },
  { name: 'Jonh', phoneNumber: '555-77-77' },
  { name: 'Suzy', phoneNumber: '888-77-77' },
];

console.log(sortContacts(contacts));

// const sortContacts = (contacts, order) => {
//   const contacts.sort((a, b) => {
//     return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
//   });
//   return result;
// };
