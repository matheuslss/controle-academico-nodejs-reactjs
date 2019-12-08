const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(connection) {
    super.init({
      area_atuacao: DataTypes.STRING,
      titulacao: DataTypes.STRING,
      nome: DataTypes.STRING,
    },
    { 
      sequelize: connection,
      tableName: "professores"
    });
  }

  static associate(models) {
    this.belongsTo(models.Disciplina, { foreignKey: 'id_professor', as: 'disciplina'});
  }
}

module.exports = Professor;