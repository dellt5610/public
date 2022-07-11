const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(8888);

app.get("/",function(req,res){
    res.send("Hello from Express!");
})