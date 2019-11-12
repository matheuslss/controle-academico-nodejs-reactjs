const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(connection) {
    super.init({
      area_atuacao: DataTypes.STRING,
      titulacao: DataTypes.STRING,
    },
    { 
      sequelize: connection,
      tableName: "professores"
    });
  }

  static associate(models) {
    this.belongsToMany(models.Disciplina, { through: 'professor_disciplina', foreignKey: 'id_professor', as: 'disciplinas'});
      this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuarios'});
  }
}

module.exports = Professor;