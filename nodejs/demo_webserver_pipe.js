const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'text/html'});
    /*
    const currencies = fs.readFileSync(__dirname + '/currencies.html','UTF-8');    
    res.end(currencies);
    */
   fs.createReadStream(__dirname + '/currencies.html','UTF-8').pipe(res);
}).listen(22222);