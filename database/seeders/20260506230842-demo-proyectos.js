'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  

    await queryInterface.bulkInsert('proyectos',[
      {
        titulo: 'Residuos Trelew',
        descripcion: "Proyecto de separacion de residuos, importante separacion de residuos", 
        categoria_id: 5 , 
        escuela_id: 1, 
        estado: "pendiente", 
        usuario_id: 2,
        createdAt: new Date(), 
        updatedAt: new Date(), 
        

      }, 
      {
        titulo: 'Residuos Gaiman' , 
        descripcion: "Proyecto de separacion de residuos, importante separacion de residuos", 
        categoria_id: 1 , 
        escuela_id: 2, 
        estado: "pendiente", 
        usuario_id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      }, 
      {
        titulo: 'Residuos Esquel',
        descripcion: "Proyecto de separacion de residuos, importante separacion de residuos", 
        categoria_id: 3 , 
        escuela_id: 3, 
        estado: "aprobado", 
        usuario_id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()

      }, 
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('proyectos', null, {});
   
  }
};
