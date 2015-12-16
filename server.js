'use strict';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const rooms = require('./rooms.json');
const app = express();
const cors = require('cors');

app.use( express.static(__dirname+'/public'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});
