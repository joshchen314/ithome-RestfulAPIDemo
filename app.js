var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// Set DB
var db_uri = "mongodb://192.168.33.10:27017/TODOs";
mongoose.connect(db_uri);

// Set routers
var index = require('./routes/index');
var users = require('./routes/users');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', index);
app.use('/user', users);

module.exports = app;