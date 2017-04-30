/**
 * Created by VictorMiranda
 * This file is a root directory which execute the app and server
 * It is using a ECMAScript 6, The future standard for Javascript
 */

/* Here it has to include the dependencies which it will use */
/* Express , Body-Parser , Mongoose */

const mongoose = require("mongoose");
const app = require('./app');
const config = require('./config');

/* Connexion to Mongodb */
mongoose.connect(config.db, function (err, res) {
    if(err){
        return console.log(`ERROR: connecting to Database: ${err}`);
    }

    console.log('Connected to Database correctly!');

    /* Server listening */
    app.listen(config.port, config.ip, function () {
        console.log(`Running server on http://${config.ip}:${config.port}`);
    });

});






