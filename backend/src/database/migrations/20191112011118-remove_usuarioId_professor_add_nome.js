'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('professores', 'nome', { type: Sequelize.STRING }, {transaction: t}),
        queryInterface.removeColumn('professores', 'id_usuario', {transaction: t})
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
