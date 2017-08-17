// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Initialize
var app = express();
var PORT = 3000;

// Require models from Sqlize
var models = require('./models');

var apiRoutes = require('./app/routes/apiRoutes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app/public'));

// Routing
apiRoutes(app, models);

models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Listening on ' + PORT);
    })
});