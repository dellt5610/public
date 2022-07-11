const express = require('express');
const { json } = require('body-parser');
const { Story } = require('./model/story.model');

const app = express();
app.use(json());

app.get('/story',(req, res) => {
    Story.find({})
    .then(stories => {
        res.send({success: true, stories})
    })
    .catch(error => res.send(error.message));
});

app.post('/story', (req, res) => {
    const { content } = req.body;
    const story = new Story({content});
    story.save()
    .then(result => {
        if (!result) throw new Error('Saving Error');
        res.send({success: true, story});
    })
    .catch(error => {
        if (error) res.send(error.message);
    });
});

app.put('/story/:id', (req, res) => {

});

app.delete('/story/:id', (req, res) => {
    
});

module.exports = { app }