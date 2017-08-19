module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function(models) {

    // Associating Author with Posts
    // Cascade means that when an Author is deleted, all of their Posts delete as well
    Author.hasMany(models.Post, {
      onDelete: 'cascade'
    });
  };

  return Author;
};
