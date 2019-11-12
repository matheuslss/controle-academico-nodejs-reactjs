const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
    },
    { 
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Professor, { through: 'professor_disciplina', foreignKey: 'id_disciplina', as: 'professores'});
  }
  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'cursos'});
  }
}

module.exports = Disciplina;