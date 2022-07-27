const http = require('http')
const routes = require('./routes')
const { URL } = require('url')
const PORT = 3333

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:${PORT}${request.url}`)

  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ))

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
})

server.listen(PORT, () => console.log('🔥 Server started'))
