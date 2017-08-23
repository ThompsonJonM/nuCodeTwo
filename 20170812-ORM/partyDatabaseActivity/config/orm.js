var connection = require('./connection.js');

// Object Relational Mapper (ORM)

var orm = {
    select: function(whatToSelect, tableInput) {
        var queryString = 'select ?? from ??';
        connection.query(queryString, [whatToSelect, tableInput], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
}