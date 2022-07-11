const express = require('express');
const reload = require('reload');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/index.ejs', (req, res) => {
    res.render('index', {"today":Date()});
});

app.listen(3000, () => {console.log("Server started!")});
reload(app);