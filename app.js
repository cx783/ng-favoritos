let express = require('express');
let bodyParser = require('body-parser');
let app 	= express();

let api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);

module.exports = app;

