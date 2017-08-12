// Dependencies
var express = require('express');
var exphbs = require('express-handlebars');

// Express app instance
var app = express();

// Port side!
var PORT = 3000;

// Set handlebar defaults 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
var lunches = [
    {
        lunch: 'Beet and Goat Cheese Salad with Minestrone Soup'
    },

    {
        lunch: 'Pizza, Two Double Veggie Burgers, Fries, and a Big Gulp Soda'
    }
];

// Routes
app.get('/weekday', function(req, res) {
    res.render('index', lunches[0]);
});

app.get('/weekend', function(req, res) {
    res.render('index', lunches[1]);
});

app.get('/lunches', function(req, res) {
    res.render('all-lunches', {
        foods: lunches,
        eater: 'david'
    });
});

// Initialize Listener
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});