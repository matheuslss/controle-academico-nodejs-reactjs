const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(connection) {
    super.init({
      semestre: DataTypes.STRING,
      ano: DataTypes.STRING,
    },
    { 
      sequelize: connection,
    }       
    );
    
  }
  
  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'cursos'});
    // this.belongsTo(.Aluno), { foreignKey: 'id_usuario', as: 'alunos'}
  }
}

module.exports = Turma;