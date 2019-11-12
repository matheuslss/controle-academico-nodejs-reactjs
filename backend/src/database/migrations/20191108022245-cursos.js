'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('cursos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('cursos');
    
  }
};
