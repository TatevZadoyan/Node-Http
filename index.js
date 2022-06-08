const http = require('http');

//npm install @types/node

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World hfjhfhjfkfkyfkyflyfyfhlfhflfkyfifliufiu!');

}).listen(8080);