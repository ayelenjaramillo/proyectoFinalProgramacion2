"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProyectoImagen extends Model {
    static associate(models) {
      ProyectoImagen.belongsTo(models.Proyecto, {
        foreignKey: "proyecto_id",
        as: "proyecto",
      });
    }
  }
  ProyectoImagen.init(
    {
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proyecto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },

    {
      sequelize,
      modelName: "ProyectoImagen",
      tableName: "proyecto_imagenes",
    }
  );
  return ProyectoImagen;
};
