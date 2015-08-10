var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello, david');
});

app.listen(process.env.PORT);