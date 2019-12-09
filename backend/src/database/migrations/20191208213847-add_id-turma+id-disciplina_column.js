'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('professores', 'id_disciplina', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'disciplinas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, {transaction: t}),
        queryInterface.addColumn('professores', 'id_turma', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'turmas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, {transaction: t})
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
