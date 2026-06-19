'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  

    await queryInterface.bulkInsert('categorias',[
      {
        nombre: "Ciencias Naturales",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ciencias Sociales",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Matemática",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Tecnología",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Programación y Software",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Robótica",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Educación Ambiental",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Arte y Expresión",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comunicación y Medios",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Salud y Bienestar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Emprendimientos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Innovación Productiva",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('categorias', null, {});
   
  }
};
