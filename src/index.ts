import * as http from 'http'

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello PKG Project')
})

server.listen(port, hostname, ()=>{
  console.log(`Server is running on http://${hostname}:${port}`)
})