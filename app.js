var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//
// configuration
//

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views')); 
app.locals.pretty = true;
app.locals.doctype = 'html';
app.locals.basedir = app.get('views');
app.use(bodyParser.urlencoded({ extended: true }));

//
// run
//

app.listen(process.env.PORT);

//
// routes
//

app.get('/', function (req, res) {
    app.render('home', function (err, html) {
        if (err) {
            res.send('err: ' + err);
        } else {
            res.send(html);
        }
    });
});

app.post('/squareclicked', function (req, res) {
    res.send(['Success', req.body.square + ' clicked']);
});