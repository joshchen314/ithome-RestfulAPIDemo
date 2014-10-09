var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set routers
var index = require('./routes/index');
var users = require('./routes/users');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', index);
app.use('/user', users);

module.exports = app;