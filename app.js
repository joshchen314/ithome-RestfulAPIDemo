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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.status(404).jsonp({error: "Not Found"});
    next();
});

// catch 500
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({error: err.message});
});

module.exports = app;