'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('regiones',[
      {
        nombre: 'Region I', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Region II', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Region III', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Region IV', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Region V', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Region VI', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('regiones', null, {});
   
  }
};
