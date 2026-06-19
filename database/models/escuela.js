"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Escuela extends Model {

    static associate(models) {
      Escuela.belongsTo(models.Region, {
        foreignKey: "region_id", 
        as: 'region'
      }), 
      Escuela.hasMany(models.Proyecto, {
        foreignKey: 'escuela_id', 
        as: 'proyectos'
    })
}
  }
  Escuela.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      padron: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      region_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {model: 'regiones', key: 'id'}
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING, 
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "Escuela",
      tableName: "escuelas"
    }
  );
  return Escuela;
};
