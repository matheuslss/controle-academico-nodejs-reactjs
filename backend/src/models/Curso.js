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
    this.hasMany(models.Turmas, { foreignKey: 'id_curso', as: 'turmas'})
  }
}

module.exports = Curso;