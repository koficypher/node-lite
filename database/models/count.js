'use strict';
module.exports = (sequelize, DataTypes) => {
  const Count = sequelize.define('Count', {
    candidate: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER
  }, {});
  Count.associate = function(models) {
    // associations can be defined here
    models.Count.belongsTo(models.Candidate, {foreignKey: "id", targetKey: "candidateId"});
  };
  return Count;
};