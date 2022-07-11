const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    const currencies = fs.readFileSync(__dirname + '/currencies.html','UTF-8');
    res.writeHead('200',{'Content-Type':'text/html'});
    res.end(currencies);
}).listen(22222);