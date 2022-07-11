const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const {a, b} = req.params;
    if (isNaN(a) || isNaN(b)) res.send({"success": false, "message": "TYPE_ERROR"});
    res.send({"success": true, "result": +a + +b})
});

app.listen(3000, () => {console.log('Server started!')});

module.exports = {app};