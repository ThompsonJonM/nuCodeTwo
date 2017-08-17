module.exports = function(app, models) {

    // Create route (Post)
    app.post('/api/new', function(req, res) {
        var post = req.body;

        // Create data
        models.Posts.create(post).then(function(data) {

            // Send the created data back to the user
            res.json(data);
        });
    });

    // Read list route (Get)
    app.get('/api/all', function(req, res) {

        // Looks at all models and grabs all posts
        models.Posts.findAll({}).then(function(data) {

            // Send the data back to the user
            res.json(data);
        });
    });

    // Update route (Put)
    app.put('/api/update', function(req, res) {
        models.Posts.update({

            // What to update
            name: req.body.name

        }, {

            // Where clause
            where: {
                id: req.body.id
            }

        }).then(function(data) {

            // Send updated data back to user
            res.json(data);
        });
    });

    // Delete route (Delete)
    app.delete('/api/delete/:id', function(req, res) {
        models.Posts.destroy({

            // Where clause
            where: {

                // Uses params which is defined in the url (/:id)
                // Eg. .../api/delete/1 for id 1
                id: req.params.id
            }

        }).then(function(data) {

            // Send data back to user
            res.json(data);
        });
    });
};