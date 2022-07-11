//mw: Middle Ware
const express = require('express');
const app = express();

console.log('--------------------------');

app.use(function(req, res, next){
    console.log("***the 'use' middleware function is called firstly on every request. Use like the filters on Java Web applications.");
    console.log("***We can do more actions before request reaches to its handler");
    next();//if we comment out the next() function then the brower will not complete its request and in waitting mode forever. 
});

app.get('/',(req, res) => {
    console.log('Hello World!');
    res.send("Hello World!");
});

app.get('/user/:id',(req, res) => {
    console.log('Hello User ' + req.params.id);
    res.send("Hello User " + req.params.id);
});

app.listen(3000,()=>{
    console.log("Server started!");
});