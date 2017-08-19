module.exports = function(sequelize, DataTypes) {

    var Posts = sequelize.define('Posts', {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: 'Personal'
        }
    });

    return Posts;
};