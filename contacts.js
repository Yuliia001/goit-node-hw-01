import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  const result = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(result);
};

export const getContactById = async (contactId) => {
  const contacts = listContacts();
};
// function listContacts() {
//   // ...твій код. Повертає масив контактів.
// }

// function getContactById(contactId) {
//   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// function removeContact(contactId) {
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// function addContact(name, email, phone) {
//   // ...твій код. Повертає об'єкт доданого контакту.
// }
