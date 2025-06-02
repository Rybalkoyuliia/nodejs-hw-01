import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import detect from 'detect-file-encoding-and-language';

export const readContacts = async () => {
  const { encoding } = await detect(PATH_DB);

  return await JSON.parse(await fs.readFile(PATH_DB, encoding));
};
