'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('proyecto_imagenes',"public_id", { 
      type: Sequelize.STRING,
      allowNull: true
      });

  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeColumn('proyecto_imagenes',"public_id");
     
  }
};
