const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
    },
    { sequelize: connection }       
    );
  }

  // static associate(models) {
  //   this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario'})
  // }
}

module.exports = Curso;