module.exports = function(app, models) {

    // Create route (Post)
    app.post('/new', function() {

    });

    // Read list route (Get)
    app.get('/all', function(req, res) {

        // Looks at all models and grabs all posts
        models.Post.findAll({}).then(function(data) {

            // Once all has been grabbed, call the data
            res.json(data);
        });
    });

    // Update route (Put)
    app.put('/update', function() {

    });

    // Delete route (Delete)
    app.delete('/delete', function() {
        models.Post.destroy({
            where: {

            }
        }).then(function(data) {
            res.json(data);
        });
    });
};