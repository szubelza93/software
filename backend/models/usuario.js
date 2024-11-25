'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Usuario.belongsTo(models.Empleado, {
        foreignKey: 'id_empleado',
        as: 'empleado'
      });

    }
  }
  Usuario.init({
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    id_empleado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};