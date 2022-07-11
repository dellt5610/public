const express = require("express");
const app = express();

/*
* assume that the file ./public/g.jpg is existing => browser will not display g.jpg as the file ./g.jpg does not exist.
*/
app.get('/',(req, res) => {
    res.send('<img src="g.jpg" /><br/><br/><img src="p.jpg" />');
})

/*
* So, after access "http://localhost:3000/", what will happen if we declare a route handler for 'g.jpg' as below?
* nodejs will call this route handler? YES
* the browser will display 'XXX' or not? NO, IT WILL NOT
* the console will display 'YYY' or not? YES, IT WILL
*/
app.get('/g.jpg',(req, res) => {
    res.send('XXX');
    console.log('YYY');    
})

/*
* So, after access "http://localhost:3000/", what will happen if we declare a route handler for 'p.jpg' as below?
* nodejs will call this route handler? YES
* the browser will display the image 'p.jpg' or not? YES, IT WILL
*/
app.get('/p.jpg',(req, res)=>{
    res.sendFile(__dirname + '/public/p.jpg');
});

app.listen(3000, () => console.log('Server started!'));