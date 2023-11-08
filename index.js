import * as contactsService from "./contacts.js";

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await contactsService.listContacts();
          return console.table(allContacts);

      case "get":
          const oneContact = await contactsService.getContactById();
          return console.log(oneContact)

    case "add":
          const newContact = await contactsService.addContact();
          return console.log(newContact);

    case "remove":
          const removeContact = await contactsService.removeContact();
          return console.log(removeContact)

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
