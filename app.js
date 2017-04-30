/**
 * Created by VictorMiranda on 02/02/2017.
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");



// AllowCrossDomain Function
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

/* Routes location on API */
const api = require('./api_server/routes/subjects');
const user = require('./api_server/routes/user');

/*
* APpp
* */
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public'))); // Static Web
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


/* Routes */
app.use('/api', api);
app.use('/user', user)

app.get('/', function (err, res) {
    res.send({message: 'Welcome to my api'});
});

module.exports = app;