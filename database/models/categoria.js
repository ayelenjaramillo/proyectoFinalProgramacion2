"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Proyecto, {
        foreignKey: "categoria_id",
        as: "proyectos",
      });
    }
  }
  Categoria.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
    }
  );
  return Categoria;
};
