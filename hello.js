#! /usr/bin/env nodejs
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(4000, 'localhost');
console.log('Server up and running at http://localhost:4000');