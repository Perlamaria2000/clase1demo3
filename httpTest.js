const http=require('http');

http.createServer((req, res)=>{
    res.write('<h1>hola mundo</h1>');
    res.end();
}).listen(8080);

const http = require('http');

