const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'application/json'});
   const person = {
       "name":"John Doe",
       "age":37,
       "gender":"male",
       "isSingle":false
   }
   res.end(JSON.stringify(person));
}).listen(22222);