'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      idade:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      peso:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      altura:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      created_at:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  async down (queryInterface) {
    return queryInterface.dropAllTables('alunos');
  }
};
