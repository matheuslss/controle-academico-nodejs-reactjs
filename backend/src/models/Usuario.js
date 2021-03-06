const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(connection) {
    super.init({
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    { 
      sequelize: connection,
    }       
    );   
  }
}

module.exports = Usuario;