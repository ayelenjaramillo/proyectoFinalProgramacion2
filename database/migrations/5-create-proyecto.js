"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("proyectos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: { model: "categorias", key: "id" },
      },
      escuela_id: {
        type: Sequelize.INTEGER,
        references: { model: "escuelas", key: "id" },
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      estado: {
        type: Sequelize.ENUM("aprobado", "pendiente", "rechazado"),
        defaultValue: "pendiente",
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "usuarios", key: "id" },
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("proyectos");
  },
};
