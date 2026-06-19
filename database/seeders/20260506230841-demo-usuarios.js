'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Ayelen Jaramillo',
        email: 'admin@feria.com',
        password: '$2b$10$Z8dTntUOhXohUB3obbKnOuHsFHSBuMMU1HiA8LAzz6IFRkHZUmP22',
        rol: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Profesor Demo',
        email: 'profesor@feria.com',
        password: '$2b$10$Z8dTntUOhXohUB3obbKnOuHsFHSBuMMU1HiA8LAzz6IFRkHZUmP22',
        rol: 'profesor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
