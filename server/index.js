var express = require('express'),
    path = require('path');

var app = express();

app.use('/', express.static(path.resolve('./client')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000);