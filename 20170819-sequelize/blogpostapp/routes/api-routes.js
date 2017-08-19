// Dependencies
var db = require('../models');

// Export
module.exports = function(app, models) {

    // Create a new post
    app.post('/api/posts', function(req, res) {
        console.log(req.body);

        db.Posts.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        }).then(function(dbPosts) {
            res.json(dbPosts);
        });
    });

    // Find all posts
    app.get('/api/posts/', function(req, res) {
        db.Posts.findAll({}).then(function(dbPosts) {
            res.json(dbPosts);
        });
    });

    // Find all posts by category type
    app.get('/api/posts/category/:category', function(req, res) {
        db.Posts.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbPosts) {
            res.json(dbPosts);
        });
    });

    // Find one post by id
    app.get('/api/posts/:id', function(req, res) {
        db.Posts.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPosts) {
            res.json(dbPosts)
        });
    });

    // Update a post
    app.put('/api/posts', function(req, res) {
        db.Posts.update({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        }, {

            where: {
                id: req.body.id
            }

        }).then(function(dbPosts) {
            res.json(dbPosts);
        });
    });

    // Delete a post by id
    app.delete('/api/delete/:id', function(req, res) {
        db.Posts.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPosts) {
            res.json(dbPosts);
        });
    });
};