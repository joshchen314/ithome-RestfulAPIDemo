var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var log4js = require('log4js');
var app = express();
var config = require('./config/config');

// Set DB
mongoose.connect(config.db.development);

log4js.configure({
    appenders: [
        { type: 'console' }, //控制台輸出
        {
            type: 'file', //文件輸出
            filename: 'logs/access.log',
            maxLogSize: 20000000, // 20 MB
            backups: 10,
            category: 'normal'
        }
    ],
    replaceConsole: true
});

var logger = log4js.getLogger('normal');
logger.setLevel('INFO');

app.use(log4js.connectLogger(logger, {level: 'auto', format:':method :url'}));

// Set Header Check
app.use( function(req, res, next) {
    var api_key = req.get('API-Key');

    if (api_key != "55665566") {
        res.status(401).send({ error: "Unauthorized"});
    }
    else {
        next();
    }
});

// Set routers
var index = require('./routes/index');
var users = require('./routes/users');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', index);
app.use('/user', users);

// Set Header Check
app.use( function(req, res, next) {
    var api_key = req.get('API-Key');

    if (api_key != "55665566") {
        res.status(401).send({ error: "Unauthorized"});
    }
    else {
        next();
    }
});

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