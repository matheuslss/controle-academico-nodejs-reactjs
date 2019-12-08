'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('professores', 'id_turma', {transaction: t})
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
