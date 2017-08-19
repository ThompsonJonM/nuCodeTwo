// Dependencies
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
var db = require('./models');

var app = express();

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('Listening on ' + PORT);
    });
});
    


