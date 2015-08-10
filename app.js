var express = require('express');
var app = express();

var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views')); 

app.listen(process.env.PORT);

app.get('/', function (req, res) {
    app.render('home', function (err, html) {
        if (err) {
            res.send('err: ' + err);
        } else {
            res.send(html);
        }
    });
});