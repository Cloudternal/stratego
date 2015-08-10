var express = require('express');
var app = express();
var path = require('path');

//
// configuration
//

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views')); 
app.locals.pretty = true;
app.locals.doctype = 'html';
app.locals.basedir = app.get('views');

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