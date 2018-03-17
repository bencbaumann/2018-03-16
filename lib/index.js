import {double, sum} from './util'
import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(sum(double(20), 2).toString())
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
