'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('alunos', 'data_matricula', {transaction: t}),
        queryInterface.addColumn('alunos', 'data_matricula', { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW, allowNull: false }, {transaction: t})
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
