'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
   
    static associate(models) {
     Region.hasMany(models.Escuela, {
      foreignKey: 'region_id', 
      as: 'escuelas'
     })
    }
  }
  Region.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Region',
    tableName: 'regiones'
  });
  return Region;
};