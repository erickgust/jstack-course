const UserController = require('./controllers/userController')

module.exports = [
  {
    method: 'GET',
    endpoint: '/users',
    handler: UserController.listUsers,
  },
  {
    method: 'GET',
    endpoint: '/users/:id',
    handler: UserController.getUserById,
  }
]
