'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    positionId: DataTypes.INTEGER,
    code: {
      type: DataTypes.STRING,
      references: {
        model: 'Candidate',
        key: 'code'
      }
    }
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
    models.Candidate.belongsTo(models.Position, {targetKey: "positionId",foreignKey: "id"});
    models.Candidate.hasMany(models.Count , {foreignKey: "id", targetKey:"candidateId"});
  };
  return Candidate;
};