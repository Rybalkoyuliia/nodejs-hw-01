import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const prevContacts = await readContacts();
  const contact = Array(1).fill(0).map(createFakeContact);

  const contacts = [...prevContacts, ...contact];
  writeContacts(contacts);
};

addOneContact();
