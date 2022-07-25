const http = require('http')
const users = require('./mocks/users')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  if (request.method === 'GET' && request.url === '/users') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users))
  }

  response.writeHead(404, { 'Content-Type': 'text/html' })
  response.end(`Cannot ${request.method} ${request.url}`)
})

server.listen(3333, () => console.log('🔥 Server started'))
