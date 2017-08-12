var orm = require('orm');

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "select * from ?? where ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    selectAndOrder: function(whatToSelect, table, orderCol) {
        var queryString = "select ?? from ?? order by ?? desc";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
}