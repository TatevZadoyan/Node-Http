const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    if (req.url === '/mainpage') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(path.resolve('./index.html')).pipe(res);
    } else if (req.url === "/mainpage") {
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream(path.resolve("./style.css")).pipe(res);
    } else if (req.url === '/person') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: 'anna',
            age: 24,
            country: 'argentina'
        }));
    } else if (req.url === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello World hfjhfhjfkfkyfkyflyfyfhlfhflfkyfifliufiu!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Data not found');
    }

}).listen(8081);