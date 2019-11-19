'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Position.associate = function(models) {
    // associations can be defined here
    models.Position.hasMany(models.Candidate, {foreignKey: "id", targetKey: "candidateId" });
  };
  return Position;
};