const express = require('express');
const app = express();

const server = require('http').createServer(app).listen(8888);

app.get('/',function(req,res){
    res.send('got a GET request');
})
app.get('/:userId',function(req,res){
    const userId = req.params.userId;
    res.send(`got a GET request with userId=${userId}`);
})
app.post('/user',function(req,res){
    res.send('got a POST request');
})
app.delete('/user',function(req,res){
    res.send('got a DELETE request');
})