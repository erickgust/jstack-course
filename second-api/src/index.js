const http = require('http')
const { URL } = require('url')

const users = [
  {
    id: 1,
    name: 'Erick',
  },
  {
    id: 2,
    name: 'João',
  },
  {
    id: 3,
    name: 'Fernando',
  },
  {
    id: 4,
    name: 'Mateus',
  },
]


const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://${request.headers.host}${request.url}`)
  let { pathname } = parsedUrl
  let id = null

  const splitEndpoint = pathname.split('/').filter(Boolean)

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  if (request.method === 'GET' && parsedUrl.pathname === '/users') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users))
  }

  if (request.method === 'POST' && parsedUrl.pathname === '/users') {
    let body = ''

    request.on('data', (chunk) => {
      console.log(chunk)
      body += chunk
    })

    request.on('end', () => {
      body = JSON.parse(body)

      const lastUserId = users.at(-1).id
      const newUser = { id: lastUserId + 1, name: body.name }

      users.push(newUser)

      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(newUser))
    })
  }

  if (request.method !== 'GET' && parsedUrl.pathname === '/users' && request.method !== 'POST' && parsedUrl.pathname !== '/users') {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
})

server.listen(3333, () => console.log('🔥 Started server 🔥'))
