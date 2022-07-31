const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Erick',
    email: 'erick@gmail.com',
    phone: '999999999',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '888888888',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
