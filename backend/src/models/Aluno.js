const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      data_matricula: DataTypes.DATE,
    },
    { sequelize: connection }       
    );
  }

  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'id_turma', as: 'turmas'});
    this.hasMany(models.Nota, { foreignKey: 'id_aluno', as: 'notas'});
  }
}

module.exports = Aluno;