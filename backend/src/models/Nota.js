const { Model, DataTypes } = require('sequelize');

class Nota extends Model {
  static init(connection) {
    super.init({
      peso: DataTypes.FLOAT,
      nota: DataTypes.FLOAT,
    },
    { sequelize: connection,
      tableName: "notas" }       
    );
  }

  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'id_turma', as: 'turmas'});
    this.belongsTo(models.Aluno, { foreignKey: 'id_aluno', as: 'alunos'});
    this.belongsTo(models.Disciplina, { foreignKey: 'id_disciplina', as: 'disciplinas'});
  }
}

module.exports = Nota;