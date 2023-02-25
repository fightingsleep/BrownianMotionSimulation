"use strict";

var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve the public folder
app.use(express.static('public'));

// Serve the favicon
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));

// Serve index.html
app.get('/', (req, res) => {
    res.render('index');
});

// Start listening
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
