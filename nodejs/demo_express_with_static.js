const express = require("express");
const app = express();

/*
* when browser downloads a static file, ex: http://localhost:3000/g.jpg
* if we use "express.static('public')" then nodejs will find the file "g.jpg" via the "public" folder.
* The file path in this case should be: ./public/g.jpg.
*/
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.send('<img src="g.jpg" />');
})

/*
* after access "http://localhost:3000/", what will happen if we declare a route handler for 'g.jpg' as below?
* the browser will display 'XXX' or not? NO, IT WILL NOT
*/
app.get('/g.png',(req, res) => {
    res.send('XXX');
})

app.listen(3000, () => console.log('Server started!'));