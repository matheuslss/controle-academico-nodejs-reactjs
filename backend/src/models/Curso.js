const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
    },
    { sequelize: connection }       
    );
  }

  static associate(models) {
    this.hasMany(models.Turma, { foreignKey: 'id_curso', as: 'turmas'}),
    this.hasMany(models.Disciplina, { foreignKey: 'id_curso', as: 'disciplinas'})
  }
}

module.exports = Curso;