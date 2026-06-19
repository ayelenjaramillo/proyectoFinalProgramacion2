'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  

    await queryInterface.bulkInsert('escuelas',[
      {
        nombre: 'Julio Cortazar',
        padron: '714', 
        localidad: 'Trelew', 
        region_id: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Alberto Galina',
        padron: '157', 
        localidad: 'Trelew', 
        region_id: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: 'Maria Humpheys',
        padron: '733', 
        localidad: 'Gaiman', 
        region_id: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: 'Pepito',
        padron: '745', 
        localidad: 'Esquel', 
        region_id: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('escuelas', null, {});
   
  }
};
