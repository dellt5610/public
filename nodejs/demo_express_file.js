const express = require('express');
const app = express();
const server = require('http').createServer(app).listen(8888);
app.get('/',function(req,res){
    res.sendFile(__dirname + '/currencies.html');
});