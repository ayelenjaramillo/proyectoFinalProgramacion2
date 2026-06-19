"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Proyecto, {
        foreignKey: "usuario_id",
        as: "proyectos",
      });
    }
  }
  Usuario.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM("admin", "profesor"),
        defaultValue: "profesor",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
    }
  );
  return Usuario;
};

//$2b$10$46b2yJJQUJBu9fXpmFZa7ONHIWhn3CteHu/DyGAztmF9xW.zwZfR6
