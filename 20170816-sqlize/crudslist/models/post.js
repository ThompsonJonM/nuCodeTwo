// DataTypes allows for string, int, etc
// Sequelize is being passed in by the module
// This allows Sequelize to be accessed w'o require
module.exports = function(sequelize, DataTypes) {

    //creating a table
    var Post = sequelize.define('Posts', {

        // .STRING would be VARCHAR in sql
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    });

    return Post;
};