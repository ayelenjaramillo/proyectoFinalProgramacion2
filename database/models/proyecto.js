"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    static associate(models) {
      Proyecto.belongsTo(models.Categoria, {
        foreignKey: "categoria_id",
        as: "categoria",
      }),
        Proyecto.belongsTo(models.Escuela, {
          foreignKey: "escuela_id",
          as: "escuela",
        }),
        Proyecto.hasMany(models.ProyectoImagen, {
          foreignKey: "proyecto_id",
          as: "imagenes",
        }),
        Proyecto.belongsTo(models.Usuario, {
          foreignKey: "usuario_id",
          as: "autor",
        });
    }
  }
  Proyecto.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      escuela_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM("aprobado", "pendiente", "rechazado"),
        allowNull: false,
        defaultValue: "pendiente",
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Proyecto",
      tableName: "proyectos",
    }
  );
  return Proyecto;
};
