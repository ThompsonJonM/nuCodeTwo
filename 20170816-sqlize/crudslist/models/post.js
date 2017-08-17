// DataTypes allows for string, int, etc
// Sequelize is being passed in by the module
// This allows Sequelize to be accessed w'o require
module.exports = function(sequelize, DataTypes) {

    //creating a table
    var Posts = sequelize.define('Posts', {

        // .STRING would be VARCHAR in sql
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    });

    return Posts;
};