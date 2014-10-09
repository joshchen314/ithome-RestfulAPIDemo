var express = require('express');
var app = express();

var index = require('./routes/index');

// Set routers
app.use('/', index);

module.exports = app;