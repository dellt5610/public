var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});//200: response status
    response.end('Hello from NodeJS server');
}).listen(22222);