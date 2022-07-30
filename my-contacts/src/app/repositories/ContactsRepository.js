const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Erick',
    email: 'erick@gmail.com',
    phone: '999999999',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
